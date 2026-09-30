import type { Metadata } from 'next'
import '@fontsource/inter/latin-400.css'
import '@fontsource/inter/latin-500.css'
import '@fontsource/inter/latin-600.css'
import '@fontsource/inter/latin-700.css'
import './globals.css'

export const metadata: Metadata = {
  title: 'Yosefa Ferdianto | Software Engineer',
  description: 'Yosefa Ferdianto designs and builds software, enterprise systems, and useful everyday products.',
  keywords: ['Software Engineer', 'ERP Systems', 'Web Development', 'IT Infrastructure'],
  authors: [{ name: 'Yosefa Ferdianto' }],
  creator: 'Yosefa Ferdianto',
  openGraph: {
    title: 'Yosefa Ferdianto | Software Engineer',
    description: 'Software, systems, and products built to make complex work feel simple.',
    url: 'https://yosefa.my.id',
    siteName: 'Yosefa Ferdianto Portfolio',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {children}
      </body>
    </html>
  )
}
