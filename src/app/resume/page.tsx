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
                  <h3 className="text-lg font-semibold text-gray-900">Senior Software Engineer & Technical Lead</h3>
                  <p className="text-blue-600 font-medium">Current Position</p>
                </div>
                <span className="text-gray-500 text-sm">2009 - Present</span>
              </div>
              <ul className="text-gray-600 space-y-1 ml-4">
                <li>• Led development of enterprise applications using Angular and .NET Core</li>
                <li>• Specialized in legacy system modernization and microservices architecture</li>
                <li>• Mentored development teams and conducted technical leadership</li>
                <li>• Developed SDKs and optimized performance and scalability of complex systems</li>
                <li>• Led architectural conception to delivery of innovative products</li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Software Developer</h3>
                  <p className="text-blue-600 font-medium">Early Career</p>
                </div>
                <span className="text-gray-500 text-sm">2009 - 2015</span>
              </div>
              <ul className="text-gray-600 space-y-1 ml-4">
                <li>• Developed desktop, web, and mobile applications using .NET Framework</li>
                <li>• Built robust and scalable systems with focus on performance</li>
                <li>• Implemented complex integrations and security solutions</li>
                <li>• Gained expertise in software architecture and design patterns</li>
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
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Technology Education</h3>
            <p className="text-blue-600 font-medium">15+ Years of Professional Experience</p>
            <span className="text-gray-500 text-sm">Continuous Learning and Development</span>
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