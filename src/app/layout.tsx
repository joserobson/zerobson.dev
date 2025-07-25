import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'José Robson Assis - Full Stack Developer',
  description: 'Senior Software Engineer and Technical Lead with 15+ years experience in .NET Core, Angular, and software architecture.',
  keywords: 'developer, full stack, angular, .net, typescript, c#',
  authors: [{ name: 'José Robson Assis' }],
  openGraph: {
    title: 'José Robson Assis - Full Stack Developer',
    description: 'Senior Software Engineer and Technical Lead with 15+ years experience in .NET Core, Angular, and software architecture.',
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