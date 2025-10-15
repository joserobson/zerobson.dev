import CodeBlock from '@/components/CodeBlock';

// MDX Components with proper styling for MDXRemote
export const mdxComponents = {
  h1: ({ children }: any) => (
    <h1 className="text-2xl font-bold text-gray-900 mb-8 leading-tight">{children}</h1>
  ),
  h2: ({ children }: any) => (
    <h2 className="text-2xl font-semibold text-gray-800 mb-6 mt-12 leading-tight">{children}</h2>
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
    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800 border text-red-600">
      {children}
    </code>
  ),
  pre: ({ children, ...props }: any) => {
    // Extract code content and language from children
    const codeElement = children?.props?.children;
    const language = children?.props?.className?.replace('language-', '') || 'csharp';
    const filename = props['data-filename'];
    
    if (typeof codeElement === 'string') {
      return (
        <CodeBlock language={language} filename={filename}>
          {codeElement}
        </CodeBlock>
      );
    }
    
    // Fallback for non-code pre elements
    return (
      <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto mb-8 border">
        <code className="text-sm leading-relaxed">{children}</code>
      </pre>
    );
  },
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