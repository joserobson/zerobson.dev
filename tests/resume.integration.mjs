import assert from 'node:assert/strict'
import { test } from 'node:test'
import { createServer } from 'node:http'
import { randomBytes } from 'node:crypto'
import { spawn } from 'node:child_process'
import { readFile } from 'node:fs/promises'
import { once } from 'node:events'

const listen = async server => {
  server.listen(0, '127.0.0.1')
  await once(server, 'listening')
  return server.address().port
}

test('production pages render API data, refresh after POST and fall back on HTTP failure', { timeout: 60000 }, async () => {
  const local = JSON.parse(await readFile(new URL('../src/data/resume-en.json', import.meta.url)))
  const remote = structuredClone(local)
  remote.basics.name = 'Remote Resume Version One'
  remote.basics.summary = 'Summary supplied by the resume backend.'
  remote.experience[0].roles[0].responsibilities = ['<strong>Safe emphasis</strong><script>alert(1)</script>']
  let failed = false
  let requests = 0
  const backend = createServer((req, res) => {
    assert.equal(req.url, '/api/profile/resume')
    assert.equal(req.method, 'GET')
    requests++
    res.writeHead(failed ? 503 : 200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(remote))
  })
  const backendPort = await listen(backend)
  const reservation = createServer()
  const port = await listen(reservation)
  await new Promise(resolve => reservation.close(resolve))
  const secret = randomBytes(32).toString('hex')
  const server = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '-p', String(port)], {
    env: { ...process.env, RESUME_API_BASE_URL: `http://127.0.0.1:${backendPort}`, RESUME_REVALIDATION_SECRET: secret },
    stdio: ['ignore', 'pipe', 'pipe'],
  })
  let logs = ''
  server.stdout.on('data', data => { logs += data })
  server.stderr.on('data', data => { logs += data })
  const origin = `http://127.0.0.1:${port}`
  const invalidate = async () => {
    const res = await fetch(`${origin}/api/resume/revalidate/`, { method: 'POST', headers: { Authorization: `Bearer ${secret}` } })
    assert.equal(res.status, 200)
  }
  const rendered = async (path, name) => {
    for (let attempt = 0; attempt < 50; attempt++) {
      const res = await fetch(origin + path)
      assert.equal(res.status, 200)
      const html = await res.text()
      if (html.includes(name)) return html
      await new Promise(resolve => setTimeout(resolve, 100))
    }
    assert.fail('Page did not refresh: ' + path + '\n' + logs)
  }
  try {
    for (let attempt = 0; attempt < 100; attempt++) {
      try { await fetch(origin); break } catch {
        if (attempt === 99 || server.exitCode !== null) throw new Error(logs)
        await new Promise(resolve => setTimeout(resolve, 200))
      }
    }
    assert.equal((await fetch(`${origin}/api/resume/revalidate/`)).status, 405)
    assert.equal((await fetch(`${origin}/api/resume/revalidate/`, { method: 'POST' })).status, 401)
    await invalidate()
    for (const path of ['/', '/resume/']) {
      const html = await rendered(path, remote.basics.name)
      assert.ok(html.includes(remote.basics.name))
      assert.ok(html.includes(remote.basics.summary))
      assert.ok(!html.includes('<script>alert(1)</script>'))
    }
    assert.ok(requests > 0)
    remote.basics.name = 'Remote Resume Version Two'
    await invalidate()
    for (const path of ['/', '/resume/']) {
      await rendered(path, remote.basics.name)
    }
    failed = true
    await invalidate()
    for (const path of ['/', '/resume/']) {
      await rendered(path, local.basics.name)
    }
  } finally {
    server.kill('SIGTERM')
    await once(server, 'exit')
    backend.closeAllConnections()
    await new Promise(resolve => backend.close(resolve))
  }
})
