# Guidesoft IT Solutions - Deployment Guide

## 🚀 Live Application

**Frontend URL:** https://nmqryfds.manus.space

## 📁 Project Structure

```
guidesoft-it-solutions/
├── frontend/
│   └── guidesoft-frontend/     # React application
│       ├── src/
│       ├── dist/               # Built files
│       └── package.json
├── backend/
│   └── guidesoft-api/          # Flask API
│       ├── src/
│       │   ├── main.py         # Main application
│       │   └── static/         # Frontend files
│       ├── venv/               # Virtual environment
│       └── requirements.txt
└── README.md
```

## 🛠️ Local Development Setup

### Frontend Development

```bash
cd frontend/guidesoft-frontend
pnpm install
pnpm run dev
```

### Backend Development

```bash
cd backend/guidesoft-api
source venv/bin/activate
pip install -r requirements.txt
python src/main.py
```

## 🌐 Production Deployment

### Frontend Deployment
- Built with Vite for optimal performance
- Deployed to: https://nmqryfds.manus.space
- Automatic HTTPS and CDN optimization

### Backend API
- Flask application with SQLite database
- JWT authentication system
- CORS enabled for cross-origin requests

## 🔐 Default Admin Credentials

```
Username: admin
Password: admin123
Email: admin@guideitsol.com
```

## 📊 API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration

### Data
- `GET /api/services` - Get services list
- `GET /api/projects` - Get projects portfolio
- `POST /api/contact` - Submit contact form
- `GET /api/health` - Health check

## 🎨 Features Implemented

### ✅ Frontend Features
- Modern React application with Vite
- Responsive design for all devices
- Dark/light mode toggle
- Smooth animations with Framer Motion
- Multi-color gradient themes
- Interactive technology stack visualization
- Professional landing page sections

### ✅ Backend Features
- Flask REST API
- SQLAlchemy ORM with SQLite
- JWT authentication
- User management system
- CORS support
- Health monitoring

### ✅ Design Elements
- Hero section with dynamic content
- Technology stack workflow diagram
- Development process visualization
- Partners and achievements showcase
- Professional branding and colors

## 🔧 Maintenance

### Database Management
- SQLite database auto-created on first run
- Admin user automatically seeded
- User data persisted across deployments

### Updates and Scaling
- Frontend: Rebuild and redeploy React app
- Backend: Update Flask code and restart service
- Database: Backup SQLite file before major updates

## 📞 Support Information

**Company:** Guidesoft IT Solutions  
**Address:** Inner ring road near to vijaya digitals, guntur  
**Email:** Info@guideitsol.com  
**Website:** https://nmqryfds.manus.space

## 🎯 Next Steps

1. **Content Management:** Add admin interface for content updates
2. **Mobile App:** Develop React Native companion app
3. **Analytics:** Integrate Google Analytics and user tracking
4. **SEO:** Optimize for search engines
5. **Performance:** Add caching and optimization
6. **Security:** Implement advanced security measures

---

**Status:** ✅ Production Ready  
**Last Updated:** July 16, 2025  
**Version:** 1.0.0

