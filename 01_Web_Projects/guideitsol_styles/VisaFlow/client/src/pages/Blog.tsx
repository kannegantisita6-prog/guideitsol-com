import React from 'react';
import { Button } from '../components/ui/button';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    title: "The Future of Digital Transformation in 2024",
    excerpt: "Explore the latest trends and technologies shaping the digital landscape and how businesses can stay ahead of the curve.",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
    readTime: "8 min read"
  };

  const blogPosts = [
    {
      title: "Complete Guide to H-1B Visa Applications in 2024",
      excerpt: "Everything you need to know about H-1B visa requirements, timeline, and tips for a successful application.",
      author: "Michael Chen",
      date: "March 12, 2024",
      category: "Immigration",
      image: "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80",
      readTime: "6 min read"
    },
    {
      title: "Building Scalable Web Applications with Modern Frameworks",
      excerpt: "Learn best practices for developing robust, scalable web applications using React, Node.js, and cloud technologies.",
      author: "Alex Rodriguez",
      date: "March 10, 2024",
      category: "Development",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80",
      readTime: "10 min read"
    },
    {
      title: "Cybersecurity Best Practices for Small Businesses",
      excerpt: "Essential security measures every small business should implement to protect against cyber threats.",
      author: "Emily Davis",
      date: "March 8, 2024",
      category: "Security",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80",
      readTime: "7 min read"
    },
    {
      title: "Student Visa Success Stories: From Application to Graduation",
      excerpt: "Real stories from international students who successfully navigated the visa process and achieved their academic goals.",
      author: "David Kim",
      date: "March 5, 2024",
      category: "Immigration",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80",
      readTime: "5 min read"
    },
    {
      title: "UI/UX Design Trends That Will Dominate 2024",
      excerpt: "Discover the latest design trends and how to implement them in your digital products for better user experience.",
      author: "Lisa Wang",
      date: "March 3, 2024",
      category: "Design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80",
      readTime: "8 min read"
    },
    {
      title: "Data Analytics: Turning Information into Business Intelligence",
      excerpt: "How modern businesses are leveraging data analytics to make informed decisions and drive growth.",
      author: "Robert Taylor",
      date: "March 1, 2024",
      category: "Analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80",
      readTime: "9 min read"
    }
  ];

  const categories = [
    { name: "All", count: 25 },
    { name: "Technology", count: 8 },
    { name: "Immigration", count: 6 },
    { name: "Development", count: 5 },
    { name: "Design", count: 3 },
    { name: "Security", count: 2 },
    { name: "Analytics", count: 1 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-space via-cosmic-purple to-stellar-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-neon-cyan via-electric-blue to-stellar-orange bg-clip-text text-transparent">
            Our Blog
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Insights, tips, and stories from the world of technology and global mobility
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-neon-cyan">Featured Article</h2>
          <div className="bg-gradient-to-r from-cosmic-purple/30 to-deep-space/30 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10 hover:border-neon-cyan/50 transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-electric-blue/20"></div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-stellar-orange/20 text-stellar-orange rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                  <span className="text-gray-400 text-sm">{featuredPost.readTime}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-neon-cyan to-electric-blue neon-glow font-semibold">
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-cosmic-purple/30 to-deep-space/30 rounded-xl p-6 backdrop-blur-sm border border-white/10 sticky top-8">
                <h3 className="text-xl font-bold text-white mb-6">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                      <span className="text-gray-300 hover:text-neon-cyan transition-colors">
                        {category.name}
                      </span>
                      <span className="text-sm text-gray-500 bg-white/10 px-2 py-1 rounded">
                        {category.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Posts Grid */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-electric-blue">Latest Articles</h2>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  <Tag className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <article key={index} className="bg-gradient-to-br from-cosmic-purple/20 to-deep-space/20 rounded-xl overflow-hidden backdrop-blur-sm border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 group">
                    <div className="relative h-48">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-electric-blue/20"></div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-stellar-orange/20 text-stellar-orange rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-neon-cyan transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                        <Button size="sm" variant="ghost" className="text-neon-cyan hover:text-white hover:bg-neon-cyan/20">
                          Read More <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button className="bg-gradient-to-r from-stellar-orange to-electric-blue neon-glow font-semibold px-8">
                  Load More Articles
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-neon-cyan/10 to-electric-blue/10 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-lg text-gray-300 mb-6">
              Subscribe to our newsletter and never miss the latest insights on technology and immigration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-cyan"
              />
              <Button className="bg-gradient-to-r from-stellar-orange to-electric-blue neon-glow font-semibold px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;