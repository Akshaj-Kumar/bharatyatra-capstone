import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { packages } from '../data/data';
import Footer from '../components/Footer';

const FIELDS = [
  { key:'duration',   label:'Duration' },
  { key:'route',      label:'Route' },
  { key:'rating',     label:'Rating' },
  { key:'reviews',    label:'Reviews', fmt: v => v.toLocaleString() },
  { key:'category',   label:'Category' },
];

export default function Compare() {
  const [selected, setSelected] = useState([1, 2]);
  const nav = useNavigate();

  const toggle = (id) => {
    if (selected.includes(id)) {
      setSelected(s => s.filter(x => x !== id));
    } else if (selected.length < 3) {
      setSelected(s => [...s, id]);
    }
  };

  const compared = packages.filter(p => selected.includes(p.id));

  return (
    <div style={{ fontFamily:'"DM Sans",sans-serif', minHeight:'100vh', background:'#F9F5F0' }}>
      {/* Header */}
      <div style={{ height:280, background:'linear-gradient(135deg,#0A1A1A 0%,#1A0A00 50%,#FF6B00 100%)', display:'flex', alignItems:'center', justifyContent:'center', textAlign:'center', color:'#fff', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, opacity:0.05, backgroundImage:'repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 32px)', backgroundSize:'32px 32px' }} />
        <div style={{ position:'relative' }}>
          <p style={{ fontSize:'0.76rem', letterSpacing:'2.5px', textTransform:'uppercase', opacity:0.7, marginBottom:'0.6rem' }}>✦ Side-by-Side</p>
          <h1 style={{ fontFamily:'"Playfair Display",serif', fontSize:'clamp(2.2rem,4.5vw,3.5rem)', fontWeight:900, marginBottom:'0.6rem' }}>Compare Packages</h1>
          <p style={{ opacity:0.78, fontSize:'0.95rem' }}>Select up to 3 packages to compare side by side</p>
        </div>
      </div>

      <div style={{ maxWidth:1200, margin:'0 auto', padding:'2.5rem' }}>
        {/* Package selector chips */}
        <div style={{ background:'#fff', borderRadius:18, padding:'1.5rem 2rem', boxShadow:'0 4px 30px rgba(0,0,0,0.07)', marginBottom:'2rem' }}>
          <h3 style={{ fontFamily:'"Playfair Display",serif', fontSize:'1.1rem', marginBottom:'1rem', color:'#1A0A00' }}>Select packages to compare (up to 3):</h3>
          <div style={{ display:'flex', gap:'0.7rem', flexWrap:'wrap' }}>
            {packages.map(p => (
              <button key={p.id} onClick={() => toggle(p.id)} style={{
                padding:'0.55rem 1.1rem', borderRadius:50, border:'1.5px solid',
                borderColor: selected.includes(p.id) ? p.color : 'rgba(0,0,0,0.12)',
                background: selected.includes(p.id) ? p.color : '#fff',
                color: selected.includes(p.id) ? '#fff' : '#3A2A1A',
                fontFamily:'"DM Sans",sans-serif', fontSize:'0.85rem', fontWeight:500,
                cursor: (!selected.includes(p.id) && selected.length >= 3) ? 'not-allowed' : 'pointer',
                opacity: (!selected.includes(p.id) && selected.length >= 3) ? 0.45 : 1,
                transition:'all 0.2s',
              }}>
                {selected.includes(p.id) ? '✓ ' : ''}{p.name}
              </button>
            ))}
          </div>
        </div>

        {compared.length === 0 ? (
          <div style={{ textAlign:'center', padding:'4rem', color:'#6B5744' }}>
            <div style={{ fontSize:'3rem', marginBottom:'1rem' }}>⚖️</div>
            <h3 style={{ fontFamily:'"Playfair Display",serif', marginBottom:'0.5rem' }}>Select packages above to compare</h3>
          </div>
        ) : (
          <div style={{ overflowX:'auto' }}>
            <table style={{ width:'100%', borderCollapse:'separate', borderSpacing:0, background:'#fff', borderRadius:20, overflow:'hidden', boxShadow:'0 8px 50px rgba(0,0,0,0.09)' }}>
              <thead>
                <tr>
                  <th style={{ padding:'1.3rem 1.5rem', textAlign:'left', background:'#F9F5F0', fontFamily:'"Playfair Display",serif', fontSize:'1rem', color:'#1A0A00', borderBottom:'1px solid rgba(0,0,0,0.07)', width:'20%' }}>Feature</th>
                  {compared.map(pkg => (
                    <th key={pkg.id} style={{ padding:'1.3rem 1.5rem', textAlign:'center', background:pkg.grad, borderBottom:'1px solid rgba(0,0,0,0.07)', color:'#fff' }}>
                      <div style={{ fontFamily:'"Playfair Display",serif', fontSize:'1.05rem', fontWeight:700, marginBottom:'0.25rem' }}>{pkg.name}</div>
                      <div style={{ fontSize:'0.75rem', opacity:0.85 }}>{pkg.category}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Price row */}
                <tr style={{ background:'rgba(255,107,0,0.03)' }}>
                  <td style={{ padding:'1.1rem 1.5rem', fontSize:'0.85rem', fontWeight:600, color:'#6B5744', borderBottom:'1px solid rgba(0,0,0,0.05)' }}>💰 Price</td>
                  {compared.map(pkg => (
                    <td key={pkg.id} style={{ padding:'1.1rem 1.5rem', textAlign:'center', borderBottom:'1px solid rgba(0,0,0,0.05)' }}>
                      <div style={{ fontFamily:'"Playfair Display",serif', fontSize:'1.5rem', fontWeight:900, color:'#FF6B00' }}>₹{pkg.price.toLocaleString()}</div>
                      <div style={{ fontSize:'0.72rem', color:'#6B5744' }}><span style={{ textDecoration:'line-through', opacity:0.5 }}>₹{pkg.originalPrice.toLocaleString()}</span></div>
                      <div style={{ fontSize:'0.72rem', color:'#2E7D32', fontWeight:600 }}>{Math.round((1-pkg.price/pkg.originalPrice)*100)}% OFF</div>
                    </td>
                  ))}
                </tr>

                {FIELDS.map(f => (
                  <tr key={f.key}>
                    <td style={{ padding:'1.1rem 1.5rem', fontSize:'0.85rem', fontWeight:600, color:'#6B5744', borderBottom:'1px solid rgba(0,0,0,0.05)' }}>{f.label}</td>
                    {compared.map(pkg => (
                      <td key={pkg.id} style={{ padding:'1.1rem 1.5rem', textAlign:'center', fontSize:'0.88rem', color:'#1A0A00', borderBottom:'1px solid rgba(0,0,0,0.05)' }}>
                        {f.fmt ? f.fmt(pkg[f.key]) : pkg[f.key]}
                      </td>
                    ))}
                  </tr>
                ))}

                {/* Rating stars */}
                <tr style={{ background:'rgba(0,0,0,0.01)' }}>
                  <td style={{ padding:'1.1rem 1.5rem', fontSize:'0.85rem', fontWeight:600, color:'#6B5744', borderBottom:'1px solid rgba(0,0,0,0.05)' }}>⭐ Rating Bar</td>
                  {compared.map(pkg => (
                    <td key={pkg.id} style={{ padding:'1.1rem 1.5rem', textAlign:'center', borderBottom:'1px solid rgba(0,0,0,0.05)' }}>
                      <div style={{ background:'rgba(0,0,0,0.07)', borderRadius:50, height:8, maxWidth:140, margin:'0 auto', overflow:'hidden' }}>
                        <div style={{ height:'100%', width:`${(pkg.rating/5)*100}%`, background:'linear-gradient(90deg,#FF6B00,#FFD700)', borderRadius:50 }} />
                      </div>
                      <div style={{ fontSize:'0.8rem', marginTop:'0.3rem', color:'#1A0A00', fontWeight:600 }}>{pkg.rating}/5</div>
                    </td>
                  ))}
                </tr>

                {/* Highlights */}
                <tr>
                  <td style={{ padding:'1.1rem 1.5rem', fontSize:'0.85rem', fontWeight:600, color:'#6B5744', borderBottom:'1px solid rgba(0,0,0,0.05)', verticalAlign:'top' }}>✦ Highlights</td>
                  {compared.map(pkg => (
                    <td key={pkg.id} style={{ padding:'1.1rem 1.5rem', textAlign:'left', borderBottom:'1px solid rgba(0,0,0,0.05)', verticalAlign:'top' }}>
                      <div style={{ display:'flex', flexDirection:'column', gap:'0.4rem' }}>
                        {pkg.highlights.slice(0,4).map((h,i) => (
                          <div key={i} style={{ display:'flex', gap:'0.5rem', fontSize:'0.79rem', color:'#3A2A1A' }}>
                            <span style={{ color:'#FF6B00', flexShrink:0 }}>✓</span> {h}
                          </div>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Inclusions */}
                <tr style={{ background:'rgba(0,0,0,0.01)' }}>
                  <td style={{ padding:'1.1rem 1.5rem', fontSize:'0.85rem', fontWeight:600, color:'#6B5744', verticalAlign:'top' }}>✅ Included</td>
                  {compared.map(pkg => (
                    <td key={pkg.id} style={{ padding:'1.1rem 1.5rem', textAlign:'left', verticalAlign:'top' }}>
                      <div style={{ display:'flex', flexDirection:'column', gap:'0.4rem' }}>
                        {pkg.inclusions.map((inc,i) => (
                          <div key={i} style={{ display:'flex', gap:'0.5rem', fontSize:'0.79rem', color:'#1B5E20' }}>
                            <span>✓</span> {inc}
                          </div>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* CTA row */}
                <tr>
                  <td style={{ padding:'1.5rem' }} />
                  {compared.map(pkg => (
                    <td key={pkg.id} style={{ padding:'1.5rem', textAlign:'center' }}>
                      <button onClick={()=>nav(`/packages/${pkg.id}`)} style={{
                        background:'linear-gradient(135deg,#FF6B00,#C8941A)', color:'#fff', border:'none',
                        padding:'0.75rem 1.6rem', borderRadius:50, fontWeight:700, fontSize:'0.88rem',
                        cursor:'pointer', fontFamily:'"DM Sans",sans-serif', boxShadow:'0 4px 20px rgba(255,107,0,0.3)',
                        width:'100%',
                      }}>View Details →</button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}