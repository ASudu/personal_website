# Sudarshan Anand Portfolio - JSX Version

This is a React/TypeScript conversion of the original HTML/CSS/JavaScript portfolio website for Sudarshan Anand.

## Project Structure

```
src/
├── components/
│   └── Layout.tsx          # Main layout component with navigation
├── pages/
│   ├── Home.tsx           # Home page component
│   ├── Blog.tsx           # Blog page component
│   ├── Contact.tsx        # Contact page component
│   ├── Projects.tsx       # Projects page component
│   ├── Experience.tsx     # Edu & Experience page component
│   └── ThankYou.tsx       # Thank you page component
├── hooks/
│   └── useFerrisWheel.ts  # Custom hook for navigation functionality
├── App.tsx                # Main app component with routing
├── main.tsx              # Entry point
└── index.css             # All CSS styles from original style.css
```

## Features

- **Interactive Navigation**: Ferris wheel-style rotating navigation system
- **Dark/Light Theme**: Toggle between dark and light themes with persistence
- **Responsive Design**: Works on desktop and mobile devices
- **Smooth Scrolling**: Animated transitions between sections
- **Contact Form**: Functional contact form using FormSubmit
- **React Router**: Client-side routing between pages

## Setup Instructions

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

4. **Preview Production Build**:
   ```bash
   npm run preview
   ```

## Key Differences from Original

### HTML to JSX Conversion
- Converted all HTML files to React functional components
- Replaced `class` with `className`
- Converted inline styles to React style objects
- Used React hooks for state management

### JavaScript to TypeScript
- Added TypeScript interfaces for props
- Converted JavaScript functions to TypeScript
- Created custom hooks for complex functionality

### Navigation System
- Converted the original FerrisWheelNavigation class to a React hook
- Integrated with React Router for client-side navigation
- Maintained all original animation and interaction behavior

### Asset Management
- Moved assets to `public/assets/` for Vite to serve
- Updated image paths to work with Vite's asset handling

### Styling
- Kept all original CSS intact in `src/index.css`
- Maintained the same visual design and animations
- Preserved theme switching functionality

## Technologies Used

- **React 18**: Modern React with functional components and hooks
- **TypeScript**: Type-safe JavaScript
- **Vite**: Fast build tool and development server
- **React Router**: Client-side routing
- **Lucide React**: Icon library (replacing Lucide CDN)
- **CSS**: Original styling preserved

## Development Notes

The JSX version maintains complete feature parity with the original HTML version while providing:
- Better component organization
- Type safety with TypeScript
- Modern React patterns
- Improved developer experience
- Better maintainability and scalability

All original functionality including the rotating navigation, theme switching, smooth scrolling, and contact form remains intact.
