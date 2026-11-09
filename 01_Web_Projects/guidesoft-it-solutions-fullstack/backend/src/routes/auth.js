const express = require('express');
const router = express.Router();
const { register, login, getMe, logout } = require('../controllers/auth');
const { protect } = require('../middleware/auth');

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);
router.get('/logout', logout);

// Metadata route describing endpoints
router.get('/', (req, res) => {
  res.json({
    status: 'active',
    service: 'GuideSoft Authentication Service',
    endpoints: {
      'POST /api/auth/register': 'Register a new client or user account',
      'POST /api/auth/login': 'Authenticate and receive JWT token',
      'GET /api/auth/me': 'Fetch currently authenticated profile (Bearer token required)',
      'GET /api/auth/logout': 'Clear session token'
    }
  });
});

module.exports = router;
