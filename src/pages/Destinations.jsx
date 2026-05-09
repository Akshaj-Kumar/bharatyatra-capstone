import { useNavigate } from 'react-router-dom';
import { destinations } from '../data/data';
import Footer from '../components/Footer';

export default function Destinations() {
  const nav = useNavigate();
  return (
    <div style={{ fontFamily:'"DM Sans",sans-serif' }}>
      <div style={{ height:320, background:'linear-gradient(135deg,#004D40 0%,#FF6B00 55%,#C8941A 100%)', display:'flex', alignItems:'center', justifyContent:'center', textAlign:'center', color:'#fff', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, opacity:0.05, backgroundImage:'repeating-linear-gradient(60deg,#fff 0,#fff 1px,transparent 0,transparent 30px)', backgroundSize:'30px 30px' }} />
        <div style={{ position:'relative' }}>
          <p style={{ fontSize:'0.76rem', letterSpacing:'2.5px', textTransform:'uppercase', opacity:0.75, marginBottom:'0.6rem' }}>✦ Explore India</p>
          <h1 style={{ fontFamily:'"Playfair Display",serif', fontSize:'clamp(2.4rem,5vw,4rem)', fontWeight:900 }}>All Destinations</h1>
          <p style={{ opacity:0.82, marginTop:'0.8rem' }}>From the Himalayas to the backwaters — India's infinite variety</p>
        </div>
      </div>

      <div style={{ maxWidth:1200, margin:'0 auto', padding:'4rem 2.5rem' }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(340px,1fr))', gap:'2rem' }}>
          {destinations.map(d => (
            <div key={d.id} onClick={()=>nav('/packages')} style={{
              borderRadius:22, overflow:'hidden', cursor:'pointer', background:d.grad,
              height:440, position:'relative', boxShadow:'0 8px 40px rgba(0,0,0,0.14)',
              transition:'all 0.35s',
            }}
            onMouseOver={e=>{e.currentTarget.style.transform='translateY(-8px) scale(1.01)';e.currentTarget.style.boxShadow='0 24px 60px rgba(0,0,0,0.25)';}}
            onMouseOut={e=>{e.currentTarget.style.transform='';e.currentTarget.style.boxShadow='0 8px 40px rgba(0,0,0,0.14)';}}>
              <img src={d.image} alt={d.name} style={{ width:'100%', height:'100%', objectFit:'cover', position:'absolute', inset:0 }} />
              <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 28% 22%,rgba(255,255,255,0.2),transparent 60%)' }} />
              <div style={{ position:'absolute', top:'1.4rem', left:'1.4rem', fontSize:'2.8rem', filter:'drop-shadow(0 4px 12px rgba(0,0,0,0.3))' }}>{d.icon}</div>
              <div style={{ position:'absolute', top:'1.4rem', right:'1.4rem', background:'rgba(0,0,0,0.28)', backdropFilter:'blur(8px)', border:'1px solid rgba(255,255,255,0.2)', color:'#fff', fontSize:'0.67rem', padding:'0.27rem 0.75rem', borderRadius:50, letterSpacing:'1px', textTransform:'uppercase' }}>{d.tag}</div>
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(0,0,0,0.92) 0%,rgba(0,0,0,0.04) 52%,transparent 100%)' }} />
              <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'2rem 1.8rem' }}>
                <h2 style={{ fontFamily:'"Playfair Display",serif', color:'#fff', fontSize:'2rem', fontWeight:700, marginBottom:'0.3rem' }}>{d.name}</h2>
                <p style={{ color:'rgba(255,255,255,0.68)', fontSize:'0.83rem', fontStyle:'italic', marginBottom:'0.75rem' }}>{d.tagline}</p>
                <p style={{ color:'rgba(255,255,255,0.75)', fontSize:'0.82rem', lineHeight:1.6, marginBottom:'1rem' }}>{d.desc}</p>
                <div style={{ display:'flex', flexWrap:'wrap', gap:'0.4rem', marginBottom:'1rem' }}>
                  {d.highlights.map((h,i)=>(
                    <span key={i} style={{ background:'rgba(255,255,255,0.12)', color:'rgba(255,255,255,0.9)', fontSize:'0.7rem', padding:'0.22rem 0.65rem', borderRadius:50 }}>✓ {h}</span>
                  ))}
                </div>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                  <div><span style={{ color:'rgba(255,255,255,0.55)', fontSize:'0.75rem' }}>From </span><span style={{ fontFamily:'"Playfair Display",serif', color:'#FFD700', fontSize:'1.3rem', fontWeight:700 }}>₹{d.price.toLocaleString()}</span></div>
                  <span style={{ color:'rgba(255,255,255,0.7)', fontSize:'0.79rem' }}>⏱ {d.days} Days · ⭐ {d.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}