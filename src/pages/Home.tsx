import React from 'react';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  return (
    <Layout title="Home | Sudarshan Anand" activePage="home">
      <div id="home-content">
        <h2>Hey,<br />I'm Sudarshan Anand</h2> 
      </div>
    </Layout>
  );
};

export default Home;
