import { elasticsearchClient, SEARCH_INDEX, indexMapping, ELSER_MODEL } from './elasticsearch';

export interface IndexCreationResult {
  success: boolean;
  message: string;
  indexName?: string;
  error?: string;
}

export interface IndexStatus {
  exists: boolean;
  health?: string;
  documents?: number;
  size?: number;
  shards?: number;
  error?: string;
}

// Create semantic search index
export async function createSemanticIndex(indexName: string = SEARCH_INDEX): Promise<IndexCreationResult> {
  try {
    // Check if index already exists
    const exists = await elasticsearchClient.indices.exists({ index: indexName });
    
    if (exists) {
      return {
        success: false,
        message: `Index '${indexName}' already exists`,
        indexName
      };
    }

    // Create the index with mapping
    await elasticsearchClient.indices.create({
      index: indexName,
      ...indexMapping
    });

    console.log(`✅ Created semantic search index: ${indexName}`);
    
    return {
      success: true,
      message: `Successfully created index '${indexName}'`,
      indexName
    };
  } catch (error) {
    console.error('Error creating semantic index:', error);
    return {
      success: false,
      message: 'Failed to create semantic search index',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

// Delete semantic search index
export async function deleteSemanticIndex(indexName: string = SEARCH_INDEX): Promise<IndexCreationResult> {
  try {
    // Check if index exists
    const exists = await elasticsearchClient.indices.exists({ index: indexName });
    
    if (!exists) {
      return {
        success: false,
        message: `Index '${indexName}' does not exist`,
        indexName
      };
    }

    // Delete the index
    await elasticsearchClient.indices.delete({ index: indexName });

    console.log(`🗑️ Deleted semantic search index: ${indexName}`);
    
    return {
      success: true,
      message: `Successfully deleted index '${indexName}'`,
      indexName
    };
  } catch (error) {
    console.error('Error deleting semantic index:', error);
    return {
      success: false,
      message: 'Failed to delete semantic search index',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

// Get index status and health
export async function getIndexStatus(indexName: string = SEARCH_INDEX): Promise<IndexStatus> {
  try {
    // Check if index exists
    const exists = await elasticsearchClient.indices.exists({ index: indexName });
    
    if (!exists) {
      return {
        exists: false,
        error: `Index '${indexName}' does not exist`
      };
    }

    // Get index health and stats
    const [health, stats] = await Promise.all([
      elasticsearchClient.cluster.health({ index: indexName }),
      elasticsearchClient.indices.stats({ index: indexName })
    ]);

    return {
      exists: true,
      health: health.status,
      documents: stats.indices?.[indexName]?.total?.docs?.count || 0,
      size: stats.indices?.[indexName]?.total?.store?.size_in_bytes || 0,
      shards: health.active_shards
    };
  } catch (error) {
    console.error('Error getting index status:', error);
    return {
      exists: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

// Refresh index to make documents searchable
export async function refreshIndex(indexName: string = SEARCH_INDEX): Promise<boolean> {
  try {
    await elasticsearchClient.indices.refresh({ index: indexName });
    return true;
  } catch (error) {
    console.error('Error refreshing index:', error);
    return false;
  }
}

// Update index settings
export async function updateIndexSettings(
  settings: Record<string, any>,
  indexName: string = SEARCH_INDEX
): Promise<boolean> {
  try {
    await elasticsearchClient.indices.putSettings({
      index: indexName,
      body: { settings }
    });
    return true;
  } catch (error) {
    console.error('Error updating index settings:', error);
    return false;
  }
}

// Check ELSER model availability
export async function checkElserModel(): Promise<boolean> {
  try {
    const response = await elasticsearchClient.ml.getTrainedModels({
      model_id: ELSER_MODEL
    });
    
    const model = response.trained_model_configs?.[0];
    // Check if model exists and is available (simplified check)
    return model != null;
  } catch (error) {
    console.error('Error checking ELSER model:', error);
    return false;
  }
}