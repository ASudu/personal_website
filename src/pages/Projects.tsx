import React, { useState } from 'react';
import Layout from '../components/Layout';

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'agentic' | 'healthcare' | 'foundational' | 'mathematics' | 'publications'>('agentic');

  return (
    <Layout title="Projects | Sudarshan Anand" activePage="projects">
      <div id="projects-content">
        <h4>Projects</h4>
        
        {/* Tab Navigation */}
        <div className="tab-navigation">
          <button
            className={`tab-btn ${activeTab === 'agentic' ? 'active' : ''}`}
            onClick={() => setActiveTab('agentic')}
          >
            Agentic AI
          </button>
          <button
            className={`tab-btn ${activeTab === 'healthcare' ? 'active' : ''}`}
            onClick={() => setActiveTab('healthcare')}
          >
            Healthcare
          </button>
          <button
            className={`tab-btn ${activeTab === 'foundational' ? 'active' : ''}`}
            onClick={() => setActiveTab('foundational')}
          >
            Foundational Models
          </button>
          <button
            className={`tab-btn ${activeTab === 'mathematics' ? 'active' : ''}`}
            onClick={() => setActiveTab('mathematics')}
          >
            Mathematics
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

          {/* Agentic AI */}
          {activeTab === 'agentic' && (
            <div className="projects-section">

              {/* Project #1: Enterprise Search  */}
              <div className="project-item">
                <div className="education-details" style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                    Enterprise Knowledge Search <p className='project-duration'>[Jun 2025 - present]</p>
                  </h4>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    <em>Rezolve AI (California, United States)</em>
                  </p>
                  <ul style={{ fontSize: '1rem', marginLeft: '1.5rem', marginBottom: '0.5rem', lineHeight: '1.5rem' }}>
                    <li>Co-developed an Agentic AI-powered knowledge search platform enabling employees to retrieve information with speed and precision</li>
                    <li>Integrated explainability features to ensure transparency and trust in AI-driven recommendations</li>
                    <li>Presented the solution to potential clients and leading market research firms, earning strong positive feedback and interest</li>
                  </ul>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    Technologies used:
                    <br />
                    <span style={{ display: 'inline-flex', gap: '1.5em', marginTop: '0.5em' }}>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/assets/images/flask-logo.png" alt="Flask" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>Flask</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/assets/images/react-logo.png" alt="React" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>React</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/assets/images/vite-logo.png" alt="Vite.js" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>Vite.js</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/assets/images/neo4j-logo.png" alt="Neo4j" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>Neo4j</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/assets/images/postgre-logo.png" alt="PostgreSQL" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>PostgreSQL</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/assets/images/gcloud-logo.png" alt="Google Cloud" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>Google Cloud</span>
                      </span>
                    </span>
                  </p>
                </div>
              </div>
              
              {/* Project #2: AIOps  */}
              <div className="project-item">
                <div className="education-details" style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                    AIOps: Agentic-AI Alert management <p className='project-duration'>[Jun 2025 - present]</p>
                  </h4>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    <em>Rezolve AI (California, United States)</em>
                  </p>
                  <ul style={{ fontSize: '1rem', marginLeft: '1.5rem', marginBottom: '0.5rem', lineHeight: '1.5rem' }}>
                    <li>Built a prototype Agentic AI product to log, classify, triage, and generate resolution plans for infrastructure alerts using historical data</li>
                    <li>Integrated explainability principles and human-in-the-loop workflows to ensure trust and oversight</li>
                    <li>Showcased the prototype to potential clients, impressing top-tier tech companies in the AITSM domain</li>
                  </ul>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    Technologies used:
                    <br />
                    <span style={{ display: 'inline-flex', gap: '1.5em', marginTop: '0.5em' }}>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/assets/images/fastapi-logo.png" alt="FastAPI" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>FastAPI</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/assets/images/react-logo.png" alt="React" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>React</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/assets/images/ts-logo.png" alt="TypeScript" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>TypeScript</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/assets/images/nextjs-logo.png" alt="Next.js" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>Next.js</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/assets/images/css-logo.png" alt="CSS3" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>CSS3</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/assets/images/gcloud-logo.png" alt="Google Cloud" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>Google Cloud</span>
                      </span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Healthcare */}
          {activeTab === 'healthcare' && (
            <div className="projects-section">

              {/* Project: qCT */}
              <div className="project-item">
                <div className="education-details" style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                    Lung Nodule Malignancy Risk Evaluation <p className='project-duration'>[Jan 2024 - Jun 2024]</p>
                  </h4>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    <em>Qure.ai, Bangalore (Karnataka, India)</em>
                  </p>
                  <ul style={{ fontSize: '1rem', marginLeft: '1.5rem', marginBottom: '0.5rem', lineHeight: '1.5rem' }}>
                    <li>Evaluated the company's internal lung nodule detection product, applying clinical risk models (e.g., Brock model) to assess malignancy probability based on nodule size, texture, count, volume, and patient data</li>
                    <li>Fine-tuned the product for optimal pre-deployment performance, improving reliability and clinical readiness</li>
                    <li>Trained and optimized state-of-the-art CNN architectures (DenseNet, ResNet, etc.) from scratch`` for lung nodule texture classification, enhancing diagnostic accuracy</li>
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
                        <img src="/assets/images/monai-bg-logo.png" alt="MONAI" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>MONAI</span>
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

          {/* Foundational Models */}
          {activeTab === 'foundational' && (
            <div className="projects-section">

              {/* Project: Samay */}
              <div className="project-item">
                <div className="education-details" style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                    Samay: Time-series Foundational Models Library <p className='project-duration'>[Jan 2025 - Jun 2025]</p>
                  </h4>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    <em>Georgia Institute of Technology, Atlanta (Georgia, United States)</em>
                  </p>
                  <ul style={{ fontSize: '1rem', marginLeft: '1.5rem', marginBottom: '0.5rem', lineHeight: '1.5rem' }}>
                    <li>Co-developed <a className='blog-link' href="https://www.linkedin.com/posts/sudarshan-anand-360535211_github-adityalabsamay-activity-7320283839988203520--RJy?utm_source=share&utm_medium=member_desktop&rcm=ACoAADWmYrgBzrqoeFrdHGaznPlKicAd2FLZMeY" target="_blank" rel="noopener noreferrer">Samay</a>, an open-source python library to train and evaluate time-series foundational models</li>
                    <li>Finetuned MOIRAI and other SOTA Time-series foundational models</li>
                    <li>Benchmarked zero-shot and finetuned models for time-series forecasting on <a className='blog-link' href="https://huggingface.co/spaces/Salesforce/GIFT-Eval" target="_blank" rel="noopener noreferrer">GiftEval</a> benchmark</li>
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

          {/* Mathematics */}
          {activeTab === 'mathematics' && (
            <div className="projects-section">

              {/* Project: Samay */}
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
