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
                <div className="education-details" style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                    Samay: Time-series Foundational Models Library <p className='project-duration'>[Jan 2025 - Jun 2025]</p>
                  </h4>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    <em>Georgia Institute of Technology, Atlanta (Georgia, United States)</em>
                  </p>
                  <ul style={{ fontSize: '1rem', marginLeft: '1.5rem', marginBottom: '0.5rem', lineHeight: '1.5rem' }}>
                    <li>Contributed in the development of <a className='blog-link' href="https://www.linkedin.com/posts/sudarshan-anand-360535211_github-adityalabsamay-activity-7320283839988203520--RJy?utm_source=share&utm_medium=member_desktop&rcm=ACoAADWmYrgBzrqoeFrdHGaznPlKicAd2FLZMeY" target="_blank" rel="noopener noreferrer">Samay</a>, an open-source time-series library</li>
                    <li>Finetuned MOIRAI and other SOTA Time-series foundational models</li>
                    <li>Benchmarked zero-shot and finetuned models for time-series forecasting on GiftEval benchmark</li>
                    <li>Code repository: [<a className='blog-link' href="https://github.com/AdityaLab/Samay" target="_blank" rel="noopener noreferrer">Github</a>]</li>
                  </ul>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    Technologies used:
                    <br />
                    <span style={{ display: 'inline-flex', gap: '1.5em', marginTop: '0.5em' }}>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/assets/images/pytorch-logo.png" alt="PyTorch" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>PyTorch</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/assets/images/hf-logo.png" alt="Transformers" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>Transformers</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/assets/images/pandas-logo.png" alt="Pandas" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>Pandas</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/assets/images/numpy-logo.png" alt="NumPy" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>NumPy</span>
                      </span>
                    </span>
                  </p>
                </div>
              </div>

              <div className="project-item">
                <div className="education-details" style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                    Samay: Time-series Foundational Models Library <p className='project-duration'>[Jan 2025 - Jun 2025]</p>
                  </h4>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    <em>Georgia Institute of Technology, Atlanta (Georgia, United States)</em>
                  </p>
                  <ul style={{ fontSize: '1rem', marginLeft: '1.5rem', marginBottom: '0.5rem', lineHeight: '1.5rem' }}>
                    <li>Contributed in the development of <a className='blog-link' href="https://www.linkedin.com/posts/sudarshan-anand-360535211_github-adityalabsamay-activity-7320283839988203520--RJy?utm_source=share&utm_medium=member_desktop&rcm=ACoAADWmYrgBzrqoeFrdHGaznPlKicAd2FLZMeY" target="_blank" rel="noopener noreferrer">Samay</a>, an open-source time-series library</li>
                    <li>Finetuned MOIRAI and other SOTA Time-series foundational models</li>
                    <li>Benchmarked zero-shot and finetuned models for time-series forecasting on GiftEval benchmark</li>
                    <li>Code repository: [<a className='blog-link' href="https://github.com/AdityaLab/Samay" target="_blank" rel="noopener noreferrer">Github</a>]</li>
                  </ul>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    Technologies used:
                    <br />
                    <span style={{ display: 'inline-flex', gap: '1.5em', marginTop: '0.5em' }}>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/assets/images/pytorch-logo.png" alt="PyTorch" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>PyTorch</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/assets/images/hf-logo.png" alt="Transformers" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>Transformers</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/assets/images/pandas-logo.png" alt="Pandas" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>Pandas</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/assets/images/numpy-logo.png" alt="NumPy" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>NumPy</span>
                      </span>
                    </span>
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
