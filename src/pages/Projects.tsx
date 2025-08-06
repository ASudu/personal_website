import React from 'react';
import Layout from '../components/Layout';

const Projects: React.FC = () => {
  return (
    <Layout title="Projects | Sudarshan Anand" activePage="projects">
      <div id="projects-content">
        <h4>Projects</h4>
        <p style={{ fontSize: '1.5rem' }}>Welcome to my blog where I share insights and experiences.</p>
        <div className="blog-posts">
          <article>
            <h4 style={{ fontSize: '1.5rem' }}>Artificial Intelligence</h4>
            <ul>
              <li style={{ fontSize: '1rem' }}>
                Alphageometry{' '}
                <span style={{ fontSize: '0.9rem' }}>
                  [<a 
                    href="https://www.linkedin.com/pulse/alphageometry-sudarshan-anand-1u9nc/?trackingId=T8%2FZcQmAS3upeoSy8zaaeQ%3D%3D" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#39ff14' }}
                  >
                    article
                  </a>]
                </span>
              </li>
              <li style={{ fontSize: '1rem' }}>
                Epidemiology: How AI is changing the game?{' '}
                <span style={{ fontSize: '0.9rem' }}>
                  [<a 
                    href="https://www.linkedin.com/pulse/epidemiology-how-ai-changing-game-sudarshan-anand-ci5uc/?trackingId=o%2BcjJXfUTjCTJe5zshZHVA%3D%3D" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#39ff14' }}
                  >
                    article
                  </a>]
                </span>
              </li>
              <li style={{ fontSize: '1rem' }}>
                Can AI see like humans?{' '}
                <span style={{ fontSize: '0.9rem' }}>
                  [<a 
                    href="https://sudarshananand.substack.com/p/can-ai-see-like-humans-part-1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#39ff14' }}
                  >
                    Part-1
                  </a>]
                </span>
              </li>
            </ul>

            <h4 style={{ fontSize: '1.5rem' }}>Mathematics</h4>
            <ul>
              <li style={{ fontSize: '1rem' }}>
                Graph is not a graph{' '}
                <span style={{ fontSize: '0.9rem' }}>
                  [<a 
                    href="https://www.linkedin.com/pulse/graph-part-1-sudarshan-anand-krgec/?trackingId=VDcqqJSnRkS%2Fv3qf9fHMKg%3D%3D" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#39ff14' }}
                  >
                    Part-1
                  </a>]
                  [<a 
                    href="https://open.substack.com/pub/sudarshananand/p/graph-is-not-a-graph-part-2?r=51ptyu&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#39ff14' }}
                  >
                    Part-2
                  </a>]
                </span>
              </li>
            </ul>

            <h4 style={{ fontSize: '1.5rem' }}>Miscellaneous</h4>
            <ul>
              <li style={{ fontSize: '1rem' }}>Coming soon...</li>
            </ul>

            <p style={{ fontSize: '0.9rem' }}>
              For more articles, check out my{' '}
              <a 
                href="https://substack.com/@sudarshananand?utm_source=user-menu" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#39ff14' }}
              >
                Substack
              </a> page.
            </p>
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
