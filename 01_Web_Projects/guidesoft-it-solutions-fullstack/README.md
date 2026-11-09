# Guidesoft IT Solutions - Fullstack Web & Mobile Application

A comprehensive fullstack application built for Guidesoft IT Solutions, featuring a modern web application, mobile app, and backend API with payment gateway integration.

## 🚀 Features

- **Modern Web Application** - Built with Next.js 14, React 18, and TypeScript
- **Animated UI/UX** - Beautiful animations using Framer Motion and AOS
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Backend API** - RESTful API built with Node.js and Express
- **Database** - MongoDB with Mongoose ODM
- **Payment Gateway** - Integrated UPI payments with Razorpay
- **Authentication** - JWT-based authentication system
- **Mobile App** - React Native application (planned)
- **Real-time Features** - WebSocket support for live updates

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, AOS
- **Icons**: React Icons
- **State Management**: React Context API
- **Form Handling**: React Hook Form
- **HTTP Client**: Axios

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Validation**: express-validator
- **Security**: Helmet, CORS, Rate Limiting
- **File Upload**: Multer
- **Email**: Nodemailer
- **Payment**: Razorpay, Stripe

### Mobile (Planned)
- **Framework**: React Native
- **Navigation**: React Navigation
- **State Management**: Redux Toolkit
- **UI Components**: Native Base / React Native Elements

## 📁 Project Structure

```
guidesoft-it-solutions/
├── frontend/                 # Next.js Frontend Application
│   ├── app/                 # Next.js 14 App Router
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── components/          # React components
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Hero.tsx         # Hero section
│   │   ├── ServicesSection.tsx
│   │   └── ...
│   ├── public/             # Static assets
│   ├── styles/             # Additional styles
│   ├── utils/              # Utility functions
│   └── package.json
├── backend/                # Express.js Backend API
│   ├── src/
│   │   ├── config/         # Configuration files
│   │   ├── controllers/    # Route controllers
│   │   ├── middleware/     # Custom middleware
│   │   ├── models/         # Database models
│   │   ├── routes/         # API routes
│   │   └── utils/          # Utility functions
│   ├── uploads/            # File uploads directory
│   ├── server.js           # Main server file
│   └── package.json
├── mobile/                 # React Native Mobile App (Planned)
├── shared/                 # Shared utilities and types
└── package.json           # Root package.json
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas)
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd guidesoft-it-solutions
   ```

2. **Install dependencies for all projects:**
   ```bash
   npm run install:all
   ```

   Or install manually:
   ```bash
   # Root dependencies
   npm install
   
   # Frontend dependencies
   cd frontend && npm install
   
   # Backend dependencies
   cd ../backend && npm install
   ```

