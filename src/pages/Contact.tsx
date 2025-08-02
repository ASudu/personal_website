import React from 'react';
import Layout from '../components/Layout';

const Contact: React.FC = () => {
  return (
    <Layout title="Contact | Sudarshan Anand" activePage="contact">
      <div id="contact-content">
        <h3>Contact Me</h3>
        <div className="contact-info" style={{ marginBottom: '1em' }}>
          <div 
            className="contact-form" 
            style={{ 
              background: '#222', 
              padding: '1em', 
              borderRadius: '8px', 
              maxWidth: '350px', 
              width: '100%' 
            }}
          >
            <p style={{ marginBottom: '0.5em' }}>📝 Send a Message</p>
            <form 
              action="https://formsubmit.co/6d55d07ddf25d00101c8312d81107f1b" 
              method="POST" 
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '0.5em' 
              }}
            >
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Your Name" 
                required 
                style={{ 
                  padding: '0.5em', 
                  borderRadius: '4px', 
                  border: '1px solid #444', 
                  background: '#111', 
                  color: '#fff' 
                }} 
              />
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Your Email" 
                required 
                style={{ 
                  padding: '0.5em', 
                  borderRadius: '4px', 
                  border: '1px solid #444', 
                  background: '#111', 
                  color: '#fff' 
                }} 
              />
              <textarea 
                id="message" 
                name="message" 
                rows={3} 
                placeholder="Your Message" 
                required 
                style={{ 
                  padding: '0.5em', 
                  borderRadius: '4px', 
                  border: '1px solid #444', 
                  background: '#111', 
                  color: '#fff' 
                }} 
              />

              <input type="hidden" name="_subject" value="New Message from Portfolio" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://asudu.github.io/sudarshan_anand/thank-you.html" />

              <button 
                type="submit" 
                style={{ 
                  background: '#39ff14', 
                  color: '#222', 
                  border: 'none', 
                  borderRadius: '4px', 
                  padding: '0.6em', 
                  fontWeight: 'bold', 
                  cursor: 'pointer' 
                }}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
