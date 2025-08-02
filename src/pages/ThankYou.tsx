import React from 'react';
import Layout from '../components/Layout';

const ThankYou: React.FC = () => {
  return (
    <Layout title="Thank You | Sudarshan Anand" activePage="contact">
      <div id="contact-content">
        <h3>Thank you!</h3>
        <div className="contact-info" style={{ marginBottom: '1em' }}>
          <p>Your message has been sent successfully.</p>
        </div>
      </div>
    </Layout>
  );
};

export default ThankYou;
