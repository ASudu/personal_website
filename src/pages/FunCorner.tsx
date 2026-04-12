import React from "react";
import Layout from '../components/Layout';

const FunCorner: React.FC = () => {
  const artworks = [
    { src: '/images/artworks/ram_lalla.jpg', alt: 'Ram Lalla' },
    { src: '/images/artworks/aston_martin.jpg', alt: 'Aston Martin DB11' },
    { src: '/images/artworks/kanchi.jpg', alt: 'Kanchipuram Varadhar' },
    { src: '/images/artworks/deadpool.jpg', alt: 'Deadpool' },
    { src: '/images/artworks/yondu.jpg', alt: 'Yondu' },
    { src: '/images/artworks/money_heist_professor.jpg', alt: 'Money Heist Professor' },
  ];

  const photos = [
    { src: '/images/photos/htal.jpg', alt: 'Hindu Temple of Atlanta' },
    { src: '/images/photos/bits_tower.jpg', alt: 'Clock tower of BITS' },
    { src: '/images/photos/manali.jpg', alt: 'Manali scenery' },
    { src: '/images/photos/sikkim.jpg', alt: 'Sikkim Lake' },
    { src: '/images/photos/boston.jpg', alt: 'Christian Center of Science' },
    { src: '/images/photos/high_museum.jpg', alt: 'High Museum of Art' },
    { src: '/images/photos/midtown.jpg', alt: 'Midtown Atlanta' }
  ];

  return (
    <Layout title="Fun Corner | Sudarshan Anand" activePage="fun_corner">
      <div id="fun-corner-content" style={{ padding: '2rem' }}>
        <h1>Fun Corner</h1>
        <div style={{ fontSize: '1.2rem', marginTop: '1.5rem' }}>
          Visit my Instagram page: <a className='blog-link' href="https://www.instagram.com/through_sa_lens?igsh=YzRkN250aXUyYXJ3" target="_blank" rel="noopener noreferrer">@through_sa_lens</a> for more of my works.
        </div>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>My Artworks</h2>
        <div 
          className="pinterest-grid" 
          style={{ 
            columnCount: 3,          // number of columns
            gap: "1rem",       // spacing between columns
          }}
        >
          {artworks.map((photo, index) => (
            <div 
              key={index} 
              className="pinterest-item" 
              style={{ 
                breakInside: "avoid", // prevents awkward splitting
                marginBottom: "1rem",
                borderRadius: '8px', 
              }}
            >
              <a href={photo.src} target="_blank" rel="noopener noreferrer">
                <img 
                  src={photo.src} 
                  alt={photo.alt} 
                  style={{ 
                    width: '100%', 
                    height: 'auto', 
                    display: 'block', 
                    borderRadius: '8px' 
                  }} 
                />
              </a>
            </div>
          ))}
        </div>

        <br /><br />

        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>My Photography</h2>
        <div 
          className="pinterest-grid" 
          style={{ 
            columnCount: 3,          // number of columns
            gap: "1rem",       // spacing between columns
          }}
        >
          {photos.map((photo, index) => (
            <div 
              key={index} 
              className="pinterest-item" 
              style={{ 
                breakInside: "avoid", // prevents awkward splitting
                marginBottom: "1rem",
                borderRadius: '8px', 
              }}
            >
              <a href={photo.src} target="_blank" rel="noopener noreferrer">
                <img 
                  src={photo.src} 
                  alt={photo.alt} 
                  style={{ 
                    width: '100%', 
                    height: 'auto', 
                    display: 'block', 
                    borderRadius: '8px' 
                  }} 
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default FunCorner;
