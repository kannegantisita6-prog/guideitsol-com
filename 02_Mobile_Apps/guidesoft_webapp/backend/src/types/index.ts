// Common types for the semantic search application

export interface Document {
  id: string;
  title: string;
  content: string;
  category?: string;
  type?: string;
  url?: string;
  metadata?: Record<string, any>;
  timestamp?: Date;
}

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

export interface SuggestionQuery {
  query: string;
  limit?: number;
}

export interface Suggestion {
  text: string;
  score: number;
  category?: string;
}

export interface BulkIngestionOptions {
  batchSize?: number;
  maxDocuments?: number;
  timeout?: number;
}

export interface IngestionResult {
  success: boolean;
  processed: number;
  errors: number;
  message: string;
  errorDetails?: string[];
}

export interface IndexOperationResult {
  success: boolean;
  message: string;
  indexName?: string;
  error?: string;
}

export interface IndexStatus {
  exists: boolean;
  health?: string;
  status?: string;
  numberOfShards?: number;
  numberOfReplicas?: number;
  documentsCount?: number;
  storeSize?: string;
  error?: string;
}

export interface SearchAnalytics {
  totalDocuments: number;
  categories: Array<{ name: string; count: number }>;
  types: Array<{ name: string; count: number }>;
  indexHealth?: string;
  lastUpdated?: Date;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
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

// Environment configuration types
export interface ElasticsearchConfig {
  node: string;
  username?: string;
  password?: string;
  apiKey?: string;
  tls?: {
    ca?: string;
    cert?: string;
    key?: string;
    rejectUnauthorized?: boolean;
  };
}

export interface ServerConfig {
  port: number;
  host: string;
  cors: {
    origin: string | string[];
    credentials: boolean;
  };
  rateLimit: {
    windowMs: number;
    max: number;
  };
}

export interface SearchConfig {
  defaultLimit: number;
  maxLimit: number;
  enableSemanticSearch: boolean;
  elserModelId: string;
  indexName: string;
}

// Error types
export class SearchError extends Error {
  constructor(
    message: string,
    public code: string,
    public statusCode: number = 500
  ) {
    super(message);
    this.name = 'SearchError';
  }
}

export class IndexError extends Error {
  constructor(
    message: string,
    public operation: string,
    public statusCode: number = 500
  ) {
    super(message);
    this.name = 'IndexError';
  }
}

export class ValidationError extends Error {
  constructor(
    message: string,
    public field: string,
    public statusCode: number = 400
  ) {
    super(message);
    this.name = 'ValidationError';
  }
}