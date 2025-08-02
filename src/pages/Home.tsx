import React from 'react';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  return (
    <Layout title="About me | Sudarshan Anand" activePage="about_me">
      <div id="home-content" style={{ alignContent: 'center', padding: '2rem' }}>
        <h4>Hey, I'm Sudarshan Anand</h4>

        <div style={{ alignContent: 'center', fontSize: '1.2rem' }}>
          <ul>
            <li>Graduate student at Georgia Tech (M.S. Computational Science and Engineering)</li>
            <br />
            <li>AI-Product Development Intern at Rezolve.ai</li>
            <br />        
            <li>Member of Responsible-AI for Decision Making team (Georgia Tech)</li>
            <br />                                          
            <li> <strong>Research Interests:</strong> Healthcare AI, Explainable AI, Graph ML, Statistical modelling</li>
            <br />                      
            <li><strong>Hobbies:</strong> Sketching, painting, writing poems, badminton, and music</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
