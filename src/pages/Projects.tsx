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
                    Enterprise Knowledge Search <p className='project-duration'>[Jun 2025 - Aug 2025]</p>
                  </h4>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    <em>Rezolve AI (California, United States)</em>
                  </p>
                  <ul style={{ fontSize: '1rem', marginLeft: '1.5rem', marginBottom: '0.5rem', lineHeight: '1.5rem' }}>
                    <li>Launched as <a className='blog-link' href="https://www.rezolve.ai/rezolve-searchiq-ai-enterprise-search" target="_blank" rel="noopener noreferrer">SearchIQ</a></li>
                    <li>Co-led the end-to-end development of an Agentic AI knowledge search platform, enabling employees to retrieve mission-critical information with precision and reducing search time to under <strong>20 seconds</strong></li>
                    <li>Architected the solution to meet stringent functional and non-functional requirements, ensuring a robust and scalable enterprise product pipeline</li>
                    <li>Secured AI Trust and Oversight by implementing Explainability (XAI) principles and Human-in-the-Loop (HITL) governance standards throughout the deployment process</li>
                    <li>Presented the solution to potential clients and leading market research firms, earning strong positive feedback and interest</li>
                  </ul>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    Technologies used:
                    <br />
                    <span style={{ display: 'inline-flex', gap: '1.5em', marginTop: '0.5em' }}>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/images/flask-logo.png" alt="Flask" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>Flask</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/images/react-logo.png" alt="React" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>React</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/images/vite-logo.png" alt="Vite.js" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>Vite.js</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/images/neo4j-logo.png" alt="Neo4j" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>Neo4j</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/images/postgre-logo.png" alt="PostgreSQL" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>PostgreSQL</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/images/gcloud-logo.png" alt="Google Cloud" style={{ height: '30px', marginBottom: '0.2em' }} />
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
                    AIOps: Agentic-AI Alert management <p className='project-duration'>[Jun 2025 - Aug 2025]</p>
                  </h4>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    <em>Rezolve AI (California, United States)</em>
                  </p>
                  <ul style={{ fontSize: '1rem', marginLeft: '1.5rem', marginBottom: '0.5rem', lineHeight: '1.5rem' }}>
                    <li>Pioneered an Agentic AI solution for AITSM, automating critical infrastructure alert response and resolution planning</li>
                    <li>Ensured AI trust and oversight by implementing explainability principles and Human-in-the-Loop governance</li>
                    <li>Drove critical business momentum by showcasing the high-impact prototype to potential clients, securing favorable reception and impressing top-tier technology companies within the competitive AITSM domain</li>
                  </ul>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    Technologies used:
                    <br />
                    <span style={{ display: 'inline-flex', gap: '1.5em', marginTop: '0.5em' }}>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/images/fastapi-logo.png" alt="FastAPI" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>FastAPI</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/images/react-logo.png" alt="React" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>React</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/images/ts-logo.png" alt="TypeScript" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>TypeScript</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/images/nextjs-logo.png" alt="Next.js" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>Next.js</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/images/css-logo.png" alt="CSS3" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>CSS3</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/images/gcloud-logo.png" alt="Google Cloud" style={{ height: '30px', marginBottom: '0.2em' }} />
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

              {/* Project: BHI Data Competition */}
              <div className="project-item">
                <div className="education-details" style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                    DRiP: White-box framework for Depression Risk Prediction <p className='project-duration'>[Oct 2025]</p>
                  </h4>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    <em>Georgia Institute of Technology, Atlanta  (Georgia, United States)</em>
                  </p>
                  <ul style={{ fontSize: '1rem', marginLeft: '1.5rem', marginBottom: '0.5rem', lineHeight: '1.5rem' }}>
                    <li>Developed a white-box predictive modeling framework designed to achieve both interpretability and accuracy in forecasting depression risk trajectories</li>
                    <li>Utilized post-hoc interpretability methods to tie model predictions to clinical features</li>
                    <li><strong>Awarded 1st place in the Data competition at the <a className='blog-link' href="https://bhi.embs.org/2025/" target="_blank" rel="noopener noreferrer">IEEE-EMBS International Conference on Biomedical and Health Informatics (BHI'25)</a></strong></li>
                    <li>Refer our final presentation for more details: <a className='blog-link' href="https://docs.google.com/presentation/d/190kzEOiFaCnm2XHJRDECUGtTaQ7cz2kwBxHf3dLBy88/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Team VYSSION BHI'25 Presentation</a></li>
                  </ul>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    Technologies used:
                    <br />
                    <span style={{ display: 'inline-flex', gap: '1.5em', marginTop: '0.5em' }}>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/images/pandas-logo.png" alt="Pandas" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>Pandas</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/images/numpy-logo.png" alt="NumPy" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>NumPy</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/images/sklearn-logo.png" alt="Scikit-learn" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>Scikit-learn</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/images/SDV-logo.png" alt="SDV" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>Synthetic Data Vault</span>
                      </span>
                    </span>
                  </p>
                </div>
              </div>
              
              {/* Project: EpiCoV */}
              <div className="project-item">
                <div className="education-details" style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                    EpiCoV Metadata Analysis <p className='project-duration'>[May 2025 - present]</p>
                  </h4>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    <em>Edith Cowan University (Western Australia, Australia) [Remote]</em>
                  </p>
                  <ul style={{ fontSize: '1rem', marginLeft: '1.5rem', marginBottom: '0.5rem', lineHeight: '1.5rem' }}>
                    <li>Driving equitable data access and strategic public health policy through ongoing analysis of COVID-19 patient de-identified data and genomic data, identifying critical metadata gaps and informing new data-sharing protocols</li>
                    <li>Presenting poster titled <strong>Metadata makes Big Data useful for AI/ML-ready, equitable pandemic response</strong> at the <a className='blog-link' href="https://bhi.embs.org/2025/" target="_blank" rel="noopener noreferrer">IEEE-EMBS International Conference on Biomedical and Health Informatics (BHI'25)</a></li>
                  </ul>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    Technologies used:
                    <br />
                    <span style={{ display: 'inline-flex', gap: '1.5em', marginTop: '0.5em' }}>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/images/pandas-logo.png" alt="Pandas" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>Pandas</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/images/numpy-logo.png" alt="NumPy" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>NumPy</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/images/plotly-logo.png" alt="Plotly" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>Plotly</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/images/gcloud-logo.png" alt="Google Cloud" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>Google Cloud</span>
                      </span>
                    </span>
                  </p>
                </div>
              </div>

              {/* Project: VIP */}
              <div className="project-item">
                <div className="education-details" style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                    Responsible AI for Medical Imaging and Diagnosis <p className='project-duration'>[Jan 2025 - present]</p>
                  </h4>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    <em>Georgia Institute of Technology, Atlanta  (Georgia, United States)</em>
                  </p>
                  <ul style={{ fontSize: '1rem', marginLeft: '1.5rem', marginBottom: '0.5rem', lineHeight: '1.5rem' }}>
                    <li>Developing an AI product for whitebox detection in various radiology modalities (CT, MRI, X-ray)</li>
                    <li>Contact me for more details</li>
                  </ul>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    Technologies used:
                    <br />
                    <span style={{ display: 'inline-flex', gap: '1.5em', marginTop: '0.5em' }}>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/images/pytorch-logo.png" alt="PyTorch" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>PyTorch</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/images/pydicom-logo.png" alt="Pydicom" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>Pydicom</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/images/pandas-logo.png" alt="Pandas" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>Pandas</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/images/sklearn-logo.png" alt="Scikit-learn" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>Scikit-learn</span>
                      </span>
                    </span>
                  </p>
                </div>
              </div>

              {/* Project: EpiCourse */}
              <div className="project-item">
                <div className="education-details" style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                    Viral evolution in heterogeneous human contact networks <p className='project-duration'>[Oct 2024 - Dec 2024]</p>
                  </h4>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    <em>Georgia Institute of Technology, Atlanta  (Georgia, United States)</em>
                  </p>
                  <ul style={{ fontSize: '1rem', marginLeft: '1.5rem', marginBottom: '0.5rem', lineHeight: '1.5rem' }}>
                    <li>Designed a multi-strain epidemiological model (SI1I2I3SD) to simulate disease spread due to three viral strains evolving through genetic mutations</li>
                    <li>Disease dynamics in a heterogeneous host contact networks - effect of structural heterogenity (clusters, long-range connections) on viral competition and vice versa</li>
                    <li>Refer to the <a className='blog-link' href="https://sites.google.com/view/viralevolution-diseasedynamics/home" target="_blank" rel="noopener noreferrer">project website</a> for more details</li>
                    <li>Code repository: [<a className='blog-link' href="https://github.com/ASudu/Competing_pathogens_Heterogenous_networks" target="_blank" rel="noopener noreferrer">Github</a>]</li>
                  </ul>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    Technologies used:
                    <br />
                    <span style={{ display: 'inline-flex', gap: '1.5em', marginTop: '0.5em' }}>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/images/networkx-logo.png" alt="NetworkX" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>NetworkX</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/images/scipy-logo.png" alt="SciPy" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>SciPy</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/images/pandas-logo.png" alt="Pandas" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>Pandas</span>
                      </span>
                    </span>
                  </p>
                </div>
              </div>
              
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
                    <li>Evaluated the company's lung nodule detection product against human radiologist annotations</li>
                    <li>Optimized the product's pre-deployment performance, improving AI correlation by <strong>≈45%</strong> and enhancing clinical reliability</li>
                    <li>Performed end-to-end fine-tuning of state-of-the-art CNN architectures (DenseNet, ResNet, etc.) for lung nodule texture classification, boosting diagnostic accuracy</li>
                  </ul>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    Technologies used:
                    <br />
                    <span style={{ display: 'inline-flex', gap: '1.5em', marginTop: '0.5em' }}>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/images/pytorch-logo.png" alt="PyTorch" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>PyTorch</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/images/pydicom-logo.png" alt="Pydicom" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>Pydicom</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/images/monai-bg-logo.png" alt="MONAI" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>MONAI</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/images/pandas-logo.png" alt="Pandas" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>Pandas</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/images/sklearn-logo.png" alt="Scikit-learn" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>Scikit-learn</span>
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

              {/* Project: Red-teaming challenge (OpenAI) */}
              <div className="project-item">
                <div className="education-details" style={{ flex: 1 }}>
                  {/* Samay */}
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                    Red-Teaming Challenge - OpenAI gpt-oss-20b <p className='project-duration'>[Aug 2025 - Aug 2025]</p>
                  </h4>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    <em>Georgia Institute of Technology, Atlanta (Georgia, United States)</em>
                  </p>
                  <ul style={{ fontSize: '1rem', marginLeft: '1.5rem', marginBottom: '0.5rem', lineHeight: '1.5rem' }}>
                    <li>Participated in <a className='blog-link' href="https://www.kaggle.com/c/openai-gpt-oss-20b-red-teaming" target="_blank" rel="noopener noreferrer">OpenAI's Kaggle Hackathon</a>, involved testing vulnerabilities of its new open-source reasoning model gpt-oss-20b</li>
                    <li>Used techniques such as Oblique prompting to test model robustness against malicious prompts. Tested other aspects such as reward-hacking and improper tool use</li>
                    <li>Showcased vulnerabilities in model behavior and provided detailed reports to the OpenAI team via Kaggle writeup</li>
                    <li>Detailed writeup: [<a className='blog-link' href="https://kaggle.com/competitions/openai-gpt-oss-20b-red-teaming/writeups/stress-testing-gpt-oss-20b" target="_blank" rel="noopener noreferrer">Kaggle</a>]</li>
                  </ul>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    Technologies used:
                    <br />
                    <span style={{ display: 'inline-flex', gap: '1.5em', marginTop: '0.5em' }}>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/images/pytorch-logo.png" alt="PyTorch" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>PyTorch</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/images/hf-logo.png" alt="Transformers" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>Transformers</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/images/kaggle-logo.png" alt="Kaggle" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>Kaggle</span>
                      </span>
                    </span>
                  </p>
                </div>
              </div>

              {/* Project: Samay */}
              <div className="project-item">
                <div className="education-details" style={{ flex: 1 }}>
                  {/* Samay */}
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
                        <img src="/images/pytorch-logo.png" alt="PyTorch" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>PyTorch</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/images/hf-logo.png" alt="Transformers" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>Transformers</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/images/pandas-logo.png" alt="Pandas" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>Pandas</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/images/numpy-logo.png" alt="NumPy" style={{ height: '30px', marginBottom: '0.2em' }} />
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

              {/* Project: Queueing systems */}
              <div className="project-item">
                <div className="education-details" style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                    Fluctuations in queueing systems <p className='project-duration'>[Sep 2024 - Dec 2024]</p>
                  </h4>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    <em>Georgia Institute of Technology, Atlanta (Georgia, United States)</em>
                  </p>
                  <ul style={{ fontSize: '1rem', marginLeft: '1.5rem', marginBottom: '0.5rem', lineHeight: '1.5rem' }}>
                    <li>Analyzed stability behavior of famous multiclass-queueing networks such as Lu-Kumar network using Fluid-approximation modelling</li>
                    <li>Modelled multiclass-queueing networks such as Lu-Kumar network using Stochastic Differential Equations to study actual stability behvior of the system and compare inference from the fluid-approximation model</li>
                  </ul>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    Technologies used:
                    <br />
                    <span style={{ display: 'inline-flex', gap: '1.5em', marginTop: '0.5em' }}>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/images/matlab-logo.png" alt="MATLAB" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>MATLAB</span>
                      </span>
                    </span>
                  </p>
                </div>
              </div>
              
              {/* Project: GPLAN */}
              <div className="project-item">
                <div className="education-details" style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                    Automated generation of Circulations with a Rectangular floorplan <p className='project-duration'>[Aug 2021 - Aug 2024]</p>
                  </h4>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    <em>Birla Institute of Technology and Science, Pilani (Rajasthan, India)</em>
                  </p>
                  <ul style={{ fontSize: '1rem', marginLeft: '1.5rem', marginBottom: '0.5rem', lineHeight: '1.5rem' }}>
                    <li>Co-developed GPLAN, an application that uses graph theory and optimization-based techniques to generate cost-effective floorplans with customizable corridors</li>
                    <li>Led the R&D team involved in adding corridors to floorplans with the power of graph algorithms</li>
                    <li>Project turned stealth-mode startup: [<a className='blog-link' href="https://www.gplan.in/" target="_blank" rel="noopener noreferrer">GPLAN</a>]</li>
                  </ul>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    Technologies used:
                    <br />
                    <span style={{ display: 'inline-flex', gap: '1.5em', marginTop: '0.5em' }}>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/images/networkx-logo.png" alt="NetworkX" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>NetworkX</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/images/matplotlib-logo.png" alt="Matplotlib" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>Matplotlib</span>
                      </span>
                    </span>
                  </p>
                </div>
              </div>

              {/* Project: TUDA + TUE */}
              <div className="project-item">
                <div className="education-details" style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                    Analyzing Graph Theoretic properties of GNN Explainability methods <p className='project-duration'>[Aug 2023 - Dec 2023]</p>
                  </h4>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    <em>Birla Institute of Technology and Science, Pilani (Rajasthan, India)</em>
                  </p>
                  <ul style={{ fontSize: '1rem', marginLeft: '1.5rem', marginBottom: '0.5rem', lineHeight: '1.5rem' }}>
                    <li>Designed a framework to assess the structural properties of explanation subgraphs in Graph Neural Networks and benchmarked SOTA explanation methods (GNNExplainer, PGMExplainer, and GraphSVX) using the designed framework</li>
                    <li>This project was my Undergraduate Master's Thesis worked in collaboration with TU Eindhoven and TU Darmstadt</li>
                  </ul>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    Technologies used:
                    <br />
                    <span style={{ display: 'inline-flex', gap: '1.5em', marginTop: '0.5em' }}>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/images/networkx-logo.png" alt="NetworkX" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>NetworkX</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/images/matplotlib-logo.png" alt="Matplotlib" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>Matplotlib</span>
                      </span>
                    </span>
                  </p>
                </div>
              </div>

              {/* Project: Balram project */}
              <div className="project-item">
                <div className="education-details" style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                    Consequences of fear effect and prey refuge on the Turing patterns in a delayed predator-prey system <p className='project-duration'>[May 2022 - Jun 2022]</p>
                  </h4>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    <em>Birla Institute of Technology and Science, Pilani (Rajasthan, India)</em>
                  </p>
                  <ul style={{ fontSize: '1rem', marginLeft: '1.5rem', marginBottom: '0.5rem', lineHeight: '1.5rem' }}>
                    <li>Analyzed a modified Leslie-Gower prey-predator model, accounting for fear effect and prey refuge in the presence of diffusion and time delay</li>
                    <li>Solved the delayed spatiotemporal system using finite-element methods</li>
                  </ul>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    Technologies used:
                    <br />
                    <span style={{ display: 'inline-flex', gap: '1.5em', marginTop: '0.5em' }}>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/images/matlab-logo.png" alt="MATLAB" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>MATLAB</span>
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
                    Metadata makes Big Data useful for AI/ML-ready, equitable pandemic response <p className='project-duration'>[Sept 2025]</p>
                  </h4>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    <em>IEEE-EMBS International Conference on Biomedical and Health Informatics (BHI'25), Sept 2025</em>
                  </p>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    <strong>Authors:</strong> <strong>Sudarshan Anand</strong>, Miae Lee and Seshadri S. Vasan
                  </p>
                  <p style={{ fontSize: '1.2rem' }}>
                    [<a 
                    className='blog-link'
                    href="https://openreview.net/forum?id=MYlJfTsDpi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                    abstract
                    </a>]
                  </p>
                </div>
              </div>

              <div className="project-item">
                <div className="education-details" style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                    Why de-identified patient meta-data matters during pandemics <p className='project-duration'>[Sept 2025]</p>
                  </h4>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    <em>Scotland's Health Research and Innovation Conference, Sept 2025</em>
                  </p>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    <strong>Authors:</strong> <strong>Sudarshan Anand</strong>, Miae Lee and Seshadri S. Vasan
                  </p>
                  <p style={{ fontSize: '1.2rem' }}>
                    [<a 
                    className='blog-link'
                    href="https://api.ltb.io/show/ACMRT" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                    virtual poster
                    </a>]
                  </p>
                </div>
              </div>
              
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
