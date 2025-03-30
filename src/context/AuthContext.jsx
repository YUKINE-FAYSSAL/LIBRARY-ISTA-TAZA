import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing auth on app load
    const checkAuth = () => {
      const storedUser = localStorage.getItem('library_user') || sessionStorage.getItem('library_user');
      const storedToken = localStorage.getItem('library_token') || sessionStorage.getItem('library_token');
      
      if (storedUser && storedToken) {
        setUser(JSON.parse(storedUser));
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const login = (userData, token, remember = false) => {
    if (remember) {
      localStorage.setItem('library_token', token);
      localStorage.setItem('library_user', JSON.stringify(userData));
    } else {
      sessionStorage.setItem('library_token', token);
      sessionStorage.setItem('library_user', JSON.stringify(userData));
    }
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('library_token');
    localStorage.removeItem('library_user');
    sessionStorage.removeItem('library_token');
    sessionStorage.removeItem('library_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ 
      user,
      isLoading,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};