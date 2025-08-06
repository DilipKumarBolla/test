// import React, { useContext } from 'react';
// import { UserContext } from '../context/UserContext';

// const Login = () => {
//   const { user, login } = useContext(UserContext);

//   const handleLogin = () => {
//     login({ name: 'Dilip Kumar', email: 'dkbolla98@gmail.com' });
//   };

//   if (user.isLoggedIn) return null;

//   return <button onClick={handleLogin}>Login</button>;
// };

// export default Login;

import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

export default function Login() {
  const { user, login } = useContext(UserContext);
  const [form, setForm] = useState({ name: '', email: '' });

  if (user?.isLoggedIn) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
        required
      />
      <br />
      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })}
        type="email"
        required
      />
      <br />
      <button type="submit">Login & Load Photos</button>
    </form>
  );
}
