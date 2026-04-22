import React from 'react';
import Layout from '../components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAward,
  faCode,
  faDiagramProject,
  faLightbulb,
  // faMedal,
  faServer,
  faScrewdriverWrench,
  faTrophy,
  faHandHoldingMedical,
} from '@fortawesome/free-solid-svg-icons';

type CoreStrength = {
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
  featured?: boolean;
};

const coreStrengths: CoreStrength[] = [
  {
    title: 'Explainable AI (XAI)',
    description:
      'Architecting multimodal Concept Bottleneck Models (CBMs) to enhance interpretability and transparency in AI decision-making.',
    icon: <FontAwesomeIcon icon={faLightbulb} aria-hidden="true" />,
  },
  {
    title: 'Medical Imaging AI',
    description:
      'Have experience working with multiple imaging modalities (MRI, CT, X-ray) and building production-grade vision models for healthcare (Qure.ai). Worked on projects focused on early-detection of chronic diseases (Parkinson\'s Disease, Lung Cancer, Pneumonia, etc).',
    icon: <FontAwesomeIcon icon={faHandHoldingMedical} aria-hidden="true" />
  },
  {
    title: 'Full-Stack AI Products',
    description:
      (
      <>
        Designed end-to-end, user-centric AI-based applications, such as
        {' '}
        <a className="blog-link" href="https://www.rezolve.ai/product/rezolve-searchiq-ai-enterprise-search" target="_blank" rel="noopener noreferrer">
          SearchIQ
        </a>
        {' '}
        (RAG-based search) for employees to chat with company policy documents and knowledge bases. Integrated conversational memory and personalized search suggestions to enhance user experience and engagement.
      </>
    ),
    icon: <FontAwesomeIcon icon={faCode} aria-hidden="true" />,
  },
  {
    title: 'Open-Source Tooling',
    description:(
      <>
        Developed accessible, developer-focused repositories, such as
        {' '}
        <a className="blog-link" href="https://www.linkedin.com/posts/sanand315_github-adityalabsamay-activity-7320283839988203520-3oTn?utm_source=share&utm_medium=member_desktop&rcm=ACoAADWmYrgBzrqoeFrdHGaznPlKicAd2FLZMeY" target="_blank" rel="noopener noreferrer">
          Samay
        </a>
        {' '}
        (open-source Python library), which unifies training and inference across 10+ time-series foundation models, making it easier for research & developers to adopt and experiment with cutting-edge techniques in time-series analysis.
      </>
    ),
    icon: <FontAwesomeIcon icon={faScrewdriverWrench} aria-hidden="true" />,
    // featured: true,
  },
  {
    title: 'High-Performance Scaling',
    description:
      'Orchestrating distributed PyTorch workflows across HPC clusters to accelerate model training and data processing.',
    icon: <FontAwesomeIcon icon={faServer} aria-hidden="true" />,
  },
  {
    title: 'Graphs and Networks',
    description:(
      <>
        Developed
        {' '}
        <a className="blog-link" href="https://www.linkedin.com/posts/sanand315_github-adityalabsamay-activity-7320283839988203520-3oTn?utm_source=share&utm_medium=member_desktop&rcm=ACoAADWmYrgBzrqoeFrdHGaznPlKicAd2FLZMeY" target="_blank" rel="noopener noreferrer">
          GPLAN
        </a>
        {' '}
        , a python-based application for designing 2D-floor plans that optimize for user and design requirements using only graph algorithms and optimization. Led the research and development team involved in adding corridors to floorplans with the power of graph algorithms.
      </>
    ),
    icon: <FontAwesomeIcon icon={faDiagramProject} aria-hidden="true" />,
  },
];

type HonorAward = {
  title: string;
  details: React.ReactNode;
  icon: React.ReactNode;
};

