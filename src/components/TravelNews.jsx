import { useEffect, useState } from 'react';
import { fetchTravelNews } from '../services/api';

export default function TravelNews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchTravelNews().then(setNews);
  }, []);

  return (
    <section style={{ padding: '40px 20px' }}>
      <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Latest Travel News</h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
          gap: '20px',
        }}
      >
        {news.map((item, index) => (
          <div
            key={index}
            style={{
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              background: '#fff',
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />

            <div style={{ padding: '16px' }}>
              <h3>{item.title}</h3>
              <p>{item.summary.slice(0, 120)}...</p>

              <a href={item.url} target="_blank" rel="noreferrer">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
