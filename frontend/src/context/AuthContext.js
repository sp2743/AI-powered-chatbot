// src/context/AuthContext.js
import React, { createContext, useState, useContext } from 'react';

// Create the context
const AuthContext = createContext();

// Create a custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  // Login function - simulated for now
  const login = async (credentials) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo, just check if email and password are provided
      if (credentials.email && credentials.password) {
        const userData = {
          id: '1',
          name: credentials.email.split('@')[0],
          email: credentials.email
        };
        
        setUser(userData);
        setIsAuthenticated(true);
        
        // Store in localStorage for persistence
        localStorage.setItem('user', JSON.stringify(userData));
        
        return userData;
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Signup function - simulated for now
  const signup = async (userData) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo, just check if required fields are provided
      if (userData.name && userData.email && userData.password) {
        const newUser = {
          id: '1',
          name: userData.name,
          email: userData.email
        };
        
        setUser(newUser);
        setIsAuthenticated(true);
        
        // Store in localStorage for persistence
        localStorage.setItem('user', JSON.stringify(newUser));
        
        return newUser;
      } else {
        throw new Error('Missing required fields');
      }
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
  };

  // Check if user is already logged in from localStorage
  const checkAuthStatus = () => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setIsAuthenticated(true);
    }
  };

  // Check auth status on initial load
  React.useEffect(() => {
    checkAuthStatus();
  }, []);

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated, 
      loading,
      login,
      signup,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};