import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'GuideSoft IT Solutions | Enterprise Cloud, Fullstack Software & Digital Transformation',
  description: 'GuideSoft IT Solutions provides enterprise IT consulting, scalable software engineering, cloud architecture, and mission-critical digital workflows.',
  keywords: 'software development, IT consulting, cloud engineering, web development, mobile apps, visa flow solutions, AI automation, dedicated developers',
  authors: [{ name: 'GuideSoft IT Solutions' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'GuideSoft IT Solutions | Enterprise Cloud & Software Services',
    description: 'Transform your business with cutting-edge software development and cloud consulting',
    url: 'https://www.guideitsol.com',
    siteName: 'GuideSoft IT Solutions',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GuideSoft IT Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GuideSoft IT Solutions',
    description: 'Enterprise Cloud, Fullstack Software & Digital Transformation',
    images: ['/twitter-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0284c7" />

        {/* Google Analytics 4 (GA4) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GUIDEITSOL2026"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GUIDEITSOL2026', {
                page_path: window.location.pathname,
              });
              window.trackMarketingEvent = function(action, category, label, value) {
                if (typeof gtag === 'function') {
                  gtag('event', action, {
                    event_category: category,
                    event_label: label,
                    value: value
                  });
                }
              };
            `,
          }}
        />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "GuideSoft IT Solutions",
              "alternateName": "GuideITSol",
              "url": "https://www.guideitsol.com",
              "logo": "https://www.guideitsol.com/assets/guidesoft-logo-BdL-tM9p.png",
              "telephone": "+91-99999-99999",
              "email": "business@guideitsol.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "HITEC City Innovation Park",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "postalCode": "500081",
                "addressCountry": "IN"
              }
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <div id="root">
          {children}
        </div>
        <div id="modal-root"></div>
      </body>
    </html>
  )
}
