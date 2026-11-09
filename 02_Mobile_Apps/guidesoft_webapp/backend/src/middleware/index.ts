import { Request, Response, NextFunction } from 'express';
import { SearchError, IndexError, ValidationError } from '../types';

// Error handling middleware
export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error('Error occurred:', {
    message: error.message,
    stack: error.stack,
    url: req.url,
    method: req.method,
    timestamp: new Date().toISOString()
  });

  // Handle specific error types
  if (error instanceof SearchError) {
    res.status(error.statusCode).json({
      success: false,
      error: error.message,
      code: error.code,
      type: 'SearchError'
    });
    return;
  }

  if (error instanceof IndexError) {
    res.status(error.statusCode).json({
      success: false,
      error: error.message,
      operation: error.operation,
      type: 'IndexError'
    });
    return;
  }

  if (error instanceof ValidationError) {
    res.status(error.statusCode).json({
      success: false,
      error: error.message,
      field: error.field,
      type: 'ValidationError'
    });
    return;
  }

  // Handle generic errors
  const statusCode = (error as any).statusCode || 500;
  const message = statusCode === 500 ? 'Internal Server Error' : error.message;

  res.status(statusCode).json({
    success: false,
    error: message,
    type: 'Error'
  });
};

// 404 handler
export const notFoundHandler = (req: Request, res: Response): void => {
  res.status(404).json({
    success: false,
    error: `Route ${req.method} ${req.path} not found`,
    type: 'NotFound'
  });
};

// Request validation middleware
export const validateSearchQuery = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { query, limit, offset } = req.query;

  // Validate query parameter
  if (!query || typeof query !== 'string' || query.trim().length === 0) {
    const error = new ValidationError('Query parameter is required and must be a non-empty string', 'query');
    next(error);
    return;
  }

  // Validate limit parameter
  if (limit !== undefined) {
    const limitNum = parseInt(limit as string, 10);
    if (isNaN(limitNum) || limitNum < 1 || limitNum > 100) {
      const error = new ValidationError('Limit must be a number between 1 and 100', 'limit');
      next(error);
      return;
    }
  }

  // Validate offset parameter
  if (offset !== undefined) {
    const offsetNum = parseInt(offset as string, 10);
    if (isNaN(offsetNum) || offsetNum < 0) {
      const error = new ValidationError('Offset must be a non-negative number', 'offset');
      next(error);
      return;
    }
  }

  next();
};

// Request logging middleware
export const requestLogger = (req: Request, res: Response, next: NextFunction): void => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.path} - ${res.statusCode} - ${duration}ms`);
  });

  next();
};

// CORS middleware (custom implementation)
export const corsMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const allowedOrigins = process.env.CORS_ORIGIN?.split(',') || ['http://localhost:3000'];
  const origin = req.headers.origin;

  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  next();
};

// Security headers middleware
export const securityHeaders = (req: Request, res: Response, next: NextFunction): void => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  next();
};

// Request timeout middleware
export const timeoutMiddleware = (timeoutMs: number = 30000) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const timeout = setTimeout(() => {
      if (!res.headersSent) {
        res.status(408).json({
          success: false,
          error: 'Request timeout',
          type: 'TimeoutError'
        });
      }
    }, timeoutMs);

    res.on('finish', () => {
      clearTimeout(timeout);
    });

    res.on('close', () => {
      clearTimeout(timeout);
    });

    next();
  };
};

// Health check middleware
export const healthCheck = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    // Basic health check
    const uptime = process.uptime();
    const memoryUsage = process.memoryUsage();
    
    res.json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: Math.floor(uptime),
      memory: {
        used: Math.round(memoryUsage.heapUsed / 1024 / 1024),
        total: Math.round(memoryUsage.heapTotal / 1024 / 1024),
        percentage: Math.round((memoryUsage.heapUsed / memoryUsage.heapTotal) * 100)
      }
    });
  } catch (error) {
    next(error);
  }
};

// Content type validation middleware
export const validateContentType = (req: Request, res: Response, next: NextFunction): void => {
  if (req.method === 'POST' || req.method === 'PUT') {
    const contentType = req.headers['content-type'];
    
    if (!contentType || !contentType.includes('application/json')) {
      const error = new ValidationError('Content-Type must be application/json', 'content-type');
      next(error);
      return;
    }
  }
  
  next();
};

export default {
  errorHandler,
  notFoundHandler,
  validateSearchQuery,
  requestLogger,
  corsMiddleware,
  securityHeaders,
  timeoutMiddleware,
  healthCheck,
  validateContentType
};