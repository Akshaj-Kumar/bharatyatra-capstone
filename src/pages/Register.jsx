import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Register() {
  const [form, setForm] = useState({ name:'', email:'', password:'', confirm:'', phone:'' });
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const nav = useNavigate();

  const handle = (e) => {
    e.preventDefault();
    setErr('');
    if (form.password !== form.confirm) { setErr('Passwords do not match'); return; }
    setLoading(true);
    setTimeout(() => {
      const res = register(form.name, form.email, form.password);
      if (res.success) nav('/');
      else setErr(res.error);
      setLoading(false);
    }, 900);
  };

  const field = (label, key, type='text', placeholder='') => (
    <div>
      <label style={{ fontSize:'0.78rem', fontWeight:500, color:'#6B5744', letterSpacing:'0.3px', display:'block', marginBottom:'0.4rem' }}>
        {label}
      </label>
      <input
        type={type} required placeholder={placeholder}
        value={form[key]} onChange={e => setForm(p=>({...p,[key]:e.target.value}))}
        style={{
          width:'100%', padding:'0.88rem 1rem', borderRadius:12,
          border:'1.5px solid rgba(0,0,0,0.1)', fontFamily:'"DM Sans",sans-serif',
          fontSize:'0.93rem', outline:'none', transition:'border 0.2s',
        }}
        onFocus={e => e.target.style.borderColor='#FF6B00'}
        onBlur={e => e.target.style.borderColor='rgba(0,0,0,0.1)'}
      />
    </div>
  );

  return (
    <div style={{ minHeight:'100vh', display:'flex', fontFamily:'"DM Sans",sans-serif' }}>
      {/* Left panel */}
      <div style={{
        flex:'0 0 38%', background:'linear-gradient(160deg,#1A0A00 0%,#FF6B00 55%,#C8941A 100%)',
        display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
        padding:'3rem', color:'#fff', position:'relative', overflow:'hidden',
      }}>
        <svg style={{ position:'absolute', bottom:'-5%', left:'-10%', width:320, opacity:0.08, animation:'spin 60s linear infinite' }} viewBox="0 0 200 200">
          {[0,45,90,135].map(a=>(
            <g key={a} transform={`rotate(${a} 100 100)`}>
              <ellipse cx="100" cy="30" rx="18" ry="50" fill="none" stroke="#fff" strokeWidth="1"/>
            </g>
          ))}
          <circle cx="100" cy="100" r="40" fill="none" stroke="#fff" strokeWidth="1.5"/>
        </svg>
        <div style={{ position:'relative', textAlign:'center' }}>
          <div style={{ fontSize:'3rem', marginBottom:'1rem' }}>🗺️</div>
          <h2 style={{ fontFamily:'"Playfair Display",serif', fontSize:'2.2rem', fontWeight:900, marginBottom:'0.8rem', lineHeight:1.15 }}>
            Join BharatYatra
          </h2>
          <p style={{ opacity:0.85, fontSize:'0.95rem', lineHeight:1.7, marginBottom:'2rem' }}>
            Create your free account and unlock exclusive packages, wishlists and personalised itineraries.
          </p>
          <div style={{ display:'flex', flexDirection:'column', gap:'0.75rem' }}>
            {['✓ Free itinerary planning','✓ Exclusive member discounts','✓ 24/7 travel support','✓ Visa & documentation help','✓ Wishlist & trip planner'].map(f=>(
              <div key={f} style={{ background:'rgba(255,255,255,0.1)', backdropFilter:'blur(8px)', border:'1px solid rgba(255,255,255,0.18)', borderRadius:10, padding:'0.7rem 1rem', fontSize:'0.87rem', textAlign:'left' }}>{f}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Right form */}
      <div style={{ flex:1, display:'flex', alignItems:'center', justifyContent:'center', background:'#fff', padding:'2.5rem', overflowY:'auto' }}>
        <div style={{ width:'100%', maxWidth:480 }}>
          <Link to="/" style={{ textDecoration:'none', color:'#FF6B00', fontSize:'0.85rem', display:'inline-flex', alignItems:'center', gap:'0.3rem', marginBottom:'2rem' }}>
            ← Back to Home
          </Link>
          <h2 style={{ fontFamily:'"Playfair Display",serif', fontSize:'2rem', fontWeight:900, marginBottom:'0.4rem', color:'#1A0A00' }}>
            Create Account
          </h2>
          <p style={{ color:'#6B5744', fontSize:'0.88rem', marginBottom:'1.8rem' }}>
            Already have an account?{' '}
            <Link to="/login" style={{ color:'#FF6B00', fontWeight:600, textDecoration:'none' }}>Sign in</Link>
          </p>

          {err && (
            <div style={{ background:'#FFF3F0', border:'1px solid #FFCCBB', color:'#C62828', padding:'0.85rem 1rem', borderRadius:10, fontSize:'0.87rem', marginBottom:'1.2rem' }}>
              ⚠️ {err}
            </div>
          )}

          <form onSubmit={handle} style={{ display:'flex', flexDirection:'column', gap:'1rem' }}>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}>
              {field('FULL NAME', 'name', 'text', 'Your full name')}
              {field('PHONE / WHATSAPP', 'phone', 'tel', '+91 98765 43210')}
            </div>
            {field('EMAIL ADDRESS', 'email', 'email', 'you@email.com')}
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}>
              {field('PASSWORD', 'password', 'password', 'Min 6 characters')}
              {field('CONFIRM PASSWORD', 'confirm', 'password', 'Repeat password')}
            </div>
            <div style={{ fontSize:'0.78rem', color:'#6B5744', padding:'0.75rem 1rem', background:'#FFF8EE', borderRadius:10, border:'1px solid rgba(200,148,26,0.2)', lineHeight:1.6 }}>
              By registering you agree to our <a href="#" style={{ color:'#FF6B00', textDecoration:'none' }}>Terms of Service</a> and <a href="#" style={{ color:'#FF6B00', textDecoration:'none' }}>Privacy Policy</a>.
            </div>
            <button type="submit" disabled={loading} style={{
              width:'100%', padding:'1rem', borderRadius:50, border:'none',
              background: loading ? '#ddd' : 'linear-gradient(135deg,#FF6B00,#C8941A)',
              color: loading ? '#999' : '#fff', fontFamily:'"DM Sans",sans-serif',
              fontSize:'1rem', fontWeight:700, cursor: loading ? 'not-allowed' : 'pointer',
              boxShadow: loading ? 'none' : '0 6px 24px rgba(255,107,0,0.35)',
            }}>
              {loading ? 'Creating account…' : '🚀 Create My Account'}
            </button>
          </form>
        </div>
      </div>
      <style>{`@keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }`}</style>
    </div>
  );
}