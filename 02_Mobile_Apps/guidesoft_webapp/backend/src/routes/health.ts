import { Router, Request, Response } from 'express';
import { elasticsearchClient } from '../search/elasticsearch';

const router = Router();

// Basic health check
router.get('/', (req: Request, res: Response) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Detailed health check including Elasticsearch
router.get('/detailed', async (req: Request, res: Response) => {
  try {
    const health = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || 'development',
      services: {
        elasticsearch: {
          status: 'unknown',
          cluster_name: null as string | null,
          cluster_health: null as string | null
        }
      }
    };

    // Check Elasticsearch connection
    try {
      const esHealth = await elasticsearchClient.cluster.health();
      health.services.elasticsearch = {
        status: 'healthy',
        cluster_name: esHealth.cluster_name,
        cluster_health: esHealth.status
      };
    } catch (esError) {
      health.services.elasticsearch.status = 'unhealthy';
      console.error('Elasticsearch health check failed:', esError);
    }

    res.json(health);
  } catch (error) {
    console.error('Health check error:', error);
    res.status(500).json({
      status: 'unhealthy',
      timestamp: new Date().toISOString(),
      error: 'Health check failed'
    });
  }
});

export default router;