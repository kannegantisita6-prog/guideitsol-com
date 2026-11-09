import axios, { AxiosResponse } from 'axios';

// API base configuration
const API_BASE_URL = (import.meta as any).env?.VITE_API_URL || 'http://localhost:3002/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('auth_token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Types
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
  content: string;
  category?: string;
  type?: string;
  url?: string;
  score: number;
  highlights?: {
    title?: string[];
    content?: string[];
  };
  metadata?: Record<string, any>;
}

export interface SearchResponse {
  results: SearchResult[];
  total: number;
  took: number;
  searchType: 'semantic' | 'traditional' | 'error';
  query: string;
  hasMore: boolean;
  aggregations?: {
    categories?: Array<{ key: string; doc_count: number }>;
    types?: Array<{ key: string; doc_count: number }>;
  };
}

export interface Document {
  id: string;
  title: string;
  content: string;
  category?: string;
  type?: string;
  url?: string;
  metadata?: Record<string, any>;
}

export interface IndexStatus {
  exists: boolean;
  health?: string;
  status?: string;
  numberOfShards?: number;
  numberOfReplicas?: number;
  documentsCount?: number;
  storeSize?: string;
  documents?: number;
  error?: string;
}

export interface IngestionResult {
  success: boolean;
  processed: number;
  errors: number;
  message: string;
  errorDetails?: string[];
}

export interface SearchAnalytics {
  totalDocuments: number;
  categories: Array<{ name: string; count: number }>;
  types: Array<{ name: string; count: number }>;
  indexHealth?: string;
  lastUpdated?: Date;
}

export interface HealthCheckResponse {
  status: 'healthy' | 'unhealthy';
  timestamp: string;
  uptime: number;
  elasticsearch?: {
    connected: boolean;
    cluster_name?: string;
    version?: string;
    error?: string;
  };
  memory?: {
    used: number;
    total: number;
    percentage: number;
  };
}

// API functions
export const searchApi = {
  // Search endpoints
  async search(params: SearchQuery): Promise<SearchResponse> {
    const response: AxiosResponse<SearchResponse> = await api.get('/search/semantic', {
      params: {
        query: params.query,
        category: params.category,
        type: params.type,
        limit: params.limit || 20,
        offset: params.offset || 0,
        useSemanticSearch: params.useSemanticSearch !== false,
      },
    });
    return response.data;
  },

  async traditionalSearch(params: SearchQuery): Promise<SearchResponse> {
    const response: AxiosResponse<SearchResponse> = await api.get('/search', {
      params: {
        query: params.query,
        category: params.category,
        type: params.type,
        limit: params.limit || 20,
        offset: params.offset || 0,
      },
    });
    return response.data;
  },

  async getSuggestions(query: string, limit: number = 5): Promise<string[]> {
    const response = await api.get('/search/suggestions', {
      params: { query, limit },
    });
    return response.data.suggestions.map((s: any) => s.text || s);
  },

  async getPopularTerms(limit: number = 10): Promise<string[]> {
    const response = await api.get('/search/popular-terms', {
      params: { limit },
    });
    return response.data.terms;
  },

  async searchByCategory(category: string, limit: number = 20): Promise<SearchResult[]> {
    const response = await api.get(`/search/category/${category}`, {
      params: { limit },
    });
    return response.data.results;
  },

  async getSearchAnalytics(): Promise<SearchAnalytics> {
    const response: AxiosResponse<SearchAnalytics> = await api.get('/search/analytics');
    return response.data;
  },
};

export const indexApi = {
  // Index management endpoints
  async createIndex(): Promise<{ success: boolean; message: string; indexName?: string }> {
    const response = await api.post('/search/index/create');
    return response.data;
  },

  async deleteIndex(): Promise<{ success: boolean; message: string }> {
    const response = await api.delete('/search/index/delete');
    return response.data;
  },

  async getIndexStatus(): Promise<IndexStatus> {
    const response: AxiosResponse<IndexStatus> = await api.get('/search/index/status');
    return response.data;
  },

  // Document management endpoints
  async indexDocument(document: Document): Promise<{ success: boolean; message: string }> {
    const response = await api.post(`/search/index-document/${document.id}`, document);
    return response.data;
  },

  async removeDocument(documentId: string): Promise<{ success: boolean; message: string }> {
    const response = await api.delete(`/search/index-document/${documentId}`);
    return response.data;
  },

  async syncContent(options?: {
    batchSize?: number;
    maxDocuments?: number;
    timeout?: number;
  }): Promise<IngestionResult> {
    const response: AxiosResponse<IngestionResult> = await api.post('/search/sync', options || {});
    return response.data;
  },
};

export const healthApi = {
  // Health check endpoints
  async getHealth(): Promise<HealthCheckResponse> {
    const response: AxiosResponse<HealthCheckResponse> = await api.get('/health');
    return response.data;
  },

  async getDetailedHealth(): Promise<HealthCheckResponse> {
    const response: AxiosResponse<HealthCheckResponse> = await api.get('/health/detailed');
    return response.data;
  },
};

// Utility functions
export const apiUtils = {
  isApiError(error: any): boolean {
    return error.response && error.response.data;
  },

  getErrorMessage(error: any): string {
    if (this.isApiError(error)) {
      return error.response.data.error || error.response.data.message || 'An error occurred';
    }
    return error.message || 'Network error occurred';
  },

  handleApiError(error: any): never {
    const message = this.getErrorMessage(error);
    throw new Error(message);
  },
};

export default api;