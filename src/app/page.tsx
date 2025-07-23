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
              Olá, eu sou{' '}
              <span className="text-blue-600">Seu Nome</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Desenvolvedor Full Stack especializado em{' '}
              <span className="font-semibold text-blue-600">Angular</span> e{' '}
              <span className="font-semibold text-blue-600">.NET</span>,
              apaixonado por criar soluções escaláveis e eficientes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/curriculo"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Ver Currículo
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
              >
                Ler Blog
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
                Sobre Mim
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Sou um desenvolvedor Full Stack com mais de X anos de experiência
                  criando aplicações web robustas e escaláveis. Minha especialidade
                  está no desenvolvimento frontend com Angular e backend com .NET.
                </p>
                <p>
                  Tenho paixão por arquitetura limpa, boas práticas de desenvolvimento
                  e sempre busco estar atualizado com as últimas tecnologias do mercado.
                  Acredito que código bem escrito é fundamental para o sucesso de
                  qualquer projeto.
                </p>
                <p>
                  Quando não estou codando, gosto de compartilhar conhecimento através
                  de artigos técnicos e contribuir com a comunidade de desenvolvedores.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Frontend</h3>
                <p className="text-gray-600 text-sm">
                  Angular, TypeScript, RxJS, Tailwind CSS
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
                <h3 className="font-semibold text-gray-900 mb-2">Arquitetura</h3>
                <p className="text-gray-600 text-sm">
                  Clean Architecture, SOLID, DDD, Microservices, APIs RESTful
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
            Vamos trabalhar juntos?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Estou sempre aberto a novos desafios e oportunidades.
            Entre em contato para conversarmos sobre seu próximo projeto.
          </p>
          <a
            href="mailto:seu.email@exemplo.com"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Entrar em Contato
            <ArrowRight size={20} className="ml-2" />
          </a>
        </div>
      </section>
    </>
  )
}