import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react'
import PrintButton from '@/components/PrintButton'
import resumeData from '@/data/resume-en.json'

export default function Resume() {
  const { basics, experience, skills, education, certifications, projects } = resumeData;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{basics.name}</h1>
              <p className="text-xl text-gray-600">{basics.title}</p>
            </div>
            <PrintButton />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center text-gray-600">
              <Mail size={16} className="mr-2" />
              {basics.email}
            </div>
            <div className="flex items-center text-gray-600">
              <Phone size={16} className="mr-2" />
              {basics.phone}
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin size={16} className="mr-2" />
              {basics.location}
            </div>
            <div className="flex items-center space-x-4">
              <a href={basics.githubUrl} className="text-gray-600 hover:text-blue-600">
                <Github size={16} />
              </a>
              <a href={basics.linkedinUrl} className="text-gray-600 hover:text-blue-600">
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Summary</h2>
          <p className="text-gray-600 leading-relaxed">
            {basics.summary}
          </p>
        </div>

        {/* Experience */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Experience</h2>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index}>
                {exp.roles.map((role, roleIndex) => (
                  <div key={roleIndex}>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{role.title}</h3>
                        <p className="text-blue-600 font-medium">{exp.company}</p>
                        <p className="text-gray-600 text-sm">{role.technologies}</p>
                        {role.location && <p className="text-gray-500 text-sm">{role.location}</p>}
                      </div>
                      <span className="text-gray-500 text-sm">{role.period}</span>
                    </div>
                    <ul className="text-gray-600 space-y-1 ml-4">
                      {role.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} dangerouslySetInnerHTML={{ __html: `• ${resp}` }} />
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skills).filter(([category]) => category !== 'Other').map(([category, items]) => (
              <div key={category}>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{category}</h3>
                <div className="space-y-2">
                  {(items as Array<{name: string, level: string}>).map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-600">{item.name}</span>
                      <span className="text-sm text-green-600 font-medium">{item.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {skills.Other && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Other Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.Other.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Education */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
                <p className="text-blue-600 font-medium">{edu.institution}</p>
                <span className="text-gray-500 text-sm">{edu.period}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Certifications</h2>
          <div className="space-y-3">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-gray-700">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Projects */}
        {projects && projects.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Projects</h2>
            
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div key={index} className={`border-l-4 border-${project.color}-500 pl-4`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                        {project.badge1 && (
                          <span className={`text-xs bg-${project.color}-100 text-${project.color}-700 px-2 py-0.5 rounded-full font-medium`}>
                            {project.badge1}
                          </span>
                        )}
                        {project.badge2 && (
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                            {project.badge2}
                          </span>
                        )}
                      </div>
                      {(project.period || project.stack) && (
                        <p className="text-gray-500 text-sm mb-2">
                          {[project.period, project.stack].filter(Boolean).join(' · ')}
                        </p>
                      )}
                      <p className="text-gray-600 mt-1" dangerouslySetInnerHTML={{ __html: project.description }} />
                      
                      {project.tags && project.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {project.tags.map((tag, tIndex) => (
                            <span key={tIndex} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{tag}</span>
                          ))}
                        </div>
                      )}
                    </div>
                    <ExternalLink size={16} className="text-gray-400 mt-1 ml-4 flex-shrink-0" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}