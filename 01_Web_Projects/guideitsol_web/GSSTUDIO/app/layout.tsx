import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'GSSTUDIO - Super Magic UX Studio & UI Studio Platform',
  description: 'Create stunning designs like Canva and Designs.com. Professional design tools, templates, and collaboration features for modern creators.',
  keywords: 'design platform, UX studio, UI studio, graphic design, templates, collaboration, canva alternative',
  authors: [{ name: 'GSSTUDIO Design Platform' }],
  creator: 'GSSTUDIO Design Platform',
  publisher: 'GSSTUDIO Design Platform',
  robots: 'index, follow',
  openGraph: {
    title: 'GSSTUDIO - Super Magic UX Studio & UI Studio Platform',
    description: 'Create stunning designs like Canva and Designs.com. Professional design tools, templates, and collaboration features for modern creators.',
    type: 'website',
    locale: 'en_US',
    url: 'https://gsstudio.com',
    siteName: 'GSSTUDIO Design Platform',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GSSTUDIO Design Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GSSTUDIO - Super Magic UX Studio & UI Studio Platform',
    description: 'Create stunning designs like Canva and Designs.com. Professional design tools, templates, and collaboration features for modern creators.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  themeColor: '#3b82f6',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className="font-sans antialiased bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
        {children}
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: '#4ade80',
                secondary: '#fff',
              },
            },
            error: {
              duration: 5000,
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />
      </body>
    </html>
  )
}
