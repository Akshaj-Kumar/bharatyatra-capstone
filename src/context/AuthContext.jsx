import { createContext, useContext, useState } from 'react';
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  const login = (email, password) => {
    if (email && password.length >= 6) {
      setUser({ id: 1, name: email.split('@')[0], email, avatar: email[0].toUpperCase() });
      return { ok: true };
    }
    return { ok: false, err: 'Invalid email or password (min 6 chars)' };
  };

  const register = (name, email, password) => {
    if (name && email && password.length >= 6) {
      setUser({ id: 1, name, email, avatar: name[0].toUpperCase() });
      return { ok: true };
    }
    return { ok: false, err: 'Please fill all fields correctly' };
  };

  const logout = () => setUser(null);

  const toggleWishlist = (id) =>
    setWishlist(p => p.includes(id) ? p.filter(i => i !== id) : [...p, id]);

  return (
    <AuthContext.Provider value={{ user, login, register, logout, wishlist, toggleWishlist }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);