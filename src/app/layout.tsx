import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}