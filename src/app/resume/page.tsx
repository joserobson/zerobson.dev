import { Download, Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react'

export default function Resume() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">José Robson Assis</h1>
              <p className="text-xl text-gray-600">Senior Software Engineer | Technical Lead</p>
            </div>
            <button className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Download size={16} className="mr-2" />
              Download PDF
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center text-gray-600">
              <Mail size={16} className="mr-2" />
              robsbq@gmail.com
            </div>
            <div className="flex items-center text-gray-600">
              <Phone size={16} className="mr-2" />
              +55 (32) 99993-4311
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin size={16} className="mr-2" />
              Brazil
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://github.com/joserobson" className="text-gray-600 hover:text-blue-600">
                <Github size={16} />
              </a>
              <a href="https://www.linkedin.com/in/jose-robson-assis" className="text-gray-600 hover:text-blue-600">
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Summary</h2>
          <p className="text-gray-600 leading-relaxed">
            With over 15 years of experience in the technology sector, I work as a Senior Software Engineer and Technical Lead, 
            transforming ideas into high-impact solutions. My expertise covers fullstack development with a focus on .NET Core, 
            C#, Angular, and software architecture, building robust and scalable systems for Desktop, Web, and Mobile platforms. 
            I specialize in legacy system modernization, microservices architecture, security, and complex integrations, leading 
            teams from architectural conception to the delivery of innovative products.
          </p>
        </div>

        {/* Experience */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Experience</h2>
          
          <div className="space-y-8">
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Senior Full Stack Software Engineer | Technical Lead | Software Architect</h3>
                  <p className="text-blue-600 font-medium">Rerum Engenharia de Sistemas LTDA</p>
                  <p className="text-gray-600 text-sm">C#.NET Core Angular - SQL Server</p>
                  <p className="text-gray-500 text-sm">Varginha, Minas Gerais, Brazil</p>
                </div>
                <span className="text-gray-500 text-sm">January 2016 - Present (8 years 7 months)</span>
              </div>
              <ul className="text-gray-600 space-y-1 ml-4">
                <li>• <strong>Security Implementation Lead at Elosgate (June 2025 - Ongoing):</strong> Deployed as senior consultant responsible for platform security implementation and enhancement</li>
                <li>• Developed robust application for data signing and approval in Azure environment with two-factor authentication</li>
                <li>• Utilized JWT (JSON Web Tokens) for data signing, ensuring reliability and integrity of transacted information</li>
                <li>• <strong>Lead and Architecture Role in SobControle Financeiro Project (January 2025 - Ongoing):</strong> Technical lead and software architect for modernizing legacy financial system</li>
                <li>• Complete architectural redesign, migrating from GWT and gRPC (.NET Framework) to Angular 18 and .NET Core/.NET Framework APIs</li>
                <li>• Developed robust API gateway with .NET Core and Yarp (Reverse Proxy) and dedicated authentication API in .NET Core 8</li>
                <li>• <strong>Senior Consultant at ONS (2017-2024):</strong> Worked on strategic projects maintaining legacy systems and developing new features in mission-critical environment</li>
                <li>• Implemented microservices architecture and asynchronous communication via RabbitMQ queues using Scrum methodology</li>
                <li>• Extensive experience with .NET Framework, WebForms, ASP.NET MVC, .NET Core, Entity Framework, SQL Server, and Informix</li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Senior Full Stack Software Engineer</h3>
                  <p className="text-blue-600 font-medium">Instituto Dataminas</p>
                  <p className="text-gray-600 text-sm">C#.NET - IONIC</p>
                  <p className="text-gray-500 text-sm">Varginha, Minas Gerais, Brazil</p>
                </div>
                <span className="text-gray-500 text-sm">May 2020 - November 2021 (1 year 7 months)</span>
              </div>
              <ul className="text-gray-600 space-y-1 ml-4">
                <li>• Complete development of mobile application using Ionic 3 for Android</li>
                <li>• Development of website using ASP.NET MVC</li>
                <li>• Architecture, development of main functionalities, and integration between mobile and web platforms</li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Full Stack Developer</h3>
                  <p className="text-blue-600 font-medium">LEMAF - Laboratório de Estudos e Projetos em Manejo Florestal</p>
                  <p className="text-gray-600 text-sm">C#.NET - ASP.NET MVC - Angular - PostgreSQL</p>
                  <p className="text-gray-500 text-sm">Lavras e Região, Brazil</p>
                </div>
                <span className="text-gray-500 text-sm">July 2015 - December 2015 (6 months)</span>
              </div>
              <ul className="text-gray-600 space-y-1 ml-4">
                <li>• Development of project for Brazilian federal government's Bolsa-Verde Program</li>
                <li>• Utilized Angular for front-end and .NET Framework for back-end</li>
                <li>• Resulted in 70% cost savings in social-environmental program's registration costs</li>
                <li>• Increased data reliability and transparency for government program</li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Full Stack Developer</h3>
                  <p className="text-blue-600 font-medium">Rerum Engenharia de Sistemas</p>
                  <p className="text-gray-600 text-sm">Java - C# - JavaScript - SQLServer - Business Intelligence</p>
                </div>
                <span className="text-gray-500 text-sm">March 2008 - July 2015 (7 years 5 months)</span>
              </div>
              <ul className="text-gray-600 space-y-1 ml-4">
                <li>• Development on .NET and Java platforms</li>
                <li>• Built foundation expertise in full-stack development</li>
                <li>• Worked with Business Intelligence solutions</li>
                <li>• Gained experience with multiple programming languages and databases</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Frontend</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Angular</span>
                  <span className="text-sm text-green-600 font-medium">Advanced</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">TypeScript</span>
                  <span className="text-sm text-green-600 font-medium">Advanced</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">RxJS</span>
                  <span className="text-sm text-green-600 font-medium">Advanced</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">HTML5/CSS3</span>
                  <span className="text-sm text-green-600 font-medium">Advanced</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Backend</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">.NET Core</span>
                  <span className="text-sm text-green-600 font-medium">Advanced</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">C#</span>
                  <span className="text-sm text-green-600 font-medium">Advanced</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Entity Framework</span>
                  <span className="text-sm text-green-600 font-medium">Advanced</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">SQL Server</span>
                  <span className="text-sm text-green-600 font-medium">Advanced</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Other Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {['Azure', 'Docker', 'Git', 'PostgreSQL', 'Redis', 'Microservices', 'Clean Architecture', 'SOLID'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Education</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Master of Business Administration (MBA) in IT Project Management</h3>
              <p className="text-blue-600 font-medium">Universidade Federal de Juiz de Fora</p>
              <span className="text-gray-500 text-sm">2013 - 2014</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Bachelor's Degree in Computer Science</h3>
              <p className="text-blue-600 font-medium">Universidade Presidente Antônio Carlos</p>
              <span className="text-gray-500 text-sm">2004 - 2007</span>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Certifications</h2>
          <div className="space-y-3">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              <span className="text-gray-700">MS: Programming in C#</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              <span className="text-gray-700">MCPS: Microsoft Certified Professional</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              <span className="text-gray-700">Software Architecture Course (.NET)</span>
            </div>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Projects</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Legacy System Modernization</h3>
                  <p className="text-gray-600 mt-1">
                    Led the modernization of legacy systems transitioning to microservices architecture, 
                    improving performance, scalability and maintainability of enterprise applications.
                  </p>
                </div>
                <ExternalLink size={16} className="text-gray-400 mt-1 ml-2 flex-shrink-0" />
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">SDK Development</h3>
                  <p className="text-gray-600 mt-1">
                    Developed comprehensive SDKs for complex integrations, enabling seamless communication 
                    between different systems and platforms with focus on security and performance.
                  </p>
                </div>
                <ExternalLink size={16} className="text-gray-400 mt-1 ml-2 flex-shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}