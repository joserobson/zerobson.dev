// Preserve the local resume's emphasis without interpreting API content as HTML.
export default function ResumeText({ children }: { children: string }) {
  return <>{children.split(/(<strong>[\s\S]*?<\/strong>)/g).map((part, index) =>
    part.startsWith('<strong>') && part.endsWith('</strong>')
      ? <strong key={index}>{part.slice(8, -9)}</strong>
      : part
  )}</>
}
