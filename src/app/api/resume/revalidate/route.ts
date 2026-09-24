import { timingSafeEqual } from 'node:crypto'
import { revalidatePath, revalidateTag } from 'next/cache'
import { RESUME_CACHE_TAG } from '@/lib/resume'

export async function POST(request: Request) {
  const secret = process.env.RESUME_REVALIDATION_SECRET
  if (!secret) {
    return Response.json({ error: 'Revalidation is not configured' }, { status: 503 })
  }

  const authorization = request.headers.get('authorization')
  const match = authorization?.match(/^Bearer ([^\s]+)$/i)
  const supplied = Buffer.from(match?.[1] ?? '')
  const expected = Buffer.from(secret)
  if (supplied.length !== expected.length || !timingSafeEqual(supplied, expected)) {
    return Response.json({ error: 'Unauthorized' }, {
      status: 401, headers: { 'WWW-Authenticate': 'Bearer' },
    })
  }

  revalidateTag(RESUME_CACHE_TAG)
  revalidatePath('/', 'page')
  revalidatePath('/resume', 'page')
  return Response.json({ revalidated: true })
}
