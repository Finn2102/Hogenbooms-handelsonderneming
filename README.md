# Hogenbooms Handelsonderneming - Business Website

A modern, responsive business website built for Hogenbooms Handelsonderneming, a Dutch industrial trading company.

## Technology Stack

- **React** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing

## Features

✅ Responsive mobile-first design
✅ Modern and professional UI
✅ Reusable React components
✅ Product showcase with grid layout
✅ Contact form (frontend only)
✅ Smooth navigation and animations
✅ All content in Dutch
✅ Production-ready code structure

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header with mobile menu
│   ├── Hero.jsx            # Hero section with CTA
│   ├── ProductCard.jsx     # Product card component
│   ├── ProductGrid.jsx     # Product grid layout
│   ├── AboutUs.jsx         # Company information
│   ├── Contact.jsx         # Contact section with form
│   └── Footer.jsx          # Footer with links
├── data/
│   └── products.js         # Mock product data
├── App.jsx                 # Main app component
├── main.jsx                # React entry point
└── index.css               # Global styles with Tailwind

public/                      # Static assets

vite.config.js              # Vite configuration
tailwind.config.js          # Tailwind CSS configuration
postcss.config.js           # PostCSS configuration
index.html                  # HTML entry point
```

## Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation Steps

1. **Clone or navigate to the project directory**
   ```bash
   cd "C:\Development\Hogenbooms-handelsonderneming"
   ```

2. **Install dependencies** (if not already installed)
   ```bash
   npm install
   ```

## Running the Project

### Development Server

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The compiled files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Sections & Features

### Header / Navigation
- Sticky navigation bar with company branding
- Mobile-responsive hamburger menu
- Smooth scroll navigation links
- Active state styling

### Hero Section
- Eye-catching headline and description
- Call-to-action button
- Professional gradient background
- Optimized for all screen sizes

### Products Section
- Responsive grid layout (1-3 columns based on screen size)
- Product cards with:
  - Product images (lazy loaded)
  - Product name and description
  - Price in EUR format (€X,XX)
  - "More info" buttons with hover effects
- 10 sample products with realistic Dutch names

### About Us Section
- Company story and mission
- Professional tone in Dutch
- Key benefits and values
- Visual hierarchy

### Contact Section
- Contact information (phone, email, address, hours)
- Fully functional contact form
- Form validation
- Success message feedback
- Responsive grid layout

### Footer
- Company information
- Quick navigation links
- Contact details
- Copyright and demo note
- Smooth scrolling links

## Customization Guide

### Modifying Products

Edit [src/data/products.js](src/data/products.js) to add or modify products:

```javascript
{
  id: 1,
  name: 'Product Name',
  description: 'Product description',
  price: 99.99,
  image: 'https://image-url.jpg',
}
```

### Changing Colors

Edit [tailwind.config.js](tailwind.config.js) to modify the color scheme:

```javascript
colors: {
  primary: '#1f2937',    // Main color
  accent: '#dc2626',     // Accent color
}
```

### Updating Company Information

- **Header**: Edit [src/components/Header.jsx](src/components/Header.jsx)
- **Hero**: Edit [src/components/Hero.jsx](src/components/Hero.jsx)
- **Contact**: Edit [src/components/Contact.jsx](src/components/Contact.jsx)
- **Footer**: Edit [src/components/Footer.jsx](src/components/Footer.jsx)

## Notes

- The contact form is frontend-only. To make it functional, connect it to a backend API
- Product images use external URLs from Unsplash. Update with your own images for production
- All text content is in Dutch as requested
- The site is optimized for both desktop and mobile viewing
- Production-ready code with clean component structure for easy extension

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This is a demo/concept website for Hogenbooms Handelsonderneming.
