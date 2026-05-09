import { Link } from 'react-router-dom';

const cols = [
  { title:'India', links:['Rajasthan','Kerala','Goa','Agra & Taj','Himalayas','Varanasi'] },
  { title:'International', links:['Dubai','Bali','Singapore','Paris','London','Thailand'] },
  { title:'Company', links:['About Us','Blog','Careers','Press','Contact','Privacy Policy'] },
];

export default function Footer() {
  return (
    <footer style={{ background:'#0A0400', color:'rgba(255,255,255,0.55)', padding:'4.5rem 2.5rem 2rem', fontFamily:'"DM Sans",sans-serif' }}>
      <div style={{ maxWidth:1200, margin:'0 auto' }}>
        <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr', gap:'3rem', marginBottom:'3rem' }}>
          <div>
            <div style={{ fontFamily:'"Playfair Display",serif', fontSize:'1.8rem', fontWeight:900, color:'#FF6B00', marginBottom:'1rem' }}>
              🪔 Bharat<span style={{ color:'#C8941A' }}>Yatra</span>
            </div>
            <p style={{ lineHeight:1.75, opacity:0.65, fontSize:'0.87rem', marginBottom:'1.5rem' }}>
              Crafting unforgettable journeys across India and the world since 2019.<br />IATA & Tourism India Registered.
            </p>
            <div style={{ display:'flex', gap:'0.75rem' }}>
              {['fb','ig','yt','in'].map(s => (
                <div key={s} style={{
                  width:36, height:36, borderRadius:'50%',
                  border:'1px solid rgba(255,255,255,0.14)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize:'0.72rem', textTransform:'uppercase', cursor:'pointer', color:'rgba(255,255,255,0.45)',
                  transition:'all 0.2s',
                }}>{s}</div>
              ))}
            </div>
          </div>
          {cols.map(col => (
            <div key={col.title}>
              <h4 style={{ color:'#fff', fontWeight:600, marginBottom:'1rem', fontSize:'0.9rem' }}>{col.title}</h4>
              <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'0.55rem' }}>
                {col.links.map(l => (
                  <li key={l}>
                    <Link to="/" style={{ color:'rgba(255,255,255,0.42)', textDecoration:'none', fontSize:'0.86rem' }}>{l}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{
          borderTop:'1px solid rgba(255,255,255,0.06)', paddingTop:'1.5rem',
          display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'0.75rem',
        }}>
          <span style={{ fontSize:'0.81rem' }}>© 2026 BharatYatra. All rights reserved.</span>
          <span style={{ color:'#FF9A3C', fontSize:'0.81rem' }}>Made with ❤️ for Incredible India</span>
        </div>
      </div>
    </footer>
  );
}