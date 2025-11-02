import React from 'react';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  return (
    <Layout title="About me | Sudarshan Anand" activePage="about_me">
      <div id="home-content" style={{ alignContent: 'center', padding: '2rem' }}>
        <h4>Hey, I'm Sudarshan Anand</h4>

        <div style={{ alignContent: 'center', fontSize: '1.2rem' }}>
          <ul>
            <br />
            <li>Graduate student at Georgia Tech (M.S. Computational Science and Engineering)</li>
            <br />
            <li>Graduate Researcher at Bio-MIBLab working on Multimodal Progression Tracking for Neurodegenerative Diseases</li>
            <br />
            <li>Graduate Teaching Assistant for CSE Algorithms (CSE 6140)</li>
            <br />                                          
            <li> <strong>Research Interests:</strong><br/>
              Medical Imaging, Public Health, Drug discovery, Graph ML
            </li>
            <br />                      
            <li><strong>Hobbies:</strong><br/>
                Sketching, Painting, Photography, Writing poems, Badminton, Music
            </li>
          </ul>
        </div>

        <h4>News</h4>

        <div className="scrollable-container" tabIndex={0}>
          <div style={{ alignContent: 'center', fontSize: '1.2rem' }}>
            <ul>
              <li><strong>Oct 2025: 🎉 IEEE BHI 2025 Data Competition Champions! 🎉</strong></li>
              <br />
              <li><strong>Sept 2025:</strong> Recognized as IEEE BHI 2025 Young Professional NextGen Scholar (NSF, EMBS, Google Sponsored) 🌟🌟</li>
              <br />
              <li><strong>Sept 2025:</strong> Abstract titled <strong>"Metadata makes Big Data useful for AI/ML-ready, equitable pandemic response"</strong> accepted for Poster presentation at IEEE BHI 2025 🎉🎉</li>
              <br />
              <li><strong>Aug 2025:</strong> Completed an amazing Summer Internship at <a className='blog-link' href="https://www.rezolve.ai/" target="_blank" rel="noopener noreferrer">Rezolve.ai</a> as a AI Product Developer Intern</li>
              <br />
              <li><strong>June 2025:</strong> Started Summer Internship at <a className='blog-link' href="https://www.rezolve.ai/" target="_blank" rel="noopener noreferrer">Rezolve.ai</a> as AI Product Developer Intern.</li>
              <br />

            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
