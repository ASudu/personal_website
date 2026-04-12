import React from 'react';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  return (
    <Layout title="About me | Sudarshan Anand" activePage="about_me">
      <div id="home-content" style={{ alignContent: 'center', padding: '2rem' }}>
        <h1>Hey, I'm Sudarshan Anand</h1>

        <div style={{ alignContent: 'center', fontSize: '1.2rem' }}>
          <ul>
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
        </div>

        <h1>News</h1>

        <div className="scrollable-container" tabIndex={0}>
          <div style={{ alignContent: 'center', fontSize: '1.2rem' }}>
            <ul>
              <li><strong>Jan 2026:</strong> Continuing working at Bio-MIBLab on Multimodal Multimodal Progression Tracking for Neurodegenerative Diseases</li>
              <br />
              <li><strong>Jan 2026:</strong> Started working as a Graduate Teaching Assistant for CSE/MATH 6643: Numerical Linear Algebra</li>
              <br />
              <li><strong>Nov 2025:</strong> <a className='blog-link' href="/images/Time_series_forecasting_book_ack_1.png" target="_blank" rel="noopener noreferrer">Acknowledged</a> in Manning's <a className='blog-link' href="https://www.manning.com/books/time-series-forecasting-using-foundation-models" target="_blank" rel="noopener noreferrer">Time Series Forecasting Using Foundation Models</a> for my technical review 🎉🎉</li>
              <br />
              <li><strong>Oct 2025:</strong> 🎉 Won the first place in <a className='blog-link' href="https://bhi.embs.org/2025/data-competition/" target="_blank" rel="noopener noreferrer">IEEE BHI 2025 Data Challenge Competition</a> (Track 1: Depression Risk Prediction)! 🎉</li>
              <br />
              <li><strong>Sept 2025:</strong> Recognized as <a className='blog-link' href="https://bhi.embs.org/2025/registration-2/nsf-embs-google-sponsored-young-professional-nextgen-scholar-recognition/" target="_blank" rel="noopener noreferrer">IEEE BHI 2025 Young Professional NextGen Scholar</a> (NSF, EMBS, Google Sponsored) 🌟🌟</li>
              <br />
              <li><strong>Sept 2025:</strong> Our poster got accepted at IEEE BHI 2025. Check out the abstract: <a className='blog-link' href="https://openreview.net/forum?id=MYlJfTsDpi" target="_blank" rel="noopener noreferrer">Metadata makes Big Data useful for AI/ML-ready, equitable pandemic response</a>  🎉🎉</li>
              <br />
              <li><strong>Aug 2025:</strong> Started working under <a className='blog-link' href="https://research.gatech.edu/people/may-dongmei-wang" target="_blank" rel="noopener noreferrer">Prof. May D Wang</a> at Bio-MIBLab on a Neuroimaging project</li>
              <br />
              <li><strong>Aug 2025:</strong> Started working as a Graduate Teaching Assistant for CSE 6140: CSE Algorithms</li>
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
