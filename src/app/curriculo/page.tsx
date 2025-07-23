import { Calendar, MapPin, Mail, Phone, Linkedin, Github, Download } from 'lucide-react'

export default function Curriculo() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Seu Nome</h1>
              <p className="text-xl text-blue-600 font-medium">
                Desenvolvedor Full Stack
              </p>
            </div>
            <button className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Download size={16} className="mr-2" />
              Download PDF
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
            <div className="flex items-center">
              <Mail size={16} className="mr-2" />
              <span>seu.email@exemplo.com</span>
            </div>
            <div className="flex items-center">
              <Phone size={16} className="mr-2" />
              <span>(11) 99999-9999</span>
            </div>
            <div className="flex items-center">
              <MapPin size={16} className="mr-2" />
              <span>São Paulo, SP</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://linkedin.com/in/seu-perfil" className="flex items-center hover:text-blue-600">
                <Linkedin size={16} className="mr-1" />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/seu-usuario" className="flex items-center hover:text-blue-600">
                <Github size={16} className="mr-1" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Resumo Profissional */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Resumo Profissional</h2>
          <p className="text-gray-600 leading-relaxed">
            Desenvolvedor Full Stack com mais de X anos de experiência em desenvolvimento
            de aplicações web escaláveis utilizando Angular e .NET. Especialista em
            arquitetura limpa, padrões de design e boas práticas de desenvolvimento.
            Experiência sólida em todo o ciclo de desenvolvimento de software, desde
            a concepção até a implantação e manutenção.
          </p>
        </div>

        {/* Experiência Profissional */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Experiência Profissional</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-blue-500 pl-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  Desenvolvedor Full Stack Sênior
                </h3>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar size={14} className="mr-1" />
                  <span>Jan 2022 - Presente</span>
                </div>
              </div>
              <p className="text-blue-600 font-medium mb-3">Empresa XYZ</p>
              <ul className="text-gray-600 space-y-2">
                <li>• Desenvolvimento de aplicações web usando Angular 15+ e .NET 6</li>
                <li>• Implementação de arquitetura limpa e padrões SOLID</li>
                <li>• Criação de APIs RESTful com documentação OpenAPI</li>
                <li>• Mentoria de desenvolvedores júnior e code review</li>
                <li>• Integração com serviços Azure e implementação de CI/CD</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  Desenvolvedor Full Stack
                </h3>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar size={14} className="mr-1" />
                  <span>Mar 2020 - Dez 2021</span>
                </div>
              </div>
              <p className="text-blue-600 font-medium mb-3">Empresa ABC</p>
              <ul className="text-gray-600 space-y-2">
                <li>• Desenvolvimento frontend com Angular e TypeScript</li>
                <li>• Criação de APIs com .NET Core e Entity Framework</li>
                <li>• Implementação de testes unitários e de integração</li>
                <li>• Trabalho em equipe ágil com Scrum</li>
                <li>• Otimização de performance e SEO</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  Desenvolvedor Junior
                </h3>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar size={14} className="mr-1" />
                  <span>Jun 2018 - Fev 2020</span>
                </div>
              </div>
              <p className="text-blue-600 font-medium mb-3">Startup DEF</p>
              <ul className="text-gray-600 space-y-2">
                <li>• Desenvolvimento de funcionalidades frontend em Angular</li>
                <li>• Manutenção e evolução de APIs .NET</li>
                <li>• Participação em todo o ciclo de desenvolvimento</li>
                <li>• Aprendizado contínuo de novas tecnologias</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Habilidades Técnicas */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Habilidades Técnicas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Frontend</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Angular</span>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-11/12"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">TypeScript</span>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-11/12"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">RxJS</span>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-10/12"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">HTML/CSS</span>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Backend</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">.NET Core</span>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full w-11/12"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">C#</span>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full w-11/12"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Entity Framework</span>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full w-10/12"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">SQL Server</span>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full w-10/12"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Outras Tecnologias</h3>
            <div className="flex flex-wrap gap-2">
              {[
                'Git', 'Azure', 'Docker', 'PostgreSQL', 'Redis', 'SignalR',
                'Swagger', 'Jest', 'Jasmine', 'Postman', 'Visual Studio',
                'VS Code', 'Azure DevOps', 'Scrum', 'Kanban'
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Formação */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Formação</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  Bacharelado em Ciência da Computação
                </h3>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar size={14} className="mr-1" />
                  <span>2015 - 2018</span>
                </div>
              </div>
              <p className="text-green-600 font-medium">Universidade XYZ</p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Certificações</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Microsoft Certified: Azure Developer Associate</li>
                <li>• Angular Certified Developer</li>
                <li>• Scrum Master Certified</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Projetos Destacados */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Projetos Destacados</h2>
          
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Sistema de Gestão Empresarial
              </h3>
              <p className="text-gray-600 mb-3">
                Aplicação completa para gestão de recursos empresariais desenvolvida
                com Angular 15 e .NET 6, incluindo módulos de vendas, estoque e
                relatórios em tempo real.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Angular</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">.NET 6</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">SQL Server</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">SignalR</span>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                API de E-commerce
              </h3>
              <p className="text-gray-600 mb-3">
                API RESTful robusta para plataforma de e-commerce com autenticação
                JWT, integração de pagamentos e sistema de notificações.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">.NET Core</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Entity Framework</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Redis</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Docker</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}