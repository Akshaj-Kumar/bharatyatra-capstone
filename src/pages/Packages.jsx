import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { packages } from '../data/data';
import { useAuth } from '../context/AuthContext';
import Footer from '../components/Footer';

const CATS = ['All','Heritage','Luxury','Nature','Adventure','Beach','Spiritual'];

export default function Packages() {
  const [cat, setCat]     = useState('All');
  const [sort, setSort]   = useState('popular');
  const [search, setSearch] = useState('');
  const { wishlist, toggleWishlist } = useAuth();
  const nav = useNavigate();

  let list = packages.filter(p =>
    (cat === 'All' || p.category === cat) &&
    (p.name.toLowerCase().includes(search.toLowerCase()) || p.route.toLowerCase().includes(search.toLowerCase()))
  );
  if (sort === 'price-low')  list = [...list].sort((a,b) => a.price - b.price);
  if (sort === 'price-high') list = [...list].sort((a,b) => b.price - a.price);
  if (sort === 'rating')     list = [...list].sort((a,b) => b.rating - a.rating);
  if (sort === 'popular')    list = [...list].sort((a,b) => b.reviews - a.reviews);

  return (
    <div style={{ fontFamily:'"DM Sans",sans-serif' }}>
      {/* Hero */}
      <div style={{ height:320, background:'linear-gradient(135deg,#1A0A00 0%,#FF6B00 60%,#C8941A 100%)', display:'flex', alignItems:'center', justifyContent:'center', textAlign:'center', color:'#fff', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, opacity:0.06, backgroundImage:'repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 28px)', backgroundSize:'28px 28px' }} />
        <svg style={{ position:'absolute', right:'-5%', top:'-10%', width:300, opacity:0.06, animation:'spin 55s linear infinite' }} viewBox="0 0 200 200">
          {[0,40,80,120,160].map(a=><g key={a} transform={`rotate(${a} 100 100)`}><ellipse cx="100" cy="35" rx="15" ry="45" fill="none" stroke="#fff" strokeWidth="1"/></g>)}
          <circle cx="100" cy="100" r="38" fill="none" stroke="#fff" strokeWidth="1.5"/>
        </svg>
        <div style={{ position:'relative' }}>
          <p style={{ fontSize:'0.76rem', letterSpacing:'2.5px', textTransform:'uppercase', opacity:0.75, marginBottom:'0.6rem' }}>✦ All Travel Packages</p>
          <h1 style={{ fontFamily:'"Playfair Display",serif', fontSize:'clamp(2.4rem,5vw,3.8rem)', fontWeight:900, marginBottom:'0.6rem' }}>Find Your Perfect Trip</h1>
          <p style={{ opacity:0.82, fontSize:'1rem' }}>6 curated packages across India's most iconic destinations</p>
        </div>
      </div>

      {/* Filters */}
      <div style={{ background:'#fff', borderBottom:'1px solid rgba(0,0,0,0.07)', padding:'1.2rem 2.5rem', position:'sticky', top:70, zIndex:100, boxShadow:'0 2px 20px rgba(0,0,0,0.06)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', display:'flex', gap:'1rem', alignItems:'center', flexWrap:'wrap' }}>
          <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="🔍  Search packages…" style={{ padding:'0.65rem 1rem', border:'1.5px solid rgba(0,0,0,0.1)', borderRadius:50, fontFamily:'"DM Sans",sans-serif', fontSize:'0.88rem', outline:'none', minWidth:220 }} />
          <div style={{ display:'flex', gap:'0.4rem', flexWrap:'wrap' }}>
            {CATS.map(c=>(
              <button key={c} onClick={()=>setCat(c)} style={{
                padding:'0.5rem 1rem', borderRadius:50, border:'1.5px solid',
                borderColor: c===cat ? '#FF6B00' : 'rgba(0,0,0,0.1)',
                background: c===cat ? '#FF6B00' : '#fff',
                color: c===cat ? '#fff' : '#6B5744',
                fontFamily:'"DM Sans",sans-serif', fontSize:'0.83rem', fontWeight:500, cursor:'pointer',
              }}>{c}</button>
            ))}
          </div>
          <select value={sort} onChange={e=>setSort(e.target.value)} style={{ marginLeft:'auto', padding:'0.6rem 1rem', border:'1.5px solid rgba(0,0,0,0.1)', borderRadius:50, fontFamily:'"DM Sans",sans-serif', fontSize:'0.85rem', outline:'none' }}>
            <option value="popular">Sort: Most Popular</option>
            <option value="rating">Sort: Top Rated</option>
            <option value="price-low">Sort: Price Low→High</option>
            <option value="price-high">Sort: Price High→Low</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'3rem 2.5rem' }}>
        {list.length === 0 ? (
          <div style={{ textAlign:'center', padding:'5rem 2rem', color:'#6B5744' }}>
            <div style={{ fontSize:'3rem', marginBottom:'1rem' }}>🔍</div>
            <h3 style={{ fontFamily:'"Playfair Display",serif', marginBottom:'0.5rem' }}>No packages found</h3>
            <p>Try a different search or category</p>
          </div>
        ) : (
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(360px,1fr))', gap:'1.8rem' }}>
            {list.map(pkg=>(
              <div key={pkg.id} style={{
                border:'1px solid rgba(0,0,0,0.07)', borderRadius:22, overflow:'hidden',
                background:'#fff', transition:'all 0.35s', cursor:'pointer',
              }}
              onMouseOver={e=>{e.currentTarget.style.boxShadow='0 20px 60px rgba(0,0,0,0.13)';e.currentTarget.style.transform='translateY(-5px)';}}
              onMouseOut={e=>{e.currentTarget.style.boxShadow='';e.currentTarget.style.transform='';}}>
                {/* Card top image area */}
                <div style={{ height:220, background:pkg.grad, position:'relative', overflow:'hidden' }} onClick={()=>nav(`/packages/${pkg.id}`)}>
                  <img src={pkg.image} alt={pkg.name} style={{ width:'100%', height:'100%', objectFit:'cover', position:'absolute', inset:0 }} />
                  <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.15))' }} />
                  <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 28% 25%,rgba(255,255,255,0.2) 0%,transparent 60%)' }} />
                  <div style={{ position:'absolute', top:'1rem', left:'1rem', background:pkg.badgeColor, color:'#fff', fontSize:'0.68rem', padding:'0.28rem 0.75rem', borderRadius:50, fontWeight:700 }}>{pkg.badge}</div>
                  <div style={{ position:'absolute', top:'1rem', right:'1rem' }}>
                    <button onClick={e=>{e.stopPropagation();toggleWishlist(pkg.id);}} style={{
                      background: wishlist.includes(pkg.id) ? 'rgba(255,107,0,0.9)' : 'rgba(0,0,0,0.3)',
                      backdropFilter:'blur(8px)', border:'none', width:34, height:34, borderRadius:'50%',
                      cursor:'pointer', fontSize:'1rem', display:'flex', alignItems:'center', justifyContent:'center',
                    }}>
                      {wishlist.includes(pkg.id) ? '❤️' : '🤍'}
                    </button>
                  </div>
                  <div style={{ position:'absolute', bottom:'1rem', left:'1rem', right:'1rem', display:'flex', justifyContent:'space-between', color:'rgba(255,255,255,0.85)', fontSize:'0.79rem' }}>
                    <span>⏱ {pkg.duration}</span>
                    <span>⭐ {pkg.rating} · {pkg.reviews.toLocaleString()} reviews</span>
                  </div>
                </div>

                <div style={{ padding:'1.5rem' }} onClick={()=>nav(`/packages/${pkg.id}`)}>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'start', marginBottom:'0.4rem' }}>
                    <h3 style={{ fontFamily:'"Playfair Display",serif', fontSize:'1.2rem', fontWeight:700, color:'#1A0A00', lineHeight:1.2 }}>{pkg.name}</h3>
                    <span style={{ background:'rgba(255,107,0,0.08)', color:'#CC5500', fontSize:'0.7rem', padding:'0.22rem 0.6rem', borderRadius:50, whiteSpace:'nowrap', marginLeft:'0.5rem', fontWeight:500 }}>{pkg.category}</span>
                  </div>
                  <p style={{ color:'#6B5744', fontSize:'0.8rem', marginBottom:'0.9rem' }}>📍 {pkg.route}</p>
                  <p style={{ fontSize:'0.84rem', color:'#3A2A1A', lineHeight:1.6, marginBottom:'1rem', opacity:0.78 }}>{pkg.desc}</p>

                  <div style={{ display:'flex', flexWrap:'wrap', gap:'0.35rem', marginBottom:'1.2rem' }}>
                    {pkg.inclusions.slice(0,4).map((inc,i)=>(
                      <span key={i} style={{ background:'rgba(0,107,107,0.07)', color:'#006B6B', fontSize:'0.7rem', padding:'0.22rem 0.6rem', borderRadius:50 }}>✓ {inc}</span>
                    ))}
                  </div>

                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', paddingTop:'1rem', borderTop:'1px solid rgba(0,0,0,0.06)' }}>
                    <div>
                      <div style={{ fontFamily:'"Playfair Display",serif', fontSize:'1.7rem', fontWeight:900, color:'#FF6B00', lineHeight:1 }}>₹{pkg.price.toLocaleString()}</div>
                      <div style={{ fontSize:'0.72rem', color:'#6B5744' }}>
                        <span style={{ textDecoration:'line-through', opacity:0.5, marginRight:'0.3rem' }}>₹{pkg.originalPrice.toLocaleString()}</span>
                        per person
                        <span style={{ marginLeft:'0.4rem', color:'#2E7D32', fontWeight:600 }}>({Math.round((1-pkg.price/pkg.originalPrice)*100)}% off)</span>
                      </div>
                    </div>
                    <div style={{ display:'flex', flexDirection:'column', gap:'0.4rem', alignItems:'flex-end' }}>
                      <button onClick={()=>nav(`/packages/${pkg.id}`)} style={{ background:'linear-gradient(135deg,#FF6B00,#C8941A)', color:'#fff', border:'none', padding:'0.62rem 1.3rem', borderRadius:50, fontWeight:600, fontSize:'0.85rem', cursor:'pointer', fontFamily:'"DM Sans",sans-serif' }}>View Details →</button>
                      <button onClick={e=>{e.stopPropagation();nav('/compare');}} style={{ background:'transparent', color:'#6B5744', border:'1px solid rgba(0,0,0,0.12)', padding:'0.42rem 1rem', borderRadius:50, fontSize:'0.75rem', cursor:'pointer', fontFamily:'"DM Sans",sans-serif' }}>+ Compare</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
      <style>{`@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}