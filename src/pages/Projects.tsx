import React, { useState } from 'react';
import Layout from '../components/Layout';

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'projects' | 'publications'>('projects');

  return (
    <Layout title="Projects | Sudarshan Anand" activePage="projects">
      <div id="projects-content">
        <h4>Projects</h4>
        
        {/* Tab Navigation */}
        <div className="tab-navigation">
          <button
            className={`tab-btn ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            Projects
          </button>
          <button
            className={`tab-btn ${activeTab === 'publications' ? 'active' : ''}`}
            onClick={() => setActiveTab('publications')}
          >
            Publications
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === 'projects' && (
            <div className="projects-section">
              <div className="project-item">
                <div className="org-logo">
                  <img 
                    src="/assets/images/gatech-logo.png" 
                    alt="Georgia Tech Logo"
                  />
                </div>
                <div className="education-details" style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                    M.S. Computational Science and Engineering <p className='degree-duration'>[Aug 2024 - present]</p>
                  </h4>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    <em>Georgia Institute of Technology, Atlanta <br/> (Georgia, United States)</em>
                  </p>
                  <p style={{ fontSize: '1rem' }}>
                    <strong>Focus areas:</strong> Medical Imaging, Public Health, ML, DL
                  </p>
                </div>
              </div>

              <div className="project-item">
                <div className="org-logo">
                  <img 
                    src="/assets/images/bits-logo.png" 
                    alt="BITS Pilani Logo"
                  />
                </div>
                <div className="education-details" style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                    M.Sc. Mathematics + B.E. Computer Science (Dual Degree) <p className='degree-duration'>[Aug 2019 - Aug 2024]</p>
                  </h4>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    <em>Birla Institute of Technology and Science, Pilani (Rajasthan, India)</em>
                  </p>
                  <p style={{ fontSize: '1rem' }}>
                    <strong>Focus areas:</strong> Graph theory, Graph ML. Responsible AI
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'publications' && (
            <div className="publications-section">
              <div className="project-item">
                <div className="education-details" style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                    Automated Generation of Circulations within a Floorplan <p className='project-duration'>[Apr 2025]</p>
                  </h4>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    <em>Artificial Intelligence for Engineering Design, Analysis and Manufacturing, Cambridge University Press, Apr 2025</em>
                  </p>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    <strong>Authors:</strong> Shiksha, <strong>Sudarshan Anand</strong>, Krishnendra Shekhawat and Karan Agrawal
                  </p>
                  <p style={{ fontSize: '1.2rem' }}>
                    [<a 
                    className='blog-link'
                    href="https://www.cambridge.org/core/journals/ai-edam/article/automated-generation-of-circulations-within-a-floorplan/17830B95C3A0B8120CE87C6F8610AA66?WT.mc_id=New%20Cambridge%20Alert%20-%20Articles" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                    paper
                    </a>]
                    [<a 
                    className='blog-link'
                    href="https://www.gplan.in/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                    website
                    </a>]
                  </p>
                </div>
              </div>

              <div className="project-item">
                <div className="education-details" style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                    Consequences of fear effect and prey refuge on the Turing patterns in a delayed predator-prey system <p className='project-duration'>[Dec 2022]</p>
                  </h4>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    <em>Chaos: An Interdisciplinary Journal of Nonlinear Science, AIP Publishing LLC, Dec 2022</em>
                  </p>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    <strong>Authors:</strong> Anshu, Balram Dubey, Sourav Kumar Sasmal and <strong>Sudarshan Anand</strong>
                  </p>
                  <p style={{ fontSize: '1.2rem' }}>
                    [<a 
                    className='blog-link'
                    href="https://doi.org/10.1063/5.0126782" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                    paper
                    </a>]
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
