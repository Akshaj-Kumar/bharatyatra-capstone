import { useEffect, useState } from 'react';
import { fetchTouristPlaces } from '../services/api';

export default function TouristPlaces() {
  const [places, setPlaces] = useState([]);
  const [city, setCity] = useState('Delhi');

  useEffect(() => {
    fetchTouristPlaces(city).then(setPlaces);
  }, [city]);

  return (
    <section style={{ padding: '40px 20px', background: '#f4f7fb' }}>
      <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>
        Explore Tourist Places
      </h2>

      <input
        type="text"
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{
          padding: '12px',
          width: '100%',
          maxWidth: '400px',
          marginBottom: '25px',
          borderRadius: '10px',
          border: '1px solid #ccc',
        }}
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))',
          gap: '20px',
        }}
      >
        {places.map((place, index) => (
          <div
            key={index}
            style={{
              background: '#fff',
              padding: '20px',
              borderRadius: '14px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
            }}
          >
            <h3>{place.title}</h3>
            <p>{place.description}</p>
            <a href={place.link} target="_blank" rel="noreferrer">
              Explore
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
