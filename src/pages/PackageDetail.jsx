import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { packages } from '../data/data';
import { useAuth } from '../context/AuthContext';
import Footer from '../components/Footer';

export default function PackageDetail() {
  const { id } = useParams();
  const pkg = packages.find(p => p.id === parseInt(id));
  const [tab, setTab] = useState('itinerary');
  const [day, setDay] = useState(0);
  const { wishlist, toggleWishlist, user } = useAuth();
  const nav = useNavigate();

  if (!pkg) return (
    <div style={{ minHeight:'80vh', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:'1rem', fontFamily:'"DM Sans",sans-serif' }}>
      <div style={{ fontSize:'3rem' }}>😕</div>
      <h2 style={{ fontFamily:'"Playfair Display",serif' }}>Package not found</h2>
      <Link to="/packages" style={{ color:'#FF6B00', fontWeight:600 }}>← Back to Packages</Link>
    </div>
  );

  return (
    <div style={{ fontFamily:'"DM Sans",sans-serif' }}>
      {/* Hero */}
      <div style={{ height:420, background:pkg.grad, position:'relative', overflow:'hidden', display:'flex', alignItems:'flex-end' }}>
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 25% 25%,rgba(255,255,255,0.18) 0%,transparent 60%)' }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(0,0,0,0.82) 0%,rgba(0,0,0,0.05) 55%,transparent 100%)' }} />
        <div style={{ position:'relative', padding:'3rem 2.5rem', color:'#fff', width:'100%' }}>
          <Link to="/packages" style={{ color:'rgba(255,255,255,0.7)', textDecoration:'none', fontSize:'0.85rem', display:'inline-flex', alignItems:'center', gap:'0.3rem', marginBottom:'1rem' }}>← All Packages</Link>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', flexWrap:'wrap', gap:'1rem' }}>
            <div>
              <div style={{ display:'flex', gap:'0.6rem', marginBottom:'0.8rem', flexWrap:'wrap' }}>
                <span style={{ background:pkg.badgeColor, color:'#fff', fontSize:'0.7rem', padding:'0.25rem 0.75rem', borderRadius:50, fontWeight:700 }}>{pkg.badge}</span>
                <span style={{ background:'rgba(255,255,255,0.15)', backdropFilter:'blur(8px)', color:'#fff', fontSize:'0.7rem', padding:'0.25rem 0.75rem', borderRadius:50 }}>{pkg.category}</span>
              </div>
              <h1 style={{ fontFamily:'"Playfair Display",serif', fontSize:'clamp(2rem,4vw,3rem)', fontWeight:900, marginBottom:'0.5rem', lineHeight:1.1 }}>{pkg.name}</h1>
              <p style={{ opacity:0.82, fontSize:'0.95rem' }}>📍 {pkg.route} &nbsp;·&nbsp; ⏱ {pkg.duration} &nbsp;·&nbsp; ⭐ {pkg.rating} ({pkg.reviews.toLocaleString()} reviews)</p>
            </div>
            <div style={{ textAlign:'right' }}>
              <div style={{ fontFamily:'"Playfair Display",serif', fontSize:'2.5rem', fontWeight:900, color:'#FFD700', lineHeight:1 }}>₹{pkg.price.toLocaleString()}</div>
              <div style={{ fontSize:'0.8rem', opacity:0.7 }}><span style={{ textDecoration:'line-through', marginRight:'0.3rem' }}>₹{pkg.originalPrice.toLocaleString()}</span>per person</div>
              <div style={{ display:'flex', gap:'0.7rem', marginTop:'0.8rem', justifyContent:'flex-end' }}>
                <button onClick={()=>toggleWishlist(pkg.id)} style={{ background: wishlist.includes(pkg.id)?'rgba(255,107,0,0.9)':'rgba(255,255,255,0.15)', backdropFilter:'blur(8px)', border:'1px solid rgba(255,255,255,0.3)', color:'#fff', padding:'0.6rem 1rem', borderRadius:50, cursor:'pointer', fontSize:'0.85rem', fontFamily:'"DM Sans",sans-serif' }}>
                  {wishlist.includes(pkg.id)?'❤️ Saved':'🤍 Save'}
                </button>
                <button onClick={()=>user?alert('Booking confirmed! Our team will contact you within 24 hours.'):nav('/login')} style={{ background:'#fff', color:'#FF6B00', border:'none', padding:'0.6rem 1.4rem', borderRadius:50, cursor:'pointer', fontWeight:700, fontSize:'0.9rem', fontFamily:'"DM Sans",sans-serif', boxShadow:'0 4px 20px rgba(0,0,0,0.2)' }}>
                  {user ? '✈ Book This Package' : '🔑 Login to Book'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth:1100, margin:'0 auto', padding:'3rem 2.5rem', display:'grid', gridTemplateColumns:'1fr 340px', gap:'2.5rem' }}>
        {/* Left */}
        <div>
          <p style={{ fontSize:'1rem', color:'#3A2A1A', lineHeight:1.75, marginBottom:'2rem', opacity:0.85 }}>{pkg.desc}</p>

          {/* Tabs */}
          <div style={{ display:'flex', gap:0, borderBottom:'2px solid rgba(0,0,0,0.07)', marginBottom:'2rem' }}>
            {[['itinerary','🗓 Itinerary'],['inclusions','✅ What\'s Included'],['highlights','⭐ Highlights']].map(([key,label])=>(
              <button key={key} onClick={()=>setTab(key)} style={{
                padding:'0.9rem 1.3rem', border:'none', background:'transparent', cursor:'pointer',
                fontFamily:'"DM Sans",sans-serif', fontSize:'0.88rem', fontWeight:600,
                color: tab===key ? '#FF6B00' : '#6B5744',
                borderBottom: tab===key ? '2px solid #FF6B00' : '2px solid transparent',
                marginBottom:'-2px', transition:'all 0.2s',
              }}>{label}</button>
            ))}
          </div>

          {tab === 'itinerary' && (
            <div>
              {pkg.itinerary.map((item, i)=>(
                <div key={i} onClick={()=>setDay(day===i?-1:i)} style={{ marginBottom:'0.8rem', border:`1px solid ${day===i?'#FF6B00':'rgba(0,0,0,0.08)'}`, borderRadius:14, overflow:'hidden', cursor:'pointer', transition:'all 0.2s' }}>
                  <div style={{ padding:'1rem 1.3rem', display:'flex', justifyContent:'space-between', alignItems:'center', background: day===i?'rgba(255,107,0,0.04)':'#fff' }}>
                    <div style={{ display:'flex', gap:'0.8rem', alignItems:'center' }}>
                      <span style={{ width:32, height:32, borderRadius:'50%', background: day===i?'#FF6B00':'rgba(0,0,0,0.06)', color: day===i?'#fff':'#6B5744', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'0.78rem', fontWeight:700, flexShrink:0 }}>D{item.day}</span>
                      <span style={{ fontWeight:600, fontSize:'0.93rem', color:'#1A0A00' }}>{item.title}</span>
                    </div>
                    <span style={{ color:'#6B5744', fontSize:'1.1rem' }}>{day===i?'−':'+'}</span>
                  </div>
                  {day===i && <div style={{ padding:'0 1.3rem 1rem 4.3rem', color:'#3A2A1A', fontSize:'0.87rem', lineHeight:1.7 }}>{item.desc}</div>}
                </div>
              ))}
            </div>
          )}

          {tab === 'inclusions' && (
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1.5rem' }}>
              <div>
                <h3 style={{ fontFamily:'"Playfair Display",serif', fontSize:'1.1rem', marginBottom:'1rem', color:'#1A0A00' }}>✅ Included</h3>
                <div style={{ display:'flex', flexDirection:'column', gap:'0.5rem' }}>
                  {pkg.inclusions.map((inc,i)=>(
                    <div key={i} style={{ display:'flex', gap:'0.7rem', alignItems:'center', padding:'0.65rem 0.9rem', background:'rgba(46,125,50,0.06)', borderRadius:10, border:'1px solid rgba(46,125,50,0.12)', fontSize:'0.87rem', color:'#1B5E20' }}>
                      <span>✓</span> {inc}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 style={{ fontFamily:'"Playfair Display",serif', fontSize:'1.1rem', marginBottom:'1rem', color:'#1A0A00' }}>❌ Not Included</h3>
                <div style={{ display:'flex', flexDirection:'column', gap:'0.5rem' }}>
                  {pkg.exclusions.map((exc,i)=>(
                    <div key={i} style={{ display:'flex', gap:'0.7rem', alignItems:'center', padding:'0.65rem 0.9rem', background:'rgba(198,40,40,0.05)', borderRadius:10, border:'1px solid rgba(198,40,40,0.12)', fontSize:'0.87rem', color:'#B71C1C' }}>
                      <span>✕</span> {exc}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {tab === 'highlights' && (
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0.8rem' }}>
              {pkg.highlights.map((h,i)=>(
                <div key={i} style={{ display:'flex', gap:'0.8rem', alignItems:'center', padding:'1rem 1.1rem', background:'rgba(255,107,0,0.05)', borderRadius:12, border:'1px solid rgba(255,107,0,0.12)' }}>
                  <span style={{ color:'#FF6B00', fontSize:'1.1rem' }}>✦</span>
                  <span style={{ fontSize:'0.87rem', color:'#1A0A00', fontWeight:500 }}>{h}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right sidebar */}
        <div>
          <div style={{ background:'#fff', border:'1.5px solid rgba(255,107,0,0.15)', borderRadius:20, padding:'1.8rem', boxShadow:'0 8px 40px rgba(0,0,0,0.08)', position:'sticky', top:90 }}>
            <div style={{ fontFamily:'"Playfair Display",serif', fontSize:'2.2rem', fontWeight:900, color:'#FF6B00', lineHeight:1, marginBottom:'0.3rem' }}>₹{pkg.price.toLocaleString()}</div>
            <div style={{ fontSize:'0.8rem', color:'#6B5744', marginBottom:'1.5rem' }}>
              <span style={{ textDecoration:'line-through', marginRight:'0.4rem', opacity:0.55 }}>₹{pkg.originalPrice.toLocaleString()}</span>
              per person · <span style={{ color:'#2E7D32', fontWeight:600 }}>{Math.round((1-pkg.price/pkg.originalPrice)*100)}% saved</span>
            </div>

            <div style={{ display:'flex', flexDirection:'column', gap:'0.7rem', marginBottom:'1.5rem', fontSize:'0.87rem' }}>
              {[['⏱ Duration', pkg.duration], ['📍 Route', pkg.route], ['⭐ Rating', `${pkg.rating} (${pkg.reviews.toLocaleString()} reviews)`]].map(([label, val])=>(
                <div key={label} style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:'1rem', paddingBottom:'0.7rem', borderBottom:'1px solid rgba(0,0,0,0.06)' }}>
                  <span style={{ color:'#6B5744' }}>{label}</span>
                  <span style={{ color:'#1A0A00', fontWeight:500, textAlign:'right', maxWidth:'55%' }}>{val}</span>
                </div>
              ))}
            </div>

            <button onClick={()=>user?alert('🎉 Booking request sent! Our team will call you within 2 hours.'):nav('/login')} style={{
              width:'100%', padding:'1rem', background:'linear-gradient(135deg,#FF6B00,#C8941A)',
              color:'#fff', border:'none', borderRadius:50, fontWeight:700, fontSize:'0.95rem',
              cursor:'pointer', fontFamily:'"DM Sans",sans-serif', boxShadow:'0 6px 24px rgba(255,107,0,0.35)', marginBottom:'0.8rem',
            }}>
              {user ? '✈ Book This Package' : '🔑 Login to Book'}
            </button>
            <button onClick={()=>nav('/compare')} style={{ width:'100%', padding:'0.8rem', background:'rgba(255,107,0,0.07)', color:'#FF6B00', border:'1.5px solid rgba(255,107,0,0.2)', borderRadius:50, fontWeight:600, fontSize:'0.87rem', cursor:'pointer', fontFamily:'"DM Sans",sans-serif' }}>
              ⚖ Compare Packages
            </button>

            <p style={{ textAlign:'center', fontSize:'0.76rem', color:'#6B5744', marginTop:'1.2rem', lineHeight:1.6 }}>🔒 Free cancellation · 24/7 support · No hidden fees</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}