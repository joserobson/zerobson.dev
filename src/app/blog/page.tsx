import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { getAllPosts } from '@/lib/blog'

export default function Blog() {
  const posts = getAllPosts()

  if (posts.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Technical Blog</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Articles about web development, best practices, software architecture and the latest technology trends
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <div className="max-w-md mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Coming soon, new articles!</h2>
              <p className="text-gray-600 mb-8">
                I'm preparing quality technical content about web development, software architecture and best practices. 
                Come back soon to check out the first posts.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Angular & .NET</h3>
                  <p className="text-blue-700">Articles about Angular and .NET</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">Architecture</h3>
                  <p className="text-green-700">Architecture and design patterns</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-2">Performance</h3>
                  <p className="text-purple-700">Performance and optimization</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-900 mb-2">Testing</h3>
                  <p className="text-orange-700">Testing and code quality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Technical Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Articles about web development, best practices, software architecture and the latest technology trends
          </p>
        </div>

        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="bg-white rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    5 min read
                  </div>
                </div>
                
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Read more
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}