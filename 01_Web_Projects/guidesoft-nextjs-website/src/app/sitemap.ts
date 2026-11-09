import { MetadataRoute } from 'next';
import { blogPosts } from '@/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://guidesoft.com';
  
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/services',
    '/services/it-consulting',
    '/services/software-development',
    '/services/ui-ux-design',
    '/services/data-analytics',
    '/services/cybersecurity',
    '/services/digital-marketing',
    '/visa-services',
    '/visa-services/study-abroad',
    '/visa-services/work-business',
    '/visa-services/travel-tourism',
    '/visa-services/visa-extension',
    '/visa-services/document-verification',
    '/visa-services/immigration-consultation',
    '/contact',
    '/blog',
  ];

  const staticSitemapEntries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'daily' : path.includes('/blog') ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path.includes('/services') || path.includes('/visa-services') ? 0.8 : 0.6,
  }));

  // Dynamic blog posts
  const blogSitemapEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticSitemapEntries, ...blogSitemapEntries];
}