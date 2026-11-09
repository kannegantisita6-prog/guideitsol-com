import React, { memo, useCallback } from 'react';
import { ExternalLink, FileText, Globe, Tag, Clock, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn, highlightText, formatDate } from '@/lib/utils';
import { SearchResult, SearchResponse } from '@/services/api';

interface SearchResultsProps {
  searchResponse: SearchResponse | null;
  isLoading: boolean;
  error: string | null;
  onLoadMore?: () => void;
  hasMore?: boolean;
  viewMode?: 'list' | 'grid' | 'compact';
  className?: string;
}

interface SearchResultItemProps {
  result: SearchResult;
  query: string;
  viewMode: 'list' | 'grid' | 'compact';
  onClick?: (result: SearchResult) => void;
}

const SearchResultItem: React.FC<SearchResultItemProps> = memo(({ 
  result, 
  query, 
  viewMode, 
  onClick 
}) => {
  const handleClick = useCallback(() => {
    onClick?.(result);
  }, [onClick, result]);

  const getTypeIcon = (type?: string) => {
    switch (type?.toLowerCase()) {
      case 'document':
      case 'pdf':
        return <FileText size={16} className="text-red-500" />;
      case 'webpage':
      case 'html':
        return <Globe size={16} className="text-blue-500" />;
      default:
        return <FileText size={16} className="text-gray-500" />;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 0.8) return 'text-green-600 bg-green-50';
    if (score >= 0.6) return 'text-yellow-600 bg-yellow-50';
    return 'text-gray-600 bg-gray-50';
  };

  if (viewMode === 'compact') {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ x: 4, backgroundColor: 'var(--muted)' }}
        onClick={handleClick}
        className="flex items-center gap-3 p-3 hover:bg-muted/50 cursor-pointer border-b border-border/50 transition-all duration-200 rounded-lg"
      >
        <motion.div 
          className="flex-shrink-0"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.2 }}
        >
          {getTypeIcon(result.type)}
        </motion.div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium text-foreground truncate">
            {result.highlights?.title?.[0] ? (
              <span dangerouslySetInnerHTML={{ __html: result.highlights.title[0] }} />
            ) : (
              highlightText(result.title, query)
            )}
          </h3>
          <p className="text-xs text-muted-foreground truncate">
            {result.category && (
              <span className="inline-flex items-center gap-1">
                <Tag size={12} />
                {result.category}
              </span>
            )}
          </p>
        </div>
        <motion.div 
          className="flex-shrink-0"
          whileHover={{ scale: 1.05 }}
        >
          <span className={cn('px-2 py-1 rounded-full text-xs font-medium', getScoreColor(result.score))}>
            {Math.round(result.score * 100)}%
          </span>
        </motion.div>
        {result.url && (
          <motion.div
            whileHover={{ scale: 1.2, rotate: 15 }}
            transition={{ duration: 0.2 }}
          >
            <ExternalLink size={14} className="text-muted-foreground flex-shrink-0" />
          </motion.div>
        )}
      </motion.div>
    );
  }

  if (viewMode === 'grid') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ 
          scale: 1.01, 
          y: -2,
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
        }}
        whileTap={{ scale: 0.98 }}
        onClick={handleClick}
        className="bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 p-4 sm:p-6 hover:bg-card/80 transition-all duration-300 cursor-pointer group touch-target"
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ duration: 0.2 }}
            >
              {getTypeIcon(result.type)}
            </motion.div>
            <motion.span 
              className={cn('px-2 py-1 rounded-full text-xs font-medium', getScoreColor(result.score))}
              whileHover={{ scale: 1.05 }}
            >
              {Math.round(result.score * 100)}%
            </motion.span>
          </div>
          {result.url && (
            <motion.div
              whileHover={{ scale: 1.2, rotate: 15 }}
              transition={{ duration: 0.2 }}
              className="touch-target"
            >
              <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors duration-200" />
            </motion.div>
          )}
        </div>
        
        <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-200 leading-tight">
          {result.highlights?.title?.[0] ? (
            <span dangerouslySetInnerHTML={{ __html: result.highlights.title[0] }} />
          ) : (
            highlightText(result.title, query)
          )}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-3 sm:mb-4 line-clamp-3 leading-relaxed">
          {result.highlights?.content?.[0] ? (
            <span dangerouslySetInnerHTML={{ __html: result.highlights.content[0] }} />
          ) : (
            highlightText(result.content.substring(0, 120) + '...', query)
          )}
        </p>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground flex-wrap gap-2">
          {result.category && (
            <motion.span 
              className="inline-flex items-center gap-1 px-2 py-1 bg-muted/50 rounded-md flex-shrink-0"
              whileHover={{ scale: 1.05 }}
            >
              <Tag size={12} />
              {result.category}
            </motion.span>
          )}
          {result.metadata?.lastModified && (
            <span className="inline-flex items-center gap-1">
              <Clock size={12} />
              {formatDate(new Date(result.metadata.lastModified))}
            </span>
          )}
        </div>
      </motion.div>
    );
  }

  // List view (default)
  return (
    <div
      onClick={handleClick}
      className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all cursor-pointer"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          {getTypeIcon(result.type)}
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {result.highlights?.title?.[0] ? (
              <span dangerouslySetInnerHTML={{ __html: result.highlights.title[0] }} />
            ) : (
              highlightText(result.title, query)
            )}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className={cn('px-3 py-1 rounded-full text-sm font-medium', getScoreColor(result.score))}>
            {Math.round(result.score * 100)}% match
          </span>
          {result.url && (
            <ExternalLink size={18} className="text-gray-400" />
          )}
        </div>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        {result.highlights?.content?.[0] ? (
          <span dangerouslySetInnerHTML={{ __html: result.highlights.content[0] }} />
        ) : (
          highlightText(result.content.substring(0, 300) + '...', query)
        )}
      </p>
      
      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-4">
          {result.category && (
            <span className="inline-flex items-center gap-1">
              <Tag size={14} />
              {result.category}
            </span>
          )}
          {result.type && (
            <span className="capitalize">{result.type}</span>
          )}
        </div>
        {result.metadata?.lastModified && (
          <span className="inline-flex items-center gap-1">
            <Clock size={14} />
            {formatDate(new Date(result.metadata.lastModified))}
          </span>
        )}
      </div>
    </div>
  );
});

