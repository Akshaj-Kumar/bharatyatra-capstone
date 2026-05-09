import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [form, setForm] = useState({ email:'', password:'' });
  const [err, setErr]   = useState('');
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const { login } = useAuth();
  const nav = useNavigate();

  const handle = (e) => {
    e.preventDefault();
    setErr(''); setLoading(true);
    setTimeout(() => {
      const res = login(form.email, form.password);
      if (res.success) nav('/');
      else setErr(res.error);
      setLoading(false);
    }, 900);
  };

  return (
    <div style={{
      minHeight:'100vh', display:'flex', fontFamily:'"DM Sans",sans-serif',
    }}>
      {/* Left decorative panel */}
      <div style={{
        flex:1, background:'linear-gradient(160deg,#FF6B00 0%,#C8941A 45%,#1A0A00 100%)',
        display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
        padding:'3rem', color:'#fff', position:'relative', overflow:'hidden',
      }}>
        {/* Mandala */}
        <svg style={{ position:'absolute', top:'5%', right:'-10%', width:380, opacity:0.1, animation:'spin 50s linear infinite' }} viewBox="0 0 200 200">
          {[0,30,60,90,120,150].map(a=>(
            <g key={a} transform={`rotate(${a} 100 100)`}>
              <ellipse cx="100" cy="40" rx="14" ry="40" fill="none" stroke="#fff" strokeWidth="1"/>
            </g>
          ))}
          <circle cx="100" cy="100" r="35" fill="none" stroke="#fff" strokeWidth="1.5"/>
          <circle cx="100" cy="100" r="18" fill="none" stroke="#fff" strokeWidth="1"/>
          <circle cx="100" cy="100" r="7" fill="rgba(255,255,255,0.3)"/>
        </svg>

        <div style={{ position:'relative', textAlign:'center', maxWidth:400 }}>
          <div style={{ fontSize:'3.5rem', marginBottom:'1.2rem' }}>🪔</div>
          <h1 style={{
            fontFamily:'"Playfair Display",serif', fontSize:'2.8rem', fontWeight:900,
            marginBottom:'0.8rem', lineHeight:1.1,
          }}>Welcome Back to BharatYatra</h1>
          <p style={{ opacity:0.85, fontSize:'1rem', lineHeight:1.7, marginBottom:'2.5rem' }}>
            Your next unforgettable Indian adventure is just a login away.
          </p>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}>
            {[
              { icon:'✈', label:'50K+ Travellers' },
              { icon:'🏆', label:'200+ Destinations' },
              { icon:'⭐', label:'4.9★ Rating' },
              { icon:'🌍', label:'35 Countries' },
            ].map(s => (
              <div key={s.label} style={{
                background:'rgba(255,255,255,0.12)', backdropFilter:'blur(8px)',
                border:'1px solid rgba(255,255,255,0.2)', borderRadius:14,
                padding:'1rem', textAlign:'center',
              }}>
                <div style={{ fontSize:'1.6rem', marginBottom:'0.3rem' }}>{s.icon}</div>
                <div style={{ fontSize:'0.8rem', fontWeight:500, opacity:0.9 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right form panel */}
      <div style={{
        flex:1, display:'flex', alignItems:'center', justifyContent:'center',
        background:'#fff', padding:'2.5rem',
      }}>
        <div style={{ width:'100%', maxWidth:420 }}>
          <Link to="/" style={{ textDecoration:'none', color:'#FF6B00', fontSize:'0.85rem', display:'inline-flex', alignItems:'center', gap:'0.3rem', marginBottom:'2.5rem' }}>
            ← Back to Home
          </Link>
          <h2 style={{ fontFamily:'"Playfair Display",serif', fontSize:'2.2rem', fontWeight:900, marginBottom:'0.4rem', color:'#1A0A00' }}>
            Sign In
          </h2>
          <p style={{ color:'#6B5744', fontSize:'0.9rem', marginBottom:'2rem' }}>
            Don't have an account?{' '}
            <Link to="/register" style={{ color:'#FF6B00', fontWeight:600, textDecoration:'none' }}>Create one free</Link>
          </p>

          {err && (
            <div style={{
              background:'#FFF3F0', border:'1px solid #FFCCBB', color:'#C62828',
              padding:'0.85rem 1rem', borderRadius:10, fontSize:'0.87rem', marginBottom:'1.2rem',
            }}>⚠️ {err}</div>
          )}

          <form onSubmit={handle} style={{ display:'flex', flexDirection:'column', gap:'1.1rem' }}>
            <div>
              <label style={{ fontSize:'0.8rem', fontWeight:500, color:'#6B5744', letterSpacing:'0.3px', display:'block', marginBottom:'0.4rem' }}>
                EMAIL ADDRESS
              </label>
              <input
                type="email" required placeholder="you@email.com"
                value={form.email} onChange={e => setForm(p=>({...p, email:e.target.value}))}
                style={{
                  width:'100%', padding:'0.9rem 1rem', borderRadius:12,
                  border:'1.5px solid rgba(0,0,0,0.1)', fontFamily:'"DM Sans",sans-serif',
                  fontSize:'0.95rem', outline:'none', transition:'border 0.2s',
                }}
                onFocus={e => e.target.style.borderColor='#FF6B00'}
                onBlur={e => e.target.style.borderColor='rgba(0,0,0,0.1)'}
              />
            </div>
            <div>
              <label style={{ fontSize:'0.8rem', fontWeight:500, color:'#6B5744', letterSpacing:'0.3px', display:'block', marginBottom:'0.4rem' }}>
                PASSWORD
              </label>
              <div style={{ position:'relative' }}>
                <input
                  type={show ? 'text' : 'password'} required placeholder="Min 6 characters"
                  value={form.password} onChange={e => setForm(p=>({...p, password:e.target.value}))}
                  style={{
                    width:'100%', padding:'0.9rem 3rem 0.9rem 1rem', borderRadius:12,
                    border:'1.5px solid rgba(0,0,0,0.1)', fontFamily:'"DM Sans",sans-serif',
                    fontSize:'0.95rem', outline:'none', transition:'border 0.2s',
                  }}
                  onFocus={e => e.target.style.borderColor='#FF6B00'}
                  onBlur={e => e.target.style.borderColor='rgba(0,0,0,0.1)'}
                />
                <button type="button" onClick={() => setShow(!show)} style={{
                  position:'absolute', right:'0.9rem', top:'50%', transform:'translateY(-50%)',
                  background:'none', border:'none', cursor:'pointer', fontSize:'1.1rem', color:'#aaa',
                }}>
                  {show ? '🙈' : '👁'}
                </button>
              </div>
            </div>
            <div style={{ textAlign:'right' }}>
              <a href="#" style={{ color:'#FF6B00', fontSize:'0.83rem', textDecoration:'none' }}>Forgot password?</a>
            </div>
            <button type="submit" disabled={loading} style={{
              width:'100%', padding:'1rem', borderRadius:50, border:'none',
              background: loading ? '#ddd' : 'linear-gradient(135deg,#FF6B00,#C8941A)',
              color: loading ? '#999' : '#fff', fontFamily:'"DM Sans",sans-serif',
              fontSize:'1rem', fontWeight:700, cursor: loading ? 'not-allowed' : 'pointer',
              boxShadow: loading ? 'none' : '0 6px 24px rgba(255,107,0,0.35)',
              transition:'all 0.3s', letterSpacing:'0.3px',
            }}>
              {loading ? 'Signing in…' : '✈ Sign In to BharatYatra'}
            </button>
          </form>

          {/* Demo hint */}
          <div style={{
            marginTop:'1.8rem', padding:'1rem', background:'#FFF8EE',
            borderRadius:12, border:'1px solid rgba(200,148,26,0.2)', fontSize:'0.82rem', color:'#6B5744',
          }}>
            <strong style={{ color:'#C8941A' }}>Demo credentials:</strong><br />
            Email: <code>demo@bharatyatra.com</code><br />
            Password: <code>demo123</code>
          </div>
        </div>
      </div>

      <style>{`@keyframes spin { from { transform:rotate(0deg) } to { transform:rotate(360deg) } }`}</style>
    </div>
  );
}