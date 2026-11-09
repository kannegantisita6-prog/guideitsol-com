import React, { useState, memo, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Home, Settings, Menu, X, Github, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = memo(({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Search', href: '/search', icon: Search },
    { name: 'Admin', href: '/admin', icon: Settings },
  ];

  const isActive = useCallback((path: string) => location.pathname === path, [location.pathname]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900">
      {/* Header */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="sticky top-0 z-50 w-full border-b border-white/10 glass-panel"
      >
        <div className="container flex h-16 items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <motion.div 
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 text-white shadow-lg glass-effect"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              >
                <Search className="h-4 w-4" />
              </motion.div>
              <span className="hidden font-bold sm:inline-block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Semantic Search
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="mx-6 hidden md:flex items-center space-x-6 text-sm font-medium">
            {navigation.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -2 }}
                >
                  <Link
                    to={item.href}
                    className={cn(
                      'flex items-center space-x-2 transition-all duration-300 hover:text-white/90 relative group px-3 py-2 rounded-lg',
                      isActive(item.href)
                        ? 'text-purple-400 font-semibold glass-effect'
                        : 'text-white/70 hover:glass-effect'
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                    {isActive(item.href) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-6 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full glow-effect"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center space-x-2 sm:space-x-4">
            {/* GitHub Link */}
            <motion.a
              href="https://github.com/your-username/semantic-search"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center space-x-2 text-sm text-white/60 hover:text-white transition-all duration-300 group glass-effect px-3 py-2 rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
              <span className="hidden lg:inline">GitHub</span>
              <ExternalLink className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </motion.a>

            {/* Mobile GitHub Link */}
            <motion.a
              href="https://github.com/your-username/semantic-search"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden p-2 rounded-lg glass-effect transition-colors duration-200 touch-target"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="GitHub Repository"
            >
              <Github className="h-5 w-5" />
            </motion.a>

            {/* Mobile menu button */}
            <motion.button
              className="md:hidden p-2 rounded-lg glass-effect transition-colors duration-200 touch-target"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden glass-panel border-t border-white/10"
            >
              <div className="space-y-1 px-4 pb-4 pt-3">
                {navigation.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <motion.a
                        key={item.name}
                        href={item.href}
                        className={cn(
                          'flex items-center gap-3 px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 touch-target',
                          isActive(item.href)
                            ? 'glass-effect text-purple-400 border-l-4 border-purple-500 glow-effect'
                            : 'text-white/70 hover:text-white hover:glass-effect'
                        )}
                        onClick={closeMobileMenu}
                        whileHover={{ x: 4, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Icon className="h-5 w-5 flex-shrink-0" />
                        <span>{item.name}</span>
                      </motion.a>
                    </motion.div>
                  );
                })}
                
                {/* Mobile GitHub Link in Menu */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navigation.length * 0.1, duration: 0.3 }}
                  className="pt-2 border-t border-white/20"
                >
                  <a
                    href="https://github.com/your-username/semantic-search"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 rounded-lg px-4 py-3 text-base font-medium text-white/70 hover:glass-effect hover:text-white transition-all duration-200 hover:scale-[1.02] touch-target"
                    onClick={closeMobileMenu}
                  >
                    <Github className="h-5 w-5 flex-shrink-0" />
                    <span>GitHub Repository</span>
                    <ExternalLink className="h-4 w-4 ml-auto" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Main Content */}
      <motion.main 
        className="flex-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {children}
      </motion.main>

      {/* Footer */}
      <motion.footer 
        className="border-t border-white/10 glass-panel"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-white/60 md:text-left">
              Built with{' '}
              <motion.a
                href="https://www.elastic.co/"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4 hover:text-purple-400 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
              >
                Elasticsearch
              </motion.a>{' '}
              and{' '}
              <motion.a
                href="https://reactjs.org"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4 hover:text-blue-400 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
              >
                React
              </motion.a>
              . Powered by semantic search.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <motion.a
              href="https://elastic.co/guide/en/machine-learning/current/ml-nlp-elser.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/60 hover:text-white transition-colors duration-200"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              ELSER Documentation
            </motion.a>
            <motion.a
              href="https://www.elastic.co/guide/en/elasticsearch/reference/current/semantic-search-elser.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/60 hover:text-white transition-colors duration-200"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              Semantic Search Guide
            </motion.a>
          </div>
        </div>
      </motion.footer>
    </div>
  );
});

export default Layout;