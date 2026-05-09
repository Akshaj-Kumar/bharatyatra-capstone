
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { internationalDestinations as international } from '../data/data';
import Footer from '../components/Footer';

const VISA = [
  { country: 'UAE / Dubai', type: 'Visa on Arrival', days: '30 days', fee: '~₹3,500' },
  { country: 'Thailand', type: 'Visa on Arrival', days: '30 days', fee: '~₹2,800' },
  { country: 'Maldives', type: 'Free / On Arrival', days: '30 days', fee: 'Free' },
  { country: 'Indonesia/Bali', type: 'Visa on Arrival', days: '30 days', fee: '~₹3,000' },
  { country: 'Sri Lanka', type: 'e-Visa', days: '30 days', fee: '~₹2,500' },
  { country: 'Singapore', type: 'Pre-arranged Visa', days: '30 days', fee: '~₹4,200' },
  { country: 'France/Schengen', type: 'Schengen Visa', days: '90 days', fee: '~₹7,500' },
  { country: 'Switzerland', type: 'Schengen Visa', days: '90 days', fee: '~₹7,500' },
];

export default function International() {
  const [filter, setFilter] = useState('All');
  const nav = useNavigate();
  const types = ['All', 'Visa on Arrival', 'e-Visa', 'Free / On Arrival', 'Pre-arranged Visa', 'Schengen Visa'];

  return (
    <div style={{ fontFamily: '"DM Sans",sans-serif' }}>
      {/* Hero */}
      <div style={{ height: 380, background: 'linear-gradient(135deg,#0A1A2A,#1A2A4A,#0A0400)', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: 'radial-gradient(circle,#FF6B00 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 50%,rgba(255,107,0,0.2) 0%,transparent 65%)' }} />
        <div style={{ position: 'relative' }}>
          <p style={{ color: '#FF9A3C', fontSize: '0.78rem', letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '0.6rem' }}>✦ Go Beyond Borders</p>
          <h1 style={{ fontFamily: '"Playfair Display",serif', fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 900, marginBottom: '1rem' }}>International Destinations</h1>
          <p style={{ opacity: 0.8, fontSize: '1.05rem', maxWidth: 580, lineHeight: 1.7 }}>Seamless international travel from India — visa assistance, flights, hotels, and curated experiences, all in one place.</p>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginTop: '2rem' }}>
            {['✈ All-inclusive packages', '🛂 Visa assistance', '📞 24/7 support'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', padding: '0.4rem 1rem', borderRadius: 50, fontSize: '0.82rem' }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Destinations grid */}
      <section style={{ padding: '5rem 2.5rem', background: '#fff', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <p style={{ color: '#FF6B00', fontSize: '0.78rem', letterSpacing: '2.5px', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.5rem' }}>✦ Popular International</p>
            <h2 style={{ fontFamily: '"Playfair Display",serif', fontSize: 'clamp(1.8rem,3.5vw,2.5rem)', fontWeight: 900, color: '#1A0A00' }}>World Awaits You</h2>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: '1.5rem' }}>
          {international.map(dest => (
            <div key={dest.id}
              onClick={() => nav('/packages')}
              style={{ borderRadius: 18, overflow: 'hidden', cursor: 'pointer', background: `linear-gradient(135deg,${dest.color},${dest.color}88)`, height: 300, position: 'relative', boxShadow: '0 6px 30px rgba(0,0,0,0.12)', transition: 'all 0.3s' }}
              onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-6px) scale(1.01)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.2)'; }}
              onMouseOut={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 6px 30px rgba(0,0,0,0.12)'; }}
            >
              <img src={dest.image} alt={dest.name} style={{ width:'100%', height:'100%', objectFit:'cover', position:'absolute', inset:0 }} />
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 25%,rgba(255,255,255,0.2),transparent 55%),linear-gradient(to top,rgba(0,0,0,0.8) 0%,transparent 55%)' }} />
              <div style={{ position: 'absolute', top: '1.2rem', left: '1.2rem', fontSize: '2.5rem' }}>{dest.icon}</div>
              <div style={{ position: 'absolute', top: '1.2rem', right: '1.2rem', background: 'rgba(0,0,0,0.3)', color: '#fff', fontSize: '0.7rem', padding: '0.25rem 0.65rem', borderRadius: 50 }}>{dest.nights}</div>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem 1.4rem' }}>
                <h3 style={{ fontFamily: '"Playfair Display",serif', color: '#fff', fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.3rem' }}>{dest.name}</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', marginBottom: '0.9rem' }}>{dest.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: '"Playfair Display",serif', color: '#FFD700', fontSize: '1.2rem', fontWeight: 700 }}>{dest.price}</span>
                  <span style={{ background: '#FF6B00', color: '#fff', fontSize: '0.72rem', padding: '0.25rem 0.7rem', borderRadius: 50, fontWeight: 600 }}>Book Now →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Visa Guide */}
      <section style={{ padding: '5rem 2.5rem', background: '#FFF8EE' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ color: '#FF6B00', fontSize: '0.78rem', letterSpacing: '2.5px', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.5rem' }}>✦ Visa Information</p>
            <h2 style={{ fontFamily: '"Playfair Display",serif', fontSize: '2.2rem', fontWeight: 900, color: '#1A0A00' }}>Visa Guide for Indian Passport Holders</h2>
          </div>
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '2rem', justifyContent: 'center' }}>
            {types.map(t => (
              <button key={t} onClick={() => setFilter(t)} style={{ padding: '0.45rem 1rem', borderRadius: 50, border: '1.5px solid', borderColor: filter === t ? '#FF6B00' : 'rgba(0,0,0,0.12)', background: filter === t ? '#FF6B00' : '#fff', color: filter === t ? '#fff' : '#6B5744', fontFamily: '"DM Sans",sans-serif', fontSize: '0.8rem', cursor: 'pointer' }}>{t}</button>
            ))}
          </div>
          <div style={{ background: '#fff', borderRadius: 20, overflow: 'hidden', boxShadow: '0 4px 30px rgba(0,0,0,0.07)', border: '1px solid rgba(0,0,0,0.06)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'linear-gradient(135deg,#FF6B00,#C8941A)' }}>
                  {['Country', 'Visa Type', 'Stay Duration', 'Approx. Fee'].map(h => (
                    <th key={h} style={{ padding: '1rem 1.5rem', color: '#fff', textAlign: 'left', fontWeight: 600, fontSize: '0.875rem' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {VISA.filter(v => filter === 'All' || v.type === filter).map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#FFF8EE', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                    <td style={{ padding: '1rem 1.5rem', fontWeight: 600, fontSize: '0.9rem', color: '#1A0A00' }}>{row.country}</td>
                    <td style={{ padding: '1rem 1.5rem' }}>
                      <span style={{ background: 'rgba(255,107,0,0.1)', color: '#CC5500', fontSize: '0.78rem', padding: '0.25rem 0.7rem', borderRadius: 50, fontWeight: 600 }}>{row.type}</span>
                    </td>
                    <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem', color: '#6B5744' }}>{row.days}</td>
                    <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem', fontWeight: 600, color: '#006B3C' }}>{row.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.78rem', color: '#6B5744' }}>* Visa fees and policies are subject to change. BharatYatra provides complete visa assistance for all listed destinations.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
