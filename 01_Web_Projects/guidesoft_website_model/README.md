# GuideSoft Website - React Version

This is a React.js conversion of the GuideSoft HTML website template. The project has been completely converted from static HTML to a modern React application with routing and component-based architecture.

## 🚀 Features

- **Modern React Architecture**: Built with React 18 and functional components
- **Responsive Design**: Mobile-first responsive design with CSS Grid and Flexbox
- **Routing**: Client-side routing with React Router v6
- **Component-Based**: Modular, reusable components for maintainability
- **Performance Optimized**: Optimized for performance with modern React patterns
- **Cross-Browser Compatible**: Works across all modern browsers

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.js       # Main navigation header
│   ├── Footer.js       # Site footer
│   ├── Header.css      # Header styles
│   └── Footer.css      # Footer styles
├── pages/              # Page components
│   ├── Home.js         # Homepage
│   ├── AboutUs01.js    # About us page
│   ├── ContactUs.js    # Contact page
│   ├── ItServices.js   # Services page
│   ├── PlaceholderPage.js # Reusable placeholder component
│   └── ...             # All other page components
├── App.js              # Main app component with routing
├── index.js            # Application entry point
└── index.css           # Global styles
```

## 🛠️ Technologies Used

- **React 18**: Latest React with hooks and modern patterns
- **React Router v6**: Client-side routing
- **CSS3**: Modern CSS with Grid, Flexbox, and animations
- **JavaScript ES6+**: Modern JavaScript features
- **Responsive Design**: Mobile-first approach

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd guidesoft-website-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## 📱 Available Pages

### Main Pages
- **Home** (`/`) - Main homepage with hero section and demos
- **About Us** (`/about-us-01`, `/about-us-02`) - Company information
- **Services** (`/it-services`) - IT services overview
- **Contact** (`/contact-us`) - Contact information and form

### Demo Pages
- Modern IT Company (`/index-modern-it-company`)
- Cybersecurity (`/index-cybersecurity`)
- Machine Learning (`/index-machine-learning`)
- Software Innovation (`/index-software-innovation`)
- And many more...

### Element Pages
- Accordions (`/element-accordion`)
- Buttons (`/element-buttons`)
- Counters (`/element-counters`)
- Progress Bars (`/element-progress-bar`)
- And many more UI elements...

## 🎨 Customization

### Styling
- Global styles are in `src/index.css`
- Component-specific styles are in separate CSS files
- Uses CSS custom properties for consistent theming
- Responsive breakpoints for mobile, tablet, and desktop

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route in `src/App.js`
3. Import and use the component

### Modifying Components
- Components are modular and can be easily modified
- Use the `PlaceholderPage` component for quick page creation
- Follow the existing component structure for consistency

## 🔧 Development

### Scripts
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (not recommended)

### Code Style
- Use functional components with hooks
- Follow React best practices
- Maintain consistent naming conventions
- Use semantic HTML elements

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1199px
- **Desktop**: ≥ 1200px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support and questions, please contact the development team or refer to the project documentation.

## 🔄 Migration Notes

This React version maintains the same visual design and functionality as the original HTML template while providing:
- Better performance through React's virtual DOM
- Improved maintainability with component-based architecture
- Enhanced user experience with client-side routing
- Modern development workflow and tooling

---

**Note**: This is a complete conversion from HTML to React. All original HTML files have been converted to React components with equivalent functionality and styling.
