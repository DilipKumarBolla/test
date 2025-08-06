// import React, { useContext } from 'react';
// import { UserContext } from '../context/UserContext';

// const Profile = () => {
//   const { user, logout } = useContext(UserContext);

//   return (
//     <div>
//       <h2>User Login</h2>
//       {user.isLoggedIn ? (
//         <>
//           <p>Name: {user.name}</p>
//           <p>Email: {user.email}</p>
//           <button onClick={logout}>Logout</button>
//         </>
//       ) : (
//         <p>User not logged in.</p>
//       )}
//     </div>
//   );
// };

// export default Profile;


// components/Profile.js
import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Profile = () => {
  const { user, loading, error, logout } = useContext(UserContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!user) return <p>Please log in.</p>;

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Profile;
