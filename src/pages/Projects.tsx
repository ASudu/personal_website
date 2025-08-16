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
                    AIOps: Agentic-AI Alert management <p className='project-duration'>[Jun 2025 - Aug 2025]</p>
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
                    <li>Conducting a spatio-temporal analysis of the metadata for COVID-19 to assess and visualize trends over time</li>
                  </ul>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    Technologies used:
                    <br />
                    <span style={{ display: 'inline-flex', gap: '1.5em', marginTop: '0.5em' }}>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/assets/images/pandas-logo.png" alt="Pandas" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>Pandas</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/assets/images/numpy-logo.png" alt="NumPy" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>NumPy</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/assets/images/plotly-logo.png" alt="Plotly" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>Plotly</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/assets/images/gcloud-logo.png" alt="Google Cloud" style={{ height: '30px', marginBottom: '0.2em' }} />
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
                        <img src="/assets/images/pytorch-logo.png" alt="PyTorch" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>PyTorch</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/assets/images/pydicom-logo.png" alt="Pydicom" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>Pydicom</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/assets/images/pandas-logo.png" alt="Pandas" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>Pandas</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/assets/images/sklearn-logo.png" alt="Scikit-learn" style={{ height: '30px', marginBottom: '0.2em' }} />
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
                        <img src="/assets/images/networkx-logo.png" alt="NetworkX" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>NetworkX</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/assets/images/scipy-logo.png" alt="SciPy" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>SciPy</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/assets/images/pandas-logo.png" alt="Pandas" style={{ height: '30px', marginBottom: '0.2em' }} />
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
                        <img src="/assets/images/pydicom-logo.png" alt="Pydicom" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>Pydicom</span>
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
                        <img src="/assets/images/sklearn-logo.png" alt="Scikit-learn" style={{ height: '30px', marginBottom: '0.2em' }} />
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
                        <img src="/assets/images/matlab-logo.png" alt="MATLAB" style={{ height: '30px', marginBottom: '0.2em' }} />
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
                        <img src="/assets/images/networkx-logo.png" alt="NetworkX" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>NetworkX</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/assets/images/matplotlib-logo.png" alt="Matplotlib" style={{ height: '30px', marginBottom: '0.2em' }} />
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
                        <img src="/assets/images/networkx-logo.png" alt="NetworkX" style={{ height: '30px', marginBottom: '0.2em' }} />
                        <span style={{ fontSize: '0.95em', marginTop: '0.1em' }}>NetworkX</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/assets/images/matplotlib-logo.png" alt="Matplotlib" style={{ height: '30px', marginBottom: '0.2em' }} />
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
                        <img src="/assets/images/matlab-logo.png" alt="MATLAB" style={{ height: '30px', marginBottom: '0.2em' }} />
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
