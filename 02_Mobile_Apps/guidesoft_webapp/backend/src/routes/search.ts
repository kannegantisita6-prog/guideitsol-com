import { Router, Request, Response } from 'express';
import { 
  createSemanticIndex, 
  deleteSemanticIndex, 
  getIndexStatus 
} from '../search/index-management';
import { 
  syncSampleContent, 
  indexDocument, 
  removeDocument, 
  getDocumentCount 
} from '../search/ingestion';
import { 
  semanticSearch, 
  getSearchSuggestions, 
  traditionalSearch,
  getPopularSearchTerms,
  searchByCategory,
  getSearchAnalytics 
} from '../search/semantic-search';

const router = Router();

// Index Management Routes

// Create semantic search index
router.post('/index/create', async (req: Request, res: Response) => {
  try {
    const result = await createSemanticIndex();
    
    if (result.success) {
      res.json({
        success: true,
        message: result.message,
        indexName: result.indexName
      });
    } else {
      res.status(400).json({
        success: false,
        message: result.message,
        error: result.error
      });
    }
  } catch (error) {
    console.error('Create index error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create index',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Get index status and health
router.get('/index/status', async (req: Request, res: Response) => {
  try {
    const status = await getIndexStatus();
    const documentCount = status.exists ? await getDocumentCount() : 0;
    
    res.json({
      ...status,
      documents: documentCount
    });
  } catch (error) {
    console.error('Get index status error:', error);
    res.status(500).json({
      exists: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Delete semantic search index
router.delete('/index/delete', async (req: Request, res: Response) => {
  try {
    const result = await deleteSemanticIndex();
    
    if (result.success) {
      res.json({
        success: true,
        message: result.message
      });
    } else {
      res.status(400).json({
        success: false,
        message: result.message,
        error: result.error
      });
    }
  } catch (error) {
    console.error('Delete index error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete index',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Content Ingestion Routes

// Bulk sync content to Elasticsearch
router.post('/sync', async (req: Request, res: Response) => {
  try {
    const { batchSize, maxDocuments, timeout } = req.body;
    
    const result = await syncSampleContent({
      batchSize: batchSize || 100,
      maxDocuments: maxDocuments || 1000,
      timeout: timeout || 300000
    });
    
    res.json(result);
  } catch (error) {
    console.error('Sync content error:', error);
    res.status(500).json({
      success: false,
      processed: 0,
      errors: 1,
      message: 'Content sync failed',
      errorDetails: [error instanceof Error ? error.message : 'Unknown error']
    });
  }
});

// Index single document
router.post('/index-document/:contentId', async (req: Request, res: Response) => {
  try {
    const { contentId } = req.params;
    const document = req.body;
    
    if (!document.id) {
      document.id = contentId;
    }
    
    const success = await indexDocument(document);
    
    if (success) {
      res.json({
        success: true,
        message: `Document ${contentId} indexed successfully`
      });
    } else {
      res.status(400).json({
        success: false,
        message: `Failed to index document ${contentId}`
      });
    }
  } catch (error) {
    console.error('Index document error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to index document',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Remove document from index
router.delete('/index-document/:contentId', async (req: Request, res: Response) => {
  try {
    const { contentId } = req.params;
    
    const success = await removeDocument(contentId);
    
    if (success) {
      res.json({
        success: true,
        message: `Document ${contentId} removed successfully`
      });
    } else {
      res.status(400).json({
        success: false,
        message: `Failed to remove document ${contentId}`
      });
    }
  } catch (error) {
    console.error('Remove document error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to remove document',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Search Routes

// Enhanced semantic search endpoint
router.get('/semantic', async (req: Request, res: Response) => {
  try {
    const {
      query = '',
      category,
      type,
      limit = '20',
      offset = '0',
      useSemanticSearch = 'true'
    } = req.query;

    const searchQuery = {
      query: query as string,
      category: category as string | undefined,
      type: type as string | undefined,
      limit: parseInt(limit as string, 10),
      offset: parseInt(offset as string, 10),
      useSemanticSearch: (useSemanticSearch as string).toLowerCase() === 'true'
    };

    const results = await semanticSearch(searchQuery);
    res.json(results);
  } catch (error) {
    console.error('Semantic search error:', error);
    res.status(500).json({
      results: [],
      total: 0,
      took: 0,
      searchType: 'error',
      query: req.query.query || '',
      hasMore: false,
      error: error instanceof Error ? error.message : 'Search failed'
    });
  }
});

// Get search suggestions
router.get('/suggestions', async (req: Request, res: Response) => {
  try {
    const { query = '', limit = '5' } = req.query;
    
    const suggestions = await getSearchSuggestions({
      query: query as string,
      limit: parseInt(limit as string, 10)
    });
    
    res.json({ suggestions });
  } catch (error) {
    console.error('Search suggestions error:', error);
    res.status(500).json({
      suggestions: [],
      error: error instanceof Error ? error.message : 'Failed to get suggestions'
    });
  }
});

// Traditional search (fallback)
router.get('/', async (req: Request, res: Response) => {
  try {
    const {
      query = '',
      category,
      type,
      limit = '20',
      offset = '0'
    } = req.query;

    const searchQuery = {
      query: query as string,
      category: category as string | undefined,
      type: type as string | undefined,
      limit: parseInt(limit as string, 10),
      offset: parseInt(offset as string, 10),
      useSemanticSearch: false
    };

    const results = await traditionalSearch(searchQuery);
    res.json(results);
  } catch (error) {
    console.error('Traditional search error:', error);
    res.status(500).json({
      results: [],
      total: 0,
      took: 0,
      searchType: 'error',
      query: req.query.query || '',
      hasMore: false,
      error: error instanceof Error ? error.message : 'Search failed'
    });
  }
});

// Get popular search terms
router.get('/popular-terms', async (req: Request, res: Response) => {
  try {
    const { limit = '10' } = req.query;
    const terms = await getPopularSearchTerms(parseInt(limit as string, 10));
    res.json({ terms });
  } catch (error) {
    console.error('Popular terms error:', error);
    res.status(500).json({
      terms: [],
      error: error instanceof Error ? error.message : 'Failed to get popular terms'
    });
  }
});

// Search by category
router.get('/category/:category', async (req: Request, res: Response) => {
  try {
    const { category } = req.params;
    const { limit = '20' } = req.query;
    
    const results = await searchByCategory(
      category,
      parseInt(limit as string, 10)
    );
    
    res.json({ results, category });
  } catch (error) {
    console.error('Category search error:', error);
    res.status(500).json({
      results: [],
      category: req.params.category,
      error: error instanceof Error ? error.message : 'Category search failed'
    });
  }
});

// Get search analytics
router.get('/analytics', async (req: Request, res: Response) => {
  try {
    const analytics = await getSearchAnalytics();
    res.json(analytics);
  } catch (error) {
    console.error('Search analytics error:', error);
    res.status(500).json({
      totalDocuments: 0,
      categories: [],
      types: [],
      error: error instanceof Error ? error.message : 'Failed to get analytics'
    });
  }
});

export default router;