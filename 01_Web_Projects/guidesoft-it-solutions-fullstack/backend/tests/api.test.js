const { describe, it, before, after } = require('node:test');
const assert = require('node:assert/strict');
const http = require('node:http');

// Set test environment
process.env.NODE_ENV = 'test';
process.env.EMAIL_SKIP = 'true';
process.env.JWT_SECRET = 'test-secret-key-guideitsol-2026';

const app = require('../server');

describe('GuideSoft IT Solutions - Backend API Test Suite', () => {
  let server;
  let baseUrl;
  let createdPaymentId;
  let createdGatewayTxId;
  let authToken;

  before(async () => {
    await new Promise((resolve) => {
      server = http.createServer(app);
      server.listen(0, '127.0.0.1', () => {
        const port = server.address().port;
        baseUrl = `http://127.0.0.1:${port}`;
        resolve();
      });
    });
  });

  after(async () => {
    await new Promise((resolve) => server.close(resolve));
  });

  // 1. Health Endpoint Tests
  describe('GET /health', () => {
    it('should return 200 with status OK and server metadata', async () => {
      const res = await fetch(`${baseUrl}/health`);
      assert.equal(res.status, 200);

      const data = await res.json();
      assert.equal(data.success, true);
      assert.ok(data.message.includes('running'));
      assert.ok(data.timestamp);
      assert.ok(data.uptime !== undefined);
    });
  });

  // 2. API Documentation / Root Metadata
  describe('GET /api', () => {
    it('should return available API version and endpoints', async () => {
      const res = await fetch(`${baseUrl}/api`);
      assert.equal(res.status, 200);

      const data = await res.json();
      assert.equal(data.version, '1.0.0');
      assert.ok(data.message.includes('Guidesoft IT Solutions API'));
      assert.ok(data.endpoints);
      assert.ok(data.endpoints.auth);
      assert.ok(data.endpoints.services);
      assert.ok(data.endpoints.contact);
      assert.ok(data.endpoints.payments);
    });
  });

  // 3. Services Routes
  describe('GET /api/services', () => {
    it('should return all services catalog items', async () => {
      const res = await fetch(`${baseUrl}/api/services`);
      assert.equal(res.status, 200);

      const data = await res.json();
      assert.equal(data.success, true);
      assert.ok(Array.isArray(data.data));
      assert.ok(data.count >= 4);

      const first = data.data[0];
      assert.ok(first.id);
      assert.ok(first.title);
      assert.ok(first.features);
    });

    it('should return service by ID', async () => {
      const res = await fetch(`${baseUrl}/api/services/web-development`);
      assert.equal(res.status, 200);

      const data = await res.json();
      assert.equal(data.success, true);
      assert.equal(data.data.id, 'web-development');
      assert.equal(data.data.title, 'Enterprise Web Development');
    });

    it('should return 404 for non-existent service ID', async () => {
      const res = await fetch(`${baseUrl}/api/services/non-existent-service-999`);
      assert.equal(res.status, 404);

      const data = await res.json();
      assert.equal(data.success, false);
      assert.ok(data.error.includes('not found'));
    });
  });

  // 4. Projects Routes
  describe('GET /api/projects', () => {
    it('should return portfolio projects list', async () => {
      const res = await fetch(`${baseUrl}/api/projects`);
      assert.equal(res.status, 200);

      const data = await res.json();
      assert.equal(data.success, true);
      assert.ok(Array.isArray(data.data));
      assert.ok(data.count >= 2);
    });

    it('should return single project by ID', async () => {
      const res = await fetch(`${baseUrl}/api/projects/guideitsol-portal`);
      assert.equal(res.status, 200);

      const data = await res.json();
      assert.equal(data.success, true);
      assert.equal(data.data.id, 'guideitsol-portal');
      assert.ok(data.data.technologies.includes('Next.js'));
    });
  });

  // 5. Contact Inquiries Route
  describe('POST /api/contact', () => {
    it('should reject submission with missing required fields (400)', async () => {
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'Test User' }) // Missing email & message
      });

      assert.equal(res.status, 400);
      const data = await res.json();
      assert.equal(data.success, false);
      assert.ok(data.error);
    });

    it('should accept valid contact submission (201)', async () => {
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Praveen Kanneganti',
          email: 'praveen@guideitsol.com',
          phone: '+91 9999999999',
          subject: 'Enterprise Cloud Inquiry',
          message: 'Interested in enterprise cloud deployment and visa flow solutions.'
        })
      });

      assert.equal(res.status, 201);
      const data = await res.json();
      assert.equal(data.success, true);
      assert.ok(data.message.includes('Thank you'));
      assert.equal(data.data.name, 'Praveen Kanneganti');
    });

    it('should return inquiries list on GET /api/contact', async () => {
      const res = await fetch(`${baseUrl}/api/contact`);
      assert.equal(res.status, 200);

      const data = await res.json();
      assert.equal(data.success, true);
      assert.ok(Array.isArray(data.data));
    });
  });

  // 6. Authentication Routes
  describe('Auth Routes /api/auth', () => {
    it('should return active auth documentation on GET /api/auth', async () => {
      const res = await fetch(`${baseUrl}/api/auth`);
      assert.equal(res.status, 200);

      const data = await res.json();
      assert.equal(data.status, 'active');
      assert.ok(data.endpoints);
    });

    it('should reject registration when missing fields (400)', async () => {
      const res = await fetch(`${baseUrl}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: 'test@example.com' }) // Missing name & password
      });

      assert.equal(res.status, 400);
      const data = await res.json();
      assert.equal(data.success, false);
      assert.ok(data.error);
    });

    it('should reject login with missing credentials (400)', async () => {
      const res = await fetch(`${baseUrl}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: '' })
      });

      assert.equal(res.status, 400);
      const data = await res.json();
      assert.equal(data.success, false);
      assert.ok(data.error);
    });

    it('should reject unauthorized access to /api/auth/me without token (401)', async () => {
      const res = await fetch(`${baseUrl}/api/auth/me`);
      assert.equal(res.status, 401);

      const data = await res.json();
      assert.equal(data.success, false);
      assert.ok(data.error.includes('Not authorized'));
    });

    it('should log out successfully on GET /api/auth/logout', async () => {
      const res = await fetch(`${baseUrl}/api/auth/logout`);
      assert.equal(res.status, 200);

      const data = await res.json();
      assert.equal(data.success, true);
    });
  });

  // 7. Payment Engine & Multi-Gateway Processing Routes
  describe('Payment Engine /api/payments', () => {
    it('should reject payment creation without required payload (400)', async () => {
      const res = await fetch(`${baseUrl}/api/payments/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({})
      });

      assert.equal(res.status, 400);
      const data = await res.json();
      assert.equal(data.success, false);
      assert.ok(data.errors);
      assert.ok(data.errors.length > 0);
    });

    it('should successfully create real payment with UPI, QR, Google Pay and Razorpay order (200)', async () => {
      const res = await fetch(`${baseUrl}/api/payments/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: {
            subtotal: 5000,
            currency: 'INR',
            discount: 500
          },
          paymentMethod: 'upi',
          paymentGateway: 'razorpay',
          description: 'Fullstack Enterprise Cloud & Mobile Retainer',
          metadata: {
            customerName: 'Praveen Kanneganti',
            customerEmail: 'praveen@guideitsol.com',
            customerPhone: '+919999999999'
          }
        })
      });

      assert.equal(res.status, 200);
      const body = await res.json();
      assert.equal(body.success, true);
      assert.ok(body.data.transactionId);
      assert.ok(body.data.gatewayTransactionId);
      assert.equal(body.data.status, 'pending');

      // Verify UPI Intent URI and QR Code generated
      assert.ok(body.data.upiDetails.upiUri.startsWith('upi://pay'));
      assert.ok(body.data.upiDetails.qrCode.startsWith('data:image/svg+xml'));

      // Verify Google Pay configuration
      assert.equal(body.data.googlePay.currencyCode, 'INR');
      assert.equal(body.data.googlePay.merchantName, 'GuideSoft IT Solutions');

      // Verify Razorpay Order Payload
      assert.ok(body.data.razorpay.key);
      assert.ok(body.data.razorpay.orderId);

      createdPaymentId = body.data.transactionId;
      createdGatewayTxId = body.data.gatewayTransactionId;
    });

    it('should verify payment transaction signature (200)', async () => {
      // Create payment first to guarantee self-contained execution
      const createRes = await fetch(`${baseUrl}/api/payments/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: { subtotal: 2500, currency: 'INR' },
          paymentMethod: 'card',
          paymentGateway: 'razorpay',
          description: 'Web development retainer milestone payment'
        })
      });
      const createData = await createRes.json();
      assert.equal(createRes.status, 200);

      const res = await fetch(`${baseUrl}/api/payments/verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          paymentId: createData.data.transactionId,
          gatewayTransactionId: 'pay_rzp_mock_12345678',
          signature: 'valid_mock_signature'
        })
      });

      const vStatus = res.status;
      const vBody = await res.json();
      if (vStatus !== 200) {
        console.error('Verify Debug:', vStatus, JSON.stringify(vBody));
      }
      assert.equal(vStatus, 200);
      assert.equal(vBody.success, true);
      assert.equal(vBody.data.status, 'completed');
      assert.ok(vBody.data.invoiceNumber);
    });

    it('should successfully receive and process payment gateway webhook (200)', async () => {
      const res = await fetch(`${baseUrl}/api/payments/webhook/razorpay`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: 'payment.captured',
          payload: {
            payment: {
              entity: {
                id: 'pay_test_webhook_123',
                amount: 540000,
                status: 'captured'
              }
            }
          }
        })
      });

      assert.equal(res.status, 200);
      const data = await res.json();
      assert.equal(data.success, true);
      assert.equal(data.received, true);
      assert.equal(data.gateway, 'razorpay');
    });
  });

  // 8. 404 Route Handler
  describe('404 Handling', () => {
    it('should return JSON 404 error for non-existent route', async () => {
      const res = await fetch(`${baseUrl}/api/unknown-endpoint-xyz`);
      assert.equal(res.status, 404);

      const data = await res.json();
      assert.equal(data.success, false);
      assert.equal(data.message, 'API endpoint not found');
    });
  });
});
