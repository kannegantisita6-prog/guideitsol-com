// SEO utilities and structured data helpers
import { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'service';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
}

export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords,
    image = '/images/og-default.jpg',
    url,
    type = 'website',
    publishedTime,
    modifiedTime,
    author,
    section
  } = config;

  const metadata: Metadata = {
    title,
    description,
    keywords: keywords?.join(', '),
    authors: author ? [{ name: author }] : [{ name: 'Guidesoft Team' }],
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
      title,
      description,
      url,
      siteName: 'Guidesoft',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: type === 'article' ? 'article' : 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@guidesoft',
      site: '@guidesoft',
    },
  };

  // Add article-specific metadata
  if (type === 'article' && publishedTime) {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: 'article',
      publishedTime,
      modifiedTime,
      authors: [author || 'Guidesoft Team'],
      section,
    };
  }

  return metadata;
}

// Structured data generators
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Guidesoft',
    description: 'Digital transformation and visa services company providing cutting-edge technology solutions and comprehensive immigration guidance.',
    url: 'https://guidesoft.com',
    logo: 'https://guidesoft.com/images/logo.png',
    image: 'https://guidesoft.com/images/og-default.jpg',
    telephone: '+1-555-0123',
    email: 'info@guidesoft.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Innovation Drive',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      postalCode: '94105',
      addressCountry: 'US',
    },
    sameAs: [
      'https://linkedin.com/company/guidesoft',
      'https://twitter.com/guidesoft',
      'https://facebook.com/guidesoft',
    ],
    foundingDate: '2008',
    numberOfEmployees: '50',
    areaServed: 'Worldwide',
    serviceType: [
      'Digital Transformation',
      'Software Development',
      'IT Consulting',
      'Visa Services',
      'Immigration Consultation',
    ],
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  provider: string;
  areaServed: string;
  serviceType: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: service.provider,
    },
    areaServed: service.areaServed,
    serviceType: service.serviceType,
  };
}

export function generateArticleSchema(article: {
  headline: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.headline,
    description: article.description,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Guidesoft',
      logo: {
        '@type': 'ImageObject',
        url: 'https://guidesoft.com/images/logo.png',
      },
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    image: article.image,
    url: article.url,
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}