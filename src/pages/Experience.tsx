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
              <div className="education-item">
                <div className="university-logo">
                  <img 
                    src="/assets/images/gatech-logo.png" 
                    alt="Georgia Tech Logo"
                  />
                </div>
                <div className="education-details" style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                    M.S. Computational Science and Engineering
                  </h4>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    Georgia Institute of Technology, Atlanta, USA
                  </p>
                  <p style={{ fontSize: '1rem' }}>
                    <strong>Duration:</strong> Aug 2024 - May 2026 (Expected)
                  </p>
                  <p style={{ fontSize: '1rem' }}>
                    <strong>Focus areas:</strong> Medical Imaging, Public Health, ML, DL
                  </p>
                </div>
              </div>

              <div className="education-item">
                <div className="university-logo">
                  <img 
                    src="/assets/images/bits-logo.png" 
                    alt="BITS Pilani Logo"
                  />
                </div>
                <div className="education-details" style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                    M.Sc. Mathematics + B.E. Computer Science (Dual Degree)
                  </h4>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    Birla Institute of Technology and Science, Pilani, India
                  </p>
                  <p style={{ fontSize: '1rem' }}>
                    <strong>Duration:</strong> Aug 2019 - Aug 2024
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
              <div className="experience-item" style={{ marginBottom: '2.5rem' }}>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                  AI Product Development Intern
                </h4>
                <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)', marginBottom: '0.3rem' }}>
                  Rezolve.ai
                </p>
                <p style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
                  <strong>Duration:</strong> Start Date - Present
                </p>
                <ul style={{ fontSize: '1rem', marginLeft: '1.5rem' }}>
                  <li>Developed AI-powered product features</li>
                  <li>Collaborated with cross-functional teams</li>
                  <li>Implemented machine learning algorithms</li>
                </ul>
              </div>

              <div className="experience-item" style={{ marginBottom: '2.5rem' }}>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                  AI Researcher
                </h4>
                <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)', marginBottom: '0.3rem' }}>
                  Responsible-AI for Decision Making Team, Georgia Tech
                </p>
                <p style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
                  <strong>Duration:</strong> Start Date - Present
                </p>
                <ul style={{ fontSize: '1rem', marginLeft: '1.5rem' }}>
                  <li>Research in healthcare AI applications</li>
                  <li>Explainable AI methodologies</li>
                  <li>Graph machine learning techniques</li>
                </ul>
              </div>

              <div className="experience-item" style={{ marginBottom: '2.5rem' }}>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                  Volunteer Position / Previous Role
                </h4>
                <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)', marginBottom: '0.3rem' }}>
                  Organization Name
                </p>
                <p style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
                  <strong>Duration:</strong> Start Date - End Date
                </p>
                <ul style={{ fontSize: '1rem', marginLeft: '1.5rem' }}>
                  <li>Key responsibility or achievement</li>
                  <li>Another important contribution</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Experience;