export const SearchResults: React.FC<SearchResultsProps> = memo(({
  searchResponse,
  isLoading,
  error,
  onLoadMore,
  hasMore = false,
  viewMode = 'list',
  className,
}) => {
  const handleLoadMore = useCallback(() => {
    onLoadMore?.();
  }, [onLoadMore]);

  if (isLoading && !searchResponse) {
    return (
      <div className={cn('space-y-4', className)}>
        {[...Array(3)].map((_, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <div className="animate-pulse">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6"></div>
              </div>
              <div className="flex justify-between">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className={cn('text-center py-12', className)}>
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
          <div className="text-red-600 dark:text-red-400 mb-2">
            <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">
            Search Error
          </h3>
          <p className="text-red-600 dark:text-red-400">
            {error}
          </p>
        </div>
      </div>
    );
  }

  if (!searchResponse || searchResponse.results.length === 0) {
    return (
      <div className={cn('text-center py-12', className)}>
        <div className="text-gray-400 mb-4">
          <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
          No results found
        </h3>
        <p className="text-gray-500 dark:text-gray-400">
          Try adjusting your search terms or filters
        </p>
      </div>
    );
  }

  const containerClass = viewMode === 'grid' 
    ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
    : 'space-y-4';

  return (
    <div className={cn(className)}>
      {/* Search info */}
      <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star size={16} className="text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-800 dark:text-blue-200">
              Found {searchResponse.total.toLocaleString()} results in {searchResponse.took}ms
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className={cn(
              'px-2 py-1 rounded-full text-xs font-medium',
              searchResponse.searchType === 'semantic' 
                ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
            )}>
              {searchResponse.searchType === 'semantic' ? 'Semantic Search' : 'Traditional Search'}
            </span>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className={containerClass}>
        {searchResponse.results.map((result) => (
          <SearchResultItem
            key={result.id}
            result={result}
            query={searchResponse.query}
            viewMode={viewMode}
          />
        ))}
      </div>

      {/* Load more */}
      {hasMore && onLoadMore && (
        <div className="text-center mt-8">
          <button
            onClick={handleLoadMore}
            disabled={isLoading}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg font-medium transition-colors"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
                Loading more...
              </span>
            ) : (
              'Load More Results'
            )}
          </button>
        </div>
      )}
    </div>
  );
});

export default SearchResults;