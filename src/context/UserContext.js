// import React, { createContext, useState } from 'react';

// export const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState({
//     name: 'Dilip Kumar',
//     email: 'dkbolla98@gmail.com',
//     isLoggedIn: false
//   });

//   const login = (userData) => {
//     setUser({ ...userData, isLoggedIn: true });
//   };

//   const logout = () => {
//     setUser({ name: '', email: '', isLoggedIn: false });
//   };

//   return (
//     <UserContext.Provider value={{ user, login, logout }}>
//       {children}
//     </UserContext.Provider>
//   );
// };


import React, { createContext, useState, } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [loadingPhotos, setLoadingPhotos] = useState(false);

  // Existing login function
  const login = async (credentials) => {
    // 1. Authenticate user (e.g., POST /api/login)
    // Here we'll skip auth and assume login succeeds
    setUser({ name: credentials.name, email: credentials.email, isLoggedIn: true });

    // 2. Immediately fetch photos
    setLoadingPhotos(true);
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/photos');
      const data = await res.json();
      setPhotos(data);
    } catch (err) {
      console.error('Failed to fetch photos:', err);
    } finally {
      setLoadingPhotos(false);
    }
  };

  const logout = () => {
    setUser(null);
    setPhotos([]);
  };

  return (
    <UserContext.Provider value={{ user, login, logout, photos, loadingPhotos }}>
      {children}
    </UserContext.Provider>
  );
}
