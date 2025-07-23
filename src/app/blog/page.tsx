import Link from 'next/link'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { getAllPosts } from '@/lib/blog'
import { Calendar, Clock, Tag } from 'lucide-react'

export default function Blog() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Técnico</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Artigos sobre desenvolvimento web, boas práticas, arquitetura de software
            e as últimas tendências em tecnologia
          </p>
        </div>

        {/* Posts */}
        {posts.length > 0 ? (
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    <time dateTime={post.date}>
                      {format(new Date(post.date), "dd 'de' MMMM 'de' yyyy", {
                        locale: ptBR,
                      })}
                    </time>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    <span>5 min de leitura</span>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                {post.tags.length > 0 && (
                  <div className="flex items-center gap-2 mb-4">
                    <Tag size={16} className="text-gray-400" />
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Ler mais →
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Em breve, novos artigos!
              </h2>
              <p className="text-gray-600 mb-6">
                Estou preparando conteúdo técnico de qualidade sobre desenvolvimento
                web, arquitetura de software e boas práticas. Volte em breve para
                conferir os primeiros posts.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <p>📝 Artigos sobre Angular e .NET</p>
                <p>🏗️ Padrões de arquitetura e design</p>
                <p>⚡ Performance e otimização</p>
                <p>🧪 Testes e qualidade de código</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}