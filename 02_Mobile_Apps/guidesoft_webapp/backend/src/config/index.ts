import dotenv from 'dotenv';
import { ElasticsearchConfig, ServerConfig, SearchConfig } from '../types';

// Load environment variables
dotenv.config();

// Elasticsearch configuration
export const elasticsearchConfig: ElasticsearchConfig = {
  node: process.env.ELASTICSEARCH_NODE || 'http://localhost:9200',
  username: process.env.ELASTICSEARCH_USERNAME,
  password: process.env.ELASTICSEARCH_PASSWORD,
  apiKey: process.env.ELASTICSEARCH_API_KEY,
  tls: {
    rejectUnauthorized: process.env.ELASTICSEARCH_TLS_REJECT_UNAUTHORIZED !== 'false'
  }
};

// Server configuration
export const serverConfig: ServerConfig = {
  port: parseInt(process.env.PORT || '3001', 10),
  host: process.env.HOST || '0.0.0.0',
  cors: {
    origin: process.env.CORS_ORIGIN?.split(',') || ['http://localhost:3000'],
    credentials: process.env.CORS_CREDENTIALS === 'true'
  },
  rateLimit: {
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000', 10), // 15 minutes
    max: parseInt(process.env.RATE_LIMIT_MAX || '100', 10) // limit each IP to 100 requests per windowMs
  }
};

// Search configuration
export const searchConfig: SearchConfig = {
  defaultLimit: parseInt(process.env.SEARCH_DEFAULT_LIMIT || '20', 10),
  maxLimit: parseInt(process.env.SEARCH_MAX_LIMIT || '100', 10),
  enableSemanticSearch: process.env.ENABLE_SEMANTIC_SEARCH !== 'false',
  elserModelId: process.env.ELSER_MODEL_ID || '.elser_model_2',
  indexName: process.env.SEARCH_INDEX_NAME || 'semantic_search_index'
};

// Database configuration (for future use)
export const databaseConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  database: process.env.DB_NAME || 'semantic_search',
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  ssl: process.env.DB_SSL === 'true'
};

// JWT configuration (for future authentication)
export const jwtConfig = {
  secret: process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production',
  expiresIn: process.env.JWT_EXPIRES_IN || '24h',
  refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '7d'
};

// Logging configuration
export const loggingConfig = {
  level: process.env.LOG_LEVEL || 'info',
  format: process.env.LOG_FORMAT || 'combined',
  file: process.env.LOG_FILE,
  maxSize: process.env.LOG_MAX_SIZE || '10m',
  maxFiles: process.env.LOG_MAX_FILES || '5'
};

// Application environment
export const environment = {
  nodeEnv: process.env.NODE_ENV || 'development',
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isTest: process.env.NODE_ENV === 'test'
};

// Validation function to check required environment variables
export function validateConfig(): void {
  const requiredVars = [
    'ELASTICSEARCH_NODE'
  ];

  const missingVars = requiredVars.filter(varName => !process.env[varName]);

  if (missingVars.length > 0) {
    console.warn(`Warning: Missing environment variables: ${missingVars.join(', ')}`);
    console.warn('Using default values. Please check your .env file.');
  }

  // Validate Elasticsearch connection URL
  try {
    new URL(elasticsearchConfig.node);
  } catch (error) {
    throw new Error(`Invalid Elasticsearch URL: ${elasticsearchConfig.node}`);
  }

  // Validate port numbers
  if (isNaN(serverConfig.port) || serverConfig.port < 1 || serverConfig.port > 65535) {
    throw new Error(`Invalid port number: ${serverConfig.port}`);
  }

  if (isNaN(databaseConfig.port) || databaseConfig.port < 1 || databaseConfig.port > 65535) {
    throw new Error(`Invalid database port number: ${databaseConfig.port}`);
  }

  console.log('✅ Configuration validated successfully');
}

// Export all configurations
export default {
  elasticsearch: elasticsearchConfig,
  server: serverConfig,
  search: searchConfig,
  database: databaseConfig,
  jwt: jwtConfig,
  logging: loggingConfig,
  environment
};