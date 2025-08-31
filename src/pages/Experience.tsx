import React, { useState } from 'react';
import Layout from '../components/Layout';

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'professional' | 'education' | 'volunteer'>('professional');

  return (
    <Layout title="Experience | Sudarshan Anand" activePage="experience">
      <div id="experience-content">
        <h4>Experience</h4>
        
        {/* Tab Navigation */}
        <div className="tab-navigation">
          <button
            className={`tab-btn ${activeTab === 'professional' ? 'active' : ''}`}
            onClick={() => setActiveTab('professional')}
          >
            Professional Experience
          </button>
          <button
            className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            Education
          </button>
          <button
            className={`tab-btn ${activeTab === 'volunteer' ? 'active' : ''}`}
            onClick={() => setActiveTab('volunteer')}
          >
            Volunteer Experience
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
                    src="/assets/images/gatech-logo.png" 
                    alt="Georgia Tech Logo"
                  />
                </div>
                <div className="education-details" style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                    Graduate Researcher @ Bio-MIBLab <p className='degree-duration'>[Aug 2025 - present]</p>
                  </h4>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    <em>Georgia Institute of Technology <br/> (Atlanta, Georgia, United States)</em>
                  </p>
                  <ul style={{ fontSize: '1rem', marginLeft: '1.5rem' }}>
                    <li>Working on Parkinson's Disease Diagnosis using functional and structural MRI data</li>
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
                    Graduate Teaching Assisstant <p className='degree-duration'>[Aug 2025 - present]</p>
                  </h4>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    <em>Georgia Institute of Technology <br/> (Atlanta, Georgia, United States)</em>
                  </p>
                  <ul style={{ fontSize: '1rem', marginLeft: '1.5rem' }}>
                    <li>GTA for the CSE algorithms course </li>
                  </ul>
                </div>
              </div>

              <div className="experience-item">
                <div className="org-logo">
                  <img 
                    src="/assets/images/rezolve-logo.png" 
                    alt="Rezolve AI Logo"
                  />
                </div>
                <div className="education-details" style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                    AI Product Development Intern <p className='degree-duration'>[Jun 2025 - Aug 2025]</p>
                  </h4>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    <em>Rezolve AI <br/> (California, United States) [Remote]</em>
                  </p>
                  <ul style={{ fontSize: '1rem', marginLeft: '1.5rem' }}>
                    <li>Built an Agentic AI knowledge search platform with explainability, driving rapid, transparent information access and attracting strong client interest</li>
                    <br />
                    <li>Developed an Agentic AI prototype for infrastructure alert triage and resolution, embedding explainability and human-in-the-loop workflows, and earned strong interest from top-tier AITSM firms</li>
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
                    <li>Conducting a spatio-temporal analysis of the metadata for COVID-19 to assess and visualize trends over time</li>
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
                    <li>Working in the Responsible AI for Decision Making in Healthcare and Engineering team</li>
                    <br />
                    <li>Developing an AI product for whitebox detection in various radiology modalities (CT, MRI, X-ray)</li>
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
                    Graduate Researcher @ AdityaLab <p className='degree-duration'>[Jan 2025 - Jun 2025]</p>
                  </h4>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    <em>Georgia Institute of Technology <br/> (Atlanta, Georgia, United States)</em>
                  </p>
                  <ul style={{ fontSize: '1rem', marginLeft: '1.5rem' }}>
                    <li>Co-developed <a className='blog-link' href="https://www.linkedin.com/posts/sudarshan-anand-360535211_github-adityalabsamay-activity-7320283839988203520--RJy?utm_source=share&utm_medium=member_desktop&rcm=ACoAADWmYrgBzrqoeFrdHGaznPlKicAd2FLZMeY" target="_blank" rel="noopener noreferrer">Samay</a>, an open-source python library to train and evaluate time-series foundational models</li>
                    <br />
                    <li>Finetuned MOIRAI and other SOTA Time-series foundational models</li>
                    <br />
                    <li>Benchmarked zero-shot and finetuned models for time-series forecasting on <a className='blog-link' href="https://huggingface.co/spaces/Salesforce/GIFT-Eval" target="_blank" rel="noopener noreferrer">GiftEval</a> benchmark</li>
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
                    <li>Evaluated the lung nodule detection product using clinical risk models (e.g., Brock model) to approximate malignancy probability based on nodule structural properties, and patient metadata</li>
                    <br/>
                    <li>Enhanced AI annotations, achieving a <strong>~45%</strong> improvement in correlation with ground truth</li>
                    <br/>
                    <li>Benchmarked image registration speed for lung nodule tracking in consecutive scans.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'volunteer' && (
            <div className="education-section">
              <div className="experience-item">
                <div className="org-logo">
                  <img 
                    src="/assets/images/manning-logo.png" 
                    alt="Manning Logo"
                  />
                </div>
                <div className="education-details" style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                    Manuscript Reviewer <p className='degree-duration'>[Mar 2025 - present]</p>
                  </h4>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    <em>Manning Publications</em>
                  </p>
                  <ul style={{ fontSize: '1rem', marginLeft: '1.5rem', marginBottom: '0.5rem', lineHeight: '1.5rem' }}>
                    <li>Reviewed the <a className='blog-link' href="https://www.manning.com/books/time-series-forecasting-using-foundation-models" target="_blank" rel="noopener noreferrer">Time Series Forecasting Using Foundation Models</a> Manuscript</li>
                  </ul>
                </div>
              </div>

              <div className="experience-item">
                <div className="org-logo">
                  <img 
                    src="/assets/images/crac-logo.png" 
                    alt="CrAC Logo"
                  />
                </div>
                <div className="education-details" style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                    Secretary, Creative Activities Club, the art club of BITS Pilani <p className='degree-duration'>[May 2021 - Jul 2022]</p>
                  </h4>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    <em>Birla Institute of Technology and Science, Pilani (Rajasthan, India)</em>
                  </p>
                  <ul style={{ fontSize: '1rem', marginLeft: '1.5rem', marginBottom: '0.5rem', lineHeight: '1.5rem' }}>
                    <li>Led the 50-member club to make large panels and structures, and conduct three events, including an art gallery for the university's annual technical fest APOGEE</li>
                    <li>Mentored the club members on various art styles and mediums and conducted weekly challenges to keep all club members, including me, in touch with our creative side</li>
                  </ul>
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
                    Core member, Student Faculty Council - Mathematics Department <p className='degree-duration'>[Sep 2020 - Dec 2020]</p>
                  </h4>
                  <p style={{ fontSize: '1.1rem', color: 'var(--theme-text-secondary)' }}>
                    <em>Birla Institute of Technology and Science, Pilani (Rajasthan, India)</em>
                  </p>
                  <ul style={{ fontSize: '1rem', marginLeft: '1.5rem', marginBottom: '0.5rem', lineHeight: '1.5rem' }}>
                    <li>Part of a team of 5-6 students who are responsible for bringing concerns and issues from the student body to the department faculty to get them resolved</li>
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
