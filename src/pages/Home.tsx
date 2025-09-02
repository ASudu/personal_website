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
            <li>Graduate Researcher at Bio-MIBLab working on Parkinson's Disease Classification using fMRI scans</li>
            <br />
            <li>Graduate Teaching Assistant for CSE Algorithms (CSE 6140)</li>
            <br />     
            <li>Member of Responsible-AI for Decision Making team (Georgia Tech)</li>
            <br />                                          
            <li> <strong>Research Interests:</strong> Medical Imaging, Public Health, Drug discovery, Explainable AI, Graph ML, Statistical modelling</li>
            <br />                      
            <li><strong>Hobbies:</strong> Sketching, painting, photography, writing poems, badminton, and music</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
