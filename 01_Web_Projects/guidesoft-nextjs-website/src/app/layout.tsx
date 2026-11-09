import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Header, Footer } from '@/components/layout';
import { StructuredData } from '@/components/seo';
import { AnalyticsProvider } from '@/components/analytics';
import { generateOrganizationSchema } from '@/lib/seo';
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://guidesoft.com'),
  title: {
    template: '%s | Guidesoft',
    default: 'Guidesoft - Digital Transformation & Visa Services',
  },
  description: 'Transform your business with cutting-edge technology solutions and comprehensive visa services. Expert IT consulting, software development, and immigration guidance.',
  keywords: ['digital transformation', 'software development', 'visa services', 'IT consulting', 'web development', 'immigration'],
  authors: [{ name: 'Guidesoft Team' }],
  creator: 'Guidesoft',
  publisher: 'Guidesoft',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://guidesoft.com',
    title: 'Guidesoft - Digital Transformation & Visa Services',
    description: 'Transform your business with cutting-edge technology solutions and comprehensive visa services.',
    siteName: 'Guidesoft',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guidesoft - Digital Transformation & Visa Services',
    description: 'Transform your business with cutting-edge technology solutions and comprehensive visa services.',
    creator: '@guidesoft',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData data={organizationSchema} />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased font-sans bg-white text-secondary-900`}
      >
        <AnalyticsProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </AnalyticsProvider>
      </body>
    </html>
  );
}
