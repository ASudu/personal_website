import React from 'react';
import Layout from '../components/Layout';

const Publications: React.FC = () => {
  return (
    <Layout title="Publications | Sudarshan Anand" activePage="publications">
      <div id="publications-content">
        <h1>Publications</h1>
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
      </div>
    </Layout>
  );
};

export default Publications;
