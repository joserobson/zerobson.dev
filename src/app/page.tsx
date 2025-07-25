import { ArrowRight, Code, Database, Globe } from 'lucide-react'
import Link from 'next/link'
import TechStack from '@/components/TechStack'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Hello, I'm{' '}
              <span className="text-blue-600">José Robson de Assis</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Senior Software Engineer and Technical Lead with{' '}
              <span className="font-semibold text-blue-600">15+ years</span> of experience in{' '}
              <span className="font-semibold text-blue-600">Angular</span> and{' '}
              <span className="font-semibold text-blue-600">.NET Core</span>, transforming ideas into high-impact solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/resume"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Resume
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
              >
                Read Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About Me
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>I'm a Senior Software Engineer with over 15 years of experience in building and maintaining robust web applications. My expertise covers fullstack development with a focus on .NET Framework, .NET Core, C#, Angular, and software architecture.</p>
                <p>I have a solid background in system maintenance, efficiently handling bug fixes, new features, and performance optimizations. I'm passionate about tackling complex technical challenges and mentoring new talent, actively contributing to team growth and seeking opportunities to drive project innovation and success..</p>
             
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Frontend</h3>
                <p className="text-gray-600 text-sm">
                  Angular, TypeScript, RxJS, HTML5/CSS3
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <Database className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Backend</h3>
                <p className="text-gray-600 text-sm">
                  .NET Core, C#, Entity Framework, SQL Server
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg text-center sm:col-span-2">
                <Code className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Architecture</h3>
                <p className="text-gray-600 text-sm">
                  Microservices, Clean Architecture, SOLID, Legacy Modernization
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <TechStack />

      {/* CTA Section */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Let's work together?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always open to challenging opportunities where my skills can drive innovation and success. Get in touch to discuss your next project.
          </p>
          <a
            href="mailto:robsbq@gmail.com"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get in Touch
            <ArrowRight size={20} className="ml-2" />
          </a>
        </div>
      </section>
    </>
  )
}