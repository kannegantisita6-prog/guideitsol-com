import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Card } from '@/components/ui';
import { StructuredData } from '@/components/seo';
import { blogPosts } from '@/data';
import { generateMetadata as generateSEOMetadata, generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo';
import { ArrowLeftIcon, CalendarIcon, ClockIcon, TagIcon, ShareIcon } from '@heroicons/react/24/outline';
import { formatDate } from '@/lib/utils';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return generateSEOMetadata({
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    url: `https://guidesoft.com/blog/${post.slug}`,
    type: 'article',
    publishedTime: post.publishedAt,
    author: post.author,
    section: 'Technology & Visa Services',
  });
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => 
    p.id !== post.id && 
    p.tags.some(tag => post.tags.includes(tag))
  ).slice(0, 3);

  const articleSchema = generateArticleSchema({
    headline: post.title,
    description: post.excerpt,
    author: post.author,
    datePublished: post.publishedAt,
    image: 'https://guidesoft.com/images/blog-default.jpg',
    url: `https://guidesoft.com/blog/${post.slug}`,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://guidesoft.com' },
    { name: 'Blog', url: 'https://guidesoft.com/blog' },
    { name: post.title, url: `https://guidesoft.com/blog/${post.slug}` },
  ]);

  // Extended content for demonstration
  const extendedContent = `
    <p>In today's rapidly evolving digital landscape, businesses must embrace digital transformation to remain competitive and relevant. This comprehensive guide explores the key trends, technologies, and strategies that will define the future of digital transformation in 2024.</p>

    <h2>Understanding Digital Transformation</h2>
    <p>Digital transformation is more than just adopting new technologies—it's about fundamentally changing how your business operates and delivers value to customers. It involves integrating digital technology into all areas of a business, resulting in fundamental changes to how you operate and deliver value to customers.</p>

    <h3>Key Components of Digital Transformation</h3>
    <ul>
      <li><strong>Cloud Migration:</strong> Moving from on-premises infrastructure to cloud-based solutions for greater scalability and flexibility.</li>
      <li><strong>Data Analytics:</strong> Leveraging big data and analytics to gain insights and make data-driven decisions.</li>
      <li><strong>Automation:</strong> Implementing robotic process automation (RPA) and AI to streamline operations.</li>
      <li><strong>Customer Experience:</strong> Enhancing customer touchpoints through digital channels and personalization.</li>
    </ul>

    <h2>Emerging Trends for 2024</h2>
    <p>As we look ahead to 2024, several key trends are shaping the digital transformation landscape:</p>

    <h3>1. Artificial Intelligence and Machine Learning</h3>
    <p>AI and ML are becoming more accessible and practical for businesses of all sizes. From chatbots and virtual assistants to predictive analytics and automated decision-making, AI is transforming how businesses operate.</p>

    <h3>2. Edge Computing</h3>
    <p>With the increasing need for real-time data processing and reduced latency, edge computing is gaining momentum. This technology brings computation and data storage closer to the sources of data.</p>

    <h3>3. Cybersecurity Integration</h3>
    <p>As digital transformation accelerates, cybersecurity is becoming an integral part of the transformation strategy rather than an afterthought. Zero-trust security models and advanced threat detection are becoming standard.</p>

    <h2>Implementation Strategies</h2>
    <p>Successfully implementing digital transformation requires a strategic approach:</p>

    <ol>
      <li><strong>Assess Current State:</strong> Conduct a thorough evaluation of your current digital maturity and identify gaps.</li>
      <li><strong>Define Vision:</strong> Establish clear goals and objectives for your digital transformation initiative.</li>
      <li><strong>Develop Roadmap:</strong> Create a phased approach with quick wins and long-term strategic initiatives.</li>
      <li><strong>Build Capabilities:</strong> Invest in the right talent, tools, and technologies to support your transformation.</li>
      <li><strong>Monitor Progress:</strong> Establish KPIs and metrics to track progress and adjust strategies as needed.</li>
    </ol>

    <h2>Overcoming Common Challenges</h2>
    <p>Digital transformation initiatives often face several challenges:</p>

    <h3>Resistance to Change</h3>
    <p>Change management is crucial for success. Communicate the benefits clearly, provide adequate training, and involve employees in the transformation process.</p>

    <h3>Legacy Systems</h3>
    <p>Many organizations struggle with outdated systems. Consider a gradual migration approach or API-based integration to modernize legacy systems.</p>

    <h3>Budget Constraints</h3>
    <p>Start with pilot projects to demonstrate ROI, then scale successful initiatives. Consider cloud-based solutions to reduce upfront costs.</p>

    <h2>Measuring Success</h2>
    <p>Key metrics for measuring digital transformation success include:</p>
    <ul>
      <li>Customer satisfaction and engagement scores</li>
      <li>Operational efficiency improvements</li>
      <li>Revenue growth from digital channels</li>
      <li>Time-to-market for new products and services</li>
      <li>Employee productivity and satisfaction</li>
    </ul>

    <h2>Looking Ahead</h2>
    <p>The future of digital transformation is bright, with new technologies and methodologies constantly emerging. Organizations that embrace change, invest in the right technologies, and focus on customer value will be best positioned for success in 2024 and beyond.</p>

    <p>Remember, digital transformation is not a destination but a continuous journey of adaptation and improvement. Stay agile, keep learning, and be prepared to evolve as new opportunities and challenges arise.</p>
  `;

  return (
    <div className="bg-white">
      <StructuredData data={articleSchema} />
      <StructuredData data={breadcrumbSchema} />
      {/* Back Navigation */}
      <div className="mx-auto max-w-4xl px-6 lg:px-8 pt-24">
        <Link
          href="/blog"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium mb-8"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <article className="mx-auto max-w-4xl px-6 lg:px-8 pb-24">
        <header className="mb-12">
          <div className="flex items-center gap-x-4 text-xs mb-6">
            <time className="text-secondary-500 flex items-center">
              <CalendarIcon className="h-4 w-4 mr-1" />
              {formatDate(post.publishedAt)}
            </time>
            <div className="flex items-center text-secondary-500">
              <ClockIcon className="h-4 w-4 mr-1" />
              8 min read
            </div>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl mb-6">
            {post.title}
          </h1>
          
          <p className="text-xl leading-8 text-secondary-600 mb-8">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <p className="font-semibold text-secondary-900">{post.author}</p>
                <p className="text-secondary-600">Senior Technology Consultant</p>
              </div>
            </div>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-secondary-100 text-secondary-700 rounded-lg hover:bg-secondary-200 transition-colors duration-200">
              <ShareIcon className="h-4 w-4" />
              Share
            </button>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-700"
              >
                <TagIcon className="h-3 w-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Featured Image */}
        <div className="aspect-w-16 aspect-h-9 mb-12">
          <div className="w-full h-96 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center">
            <div className="text-8xl">📊</div>
          </div>
        </div>

        {/* Article Content */}
        <div 
          className="prose prose-lg prose-secondary max-w-none"
          dangerouslySetInnerHTML={{ __html: extendedContent }}
          style={{
            '--tw-prose-body': 'rgb(75 85 99)',
            '--tw-prose-headings': 'rgb(31 41 55)',
            '--tw-prose-links': 'rgb(37 99 235)',
            '--tw-prose-bold': 'rgb(31 41 55)',
            '--tw-prose-counters': 'rgb(107 114 128)',
            '--tw-prose-bullets': 'rgb(107 114 128)',
            '--tw-prose-hr': 'rgb(229 231 235)',
            '--tw-prose-quotes': 'rgb(31 41 55)',
            '--tw-prose-quote-borders': 'rgb(229 231 235)',
            '--tw-prose-captions': 'rgb(107 114 128)',
            '--tw-prose-code': 'rgb(31 41 55)',
            '--tw-prose-pre-code': 'rgb(229 231 235)',
            '--tw-prose-pre-bg': 'rgb(31 41 55)',
            '--tw-prose-th-borders': 'rgb(209 213 219)',
            '--tw-prose-td-borders': 'rgb(229 231 235)',
          } as any}
        />

        {/* Author Bio */}
        <div className="mt-16 pt-8 border-t border-secondary-200">
          <Card className="bg-secondary-50">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  About {post.author}
                </h3>
                <p className="text-secondary-600 mb-4">
                  {post.author} is a Senior Technology Consultant at Guidesoft with over 10 years of experience 
                  in digital transformation and enterprise architecture. He specializes in helping organizations 
                  navigate complex technology challenges and implement successful digital strategies.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                    View Profile
                  </a>
                  <a href="#" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                    More Articles
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-24 bg-secondary-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
                Related Articles
              </h2>
              <p className="mt-4 text-lg text-secondary-600">
                Continue reading with these related posts.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} hover className="group">
                  <div className="aspect-w-16 aspect-h-9">
                    <div className="w-full h-48 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-t-2xl -mt-6 -mx-6 mb-6 flex items-center justify-center">
                      <div className="text-4xl">📝</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-4 text-xs mb-4">
                    <time className="text-secondary-500">
                      {formatDate(relatedPost.publishedAt)}
                    </time>
                  </div>
                  <h3 className="text-lg font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors duration-200 mb-3">
                    <Link href={`/blog/${relatedPost.slug}`}>
                      {relatedPost.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-secondary-600 mb-4">
                    {relatedPost.excerpt.substring(0, 120)}...
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-secondary-500">{relatedPost.author}</span>
                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                    >
                      Read More →
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}