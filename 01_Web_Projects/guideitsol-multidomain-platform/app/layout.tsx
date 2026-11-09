import './globals.css'
import type { Metadata } from 'next'
import { Providers } from './providers'
import MainLayout from './components/layout/MainLayout'

export const metadata: Metadata = {
  title: 'GuideITSol - All You Need. All in One.',
  description: 'The ultimate digital ecosystem bringing together AI tools, education, health, finance, e-commerce, travel, business, entertainment, and job opportunities in one unified platform.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <MainLayout>
            {children}
          </MainLayout>
        </Providers>
      </body>
    </html>
  )
}
