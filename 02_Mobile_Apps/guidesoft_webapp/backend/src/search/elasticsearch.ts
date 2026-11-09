import { Client } from '@elastic/elasticsearch';
import dotenv from 'dotenv';

dotenv.config();

// Elasticsearch client configuration
export const elasticsearchClient = new Client({
  node: process.env.ELASTICSEARCH_URL || 'http://localhost:9200',
  auth: {
    apiKey: process.env.ELASTICSEARCH_API_KEY || ''
  },
  requestTimeout: 60000,
  pingTimeout: 3000,
  maxRetries: 3
});

// Index configuration
export const SEARCH_INDEX = 'guidesoft-semantic-search';
export const ELSER_MODEL = '.elser_model_2';

// Index mapping for semantic search
export const indexMapping = {
  mappings: {
    properties: {
      id: { type: 'keyword' },
      title: { type: 'text' },
      description: { type: 'text' },
      content: { type: 'text' },
      category: { type: 'keyword' },
      type: { type: 'keyword' },
      tags: { type: 'keyword' },
      url: { type: 'keyword' },
      created_at: { type: 'date' },
      updated_at: { type: 'date' },
      // Semantic text field for ELSER
      semantic_content: {
        type: 'semantic_text',
        inference_id: ELSER_MODEL
      }
    }
  },
  settings: {
    number_of_shards: 1,
    number_of_replicas: 0,
    'index.mapping.total_fields.limit': 2000,
    'index.max_result_window': 10000
  }
};

// Test Elasticsearch connection
export async function testConnection(): Promise<boolean> {
  try {
    const response = await elasticsearchClient.ping();
    console.log('✅ Elasticsearch connection successful');
    return true;
  } catch (error) {
    console.error('❌ Elasticsearch connection failed:', error);
    return false;
  }
}

// Check if index exists
export async function indexExists(indexName: string = SEARCH_INDEX): Promise<boolean> {
  try {
    const response = await elasticsearchClient.indices.exists({
      index: indexName
    });
    return response;
  } catch (error) {
    console.error('Error checking index existence:', error);
    return false;
  }
}

// Get index health and stats
export async function getIndexHealth(indexName: string = SEARCH_INDEX) {
  try {
    const [health, stats] = await Promise.all([
      elasticsearchClient.cluster.health({ index: indexName }),
      elasticsearchClient.indices.stats({ index: indexName })
    ]);

    return {
      health: health.status,
      documents: stats.indices?.[indexName]?.total?.docs?.count || 0,
      size: stats.indices?.[indexName]?.total?.store?.size_in_bytes || 0,
      shards: health.active_shards,
      status: 'healthy'
    };
  } catch (error) {
    console.error('Error getting index health:', error);
    return {
      health: 'red',
      documents: 0,
      size: 0,
      shards: 0,
      status: 'error',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

export default elasticsearchClient;