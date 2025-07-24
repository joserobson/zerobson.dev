import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Your Name - Full Stack Developer',
  description: 'Full Stack Developer specialized in Angular and .NET. Check out my portfolio, resume and technical blog.',
  keywords: 'developer, full stack, angular, .net, typescript, c#',
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Your Name - Full Stack Developer',
    description: 'Full Stack Developer specialized in Angular and .NET',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}