import React, { useEffect, useState } from 'react';
import { Moon, Sun} from 'lucide-react';
import SidebarNav from './SidebarNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faGraduationCap, faFile, faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  activePage: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

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

  useEffect(() => {
    const onScroll = () => {
      const mainContent = document.getElementById('mainContent');
      if (!mainContent) {
        setShowBackToTop(false);
        return;
      }

      const threshold = mainContent.offsetTop + 40;
      setShowBackToTop(window.scrollY > threshold);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    const newIsDark = !isDarkMode;
    setIsDarkMode(newIsDark);
    document.body.classList.toggle('dark-mode', newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
  };

  // Scroll to a section by id
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

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
            minHeight: '100%',
            width: '100%',
            textAlign: 'center',
            padding: '0.75rem 0.75rem 0',
            boxSizing: 'border-box',
          }}
        >
          {/* Main title */}
          <h1 style={{ fontSize: '8vw', letterSpacing: '0.8rem', fontWeight: 700, margin: 0 }}>
            SUDARSHAN ANAND
          </h1>          
          {/* Subtitle and call-to-action */}
          <div 
            className="hero-subtitle" 
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              gap: '1rem', // Replaces the <br/> tags for clean, uniform spacing
              marginTop: '0.5rem',
              textAlign: 'center' 
            }}
          >
            {/* H2 gives this high priority for ATS parsers */}
            <h2 style={{ fontSize: '1.5rem', margin: 0, fontWeight: 600 }}>
              AI/ML Research Scientist | Product Developer | Data Scientist
            </h2>
            
            {/* H3 gives secondary priority */}
            <h3 style={{ fontSize: '1.3rem', margin: 0, fontWeight: 400 }}>
              MS Computational Science & Engineering @ Georgia Institute of Technology (Aug 2024 - May 2026)
            </h3>
            
            {/* Standard paragraph tag for contact info */}
            <p style={{ 
              fontSize: '1.2rem', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.75rem',
              margin: 0
            }}>
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:asudarshan14@gmail.com" className="blog-link">
                asudarshan14@gmail.com
              </a> 
              <span style={{ color: '#888' }}>|</span> 
              <FontAwesomeIcon icon={faLocationDot} />
              Atlanta, GA
            </p>
          </div>
          <div className="contact-methods" style={{ marginTop: '0.5rem' }}>
            <a className="contact-btn" href="/files/Sudarshan_Anand_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFile} style={{ verticalAlign: 'middle', scale: '1.2' }}/> Resume
            </a>
            <a className="contact-btn" href="https://www.linkedin.com/in/sanand315/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} style={{ verticalAlign: 'middle', scale: '1.2' }}/> LinkedIn
            </a>
            <a className="contact-btn" href="https://scholar.google.com/citations?user=0hOXk24AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGraduationCap} style={{ verticalAlign: 'middle', scale: '1.2' }}/> Google Scholar
            </a>
            <a className="contact-btn" href="https://github.com/ASudu" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} style={{ verticalAlign: 'middle', scale: '1.2' }} /> GitHub
            </a>
          </div> 
          {/* Button to scroll to main content */}
          <button 
            className="hero-scroll-btn" 
            onClick={scrollToSection.bind(null, 'mainContent')} 
            aria-label="Scroll to main content" 
            style={{ marginTop: '1rem' }}
          >
            <span>Explore More</span>
            <FontAwesomeIcon icon={faCircleChevronDown} style={{ verticalAlign: 'middle', scale: '1.2', padding: '0.5rem 0.5rem' }} />
          </button>
        </div>
      </section>

      {/* Main content section */}
      <section className="page-content" id="mainContent">
        <div className="container">
          {/* Left side - Sticky navigation */}
          <div className="right">
            <SidebarNav />
          </div>

          {/* Right side - Page content */}
          <div className="left">
            <div id="content">
              <div className="page-content active">
                {children}
              </div>
            </div>
          </div>
        </div>
      </section>

      <button
        className={`back-to-top-btn floating ${showBackToTop ? 'visible' : 'hidden'}`}
        onClick={scrollToSection.bind(null, 'mainContent')}
        aria-label="Back to section top"
      >
        Back to Top
      </button>

      {/* Footer */}
      <footer>
        <p style={{ fontSize: '0.75rem', justifyContent: 'center' }}>
          © 2026 Sudarshan Anand
        </p>
      </footer>
    </>
  );
};

export default Layout;
