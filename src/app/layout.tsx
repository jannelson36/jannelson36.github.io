import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jannelson - Full Stack Developer',
  description: 'Full Stack Developer specializing in modern web technologies, creating scalable applications with best practices.',
  keywords: ['Full Stack Developer', 'Software Engineer', 'React', 'Next.js', 'TypeScript', 'Node.js'],
  authors: [{ name: 'Jannelson' }],
  creator: 'Jannelson',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jannelson.dev',
    title: 'Jannelson - Full Stack Developer',
    description: 'Full Stack Developer specializing in modern web technologies.',
    siteName: 'Jannelson Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jannelson - Full Stack Developer',
    description: 'Full Stack Developer specializing in modern web technologies.',
    creator: '@jannelson36',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}