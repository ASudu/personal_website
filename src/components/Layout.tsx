import React, { useEffect, useState } from 'react';
import { Moon, Sun} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useFerrisWheel } from '../hooks/useFerrisWheel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faGraduationCap, faFile, faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

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
            minHeight: '100vh',
            width: '100%',
            textAlign: 'center',
            position: 'absolute',
            top: 10,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          {/* Main title */}
          <h1 style={{ fontSize: '8vw', letterSpacing: '0.8rem', fontWeight: 700, margin: 0 }}>
            SUDARSHAN ANAND
          </h1>          
          {/* Subtitle and call-to-action */}
          <div className="hero-subtitle" style={{ textAlign: 'center', marginTop: '0.5rem' }}>
            <span style={{ fontSize: '1.5rem' }}>
              Graduate Teaching Assistant | MS CSE @ GT | AI Researcher
            </span>
            <br />
            <br />
            <span style={{ fontSize: '1.2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <FontAwesomeIcon icon={faEnvelope} style={{ verticalAlign: 'middle' }} /><a href="mailto:sanand315@gatech.edu" className='blog-link' style={{ verticalAlign: 'middle' }}>sanand315@gatech.edu</a>  |  <FontAwesomeIcon icon={faLocationDot} style={{ verticalAlign: 'middle' }} />Atlanta, GA
            </span>
          </div>
          <div className="contact-methods" style={{ marginTop: '0.5rem' }}>
            <a className="contact-btn" href="/assets/files/Sudarshan_Anand_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFile} style={{ verticalAlign: 'middle', scale: '1.2' }}/> Resume
            </a>
            <a className="contact-btn" href="https://www.linkedin.com/in/sudarshan-anand-360535211/" target="_blank" rel="noopener noreferrer">
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
                  <div className={`spoke ${activePage === 'about_me' ? 'active' : ''}`} data-angle="180" data-page="about_me">
                    <div className="spoke-line"></div>
                    <Link className="spoke-label" to="/">About Me</Link>
                  </div>
                  
                  {/* Blog spoke - 108 degrees */}
                  <div className={`spoke ${activePage === 'blog' ? 'active' : ''}`} data-angle="108" data-page="blog">
                    <div className="spoke-line"></div>
                    <Link className="spoke-label" to="/blog">Blog</Link>
                  </div>

                  {/* Fun corner spoke - 36 degrees */}
                  <div className={`spoke ${activePage === 'fun_corner' ? 'active' : ''}`} data-angle="36" data-page="fun_corner">
                    <div className="spoke-line"></div>
                    <Link className="spoke-label" to="/fun_corner">Fun corner</Link>
                  </div>
                  
                  {/* Projects spoke - 252 degrees */}
                  <div className={`spoke ${activePage === 'projects' ? 'active' : ''}`} data-angle="252" data-page="projects">
                    <div className="spoke-line"></div>
                    <Link className="spoke-label" to="/projects">Projects</Link>
                  </div>

                  {/* Experience spoke - 324 degrees */}
                  <div className={`spoke ${activePage === 'experience' ? 'active' : ''}`} data-angle="324" data-page="experience">
                    <div className="spoke-line"></div>
                    <Link className="spoke-label" to="/experience">Experience</Link>
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
