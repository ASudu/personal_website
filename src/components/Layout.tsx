import React, { useEffect, useState } from 'react';
import { Moon, Sun, MapPin, Mail, Linkedin, GraduationCap, LucideGithub } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useFerrisWheel } from '../hooks/useFerrisWheel';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  activePage: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title, activePage }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize the Ferris Wheel navigation system
  useFerrisWheel(activePage);

  useEffect(() => {
    // Set the browser tab title
    document.title = title;
    
    // Load theme preference from localStorage
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme === 'dark';
    setIsDarkMode(isDark);
    
    // Apply dark mode class to body if needed
    if (isDark) {
      document.body.classList.add('dark-mode');
    }
  }, [title]);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    const newIsDark = !isDarkMode;
    setIsDarkMode(newIsDark);
    document.body.classList.toggle('dark-mode', newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
  };

  // // Scroll from hero section to main content
  // const scrollToMain = () => {
  //   const mainSection = document.getElementById('mainContent');
  //   if (mainSection) {
  //     mainSection.scrollIntoView({ 
  //       behavior: 'smooth',
  //       block: 'start'
  //     });
  //   }
  // };

  return (
    <>
      {/* Page metadata */}
      <div>
        <title>{title}</title>
      </div>
      
      {/* Theme toggle button - fixed position */}
      <button id="themeToggle" onClick={toggleTheme} aria-label="Toggle theme">
        {isDarkMode ? <Sun size={22} /> : <Moon size={22} />}
      </button>

      {/* Hero/Landing section - full viewport height */}
      <section className="hero-section" id="hero">
        <div
          className="hero-content"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            width: '100%',
            textAlign: 'center',
          }}
        >
          {/* Main title */}
          <h1 style={{ fontSize: '8vw', letterSpacing: '0.8rem', fontWeight: 700, margin: 0 }}>
            SUDARSHAN ANAND
          </h1>
          
          {/* Subtitle and call-to-action */}
          <div className="hero-subtitle" style={{ textAlign: 'center', marginTop: '2rem' }}>
            <span style={{ fontSize: '1.5rem' }}>
              AI Product Dev Intern | MS CSE @ GT | AI Researcher
            </span>
            <br />
            <br />
            <span style={{ fontSize: '1.5rem' }}>
              <MapPin size={16} /> Atlanta, GA
            </span>
            <br />
            {/* Button to scroll to main content */}
            {/* <button 
              className="hero-bottom-btn" 
              onClick={scrollToMain} 
              aria-label="Scroll to main content" 
              style={{ marginTop: '1rem' }}
            >
              <span>Explore More</span>
            </button> */}
          </div>
          <div className="contact-methods" style={{ marginTop: '2rem' }}>
            <a className="contact-btn" href="mailto:sanand315@gatech.edu" target="_blank" rel="noopener noreferrer">
              <Mail size={20} /> Email
            </a>
            <a className="contact-btn" href="https://www.linkedin.com/in/sudarshan-anand-360535211/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} /> LinkedIn
            </a>
            <a className="contact-btn" href="https://github.com/ASudu" target="_blank" rel="noopener noreferrer">
              <LucideGithub size={20} /> GitHub
            </a>
            <a className="contact-btn" href="https://scholar.google.com/citations?user=0hOXk24AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
              <GraduationCap size={20} /> Google Scholar
            </a>
          </div> 
        </div>
      </section>

      {/* Main content section */}
      <section className="page-content" id="mainContent">
        <div className="container">
          {/* Left side - page content */}
          <div className="left">
            <div id="content">
              <div className="page-content active">
                {children}
              </div>
            </div>
          </div>

          {/* Right side - Navigation mindmap */}
          <div className="right">
            <div className="mindmap">
              {/* Center profile image */}
              <div className="center-wrapper">
                <Link to="/">
                  <img 
                    src="/assets/images/sudarshan_profile.svg" 
                    className="center-image" 
                    id="profileImage" 
                    style={{ cursor: 'pointer' }}
                    alt="Sudarshan Anand Profile"
                  />
                </Link>
              </div>
              
              {/* Rotating navigation spokes */}
              <div className="rotation-wrapper" id="rotationWrapper">
                <div className="spoke-system" id="spokeSystem">
                  {/* Home spoke - 180 degrees (top) */}
                  <div className={`spoke ${activePage === 'home' ? 'active' : ''}`} data-angle="180" data-page="home">
                    <div className="spoke-line"></div>
                    <Link className="spoke-label" to="/">Home</Link>
                  </div>
                  
                  {/* Blog spoke - 108 degrees */}
                  <div className={`spoke ${activePage === 'blog' ? 'active' : ''}`} data-angle="108" data-page="blog">
                    <div className="spoke-line"></div>
                    <Link className="spoke-label" to="/blog">Blog</Link>
                  </div>
                  
                  {/* Contact spoke - 36 degrees */}
                  <div className={`spoke ${activePage === 'contact' ? 'active' : ''}`} data-angle="36" data-page="contact">
                    <div className="spoke-line"></div>
                    <Link className="spoke-label" to="/contact">Contact</Link>
                  </div>
                  
                  {/* Projects spoke - 252 degrees */}
                  <div className={`spoke ${activePage === 'projects' ? 'active' : ''}`} data-angle="252" data-page="projects">
                    <div className="spoke-line"></div>
                    <Link className="spoke-label" to="/projects">Projects</Link>
                  </div>
                  
                  {/* Publications spoke - 324 degrees */}
                  <div className={`spoke ${activePage === 'publications' ? 'active' : ''}`} data-angle="324" data-page="publications">
                    <div className="spoke-line"></div>
                    <Link className="spoke-label" to="/publications">Publications</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p style={{ fontSize: '0.75rem', justifyContent: 'center' }}>
          © 2025 Sudarshan Anand
        </p>
      </footer>
    </>
  );
};

export default Layout;
