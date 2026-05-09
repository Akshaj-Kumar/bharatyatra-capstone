import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { testimonials, stats, monthlyData, destinations, packages } from '../data/data';
import Footer from '../components/Footer';
import TravelNews from '../components/TravelNews';
import TouristPlaces from '../components/TouristPlaces';

function CountUp({ value, suffix, decimals = 0 }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let cur = 0;
        const dur = 2000, step = 16;
        const inc = value / (dur / step);
        const t = setInterval(() => {
          cur = Math.min(cur + inc, value);
          setN(cur);
          if (cur >= value) clearInterval(t);
        }, step);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);
  return (
    <div ref={ref} style={{ textAlign:'center', padding:'2rem 1.5rem' }}>
      <div style={{
        fontFamily:'"Playfair Display",serif', fontSize:'3rem', fontWeight:900, lineHeight:1,
        background:'linear-gradient(135deg,#FF6B00,#FFD700)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
      }}>
        {decimals > 0 ? n.toFixed(decimals) : Math.round(n).toLocaleString()}{suffix}
      </div>
    </div>
  );
}

export default function Home() {
  const [activeT, setActiveT] = useState(0);
  const [search, setSearch] = useState({ dest:'', type:'India', travelers:'2', date:'' });
  const nav = useNavigate();

  useEffect(() => {
    const t = setInterval(() => setActiveT(p => (p + 1) % testimonials.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ fontFamily:'"DM Sans",sans-serif' }}>

      {/* ── HERO ── */}
      <section style={{ height:'100vh', position:'relative', display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden', background:'#0A0400' }}>
        <video autoPlay muted loop playsInline style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', opacity:0.32 }}>
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        </video>
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 15% 75%,rgba(255,107,0,0.45) 0%,transparent 50%), radial-gradient(ellipse at 85% 15%,rgba(200,148,26,0.3) 0%,transparent 55%), linear-gradient(180deg,rgba(10,4,0,0.2) 0%,rgba(10,4,0,0.75) 100%)' }} />
        <div style={{ position:'absolute', inset:0, opacity:0.03, backgroundImage:'repeating-linear-gradient(0deg,#FF6B00 0,#FF6B00 1px,transparent 0,transparent 70px),repeating-linear-gradient(90deg,#FF6B00 0,#FF6B00 1px,transparent 0,transparent 70px)', backgroundSize:'70px 70px' }} />

        {/* Decorative rotating mandala */}
        <svg style={{ position:'absolute', top:'8%', right:'6%', width:280, opacity:0.08, animation:'spin 50s linear infinite' }} viewBox="0 0 200 200">
          {[0,30,60,90,120,150].map(a=>(
            <g key={a} transform={`rotate(${a} 100 100)`}>
              <ellipse cx="100" cy="38" rx="13" ry="40" fill="none" stroke="#FF6B00" strokeWidth="1"/>
              <ellipse cx="100" cy="50" rx="7" ry="24" fill="none" stroke="#C8941A" strokeWidth="0.5"/>
            </g>
          ))}
          <circle cx="100" cy="100" r="32" fill="none" stroke="#FF6B00" strokeWidth="1.2"/>
          <circle cx="100" cy="100" r="16" fill="none" stroke="#C8941A" strokeWidth="0.6"/>
          <circle cx="100" cy="100" r="5" fill="rgba(255,107,0,0.25)"/>
        </svg>

        <div style={{ position:'relative', textAlign:'center', color:'#fff', padding:'2rem', maxWidth:900, zIndex:2 }}>
          <div style={{
            display:'inline-flex', alignItems:'center', gap:'0.5rem',
            background:'rgba(255,107,0,0.15)', border:'1px solid rgba(255,107,0,0.32)',
            color:'#FFB74D', fontSize:'0.76rem', letterSpacing:'2.5px', textTransform:'uppercase',
            padding:'0.42rem 1.3rem', borderRadius:50, marginBottom:'1.8rem',
            animation:'fadeUp 0.8s ease both',
          }}>
            ✦ Est. 2019 · 50,000+ Happy Travellers
          </div>

          <h1 style={{
            fontFamily:'"Playfair Display",serif', fontSize:'clamp(3rem,7vw,6.5rem)',
            lineHeight:1.0, fontWeight:900, marginBottom:'1.5rem',
            animation:'fadeUp 0.8s ease 0.15s both', letterSpacing:'-1px',
          }}>
            Discover the Soul of<br/>
            <em style={{ color:'#FF9A3C', fontStyle:'italic' }}>Incredible India</em>
          </h1>

          <p style={{ fontSize:'1.12rem', opacity:0.8, maxWidth:600, margin:'0 auto 2.5rem', lineHeight:1.75, animation:'fadeUp 0.8s ease 0.3s both', fontWeight:300 }}>
            From the golden sands of Rajasthan to the backwaters of Kerala — journey through a land of a thousand wonders. International bookings also available.
          </p>

          <div style={{ display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap', animation:'fadeUp 0.8s ease 0.45s both' }}>
            <Link to="/packages" style={{
              background:'linear-gradient(135deg,#FF6B00,#C8941A)', color:'#fff',
              padding:'1rem 2.4rem', borderRadius:50, fontWeight:700, fontSize:'1rem',
              textDecoration:'none', boxShadow:'0 8px 30px rgba(255,107,0,0.42)',
              display:'inline-flex', alignItems:'center', gap:'0.5rem',
            }}>✈ Explore Packages</Link>
            <Link to="/destinations" style={{
              background:'rgba(255,255,255,0.1)', color:'#fff', border:'1px solid rgba(255,255,255,0.3)',
              padding:'1rem 2.4rem', borderRadius:50, fontWeight:500, fontSize:'1rem',
              textDecoration:'none', backdropFilter:'blur(8px)',
            }}>🗺 Browse Destinations</Link>
          </div>

          {/* Search bar */}
          <div style={{
            marginTop:'3rem', background:'rgba(10,4,0,0.5)', backdropFilter:'blur(20px)',
            border:'1px solid rgba(255,255,255,0.15)', borderRadius:18, padding:'1.1rem 1.4rem',
            display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr auto', gap:0,
            animation:'fadeUp 0.8s ease 0.6s both',
          }}>
            {[
              { label:'Destination', key:'dest', type:'text', placeholder:'Where to?' },
              { label:'Trip Type', key:'type', type:'select', options:['India','International','India + Intl'] },
              { label:'Travellers', key:'travelers', type:'select', options:['1 Person','2 People','Family (3-5)','Group (6+)'] },
              { label:'Departure Date', key:'date', type:'date', placeholder:'' },
            ].map((item, i) => (
              <div key={i} style={{ padding:'0 1.1rem', borderRight: i<3 ? '1px solid rgba(255,255,255,0.12)' : 'none' }}>
                <div style={{ fontSize:'0.68rem', color:'rgba(255,255,255,0.48)', letterSpacing:'1.2px', textTransform:'uppercase', marginBottom:'0.35rem' }}>{item.label}</div>
                {item.type === 'select' ? (
                  <select value={search[item.key]} onChange={e=>setSearch(p=>({...p,[item.key]:e.target.value}))} style={{ background:'transparent', border:'none', color:'#fff', fontSize:'0.92rem', fontFamily:'"DM Sans",sans-serif', outline:'none', cursor:'pointer', width:'100%' }}>
                    {item.options.map(o=><option key={o} value={o} style={{color:'#1A0A00'}}>{o}</option>)}
                  </select>
                ) : (
                  <input type={item.type} placeholder={item.placeholder} value={search[item.key]} onChange={e=>setSearch(p=>({...p,[item.key]:e.target.value}))} style={{ background:'transparent', border:'none', color:'#fff', fontSize:'0.92rem', fontFamily:'"DM Sans",sans-serif', outline:'none', width:'100%', colorScheme:'dark' }} />
                )}
              </div>
            ))}
            <button onClick={()=>nav('/packages')} style={{
              background:'linear-gradient(135deg,#FF6B00,#C8941A)', color:'#fff', border:'none',
              borderRadius:12, padding:'0.65rem 1.4rem', cursor:'pointer', fontWeight:700,
              fontSize:'0.88rem', fontFamily:'"DM Sans",sans-serif', whiteSpace:'nowrap',
            }}>🔍 Search</button>
          </div>
        </div>

        <div style={{ position:'absolute', bottom:'2rem', left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:'0.4rem', color:'rgba(255,255,255,0.35)', fontSize:'0.7rem', letterSpacing:'1.5px', textTransform:'uppercase' }}>
          <div style={{ width:1, height:48, background:'linear-gradient(to bottom,rgba(255,255,255,0.4),transparent)' }} />
          SCROLL
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background:'linear-gradient(135deg,#1A0A00,#0A1A1A)', padding:'0.5rem 0' }}>
        <div style={{ maxWidth:1100, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(4,1fr)' }}>
          {stats.map((s, i) => (
            <div key={i} style={{ borderRight: i<3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
              <CountUp value={s.value} suffix={s.suffix} decimals={s.decimals||0} />
              <div style={{ textAlign:'center', color:'rgba(255,255,255,0.5)', fontSize:'0.78rem', letterSpacing:'1.2px', textTransform:'uppercase', paddingBottom:'2rem' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── DESTINATIONS ── */}
      <section style={{ padding:'6rem 2.5rem', background:'#FFF8EE' }}>
        <div style={{ maxWidth:1200, margin:'0 auto' }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:'3rem', flexWrap:'wrap', gap:'1rem' }}>
            <div>
              <p style={{ color:'#FF6B00', fontSize:'0.76rem', letterSpacing:'2.5px', textTransform:'uppercase', fontWeight:600, marginBottom:'0.5rem' }}>✦ Popular Destinations</p>
              <h2 style={{ fontFamily:'"Playfair Display",serif', fontSize:'clamp(1.9rem,4vw,2.8rem)', fontWeight:900, color:'#1A0A00' }}>India's Most Beloved Journeys</h2>
            </div>
            <Link to="/destinations" style={{ color:'#FF6B00', fontWeight:600, fontSize:'0.88rem', textDecoration:'none' }}>View all destinations →</Link>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gridTemplateRows:'auto auto', gap:'1.4rem' }}>
            {destinations.map((d, i) => (
              <div key={d.id} onClick={()=>nav('/destinations')} style={{
                borderRadius:20, overflow:'hidden', cursor:'pointer', position:'relative',
                height: i===0 ? 440 : 300,
                gridColumn: i===0 ? 'span 2' : 'span 1',
                gridRow: i===0 ? 'span 1' : 'span 1',
                background:d.grad, boxShadow:'0 8px 40px rgba(0,0,0,0.14)',
                transition:'transform 0.35s,box-shadow 0.35s',
              }}
              onMouseOver={e=>{e.currentTarget.style.transform='translateY(-6px)';e.currentTarget.style.boxShadow='0 20px 60px rgba(0,0,0,0.25)';}}
              onMouseOut={e=>{e.currentTarget.style.transform='';e.currentTarget.style.boxShadow='0 8px 40px rgba(0,0,0,0.14)';}}>
                <img src={d.image} alt={d.name} style={{ width:'100%', height:'100%', objectFit:'cover', position:'absolute', inset:0 }} />
                <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 25% 20%,rgba(255,255,255,0.18) 0%,transparent 60%)' }} />
                <div style={{ position:'absolute', top:'1.4rem', left:'1.4rem', fontSize:'2.4rem', filter:'drop-shadow(0 3px 10px rgba(0,0,0,0.3))' }}>{d.icon}</div>
                <div style={{ position:'absolute', top:'1.4rem', right:'1.4rem', background:'rgba(0,0,0,0.28)', backdropFilter:'blur(8px)', border:'1px solid rgba(255,255,255,0.18)', color:'#fff', fontSize:'0.68rem', letterSpacing:'1px', textTransform:'uppercase', padding:'0.27rem 0.75rem', borderRadius:50 }}>{d.tag}</div>
                <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(0,0,0,0.88) 0%,rgba(0,0,0,0.05) 52%,transparent 100%)' }} />
                <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'2rem 1.8rem' }}>
                  <h3 style={{ fontFamily:'"Playfair Display",serif', color:'#fff', fontSize: i===0?'2.2rem':'1.55rem', fontWeight:700, marginBottom:'0.3rem', lineHeight:1.1 }}>{d.name}</h3>
                  <p style={{ color:'rgba(255,255,255,0.65)', fontSize:'0.8rem', fontStyle:'italic', marginBottom:'0.75rem' }}>{d.tagline}</p>
                  <div style={{ display:'flex', justifyContent:'space-between', color:'rgba(255,255,255,0.8)', fontSize:'0.8rem' }}>
                    <span>⏱ {d.days} Days · ⭐ {d.rating}</span>
                    <span style={{ fontFamily:'"Playfair Display",serif', color:'#FFD700', fontSize:'1.05rem', fontWeight:700 }}>From ₹{d.price.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCES ── */}
      <section style={{ padding:'6rem 2.5rem', background:'#0A1A1A', color:'#fff' }}>
        <div style={{ maxWidth:1100, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:'3.5rem' }}>
            <p style={{ color:'#FF9A3C', fontSize:'0.76rem', letterSpacing:'2.5px', textTransform:'uppercase', fontWeight:600, marginBottom:'0.5rem' }}>✦ Why BharatYatra</p>
            <h2 style={{ fontFamily:'"Playfair Display",serif', fontSize:'clamp(1.9rem,4vw,2.8rem)', fontWeight:900 }}>Experiences That Stay Forever</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:'1.3rem' }}>
            {[
              {icon:'🏰',title:'Heritage Immersion',desc:'UNESCO sites, royal palaces and hidden gems known only to locals.'},
              {icon:'🍛',title:'Culinary Journeys',desc:'Street food tours, cooking classes and royal thali experiences.'},
              {icon:'🧘',title:'Wellness & Yoga',desc:'Ashram retreats, Ayurvedic spas and meditation by the Ganges.'},
              {icon:'🐯',title:'Wildlife Safaris',desc:'Tiger reserves, elephant sanctuaries and rare bird watching.'},
              {icon:'🎊',title:'Festivals & Culture',desc:'Holi, Diwali, Pushkar Camel Fair — live authentic celebrations.'},
              {icon:'🏄',title:'Adventure Sports',desc:'River rafting, paragliding, skiing and Himalayan trekking.'},
            ].map((e,i)=>(
              <div key={i} style={{ padding:'1.8rem 1.4rem', border:'1px solid rgba(255,255,255,0.07)', borderRadius:16, cursor:'pointer', transition:'all 0.3s' }}
              onMouseOver={ev=>{ev.currentTarget.style.borderColor='rgba(255,107,0,0.4)';ev.currentTarget.style.background='rgba(255,107,0,0.06)';ev.currentTarget.style.transform='translateY(-4px)';}}
              onMouseOut={ev=>{ev.currentTarget.style.borderColor='rgba(255,255,255,0.07)';ev.currentTarget.style.background='';ev.currentTarget.style.transform='';}}>
                <div style={{ fontSize:'2.2rem', marginBottom:'0.9rem' }}>{e.icon}</div>
                <h3 style={{ fontFamily:'"Playfair Display",serif', fontSize:'1.15rem', marginBottom:'0.55rem', fontWeight:700 }}>{e.title}</h3>
                <p style={{ fontSize:'0.85rem', opacity:0.58, lineHeight:1.65 }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PACKAGES ── */}
      <section style={{ padding:'6rem 2.5rem', background:'#fff' }}>
        <div style={{ maxWidth:1200, margin:'0 auto' }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:'3rem', flexWrap:'wrap', gap:'1rem' }}>
            <div>
              <p style={{ color:'#FF6B00', fontSize:'0.76rem', letterSpacing:'2.5px', textTransform:'uppercase', fontWeight:600, marginBottom:'0.5rem' }}>✦ Handpicked Packages</p>
              <h2 style={{ fontFamily:'"Playfair Display",serif', fontSize:'clamp(1.9rem,4vw,2.8rem)', fontWeight:900, color:'#1A0A00' }}>Book Your Perfect Getaway</h2>
            </div>
            <Link to="/packages" style={{ color:'#FF6B00', fontWeight:600, fontSize:'0.88rem', textDecoration:'none' }}>View all packages →</Link>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(340px,1fr))', gap:'1.5rem' }}>
            {packages.slice(0,3).map(pkg=>(
              <div key={pkg.id} onClick={()=>nav(`/packages/${pkg.id}`)} style={{
                border:'1px solid rgba(0,0,0,0.07)', borderRadius:20, overflow:'hidden',
                cursor:'pointer', background:'#fff', transition:'all 0.35s',
              }}
              onMouseOver={e=>{e.currentTarget.style.boxShadow='0 20px 60px rgba(0,0,0,0.12)';e.currentTarget.style.transform='translateY(-5px)';}}
              onMouseOut={e=>{e.currentTarget.style.boxShadow='';e.currentTarget.style.transform='';}}>
                <div style={{ height:210, background:pkg.grad, position:'relative', overflow:'hidden' }}>
                  <img src={pkg.image} alt={pkg.name} style={{ width:'100%', height:'100%', objectFit:'cover', position:'absolute', inset:0 }} />
                  <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.15))' }} />
                  <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 28% 28%,rgba(255,255,255,0.16) 0%,transparent 60%)' }} />
                  <div style={{ position:'absolute', top:'1rem', left:'1rem', background:pkg.badgeColor, color:'#fff', fontSize:'0.68rem', padding:'0.28rem 0.75rem', borderRadius:50, fontWeight:700, letterSpacing:'0.5px' }}>{pkg.badge}</div>
                  <div style={{ position:'absolute', top:'1rem', right:'1rem', background:'rgba(0,0,0,0.28)', color:'#fff', fontSize:'0.72rem', padding:'0.28rem 0.7rem', borderRadius:50, backdropFilter:'blur(8px)' }}>{pkg.category}</div>
                  <div style={{ position:'absolute', bottom:'1rem', left:'1rem', right:'1rem', display:'flex', justifyContent:'space-between', color:'rgba(255,255,255,0.82)', fontSize:'0.79rem' }}>
                    <span>⏱ {pkg.duration}</span>
                    <span>⭐ {pkg.rating} ({pkg.reviews.toLocaleString()})</span>
                  </div>
                </div>
                <div style={{ padding:'1.5rem' }}>
                  <h3 style={{ fontFamily:'"Playfair Display",serif', fontSize:'1.2rem', fontWeight:700, marginBottom:'0.35rem', color:'#1A0A00' }}>{pkg.name}</h3>
                  <p style={{ color:'#6B5744', fontSize:'0.8rem', marginBottom:'0.9rem' }}>📍 {pkg.route}</p>
                  <div style={{ display:'flex', flexWrap:'wrap', gap:'0.35rem', marginBottom:'1.1rem' }}>
                    {pkg.highlights.slice(0,3).map((h,i)=>(
                      <span key={i} style={{ background:'rgba(255,107,0,0.08)', color:'#CC5500', fontSize:'0.7rem', padding:'0.22rem 0.6rem', borderRadius:50, fontWeight:500 }}>✓ {h}</span>
                    ))}
                  </div>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', paddingTop:'1rem', borderTop:'1px solid rgba(0,0,0,0.06)' }}>
                    <div>
                      <div style={{ fontFamily:'"Playfair Display",serif', fontSize:'1.6rem', fontWeight:900, color:'#FF6B00', lineHeight:1 }}>₹{pkg.price.toLocaleString()}</div>
                      <div style={{ fontSize:'0.7rem', color:'#6B5744' }}><span style={{ textDecoration:'line-through', opacity:0.55, marginRight:'0.3rem' }}>₹{pkg.originalPrice.toLocaleString()}</span>per person</div>
                    </div>
                    <button style={{ background:'linear-gradient(135deg,#FF6B00,#C8941A)', color:'#fff', border:'none', padding:'0.6rem 1.2rem', borderRadius:50, fontWeight:600, fontSize:'0.83rem', cursor:'pointer', fontFamily:'"DM Sans",sans-serif' }}>Book Now →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ANALYTICS ── */}
      <section style={{ padding:'6rem 2.5rem', background:'#FFF8EE' }}>
        <div style={{ maxWidth:1100, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:'3rem' }}>
            <p style={{ color:'#FF6B00', fontSize:'0.76rem', letterSpacing:'2.5px', textTransform:'uppercase', fontWeight:600, marginBottom:'0.5rem' }}>✦ Our Impact</p>
            <h2 style={{ fontFamily:'"Playfair Display",serif', fontSize:'clamp(1.9rem,4vw,2.8rem)', fontWeight:900, color:'#1A0A00' }}>Booking Trends & Growth</h2>
          </div>
          <div style={{ background:'#fff', borderRadius:24, padding:'2.5rem', boxShadow:'0 8px 50px rgba(0,0,0,0.07)' }}>
            <h3 style={{ fontFamily:'"Playfair Display",serif', fontSize:'1.1rem', marginBottom:'1.5rem', color:'#1A0A00' }}>Monthly Bookings 2024 — Domestic vs International</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={monthlyData}>
                <defs>
                  <linearGradient id="gD" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FF6B00" stopOpacity={0.28}/>
                    <stop offset="95%" stopColor="#FF6B00" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="gI" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#C8941A" stopOpacity={0.28}/>
                    <stop offset="95%" stopColor="#C8941A" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f5f0e8"/>
                <XAxis dataKey="month" tick={{fontSize:12,fill:'#6B5744'}}/>
                <YAxis tick={{fontSize:12,fill:'#6B5744'}}/>
                <Tooltip contentStyle={{borderRadius:12,border:'none',boxShadow:'0 4px 20px rgba(0,0,0,0.1)'}}/>
                <Legend />
                <Area type="monotone" dataKey="domestic" name="Domestic Bookings" stroke="#FF6B00" strokeWidth={2.5} fill="url(#gD)"/>
                <Area type="monotone" dataKey="international" name="International Bookings" stroke="#C8941A" strokeWidth={2.5} fill="url(#gI)"/>
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding:'6rem 2.5rem', background:'#0A1A1A', color:'#fff', overflow:'hidden' }}>
        <div style={{ maxWidth:900, margin:'0 auto', textAlign:'center' }}>
          <p style={{ color:'#FF9A3C', fontSize:'0.76rem', letterSpacing:'2.5px', textTransform:'uppercase', fontWeight:600, marginBottom:'0.5rem' }}>✦ Traveller Stories</p>
          <h2 style={{ fontFamily:'"Playfair Display",serif', fontSize:'clamp(1.9rem,4vw,2.8rem)', fontWeight:900, marginBottom:'3rem' }}>Voices from the Journey</h2>
          <div style={{ position:'relative', minHeight:260 }}>
            {testimonials.map((t,i)=>(
              <div key={t.id} style={{ position:i===activeT?'relative':'absolute', top:0, left:0, right:0, opacity:i===activeT?1:0, transition:'opacity 0.65s ease', padding:'0 1rem' }}>
                <div style={{ fontSize:'2.8rem', color:'#FF6B00', marginBottom:'0.8rem', lineHeight:1 }}>"</div>
                <p style={{ fontFamily:'"Playfair Display",serif', fontSize:'clamp(1.05rem,2.2vw,1.3rem)', fontStyle:'italic', lineHeight:1.7, opacity:0.88, marginBottom:'1.8rem' }}>{t.text}</p>
                <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'1rem' }}>
                  <div style={{ width:48, height:48, borderRadius:'50%', background:'linear-gradient(135deg,#FF6B00,#C8941A)', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:700, fontSize:'0.95rem', color:'#fff' }}>{t.avatar}</div>
                  <div style={{ textAlign:'left' }}>
                    <div style={{ fontWeight:600, fontSize:'0.93rem' }}>{t.name}</div>
                    <div style={{ fontSize:'0.76rem', opacity:0.48 }}>📍 {t.loc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ display:'flex', gap:'0.5rem', justifyContent:'center', marginTop:'2rem' }}>
            {testimonials.map((_,i)=>(
              <button key={i} onClick={()=>setActiveT(i)} style={{ width:i===activeT?28:8, height:8, borderRadius:50, border:'none', cursor:'pointer', background:i===activeT?'#FF6B00':'rgba(255,255,255,0.18)', transition:'all 0.3s' }} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding:'6rem 2.5rem', background:'linear-gradient(135deg,#FF6B00 0%,#C8941A 50%,#FF6B00 100%)', backgroundSize:'200% 200%', animation:'shimmer 4s ease infinite', textAlign:'center', color:'#fff' }}>
        <div style={{ maxWidth:700, margin:'0 auto' }}>
          <h2 style={{ fontFamily:'"Playfair Display",serif', fontSize:'clamp(2rem,5vw,3.5rem)', fontWeight:900, marginBottom:'1rem' }}>Ready to Begin Your Journey?</h2>
          <p style={{ fontSize:'1.08rem', opacity:0.9, marginBottom:'2.5rem', lineHeight:1.7 }}>Talk to our travel experts today. Free itinerary planning, visa guidance and 24/7 support.</p>
          <div style={{ display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap' }}>
            <Link to="/packages" style={{ background:'#fff', color:'#FF6B00', padding:'1rem 2.4rem', borderRadius:50, fontWeight:700, fontSize:'1rem', textDecoration:'none', boxShadow:'0 8px 30px rgba(0,0,0,0.2)' }}>Explore All Packages</Link>
            <Link to="/register" style={{ background:'rgba(255,255,255,0.15)', color:'#fff', border:'2px solid rgba(255,255,255,0.5)', padding:'1rem 2.4rem', borderRadius:50, fontWeight:600, fontSize:'1rem', textDecoration:'none' }}>Create Free Account</Link>
          </div>
        </div>
      </section>

      <TravelNews />
      <TouristPlaces />

      <Footer />

      <style>{`
        @keyframes fadeUp{from{opacity:0;transform:translateY(38px)}to{opacity:1;transform:translateY(0)}}
        @keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        @keyframes shimmer{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
      `}</style>
    </div>
  );
}