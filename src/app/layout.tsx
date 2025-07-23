import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Seu Nome - Desenvolvedor Full Stack',
  description: 'Desenvolvedor Full Stack especializado em Angular e .NET. Confira meu portfólio, currículo e blog técnico.',
  keywords: 'desenvolvedor, full stack, angular, .net, typescript, c#',
  authors: [{ name: 'Seu Nome' }],
  openGraph: {
    title: 'Seu Nome - Desenvolvedor Full Stack',
    description: 'Desenvolvedor Full Stack especializado em Angular e .NET',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
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