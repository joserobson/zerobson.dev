'use client'

import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { usePathname } from 'next-intl/navigation'
import { Menu, X, Globe } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const t = useTranslations('navigation')
  const locale = useLocale()
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false)

  const navigation = [
    { name: t('home'), href: `/${locale}` },
    { name: t('resume'), href: `/${locale}/curriculo` },
    { name: t('blog'), href: `/${locale}/blog` },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href={`/${locale}`} className="text-xl font-bold text-gray-900">
              Your Name
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Globe size={16} className="mr-1" />
                {locale.toUpperCase()}
              </button>
              
              {languageMenuOpen && (
                <div className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg border">
                  <Link
                    href={pathname.replace(`/${locale}`, '/en')}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    onClick={() => setLanguageMenuOpen(false)}
                  >
                    EN
                  </Link>
                  <Link
                    href={pathname.replace(`/${locale}`, '/pt')}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    onClick={() => setLanguageMenuOpen(false)}
                  >
                    PT
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    pathname === item.href
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="px-3 py-2">
                <div className="flex items-center justify-between">
                  <span className="text-base font-medium text-gray-700">Language</span>
                  <div className="flex space-x-2">
                    <Link
                      href={pathname.replace(`/${locale}`, '/en')}
                      className={`px-2 py-1 text-sm rounded ${locale === 'en' ? 'bg-blue-100 text-blue-600' : 'text-gray-700'}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      EN
                    </Link>
                    <Link
                      href={pathname.replace(`/${locale}`, '/pt')}
                      className={`px-2 py-1 text-sm rounded ${locale === 'pt' ? 'bg-blue-100 text-blue-600' : 'text-gray-700'}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      PT
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}