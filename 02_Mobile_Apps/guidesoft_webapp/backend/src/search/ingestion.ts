import { elasticsearchClient, SEARCH_INDEX } from './elasticsearch';
import { refreshIndex } from './index-management';

export interface Document {
  id: string;
  title: string;
  description: string;
  content?: string;
  category: string;
  type: string;
  tags: string[];
  url?: string;
  created_at?: Date;
  updated_at?: Date;
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
  errorDetails?: any[];
}

// Sample documents for demonstration
const sampleDocuments: Document[] = [
  {
    id: '1',
    title: 'AI-Powered Search Engine',
    description: 'Advanced semantic search using machine learning and natural language processing',
    content: 'This application demonstrates the power of semantic search using Elasticsearch and ELSER model for understanding user intent and context.',
    category: 'ai-tools',
    type: 'application',
    tags: ['ai', 'search', 'machine-learning', 'elasticsearch'],
    url: '/apps/ai-search'
  },
  {
    id: '2',
    title: 'E-commerce Platform',
    description: 'Complete online shopping solution with payment integration',
    content: 'Full-featured e-commerce platform with product catalog, shopping cart, payment processing, and order management.',
    category: 'e-commerce',
    type: 'platform',
    tags: ['shopping', 'payments', 'retail', 'business'],
    url: '/apps/ecommerce'
  },
  {
    id: '3',
    title: 'Social Media Dashboard',
    description: 'Unified dashboard for managing multiple social media accounts',
    content: 'Comprehensive social media management tool with analytics, scheduling, and engagement tracking across platforms.',
    category: 'social',
    type: 'dashboard',
    tags: ['social-media', 'analytics', 'marketing', 'automation'],
    url: '/apps/social-dashboard'
  },
  {
    id: '4',
    title: 'Project Management Tool',
    description: 'Collaborative project management with task tracking and team coordination',
    content: 'Advanced project management solution with Kanban boards, Gantt charts, time tracking, and team collaboration features.',
    category: 'productivity',
    type: 'tool',
    tags: ['project-management', 'collaboration', 'productivity', 'teams'],
    url: '/apps/project-manager'
  },
  {
    id: '5',
    title: 'Healthcare Management System',
    description: 'Digital health records and patient management platform',
    content: 'Comprehensive healthcare management system with patient records, appointment scheduling, and medical history tracking.',
    category: 'healthcare',
    type: 'system',
    tags: ['healthcare', 'medical', 'records', 'patients'],
    url: '/apps/healthcare'
  }
];

// Prepare document for indexing
function prepareDocument(doc: Document) {
  const now = new Date();
  return {
    ...doc,
    created_at: doc.created_at || now,
    updated_at: doc.updated_at || now,
    // Combine content for semantic search
    semantic_content: `${doc.title} ${doc.description} ${doc.content || ''} ${doc.tags.join(' ')}`
  };
}

// Index a single document
export async function indexDocument(
  document: Document,
  indexName: string = SEARCH_INDEX
): Promise<boolean> {
  try {
    const preparedDoc = prepareDocument(document);
    
    await elasticsearchClient.index({
      index: indexName,
      id: document.id,
      body: preparedDoc
    });

    console.log(`✅ Indexed document: ${document.id}`);
    return true;
  } catch (error) {
    console.error(`❌ Error indexing document ${document.id}:`, error);
    return false;
  }
}

// Remove a document from index
export async function removeDocument(
  documentId: string,
  indexName: string = SEARCH_INDEX
): Promise<boolean> {
  try {
    await elasticsearchClient.delete({
      index: indexName,
      id: documentId
    });

    console.log(`🗑️ Removed document: ${documentId}`);
    return true;
  } catch (error) {
    console.error(`❌ Error removing document ${documentId}:`, error);
    return false;
  }
}

// Bulk index documents
export async function bulkIndexDocuments(
  documents: Document[],
  options: BulkIngestionOptions = {},
  indexName: string = SEARCH_INDEX
): Promise<IngestionResult> {
  const {
    batchSize = 100,
    maxDocuments = 1000,
    timeout = 300000 // 5 minutes
  } = options;

  let processed = 0;
  let errors = 0;
  const errorDetails: any[] = [];

  try {
    // Limit documents if specified
    const docsToProcess = documents.slice(0, maxDocuments);
    
    // Process in batches
    for (let i = 0; i < docsToProcess.length; i += batchSize) {
      const batch = docsToProcess.slice(i, i + batchSize);
      
      // Prepare bulk operations
      const bulkOps = batch.flatMap(doc => [
        { index: { _index: indexName, _id: doc.id } },
        prepareDocument(doc)
      ]);

      try {
        const response = await elasticsearchClient.bulk({
          body: bulkOps,
          timeout: `${timeout}ms`
        });

        // Process response
        if (response.items) {
          for (const item of response.items) {
            if (item.index?.error) {
              errors++;
              errorDetails.push(item.index.error);
            } else {
              processed++;
            }
          }
        }

        console.log(`📦 Processed batch ${Math.floor(i / batchSize) + 1}: ${batch.length} documents`);
      } catch (batchError) {
        console.error(`❌ Batch error:`, batchError);
        errors += batch.length;
        errorDetails.push(batchError);
      }
    }

    // Refresh index to make documents searchable
    await refreshIndex(indexName);

    return {
      success: errors === 0,
      processed,
      errors,
      message: `Processed ${processed} documents with ${errors} errors`,
      errorDetails: errorDetails.length > 0 ? errorDetails : undefined
    };
  } catch (error) {
    console.error('❌ Bulk ingestion error:', error);
    return {
      success: false,
      processed,
      errors: documents.length - processed,
      message: 'Bulk ingestion failed',
      errorDetails: [error]
    };
  }
}

// Sync sample content to Elasticsearch
export async function syncSampleContent(
  options: BulkIngestionOptions = {},
  indexName: string = SEARCH_INDEX
): Promise<IngestionResult> {
  console.log('🔄 Starting sample content sync...');
  
  const result = await bulkIndexDocuments(sampleDocuments, options, indexName);
  
  if (result.success) {
    console.log('✅ Sample content sync completed successfully');
  } else {
    console.log('⚠️ Sample content sync completed with errors');
  }
  
  return result;
}

// Get document count in index
export async function getDocumentCount(indexName: string = SEARCH_INDEX): Promise<number> {
  try {
    const response = await elasticsearchClient.count({ index: indexName });
    return response.count;
  } catch (error) {
    console.error('Error getting document count:', error);
    return 0;
  }
}