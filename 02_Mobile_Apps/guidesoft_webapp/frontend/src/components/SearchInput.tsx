import React, { useState, useEffect, useRef, memo, useCallback } from 'react';
import { Search, X, Clock, TrendingUp, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { searchApi } from '@/services/api';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
  showSuggestions?: boolean;
  showPopularTerms?: boolean;
  autoFocus?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

interface Suggestion {
  text: string;
  type: 'suggestion' | 'popular' | 'recent';
}

export const SearchInput: React.FC<SearchInputProps> = memo(({
  value,
  onChange,
  onSearch,
  placeholder = 'Search for anything...',
  className,
  showSuggestions = true,
  showPopularTerms = true,
  autoFocus = false,
  size = 'md',
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [popularTerms, setPopularTerms] = useState<string[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  // Load recent searches from localStorage
  useEffect(() => {
    const recent = JSON.parse(localStorage.getItem('recentSearches') || '[]');
    setRecentSearches(recent.slice(0, 5));
  }, []);

  // Load popular terms
  useEffect(() => {
    if (showPopularTerms && isFocused && value.length === 0) {
      searchApi.getPopularTerms(5)
        .then(setPopularTerms)
        .catch(() => setPopularTerms([]));
    }
  }, [showPopularTerms, isFocused, value]);

  // Fetch suggestions
  useEffect(() => {
    if (!showSuggestions || value.length < 2) {
      setSuggestions([]);
      return;
    }

    const timeoutId = setTimeout(async () => {
      setIsLoading(true);
      try {
        const suggestionTexts = await searchApi.getSuggestions(value, 5);
        const newSuggestions: Suggestion[] = suggestionTexts.map(text => ({
          text,
          type: 'suggestion' as const,
        }));
        setSuggestions(newSuggestions);
      } catch (error) {
        setSuggestions([]);
      } finally {
        setIsLoading(false);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [value, showSuggestions]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  }, [onChange]);

  const handleSearch = useCallback((query?: string) => {
    const searchQuery = query || value.trim();
    if (searchQuery) {
      onSearch(searchQuery);
      // Save to recent searches
      const recent = JSON.parse(localStorage.getItem('recentSearches') || '[]');
      const updated = [searchQuery, ...recent.filter((item: string) => item !== searchQuery)].slice(0, 10);
      localStorage.setItem('recentSearches', JSON.stringify(updated));
      setRecentSearches(updated.slice(0, 5));
      setIsFocused(false);
    }
  }, [value, onSearch]);

  const handleSuggestionClick = useCallback((suggestion: string) => {
    onChange(suggestion);
    onSearch(suggestion);
    setIsFocused(false);
  }, [onChange, onSearch]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const allSuggestions = getAllSuggestions();
    
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => 
        prev < allSuggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => prev > -1 ? prev - 1 : -1);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0 && allSuggestions[selectedIndex]) {
        handleSearch(allSuggestions[selectedIndex].text);
      } else {
        handleSearch(value);
      }
    } else if (e.key === 'Escape') {
      setIsFocused(false);
      inputRef.current?.blur();
    }
  };

  const getAllSuggestions = (): Suggestion[] => {
    const all: Suggestion[] = [];
    
    if (value.length === 0) {
      // Show recent searches and popular terms when input is empty
      all.push(...recentSearches.map(text => ({ text, type: 'recent' as const })));
      all.push(...popularTerms.map(text => ({ text, type: 'popular' as const })));
    } else {
      // Show suggestions when typing
      all.push(...suggestions);
    }
    
    return all.slice(0, 8);
  };

  const clearInput = () => {
    onChange('');
    inputRef.current?.focus();
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'h-10 text-sm';
      case 'lg':
        return 'h-14 text-lg';
      default:
        return 'h-12 text-base sm:h-12 md:h-14';
    }
  };

  const getIconSize = () => {
    switch (size) {
      case 'sm':
        return 16;
      case 'lg':
        return 24;
      default:
        return window.innerWidth < 640 ? 18 : 20;
    }
  };

  const getPaddingClasses = () => {
    switch (size) {
      case 'sm':
        return 'pl-8 pr-8';
      case 'lg':
        return 'pl-12 pr-12 sm:pl-14 sm:pr-14';
      default:
        return 'pl-9 pr-9 sm:pl-10 sm:pr-10 md:pl-12 md:pr-12';
    }
  };

  const allSuggestions = getAllSuggestions();
  const showDropdown = isFocused && (allSuggestions.length > 0 || isLoading);

  return (
    <div className={cn('relative w-full', className)}>
      <motion.div 
        className="relative"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className={cn(
            'absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground transition-colors duration-200',
            size === 'sm' && 'left-2',
            size === 'lg' && 'left-4',
            isFocused && 'text-primary'
          )}
          animate={{ scale: isFocused ? 1.1 : 1 }}
          transition={{ duration: 0.2 }}
        >
          <Search size={getIconSize()} />
        </motion.div>
        
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          placeholder={placeholder}
          autoFocus={autoFocus}
          className={cn(
            'w-full rounded-xl border-2 bg-background/50 backdrop-blur-sm shadow-sm transition-all duration-300',
            'focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none focus:shadow-lg',
            'hover:border-primary/50 hover:shadow-md',
            'placeholder:text-muted-foreground/70',
            'touch-target', // Ensure touch-friendly on mobile
            getSizeClasses(),
            getPaddingClasses(),
            isFocused && 'border-primary bg-background shadow-lg scale-[1.01] sm:scale-[1.02]'
          )}
        />
        
        <AnimatePresence>
          {value && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={clearInput}
              className={cn(
                'absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-destructive transition-colors duration-200',
                'rounded-full p-1 hover:bg-destructive/10',
                size === 'sm' && 'right-2',
                size === 'lg' && 'right-4'
              )}
            >
              <X size={getIconSize() * 0.8} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Focus ring animation */}
        <AnimatePresence>
          {isFocused && (
            <motion.div
              className="absolute inset-0 rounded-xl border-2 border-primary/30 pointer-events-none"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {showDropdown && (
          <motion.div
            ref={suggestionsRef}
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute top-full left-0 right-0 mt-2 bg-background/95 backdrop-blur-md border border-border rounded-xl shadow-xl z-50 max-h-80 overflow-hidden"
          >
            {isLoading ? (
              <motion.div 
                className="p-6 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.div 
                  className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full mx-auto mb-3"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                />
                <span className="text-sm text-muted-foreground">Loading suggestions...</span>
              </motion.div>
            ) : allSuggestions.length > 0 ? (
              <div className="py-2 overflow-y-auto max-h-80">
                {value.length === 0 && recentSearches.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="px-4 py-3 flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide border-b border-border/50">
                      <Clock size={14} />
                      Recent Searches
                    </div>
                    {recentSearches.map((term, index) => (
                      <motion.button
                        key={`recent-${index}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                        whileHover={{ x: 4, backgroundColor: 'var(--muted)' }}
                        onClick={() => handleSuggestionClick(term)}
                        className={cn(
                          'w-full px-4 py-3 text-left flex items-center gap-3 transition-all duration-200',
                          'hover:bg-muted/50 border-l-2 border-transparent hover:border-primary/50',
                          selectedIndex === index && 'bg-primary/10 border-l-primary text-primary'
                        )}
                      >
                        <Clock size={16} className="text-muted-foreground" />
                        <span className="text-foreground font-medium">{term}</span>
                      </motion.button>
                    ))}
                  </motion.div>
                )}

                {value.length === 0 && popularTerms.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="px-4 py-3 flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide border-b border-border/50">
                      <TrendingUp size={14} />
                      Popular Searches
                    </div>
                    {popularTerms.map((term, index) => (
                      <motion.button
                        key={`popular-${index}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.05 }}
                        whileHover={{ x: 4, backgroundColor: 'var(--muted)' }}
                        onClick={() => handleSuggestionClick(term)}
                        className={cn(
                          'w-full px-4 py-3 text-left flex items-center gap-3 transition-all duration-200',
                          'hover:bg-muted/50 border-l-2 border-transparent hover:border-accent/50',
                          selectedIndex === recentSearches.length + index && 'bg-accent/10 border-l-accent text-accent-foreground'
                        )}
                      >
                        <TrendingUp size={16} className="text-muted-foreground" />
                        <span className="text-foreground font-medium">{term}</span>
                        <Sparkles size={12} className="ml-auto text-accent opacity-60" />
                      </motion.button>
                    ))}
                  </motion.div>
                )}

                {value.length > 0 && suggestions.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="px-4 py-3 flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide border-b border-border/50">
                      <Search size={14} />
                      Suggestions
                    </div>
                    {suggestions.map((suggestion, index) => (
                      <motion.button
                        key={`suggestion-${index}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                        whileHover={{ x: 4, backgroundColor: 'var(--muted)' }}
                        onClick={() => handleSuggestionClick(suggestion.text)}
                        className={cn(
                          'w-full px-4 py-3 text-left flex items-center gap-3 transition-all duration-200',
                          'hover:bg-muted/50 border-l-2 border-transparent hover:border-primary/50',
                          selectedIndex === index && 'bg-primary/10 border-l-primary text-primary'
                        )}
                      >
                        <Search size={16} className="text-muted-foreground" />
                        <span className="text-foreground font-medium">{suggestion.text}</span>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </div>
            ) : value.length > 0 ? (
              <motion.div 
                className="p-6 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="text-muted-foreground mb-2">
                  <Search size={24} className="mx-auto opacity-50" />
                </div>
                <span className="text-sm text-muted-foreground">No suggestions found</span>
              </motion.div>
            ) : null}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

export default SearchInput;