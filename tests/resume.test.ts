import assert from 'node:assert/strict'
import { afterEach, mock, test } from 'node:test'
import { randomBytes } from 'node:crypto'
import { getResume, RESUME_CACHE_TAG } from '../src/lib/resume'
import localResume from '../src/data/resume-en.json'
import { POST } from '../src/app/api/resume/revalidate/route'
import cache from 'next/cache'

const originalBase = process.env.RESUME_API_BASE_URL
const originalSecret = process.env.RESUME_REVALIDATION_SECRET
const restore = (key: string, value: string | undefined) => {
  if (value === undefined) delete process.env[key]
  else process.env[key] = value
}
afterEach(() => {
  mock.restoreAll()
  restore('RESUME_API_BASE_URL', originalBase)
  restore('RESUME_REVALIDATION_SECRET', originalSecret)
})

test('uses local JSON without an API configuration', async () => {
  delete process.env.RESUME_API_BASE_URL
  const fetchMock = mock.method(globalThis, 'fetch', () => { throw new Error() })
  assert.deepEqual(await getResume(), localResume)
  assert.equal(fetchMock.mock.callCount(), 0)
})

test('fetches and validates remote resume with shared cache tag and timeout', async () => {
  process.env.RESUME_API_BASE_URL = 'https://resume.example.org'
  const remote = structuredClone(localResume)
  remote.basics.name = 'Remote profile'
  const fetchMock = mock.method(globalThis, 'fetch', async () => Response.json(remote))
  const result = await getResume()
  assert.equal(result.basics.name, remote.basics.name)
  assert.deepEqual(result.experience, remote.experience)
  const [url, options] = fetchMock.mock.calls[0].arguments as unknown as [URL, RequestInit & { next: { tags: string[], revalidate: number } }]
  assert.equal(url.toString(), 'https://resume.example.org/api/profile/resume')
  assert.deepEqual(options.next, { tags: [RESUME_CACHE_TAG], revalidate: 3600 })
  assert.ok(options.signal instanceof AbortSignal)
})

for (const [name, response] of [
  ['HTTP failure', () => new Response(null, { status: 503 })],
  ['network failure', () => { throw new TypeError('Network unavailable') }],
  ['timeout', () => { throw new DOMException('Timed out', 'TimeoutError') }],
  ['invalid JSON', () => new Response('{')],
  ['invalid schema', () => Response.json({ basics: {} })],
  ['invalid nested data', () => Response.json({ ...localResume, experience: [{ roles: null }] })],
  ['unsafe profile URL', () => Response.json({ ...localResume, basics: { ...localResume.basics, githubUrl: 'javascript:alert(1)' } })],
] as const) {
  test(`falls back on ${name}`, async () => {
    process.env.RESUME_API_BASE_URL = 'https://resume.example.org'
    mock.method(globalThis, 'fetch', async () => response())
    mock.method(console, 'warn', () => {})
    assert.deepEqual(await getResume(), localResume)
  })
}

const request = (authorization?: string) => new Request('https://portfolio.example.org/api/resume/revalidate', {
  method: 'POST', headers: authorization ? { authorization } : {},
})

test('fails closed when revalidation is unconfigured', async () => {
  delete process.env.RESUME_REVALIDATION_SECRET
  const tag = mock.method(cache, 'revalidateTag', () => {})
  assert.equal((await POST(request())).status, 503)
  assert.equal(tag.mock.callCount(), 0)
})

test('rejects missing, malformed and incorrect credentials without invalidating cache', async () => {
  process.env.RESUME_REVALIDATION_SECRET = randomBytes(32).toString('hex')
  const tag = mock.method(cache, 'revalidateTag', () => {})
  const path = mock.method(cache, 'revalidatePath', () => {})
  for (const authorization of [undefined, `Basic ${randomBytes(32).toString('hex')}`, `Bearer ${randomBytes(32).toString('hex')}`, `Bearer ${randomBytes(8).toString('hex')}`]) {
    assert.equal((await POST(request(authorization))).status, 401)
  }
  assert.equal(tag.mock.callCount(), 0)
  assert.equal(path.mock.callCount(), 0)
})

test('valid bearer invalidates the shared data and both pages', async () => {
  process.env.RESUME_REVALIDATION_SECRET = randomBytes(32).toString('hex')
  const tag = mock.method(cache, 'revalidateTag', () => {})
  const path = mock.method(cache, 'revalidatePath', () => {})
  const response = await POST(request(`Bearer ${process.env.RESUME_REVALIDATION_SECRET}`))
  assert.equal(response.status, 200)
  assert.deepEqual(await response.json(), { revalidated: true })
  assert.deepEqual(tag.mock.calls.map(call => call.arguments), [[RESUME_CACHE_TAG]])
  assert.deepEqual(path.mock.calls.map(call => call.arguments), [['/', 'page'], ['/resume', 'page']])
})
