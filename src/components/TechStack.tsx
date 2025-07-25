interface TechItem {
  name: string
  category: string
  level: 'Advanced' | 'Intermediate' | 'Basic'
}

const techStack: TechItem[] = [
  { name: 'Angular', category: 'Frontend', level: 'Advanced' },
  { name: 'TypeScript', category: 'Frontend', level: 'Advanced' },
  { name: 'RxJS', category: 'Frontend', level: 'Advanced' },
  { name: 'HTML5/CSS3', category: 'Frontend', level: 'Advanced' },
  { name: 'Tailwind CSS', category: 'Frontend', level: 'Intermediate' },
  { name: '.NET Core', category: 'Backend', level: 'Advanced' },
  { name: 'C#', category: 'Backend', level: 'Advanced' },
  { name: 'Entity Framework', category: 'Backend', level: 'Advanced' },
  { name: 'SQL Server', category: 'Database', level: 'Advanced' },
  { name: 'PostgreSQL', category: 'Database', level: 'Intermediate' },
  { name: 'Azure', category: 'Cloud', level: 'Intermediate' },
  { name: 'Docker', category: 'DevOps', level: 'Intermediate' },
  { name: 'Git', category: 'Tools', level: 'Advanced' },
]

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Advanced':
      return 'bg-green-100 text-green-800'
    case 'Intermediate':
      return 'bg-yellow-100 text-yellow-800'
    case 'Basic':
      return 'bg-gray-100 text-gray-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

export default function TechStack() {
  const categories = Array.from(new Set(techStack.map(tech => tech.category)))

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Tech Stack
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to develop robust and scalable solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category} className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {category}
              </h3>
              <div className="space-y-3">
                {techStack
                  .filter((tech) => tech.category === category)
                  .map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center justify-between"
                    >
                      <span className="text-gray-700 font-medium">
                        {tech.name}
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(
                          tech.level
                        )}`}
                      >
                        {tech.level}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}