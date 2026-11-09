import { elasticsearchClient, SEARCH_INDEX } from './elasticsearch';

export interface SearchQuery {
  query: string;
  category?: string;
  type?: string;
  limit?: number;
  offset?: number;
  useSemanticSearch?: boolean;
}

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  content?: string;
  category: string;
  type: string;
  tags: string[];
  url?: string;
  score: number;
  created_at?: string;
  updated_at?: string;
}

export interface SearchResponse {
  results: SearchResult[];
  total: number;
  took: number;
  searchType: 'semantic' | 'traditional';
  query: string;
  hasMore: boolean;
}

export interface SuggestionQuery {
  query: string;
  limit?: number;
}

export interface Suggestion {
  text: string;
  score: number;
  category?: string;
}

// Perform semantic search using ELSER
export async function semanticSearch(
  searchQuery: SearchQuery,
  indexName: string = SEARCH_INDEX
): Promise<SearchResponse> {
  const {
    query,
    category,
    type,
    limit = 20,
    offset = 0,
    useSemanticSearch = true
  } = searchQuery;

  const startTime = Date.now();

  try {
    // Build Elasticsearch query
    const esQuery: any = {
      bool: {
        must: [],
        filter: []
      }
    };

    // Add semantic search if enabled
    if (useSemanticSearch && query.trim()) {
      esQuery.bool.must.push({
        semantic: {
          field: 'semantic_content',
          query: query
        }
      });
    } else if (query.trim()) {
      // Fallback to traditional text search
      esQuery.bool.must.push({
        multi_match: {
          query: query,
          fields: ['title^3', 'description^2', 'content', 'tags'],
          type: 'best_fields',
          fuzziness: 'AUTO'
        }
      });
    } else {
      // Match all if no query
      esQuery.bool.must.push({ match_all: {} });
    }

    // Add filters
    if (category) {
      esQuery.bool.filter.push({ term: { category } });
    }
    if (type) {
      esQuery.bool.filter.push({ term: { type } });
    }

    // Execute search
    const response = await elasticsearchClient.search({
      index: indexName,
      body: {
        query: esQuery,
        from: offset,
        size: limit,
        sort: [
          { _score: { order: 'desc' } },
          { updated_at: { order: 'desc' } }
        ],
        _source: {
          excludes: ['semantic_content'] // Don't return the semantic field
        }
      }
    });

    const took = Date.now() - startTime;
    const hits = response.hits.hits;
    const total = typeof response.hits.total === 'number' 
      ? response.hits.total 
      : response.hits.total?.value || 0;

    const results: SearchResult[] = hits.map((hit: any) => ({
      id: hit._id,
      score: hit._score,
      ...hit._source
    }));

    return {
      results,
      total,
      took,
      searchType: useSemanticSearch ? 'semantic' : 'traditional',
      query,
      hasMore: offset + limit < total
    };
  } catch (error) {
    console.error('Semantic search error:', error);
    
    // Fallback to traditional search on error
    if (useSemanticSearch) {
      console.log('Falling back to traditional search...');
      return semanticSearch(
        { ...searchQuery, useSemanticSearch: false },
        indexName
      );
    }
    
    throw error;
  }
}

// Get search suggestions based on semantic similarity
export async function getSearchSuggestions(
  suggestionQuery: SuggestionQuery,
  indexName: string = SEARCH_INDEX
): Promise<Suggestion[]> {
  const { query, limit = 5 } = suggestionQuery;

  if (!query.trim()) {
    return [];
  }

  try {
    // Use semantic search to find similar content
    const response = await elasticsearchClient.search({
      index: indexName,
      body: {
        query: {
          semantic: {
            field: 'semantic_content',
            query: query
          }
        },
        size: limit * 2, // Get more results to extract diverse suggestions
        _source: ['title', 'description', 'category', 'tags']
      }
    });

    const suggestions: Suggestion[] = [];
    const seenTexts = new Set<string>();

    for (const hit of response.hits.hits) {
      const source = hit._source as any;
      
      // Extract potential suggestions from title and tags
      const candidates = [
        source.title,
        ...source.tags.slice(0, 3) // Limit tags to avoid too many suggestions
      ];

      for (const candidate of candidates) {
        const text = candidate.toLowerCase().trim();
        
        // Skip if already seen or too similar to query
        if (seenTexts.has(text) || text === query.toLowerCase()) {
          continue;
        }
        
        // Skip very short suggestions
        if (text.length < 3) {
          continue;
        }

        suggestions.push({
          text: candidate,
          score: hit._score || 0,
          category: source.category
        });

        seenTexts.add(text);
        
        if (suggestions.length >= limit) {
          break;
        }
      }
      
      if (suggestions.length >= limit) {
        break;
      }
    }

    return suggestions.sort((a, b) => b.score - a.score);
  } catch (error) {
    console.error('Error getting search suggestions:', error);
    return [];
  }
}

// Traditional search fallback
export async function traditionalSearch(
  searchQuery: SearchQuery,
  indexName: string = SEARCH_INDEX
): Promise<SearchResponse> {
  return semanticSearch(
    { ...searchQuery, useSemanticSearch: false },
    indexName
  );
}

// Get popular search terms (based on document titles and tags)
export async function getPopularSearchTerms(
  limit: number = 10,
  indexName: string = SEARCH_INDEX
): Promise<string[]> {
  try {
    const response = await elasticsearchClient.search({
      index: indexName,
      body: {
        size: 0,
        aggs: {
          popular_tags: {
            terms: {
              field: 'tags',
              size: limit
            }
          }
        }
      }
    });

    const buckets = (response.aggregations?.popular_tags as any)?.buckets || [];
    return buckets.map((bucket: any) => bucket.key);
  } catch (error) {
    console.error('Error getting popular search terms:', error);
    return [];
  }
}

// Search by category
export async function searchByCategory(
  category: string,
  limit: number = 20,
  indexName: string = SEARCH_INDEX
): Promise<SearchResult[]> {
  try {
    const response = await elasticsearchClient.search({
      index: indexName,
      body: {
        query: {
          term: { category }
        },
        size: limit,
        sort: [
          { updated_at: { order: 'desc' } }
        ],
        _source: {
          excludes: ['semantic_content']
        }
      }
    });

    return response.hits.hits.map((hit: any) => ({
      id: hit._id,
      score: hit._score,
      ...hit._source
    }));
  } catch (error) {
    console.error('Error searching by category:', error);
    return [];
  }
}

// Get search analytics
export async function getSearchAnalytics(indexName: string = SEARCH_INDEX) {
  try {
    const [totalDocs, categories, types] = await Promise.all([
      elasticsearchClient.count({ index: indexName }),
      elasticsearchClient.search({
        index: indexName,
        body: {
          size: 0,
          aggs: {
            categories: {
              terms: { field: 'category', size: 20 }
            }
          }
        }
      }),
      elasticsearchClient.search({
        index: indexName,
        body: {
          size: 0,
          aggs: {
            types: {
              terms: { field: 'type', size: 20 }
            }
          }
        }
      })
    ]);

    return {
      totalDocuments: totalDocs.count,
      categories: (categories.aggregations?.categories as any)?.buckets || [],
      types: (types.aggregations?.types as any)?.buckets || []
    };
  } catch (error) {
    console.error('Error getting search analytics:', error);
    return {
      totalDocuments: 0,
      categories: [],
      types: []
    };
  }
}