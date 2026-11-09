import { useState, memo, useCallback } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { 
  Search, 
  Grid, 
  List, 
  Sparkles
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { searchApi } from '@/services/api';
import SearchInput from '@/components/SearchInput';
import SearchResults from '@/components/SearchResults';

export default memo(function SearchPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [useSemanticSearch, setUseSemanticSearch] = useState(true);

  const { data: searchResults, isLoading, error } = useQuery({
    queryKey: ['search', query, useSemanticSearch],
    queryFn: () => searchApi.search({
      query,
      useSemanticSearch
    }),
    enabled: !!query
  });

  const handleSearch = useCallback((newQuery: string) => {
    setQuery(newQuery);
    const params = new URLSearchParams();
    if (newQuery) params.set('q', newQuery);
    navigate(`/search?${params.toString()}`);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Header */}
        <div className="mb-8 glass-panel p-6 rounded-xl border border-white/10">
          <SearchInput
            value={query}
            onChange={setQuery}
            onSearch={handleSearch}
            placeholder="Search for anything..."
            className="mb-4"
          />
          
          {/* Search Controls */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setUseSemanticSearch(!useSemanticSearch)}
                className={cn(
                  "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  useSemanticSearch
                    ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                    : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                )}
              >
                <Sparkles className="w-4 h-4" />
                Semantic Search
              </button>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('list')}
                className={cn(
                  "p-2 rounded-lg transition-colors",
                  viewMode === 'list'
                    ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                    : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                )}
              >
                <List className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={cn(
                  "p-2 rounded-lg transition-colors",
                  viewMode === 'grid'
                    ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                    : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                )}
              >
                <Grid className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Search Results */}
        {query && (
          <SearchResults
            searchResponse={searchResults || null}
            isLoading={isLoading}
            error={error?.message || null}
            viewMode={viewMode}
            onLoadMore={() => {}}
          />
        )}

        {/* Empty State */}
        {!query && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Start your search
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Enter a search term to find relevant content
            </p>
          </div>
        )}
      </div>
    </div>
  );
});