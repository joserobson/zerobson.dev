import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <a
                href="mailto:robsbq@gmail.com"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Mail size={16} className="mr-2" />
                robsbq@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/jose-robson-assis"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin size={16} className="mr-2" />
                LinkedIn
              </a>
              <a
                href="https://github.com/joserobson"
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
            <h3 className="text-lg font-semibold mb-4">Technologies</h3>
            <div className="text-gray-300 space-y-1">
              <p>Angular • TypeScript • RxJS</p>
              <p>.NET Core • C# • Microservices</p>
              <p>SQL Server • PostgreSQL</p>
              <p>Architecture • Legacy Modernization</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Senior Software Engineer with 15+ years of experience, passionate about 
              transforming ideas into high-impact solutions and mentoring new talent.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} José Robson Assis. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}