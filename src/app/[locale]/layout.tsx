import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

const locales = ['en', 'pt']

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

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound()

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}