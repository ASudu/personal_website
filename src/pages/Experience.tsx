import React, { useState } from 'react';
import Layout from '../components/Layout';

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'professional'>('education');

  return (
    <Layout title="Experience | Sudarshan Anand" activePage="experience">
      <div id="experience-content">
        <h4>Experience</h4>
        
        {/* Tab Navigation */}
        <div className="tab-navigation">
          <button
            className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            Education
          </button>
          <button
            className={`tab-btn ${activeTab === 'professional' ? 'active' : ''}`}
            onClick={() => setActiveTab('professional')}
          >
            Professional Experience
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === 'education' && (
            <div className="education-section">
              <div className="experience-item">
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

              <div className="experience-item">
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

          {activeTab === 'professional' && (
            <div className="professional-section">
              <div className="experience-item">
                <div className="org-logo">
                  <img 
                    src="/assets/images/rezolve-logo.png" 
                    alt="Rezolve AI Logo"
                  />
                </div>
                <div className="education-details" style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                    AI Product Development Intern <p className='degree-duration'>[Jun 2025 - present]</p>
                  </h4>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    <em>Rezolve AI <br/> (California, United States)</em>
                  </p>
                  <ul style={{ fontSize: '1rem', marginLeft: '1.5rem' }}>
                    <li>Developed AI-powered product features</li>
                    <li>Collaborated with cross-functional teams</li>
                    <li>Implemented machine learning algorithms</li>
                  </ul>
                </div>
              </div>

              <div className="experience-item">
                <div className="org-logo">
                  <img 
                    src="/assets/images/ecu-logo.png" 
                    alt="Edith Cowan University Logo"
                  />
                </div>
                <div className="education-details" style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                    Graduate Researcher <p className='degree-duration'>[May 2025 - present]</p>
                  </h4>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    <em>Edith Cowan University <br/> (Western Australia, Australia) [Remote]</em>
                  </p>
                  <ul style={{ fontSize: '1rem', marginLeft: '1.5rem' }}>
                    <li>Research in healthcare AI applications</li>
                    <li>Explainable AI methodologies</li>
                    <li>Graph machine learning techniques</li>
                  </ul>
                </div>
              </div>

              <div className="experience-item">
                <div className="org-logo">
                  <img 
                    src="/assets/images/gatech-logo.png" 
                    alt="Georgia Tech Logo"
                  />
                </div>
                <div className="education-details" style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                    Graduate Researcher @ Responsible-AI for Decision Making <p className='degree-duration'>[Jan 2025 - present]</p>
                  </h4>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    <em>Georgia Institute of Technology <br/> (Atlanta, Georgia, United States)</em>
                  </p>
                  <ul style={{ fontSize: '1rem', marginLeft: '1.5rem' }}>
                    <li>Research in healthcare AI applications</li>
                    <li>Explainable AI methodologies</li>
                    <li>Graph machine learning techniques</li>
                  </ul>
                </div>
              </div>

              <div className="experience-item">
                <div className="org-logo">
                  <img 
                    src="/assets/images/gatech-logo.png" 
                    alt="Georgia Tech Logo"
                  />
                </div>
                <div className="education-details" style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                    Graduate Researcher @ AdityaLab <p className='degree-duration'>[Jan 2025 - May 2025]</p>
                  </h4>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    <em>Georgia Institute of Technology <br/> (Atlanta, Georgia, United States)</em>
                  </p>
                  <ul style={{ fontSize: '1rem', marginLeft: '1.5rem' }}>
                    <li>Developing <a className='blog-link' href="https://www.linkedin.com/posts/sudarshan-anand-360535211_github-adityalabsamay-activity-7320283839988203520--RJy?utm_source=share&utm_medium=member_desktop&rcm=ACoAADWmYrgBzrqoeFrdHGaznPlKicAd2FLZMeY" target="_blank" rel="noopener noreferrer">Samay</a>, an open-source time-series library</li>
                    <li>Benchmarking LPTM against other SOTA Time-series foundational models (Chronos, TimesFM, MOIRAI, etc)</li>
                  </ul>
                </div>
              </div>

              <div className="experience-item">
                <div className="org-logo">
                  <img 
                    src="/assets/images/qure.ai-logo.png" 
                    alt="Qure.ai Logo"
                  />
                </div>
                <div className="education-details" style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                    AI Scientist Intern <p className='degree-duration'>[Jan 2024 - June 2024]</p>
                  </h4>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    <em>Qure.ai, Bangalore <br/> (Karnataka, India)</em>
                  </p>
                  <ul style={{ fontSize: '1rem', marginLeft: '1.5rem' }}>
                    <li>Research in healthcare AI applications</li>
                    <li>Explainable AI methodologies</li>
                    <li>Graph machine learning techniques</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Experience;
