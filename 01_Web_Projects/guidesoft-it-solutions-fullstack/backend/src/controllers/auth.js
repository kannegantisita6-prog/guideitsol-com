const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { isDbConnected } = require('../config/database');

const JWT_SECRET = process.env.JWT_SECRET || 'guideitsol_jwt_super_secret_key_2026';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

// High-speed in-memory user registry for standalone/offline runtime
const inMemoryUsers = new Map();

// Seed initial default demo admin and client users
const seedInMemoryUsers = async () => {
  if (inMemoryUsers.size === 0) {
    const salt = await bcrypt.genSalt(10);
    const adminHash = await bcrypt.hash('secret123', salt);
    inMemoryUsers.set('business@guideitsol.com', {
      _id: 'usr_admin_001',
      name: 'GuideSoft Business Admin',
      email: 'business@guideitsol.com',
      password: adminHash,
      role: 'admin',
      company: 'GuideSoft IT Solutions',
      designation: 'Managing Partner'
    });
  }
};
seedInMemoryUsers();

const signToken = (id, role = 'user') => {
  return jwt.sign({ id, role }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};

// Helper to send token in cookie and response
const sendTokenResponse = (user, statusCode, res) => {
  const token = typeof user.getSignedJwtToken === 'function' 
    ? user.getSignedJwtToken() 
    : signToken(user._id || user.id, user.role);

  const options = {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
    httpOnly: true
  };

  if (process.env.NODE_ENV === 'production') {
    options.secure = true;
  }

  res.status(statusCode).cookie('token', token, options).json({
    success: true,
    token,
    user: {
      id: user._id || user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      company: user.company,
      designation: user.designation,
      avatar: user.avatar
    }
  });
};

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
exports.register = async (req, res, next) => {
  try {
    const { name, email, password, phone, role, company } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        error: 'Please provide name, email, and password'
      });
    }

    const normalizedEmail = email.toLowerCase().trim();

    if (isDbConnected()) {
      const existingUser = await User.findOne({ email: normalizedEmail });
      if (existingUser) {
        return res.status(400).json({
          success: false,
          error: 'A user with that email already exists'
        });
      }

      const user = await User.create({
        name,
        email: normalizedEmail,
        password,
        phone,
        role: role || 'client',
        company
      });

      return sendTokenResponse(user, 201, res);
    } else {
      // In-memory fallback
      if (inMemoryUsers.has(normalizedEmail)) {
        return res.status(400).json({
          success: false,
          error: 'A user with that email already exists'
        });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = {
        _id: 'usr_' + Date.now().toString(36),
        name,
        email: normalizedEmail,
        password: hashedPassword,
        phone: phone || '',
        role: role || 'client',
        company: company || 'Enterprise Client'
      };

      inMemoryUsers.set(normalizedEmail, newUser);
      return sendTokenResponse(newUser, 201, res);
    }
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message
    });
  }
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        error: 'Please provide email and password'
      });
    }

    const normalizedEmail = email.toLowerCase().trim();

    if (isDbConnected()) {
      const user = await User.findByCredentials(normalizedEmail, password);
      return sendTokenResponse(user, 200, res);
    } else {
      const user = inMemoryUsers.get(normalizedEmail);
      if (!user) {
        return res.status(401).json({
          success: false,
          error: 'Invalid email or password'
        });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({
          success: false,
          error: 'Invalid email or password'
        });
      }

      return sendTokenResponse(user, 200, res);
    }
  } catch (err) {
    res.status(401).json({
      success: false,
      error: err.message || 'Invalid email or password'
    });
  }
};

// @desc    Get current logged in user
// @route   GET /api/auth/me
// @access  Private
exports.getMe = async (req, res, next) => {
  try {
    if (isDbConnected()) {
      const user = await User.findById(req.user.id);
      return res.status(200).json({
        success: true,
        data: user
      });
    } else {
      const user = Array.from(inMemoryUsers.values()).find(u => u._id === req.user.id);
      return res.status(200).json({
        success: true,
        data: user || req.user
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
};

// @desc    Log user out / clear cookie
// @route   GET /api/auth/logout
// @access  Public
exports.logout = async (req, res, next) => {
  res.cookie('token', 'none', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true
  });

  res.status(200).json({
    success: true,
    message: 'User logged out successfully'
  });
};
