import { z } from 'zod'
import localResume from '@/data/resume-en.json'

export const RESUME_CACHE_TAG = 'resume'
const webUrl = z.string().url().refine(value => /^https?:\/\//i.test(value))
const skill = z.object({ name: z.string(), level: z.string() })
const resumeSchema = z.object({
  basics: z.object({
    name: z.string(), title: z.string(), email: z.string().email(),
    phone: z.string(), location: z.string(), summary: z.string(),
    githubUrl: webUrl, linkedinUrl: webUrl,
  }),
  experience: z.array(z.object({
    company: z.string(),
    roles: z.array(z.object({
      title: z.string(), technologies: z.string(), location: z.string().optional(),
      period: z.string(), responsibilities: z.array(z.string()),
    })),
  })),
  skills: z.object({ Other: z.array(z.string()).optional() }).catchall(z.union([z.array(skill), z.array(z.string())])),
  education: z.array(z.object({ degree: z.string(), institution: z.string(), period: z.string() })),
  certifications: z.array(z.string()),
  projects: z.array(z.object({
    title: z.string(), description: z.string(), color: z.string(),
    period: z.string().optional(), stack: z.string().optional(),
    badge1: z.string().optional(), badge2: z.string().optional(),
    tags: z.array(z.string()).optional(),
  })).optional(),
})

export type ResumeData = z.infer<typeof resumeSchema>

export async function getResume(): Promise<ResumeData> {
  const baseUrl = process.env.RESUME_API_BASE_URL
  if (!baseUrl) return localResume

  try {
    const response = await fetch(new URL('/api/profile/resume', baseUrl), {
      headers: { Accept: 'application/json' },
      next: { revalidate: 3600, tags: [RESUME_CACHE_TAG] },
      signal: AbortSignal.timeout(5000),
    })
    if (!response.ok) throw new Error('Resume API HTTP failure')
    return resumeSchema.parse(await response.json())
  } catch {
    console.warn('Resume API unavailable or invalid; using local resume data.')
    return localResume
  }
}
