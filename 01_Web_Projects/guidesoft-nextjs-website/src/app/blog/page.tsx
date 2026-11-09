import { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui';
import { blogPosts } from '@/data';
import { ArrowRightIcon, CalendarIcon, ClockIcon, TagIcon } from '@heroicons/react/24/outline';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Latest insights, updates, and expert guidance on technology, digital transformation, and visa services from the Guidesoft team.',
};

const categories = [
  'All Posts',
  'Digital Transformation',
  'Technology',
  'Web Development',
  'Cybersecurity',
  'Visa Services',
  'Immigration',
  'Business'
];

const featuredPost = blogPosts[0];
const recentPosts = blogPosts.slice(1);

export default function BlogPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              Blog & Insights
              <span className="block text-gradient">Expert Knowledge Hub</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600 max-w-3xl mx-auto">
              Stay updated with the latest insights, industry trends, and expert guidance on technology, 
              digital transformation, and visa services from our experienced team.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  index === 0
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-secondary-700 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Featured Article
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              Our latest insights and expert analysis.
            </p>
          </div>
          <Card hover className="group overflow-hidden">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="aspect-w-16 aspect-h-9 lg:aspect-w-1 lg:aspect-h-1">
                <div className="w-full h-64 lg:h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <div className="text-6xl">📊</div>
                </div>
              </div>
              <div className="mt-6 lg:mt-0 flex flex-col justify-center">
                <div className="flex items-center gap-x-4 text-xs">
                  <time className="text-secondary-500 flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    {formatDate(featuredPost.publishedAt)}
                  </time>
                  <div className="flex items-center text-secondary-500">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    5 min read
                  </div>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-2xl font-semibold leading-6 text-secondary-900 group-hover:text-primary-600 transition-colors duration-200">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      <span className="absolute inset-0" />
                      {featuredPost.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-secondary-600">
                    {featuredPost.excerpt}
                  </p>
                </div>
                <div className="relative mt-6 flex items-center gap-x-4">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {featuredPost.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-secondary-900">
                      {featuredPost.author}
                    </p>
                    <p className="text-secondary-600">Author</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {featuredPost.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-700"
                    >
                      <TagIcon className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-24 sm:py-32 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Recent Posts
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              Explore our latest articles and insights.
            </p>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {recentPosts.map((post) => (
              <Card key={post.id} hover className="group flex flex-col h-full">
                <div className="aspect-w-16 aspect-h-9">
                  <div className="w-full h-48 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-t-2xl -mt-6 -mx-6 mb-6 flex items-center justify-center">
                    <div className="text-4xl">📝</div>
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time className="text-secondary-500 flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      {formatDate(post.publishedAt)}
                    </time>
                    <div className="flex items-center text-secondary-500">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      4 min read
                    </div>
                  </div>
                  <div className="group relative flex-1">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-secondary-900 group-hover:text-primary-600 transition-colors duration-200">
                      <Link href={`/blog/${post.slug}`}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-secondary-600 flex-1">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="relative mt-6 flex items-center gap-x-4">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xs">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-secondary-900">
                        {post.author}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-secondary-100 text-secondary-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-secondary-200">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
                    >
                      Read Article
                      <ArrowRightIcon className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Card className="bg-primary-50 border-primary-200 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-secondary-600 mb-8">
              Subscribe to our newsletter for the latest insights, tips, and industry updates delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-xl border border-secondary-300 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary-600 text-white font-medium rounded-xl hover:bg-primary-700 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-secondary-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}