3. **Environment Setup:**

   **Backend Environment (.env):**
   ```bash
   cd backend
   cp .env.example .env
   ```
   
   Edit `.env` with your configuration:
   ```env
   # Database
   MONGODB_URI=mongodb://localhost:27017/guidesoft-it
   
   # JWT
   JWT_SECRET=your-super-secure-jwt-secret-key-here
   JWT_EXPIRE=7d
   
   # Server
   NODE_ENV=development
   PORT=5000
   
   # Payment Gateways
   RAZORPAY_KEY_ID=your-razorpay-key-id
   RAZORPAY_KEY_SECRET=your-razorpay-key-secret
   
   # Email (Optional)
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

4. **Database Setup:**
   - Install and start MongoDB locally, or
   - Create a MongoDB Atlas account and get connection string
   - Update `MONGODB_URI` in your `.env` file

5. **Start the development servers:**

   **Option 1: Start both frontend and backend together**
   ```bash
   npm run dev
   ```

   **Option 2: Start individually**
   ```bash
   # Terminal 1 - Backend
   npm run backend:dev
   
   # Terminal 2 - Frontend
   npm run frontend:dev
   ```

6. **Access the application:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - API Health Check: http://localhost:5000/health

## 📱 Services Overview

### Core Services
- **Web Development** - Custom web applications
- **Software Development** - End-to-end software solutions
- **UI/UX Design** - Beautiful and intuitive interfaces
- **eCommerce Development** - Complete online store solutions
- **Full Stack Development** - Complete web solutions
- **Cross Platform Development** - React Native & Flutter
- **Data Engineering** - Data pipeline and analytics
- **IT Consulting** - Strategic technology consulting

### App Development
- Android App Development
- iOS App Development
- IoT App Development
- Native App Development
- Flutter App Development
- Progressive Web Apps
- Enterprise App Development

### Travel Technology Solutions
- Travel Portal Development
- Hotel Booking Engine
- Flight Booking Engine
- B2B/B2C Travel Portals
- GDS Integration
- Travel API Integration

### Hire Developers
- Frontend Developers
- Backend Developers
- Mobile Developers
- Full Stack Developers
- DevOps Engineers
- Remote Teams

## 💳 Payment Integration

The application supports multiple payment methods:

- **UPI Payments** (Primary for Indian market)
- **Credit/Debit Cards**
- **Net Banking**
- **Digital Wallets**
- **International Cards** (via Stripe)

### UPI Integration Features:
- Real-time payment processing
- Payment verification
- Automatic invoice generation
- Refund management
- Payment analytics
- Webhook handling

## 🔧 Development

### Available Scripts

**Root Level:**
- `npm run dev` - Start both frontend and backend
- `npm run frontend:dev` - Start frontend only
- `npm run backend:dev` - Start backend only
- `npm run install:all` - Install all dependencies
- `npm run build` - Build frontend for production

**Frontend:**
- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

**Backend:**
- `npm run dev` - Development server with nodemon
- `npm start` - Production server
- `npm test` - Run tests

### Adding New Features

1. **Frontend Components:**
   ```tsx
   // components/NewComponent.tsx
   'use client'
   
   import { motion } from 'framer-motion'
   
   const NewComponent = () => {
     return (
       <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         className="p-4"
       >
         {/* Component content */}
       </motion.div>
     )
   }
   
   export default NewComponent
   ```

2. **Backend Routes:**
   ```javascript
   // backend/src/routes/newRoute.js
   const express = require('express');
   const router = express.Router();
   
   router.get('/', (req, res) => {
     res.json({ message: 'New route' });
   });
   
   module.exports = router;
   ```

3. **Database Models:**
   ```javascript
   // backend/src/models/NewModel.js
   const mongoose = require('mongoose');
   
   const NewSchema = new mongoose.Schema({
     // Schema definition
   }, {
     timestamps: true
   });
   
   module.exports = mongoose.model('NewModel', NewSchema);
   ```

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `POST /api/auth/forgot-password` - Forgot password

### Payments
- `POST /api/payments/create` - Create payment
- `POST /api/payments/verify` - Verify payment
- `GET /api/payments` - Get payments (Admin)
- `GET /api/payments/:id` - Get single payment
- `POST /api/payments/webhook/razorpay` - Razorpay webhook

### Services
- `GET /api/services` - Get all services
- `GET /api/services/:id` - Get single service
- `POST /api/services` - Create service (Admin)

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Connect your repository
2. Set build command: `npm run build`
3. Set output directory: `.next`
4. Configure environment variables

### Backend (Railway/Heroku/DigitalOcean)
1. Set up MongoDB Atlas
2. Configure environment variables
3. Deploy using platform-specific instructions

### Environment Variables for Production:
```env
NODE_ENV=production
MONGODB_URI=mongodb+srv://...
JWT_SECRET=production-secret
FRONTEND_URL=https://your-domain.com
```

## 🔐 Security Features

- **Rate Limiting** - Prevents API abuse
- **CORS Protection** - Configured for specific origins
- **Helmet.js** - Security headers
- **JWT Authentication** - Secure token-based auth
- **Input Validation** - express-validator
- **Password Hashing** - bcryptjs
- **Account Lockout** - Protection against brute force

## 📊 Monitoring & Analytics

- **Payment Analytics** - Transaction tracking
- **User Analytics** - User behavior tracking
- **Performance Monitoring** - API response times
- **Error Logging** - Comprehensive error tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support, email support@guidesoft-it.com or create an issue in this repository.

## 🎯 Roadmap

- [ ] Complete authentication system
- [ ] Payment gateway integration
- [ ] Mobile app development
- [ ] Admin dashboard
- [ ] Real-time chat support
- [ ] Multi-language support
- [ ] Analytics dashboard
- [ ] API documentation with Swagger

---

**Made with ❤️ by Guidesoft IT Solutions**