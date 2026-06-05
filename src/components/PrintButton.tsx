'use client'

import { Download } from 'lucide-react'

export default function PrintButton() {
  return (
    <a
      href="/Resume-Jose-Robson-Assis-EN.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors print:hidden"
      aria-label="Download resume as PDF"
    >
      <Download size={16} className="mr-2" />
      Download PDF
    </a>
  )
}
