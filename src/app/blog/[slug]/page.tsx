import { notFound } from 'next/navigation'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { getPostBySlug, getAllPosts } from '@/lib/blog'
import { MDXRemote } from 'next-mdx-remote/rsc'

// MDX Components with proper styling
const mdxComponents = {
  h1: ({ children }: any) => (
    <h1 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">{children}</h1>
  ),
  h2: ({ children }: any) => (
    <h2 className="text-3xl font-semibold text-gray-800 mb-6 mt-12 leading-tight">{children}</h2>
  ),
  h3: ({ children }: any) => (
    <h3 className="text-2xl font-medium text-gray-700 mb-4 mt-8 leading-tight">{children}</h3>
  ),
  h4: ({ children }: any) => (
    <h4 className="text-xl font-medium text-gray-700 mb-3 mt-6">{children}</h4>
  ),
  p: ({ children }: any) => (
    <p className="text-gray-700 mb-6 leading-relaxed text-lg">{children}</p>
  ),
  strong: ({ children }: any) => (
    <strong className="font-semibold text-gray-900">{children}</strong>
  ),
  em: ({ children }: any) => (
    <em className="italic text-gray-700">{children}</em>
  ),
  code: ({ children }: any) => (
    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800 border">
      {children}
    </code>
  ),
  pre: ({ children }: any) => (
    <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto mb-8 border">
      <code className="text-sm leading-relaxed">{children}</code>
    </pre>
  ),
  ul: ({ children }: any) => (
    <ul className="list-disc list-outside text-gray-700 mb-6 space-y-2 pl-6 leading-relaxed">
      {children}
    </ul>
  ),
  ol: ({ children }: any) => (
    <ol className="list-decimal list-outside text-gray-700 mb-6 space-y-2 pl-6 leading-relaxed">
      {children}
    </ol>
  ),
  li: ({ children }: any) => (
    <li className="mb-1 leading-relaxed">{children}</li>
  ),
  blockquote: ({ children }: any) => (
    <blockquote className="border-l-4 border-blue-500 pl-6 py-2 italic text-gray-700 mb-6 bg-blue-50 rounded-r-lg">
      {children}
    </blockquote>
  ),
  a: ({ href, children }: any) => (
    <a 
      href={href} 
      className="text-blue-600 hover:text-blue-800 underline font-medium"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),
  table: ({ children }: any) => (
    <div className="overflow-x-auto mb-6">
      <table className="min-w-full border border-gray-200 rounded-lg">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }: any) => (
    <thead className="bg-gray-50">{children}</thead>
  ),
  tbody: ({ children }: any) => (
    <tbody className="divide-y divide-gray-200">{children}</tbody>
  ),
  tr: ({ children }: any) => (
    <tr className="hover:bg-gray-50">{children}</tr>
  ),
  th: ({ children }: any) => (
    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
      {children}
    </th>
  ),
  td: ({ children }: any) => (
    <td className="px-4 py-3 text-sm text-gray-700 border-b">
      {children}
    </td>
  ),
  hr: () => (
    <hr className="my-8 border-gray-200" />
  ),
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Blog */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <article className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-8 sm:p-12">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex items-center text-sm text-gray-500 space-x-6 mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                {Math.ceil(post.content.length / 1000)} min read
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <MDXRemote 
                source={post.content} 
                components={mdxComponents}
              />
            </div>
          </div>
        </article>

        {/* Author Bio */}
        <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              JR
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                José Robson Assis
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Senior Software Engineer and Technical Lead with 15+ years of experience in .NET Core, 
                Angular, and software architecture. Passionate about transforming ideas into high-impact 
                solutions and mentoring new talent.
              </p>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://www.linkedin.com/in/jose-robson-assis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/joserobson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}