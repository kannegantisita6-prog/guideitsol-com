import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GSSTUDIO - Super Magic UX Studio & UI Studio Platform',
  description: 'Create stunning designs like Canva and Designs.com. Professional design tools, templates, and collaboration features for modern creators.',
  keywords: 'design platform, UX studio, UI studio, graphic design, templates, collaboration, canva alternative',
  authors: [{ name: 'GSSTUDIO Design Platform' }],
  openGraph: {
    title: 'GSSTUDIO - Super Magic UX Studio & UI Studio Platform',
    description: 'Create stunning designs like Canva and Designs.com. Professional design tools, templates, and collaboration features for modern creators.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GSSTUDIO - Super Magic UX Studio & UI Studio Platform',
    description: 'Create stunning designs like Canva and Designs.com. Professional design tools, templates, and collaboration features for modern creators.',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
          {children}
        </div>
      </body>
    </html>
  )
}
