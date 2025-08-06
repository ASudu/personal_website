# Sudarshan Anand Portfolio Website

This is a React/TypeScript portfolio website for Sudarshan Anand.

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

## Technologies Used

- **React 18**: Modern React with functional components and hooks
- **TypeScript**: Type-safe JavaScript
- **Vite**: Fast build tool and development server
- **React Router**: Client-side routing
- **CSS**: Original styling preserved