const honorsAndAwards: HonorAward[] = [
  {
    title: 'IEEE BHI 2025 Data Challenge Competition Champion',
    details:(
      <>
        {''}
        <strong>Oct 2025</strong>
        <br />
        Developed an AI/ML-driven depression risk prediction model, winning the IEEE-sponsored competition (backed by NSF & Google)
        {''}
      </>
    ),
    icon: <FontAwesomeIcon icon={faTrophy} aria-hidden="true" />,
  },
  {
    title: 'NSF-EMBS-Google Young ProfessionalNextGen Scholar',
    details:(
      <>
        {''}
        <strong>Sept 2025</strong>
        <br />
        Recognized for high-impact Biomedical AI research, including an invitation to present at the IEEE BHI 2025 conference
        {''}
      </>
    ),
    icon: <FontAwesomeIcon icon={faAward} aria-hidden="true" />,
  },
  // {
  //   title: 'Award Placeholder 03',
  //   details: 'Add supporting details like organizer, rank, or recognition.',
  //   icon: <FontAwesomeIcon icon={faAward} aria-hidden="true" />,
  // },
];

const Home: React.FC = () => {
  return (
    <Layout title="About me | Sudarshan Anand" activePage="about_me">
      <div id="home-content">
        <h1>Hey, I'm Sudarshan Anand</h1>

        <div className="home-intro">
          {/* <ul>
            <br />
            <li>Graduate student at Georgia Tech (M.S. Computational Science and Engineering)</li>
            <br />
            <li>Graduate Researcher at Bio-MIBLab working on Multimodal Progression Tracking for Neurodegenerative Diseases</li>
            <br />
            <li>Graduate Teaching Assistant for Numerical Linear Algebra (CSE/MATH 6643)</li>
            <br />                                          
            <li> <strong>Research Interests:</strong><br/>
              <ul>
                <li>Multimodal AI for disease progression tracking</li>
                <li>AI for Medical Imaging</li>
                <li>AI for Public Health</li>
                <li>Graph ML</li>
              </ul>
            </li>
            <br />                      
            <li><strong>Hobbies:</strong><br/>
                Sketching, Painting, Photography, Writing poems, Badminton, Music
            </li>
          </ul>
           */}

            I am an <strong>NSF-EMBS-Google NextGen Scholar</strong> and <strong>AI researcher</strong> who focuses on building ML systems that are as interpretable as they are powerful.
            <br />
            <br />
            With dual Master's degrees in computational fields and hands-on experience in building scalable ML solutions, I bridge the gap between mathematical rigor and production-ready software.
        </div>

        <div className="home-outro">
          <p>
            I am currently seeking <strong>ML Research, Engineering, and Data Science</strong> roles focused on scalable, safety-aware AI.
          </p>
        </div>

        <section className="home-strengths" aria-labelledby="core-strengths-heading">
          <div className="home-section-heading">
            <p className="home-kicker">Core strengths</p>
            <h2 id="core-strengths-heading">Core Strengths &amp; Current Work</h2>
          </div>

          <ul className="home-strengths-grid">
            {coreStrengths.map((strength) => (
              <li
                key={strength.title}
                className={`home-strength-card${strength.featured ? ' home-strength-card--featured' : ''}`}
              >
                <div className="home-strength-card__header">
                  <span className="home-strength-icon" aria-hidden="true">
                    {strength.icon}
                  </span>
                  <h3>{strength.title}</h3>
                </div>
                <p>{strength.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="home-awards" aria-labelledby="honors-awards-heading">
          <div className="home-section-heading">
            <p className="home-kicker">Recognition</p>
            <h2 id="honors-awards-heading">Honors &amp; Awards</h2>
          </div>

          <ul className="home-awards-grid">
            {honorsAndAwards.map((award) => (
              <li key={award.title} className="home-award-tile">
                <span className="home-award-icon" aria-hidden="true">
                  {award.icon}
                </span>
                <h3>{award.title}</h3>
                <p>{award.details}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
