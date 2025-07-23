import { Github, Linkedin, Mail } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('footer')

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('contact')}</h3>
            <div className="space-y-2">
              <a
                href="mailto:seu.email@exemplo.com"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Mail size={16} className="mr-2" />
                seu.email@exemplo.com
              </a>
              <a
                href="https://linkedin.com/in/seu-perfil"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin size={16} className="mr-2" />
                LinkedIn
              </a>
              <a
                href="https://github.com/seu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Github size={16} className="mr-2" />
                GitHub
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('technologies')}</h3>
            <div className="text-gray-300 space-y-1">
              <p>Angular • TypeScript</p>
              <p>.NET • C#</p>
              <p>SQL Server • PostgreSQL</p>
              <p>Azure • Docker</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('about')}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{t('aboutText')}</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Your Name. {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}