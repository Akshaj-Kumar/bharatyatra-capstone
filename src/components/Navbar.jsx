import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const links = [
  ['/', 'Home'],
  ['/destinations', 'Destinations'],
  ['/packages', 'Packages'],
  ['/international', 'International'],
  ['/compare', 'Compare'],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drop, setDrop] = useState(false);
  const { user, logout } = useAuth();
  const loc = useLocation();
  const nav = useNavigate();
  const isHome = loc.pathname === '/';

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const bg = scrolled ? 'rgba(255,255,255,0.97)' : 'transparent';
  const c  = scrolled ? '#1A0A00' : '#fff';

  return (
    <nav style={{
      position:'fixed', top:0, left:0, right:0, zIndex:999,
      padding: scrolled ? '0.75rem 2.5rem' : '1.3rem 2.5rem',
      background: bg,
      backdropFilter: scrolled ? 'blur(18px)' : 'none',
      boxShadow: scrolled ? '0 2px 30px rgba(0,0,0,0.09)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(200,148,26,0.12)' : 'none',
      display:'flex', alignItems:'center', justifyContent:'space-between',
      transition:'all 0.4s ease',
    }}>
      {/* Logo */}
      <Link to="/" style={{ textDecoration:'none', display:'flex', alignItems:'center', gap:'0.45rem' }}>
        <span style={{ fontSize:'1.5rem' }}>🪔</span>
        <span style={{
          fontFamily:'"Playfair Display",serif', fontSize:'1.5rem', fontWeight:900,
          color: scrolled ? '#FF6B00' : '#fff', letterSpacing:'-0.5px',
        }}>
          Bharat<span style={{ color: scrolled ? '#C8941A' : '#FFD700' }}>Yatra</span>
        </span>
      </Link>

      {/* Nav links */}
      <div style={{ display:'flex', gap:'0.1rem' }}>
        {links.map(([path, label]) => {
          const active = loc.pathname === path;
          return (
            <Link key={path} to={path} style={{
              textDecoration:'none',
              padding:'1.5rem 0.9rem',
              fontSize:'0.875rem', fontWeight:500,
              color: scrolled ? (active ? '#FF6B00' : '#6B5744') : (active ? '#FFD700' : 'rgba(255,255,255,0.88)'),
              borderBottom: active ? `2px solid ${scrolled ? '#FF6B00' : '#FFD700'}` : '2px solid transparent',
              transition:'all 0.2s',
            }}>{label}</Link>
          );
        })}
      </div>

      {/* Auth buttons */}
      <div style={{ display:'flex', gap:'0.75rem', alignItems:'center' }}>
        {user ? (
          <div style={{ position:'relative' }}>
            <button onClick={() => setDrop(!drop)} style={{
              display:'flex', alignItems:'center', gap:'0.55rem',
              padding:'0.38rem 1rem 0.38rem 0.38rem',
              background: scrolled ? 'rgba(255,107,0,0.07)' : 'rgba(255,255,255,0.12)',
              border:`1px solid ${scrolled ? 'rgba(255,107,0,0.22)' : 'rgba(255,255,255,0.3)'}`,
              borderRadius:'50px', cursor:'pointer',
              color: scrolled ? '#FF6B00' : '#fff',
              fontFamily:'"DM Sans",sans-serif', fontSize:'0.875rem', fontWeight:500,
            }}>
              <span style={{
                width:'28px', height:'28px', borderRadius:'50%',
                background:'linear-gradient(135deg,#FF6B00,#C8941A)',
                display:'flex', alignItems:'center', justifyContent:'center',
                color:'#fff', fontSize:'0.78rem', fontWeight:700,
              }}>{user.avatar}</span>
              {user.name}
            </button>
            {drop && <>
              <div onClick={() => setDrop(false)} style={{ position:'fixed', inset:0, zIndex:198 }} />
              <div style={{
                position:'absolute', top:'115%', right:0, minWidth:'175px',
                background:'#fff', borderRadius:'14px',
                boxShadow:'0 12px 50px rgba(0,0,0,0.14)',
                border:'1px solid rgba(0,0,0,0.07)', overflow:'hidden', zIndex:199,
              }}>
                <div style={{ padding:'0.75rem 1rem', fontSize:'0.78rem', color:'#999', borderBottom:'1px solid #f5f5f5' }}>
                  {user.email}
                </div>
                <button onClick={() => { logout(); setDrop(false); nav('/'); }} style={{
                  width:'100%', padding:'0.8rem 1rem', background:'none', border:'none',
                  textAlign:'left', cursor:'pointer', fontSize:'0.88rem', color:'#e53935',
                  fontFamily:'"DM Sans",sans-serif',
                }}>🚪 Sign Out</button>
              </div>
            </>}
          </div>
        ) : (
          <>
            <Link to="/login" style={{
              textDecoration:'none', padding:'0.5rem 1.1rem', borderRadius:'50px',
              fontSize:'0.875rem', fontWeight:500,
              color: scrolled ? '#6B5744' : 'rgba(255,255,255,0.9)',
              border:`1px solid ${scrolled ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.3)'}`,
            }}>Sign In</Link>
            <Link to="/register" style={{
              textDecoration:'none', padding:'0.55rem 1.35rem', borderRadius:'50px',
              fontSize:'0.875rem', fontWeight:600,
              background:'linear-gradient(135deg,#FF6B00,#C8941A)',
              color:'#fff', boxShadow:'0 4px 18px rgba(255,107,0,0.35)',
            }}>Book Now</Link>
          </>
        )}
      </div>
    </nav>
  );
}