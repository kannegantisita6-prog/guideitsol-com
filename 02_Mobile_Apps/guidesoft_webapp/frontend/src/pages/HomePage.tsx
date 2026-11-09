import React, { useState, memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Zap, Database, Github, ExternalLink, Brain } from 'lucide-react';
import SearchInput from '@/components/SearchInput';

const HomePage: React.FC = memo(() => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = useCallback((query: string) => {
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  }, [navigate]);

  const features = [
    {
      icon: Brain,
      title: 'Semantic Search',
      description: 'Advanced AI-powered search using Elasticsearch ELSER model for understanding context and meaning.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance with intelligent caching and efficient indexing for instant results.',
    },
    {
      icon: Database,
      title: 'Scalable Architecture',
      description: 'Built on Elasticsearch with horizontal scaling capabilities to handle millions of documents.',
    },
  ];

  const examples = [
    'machine learning algorithms',
    'sustainable energy solutions',
    'modern web development',
    'data visualization techniques',
    'artificial intelligence ethics',
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-4 py-16 bg-gradient-to-br from-black via-gray-950 to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Discover Knowledge with{' '}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent glow-text">
                Semantic Search
              </span>
            </h1>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Experience the future of search with AI-powered semantic understanding. 
              Find exactly what you're looking for, even when you don't know the exact words.
            </p>
          </div>

          {/* Search Input */}
          <div className="max-w-2xl mx-auto mb-8">
            <SearchInput
              value={searchQuery}
              onChange={setSearchQuery}
              onSearch={handleSearch}
              placeholder="Search for anything..."
              size="lg"
              autoFocus
              className="shadow-xl"
            />
          </div>

          {/* Example Searches */}
          <div className="mb-16">
            <p className="text-sm text-white/50 mb-4">Try these example searches:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {examples.map((example, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSearchQuery(example);
                    navigate(`/search?q=${encodeURIComponent(example)}`);
                  }}
                  className="px-4 py-2 text-sm glass-effect border border-white/20 rounded-full hover:glow-effect transition-all duration-300 text-white/80 hover:text-white"
                >
                  {example}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 glass-panel border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Powered by Advanced Technology
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Built with cutting-edge AI and search technologies to deliver the most relevant results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl glass-effect hover:glow-effect transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg mb-4 glass-effect">
                    <Icon className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/70">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600/80 to-blue-600/80 glass-panel border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience Semantic Search?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Start searching now or explore the admin dashboard to manage your content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/search')}
              className="glass-effect text-white px-8 py-3 rounded-lg font-semibold hover:glow-effect transition-all duration-300 flex items-center justify-center gap-2 border border-white/20"
            >
              <Search className="h-5 w-5" />
              Start Searching
            </button>
            <button
              onClick={() => navigate('/admin')}
              className="glass-effect border-2 border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:glow-effect transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Database className="h-5 w-5" />
              Admin Dashboard
            </button>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <section className="py-8 glass-panel border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/60">
            <a
              href="https://www.elastic.co/guide/en/machine-learning/current/ml-nlp-elser.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors duration-300 glass-effect px-3 py-2 rounded-lg"
            >
              <ExternalLink className="h-4 w-4" />
              Learn about ELSER
            </a>
            <a
              href="https://www.elastic.co/guide/en/elasticsearch/reference/current/semantic-search-elser.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors duration-300 glass-effect px-3 py-2 rounded-lg"
            >
              <ExternalLink className="h-4 w-4" />
              Semantic Search Guide
            </a>
            <a
              href="https://github.com/your-username/semantic-search"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors duration-300 glass-effect px-3 py-2 rounded-lg"
            >
              <Github className="h-4 w-4" />
              View Source Code
            </a>
          </div>
        </div>
      </section>
    </div>
  );
});

export default HomePage;