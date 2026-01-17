
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  purchasedProductSlugs: string[];
}

interface Session {
  user: User | null;
  status: 'loading' | 'authenticated' | 'unauthenticated';
}

interface AuthContextType {
  session: Session;
  signIn: (email: string, pass: string) => Promise<boolean>;
  signUp: (name: string, email: string, pass: string) => Promise<boolean>;
  signOut: () => void;
  hasPurchased: (slug: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Key for our simulated "DB"
const USERS_DB_KEY = 'inurpc_users_db';
const SESSION_KEY = 'inurpc_session';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<Session>({ user: null, status: 'loading' });

  useEffect(() => {
    const savedSession = localStorage.getItem(SESSION_KEY);
    if (savedSession) {
      setSession({ user: JSON.parse(savedSession), status: 'authenticated' });
    } else {
      setSession({ user: null, status: 'unauthenticated' });
    }
  }, []);

  const getRegisteredUsers = (): any[] => {
    const data = localStorage.getItem(USERS_DB_KEY);
    return data ? JSON.parse(data) : [];
  };

  const signIn = async (email: string, pass: string): Promise<boolean> => {
    setSession(prev => ({ ...prev, status: 'loading' }));
    await new Promise(resolve => setTimeout(resolve, 800));

    const users = getRegisteredUsers();
    const user = users.find(u => u.email === email && u.password === pass);

    if (user) {
      const { password, ...userWithoutPass } = user;
      setSession({ user: userWithoutPass, status: 'authenticated' });
      localStorage.setItem(SESSION_KEY, JSON.stringify(userWithoutPass));
      return true;
    }

    setSession({ user: null, status: 'unauthenticated' });
    return false;
  };

  const signUp = async (name: string, email: string, pass: string): Promise<boolean> => {
    setSession(prev => ({ ...prev, status: 'loading' }));
    await new Promise(resolve => setTimeout(resolve, 1000));

    const users = getRegisteredUsers();
    if (users.some(u => u.email === email)) {
      setSession({ user: null, status: 'unauthenticated' });
      return false; // User already exists
    }

    const newUser = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      password: pass,
      purchasedProductSlugs: [], // New users start with nothing
    };

    users.push(newUser);
    localStorage.setItem(USERS_DB_KEY, JSON.stringify(users));

    const { password, ...userWithoutPass } = newUser;
    setSession({ user: userWithoutPass, status: 'authenticated' });
    localStorage.setItem(SESSION_KEY, JSON.stringify(userWithoutPass));
    return true;
  };

  const signOut = () => {
    setSession({ user: null, status: 'unauthenticated' });
    localStorage.removeItem(SESSION_KEY);
  };

  const hasPurchased = (slug: string) => {
    return session.user?.purchasedProductSlugs.includes(slug) || false;
  };

  return (
    <AuthContext.Provider value={{ session, signIn, signUp, signOut, hasPurchased }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useSession must be used within an AuthProvider');
  return context;
};

// Alias for backward compatibility if needed, but we'll use useSession
export const useAuth = useSession;
