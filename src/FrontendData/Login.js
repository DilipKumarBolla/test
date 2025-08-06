// import React, { useState } from 'react';
import { jwtDecode } from 'jwt-decode';
// import axios from 'axios';

// function Login() {
//   const [form, setForm] = useState({ email: '', password: '' });
//   const [token, setToken] = useState('');
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:2000/login',form)
//         console.log(res.data.auth,"responser")
//         const userData=jwtDecode(res.data.auth)
//         console.log("user",new Date(userData.iat),userData);
//         localStorage.setItem('token',res.data.auth);
        
//       if (!res.ok) {
//         throw new Error('Login failed');
//       }

//       const data = await res.json();
//       setToken(data.auth);
//       const decoded = jwtDecode(data.auth);
//       setUser(decoded);
//       localStorage.setItem('token', data.auth); // optional
//     } catch (err) {
//       setError('Invalid email or password');
//       setToken('');
//       setUser(null);
//      }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input name="email" value={form.email} onChange={handleChange} placeholder="email" />
//         <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password" />
//         <button type="submit">Login</button>
//       </form>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {token && (
//         <div>
//           <h3>Token:</h3>
//           <code>{token}</code>
//           <h3>Decoded User Info:</h3>
//           <pre>{JSON.stringify(user, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";
import axios from 'axios';
// import {jwtDecode} from 'jwtDecode';

function Login(){

  const [form, setForm] = useState({email: '', password: ''});
  const [token, setToken] = useState('')
  const [user, setUser] = useState(null)
  const [error, setError] = useState('')

const handleChange =(e)=>{
  setForm({...form, [e.target.name]:e.target.value})
}

const handleLogin = async(e)=>{

  e.preventDefault();
  try{
    const res = await axios.post('http://localhost:2000/login', form)
    const token = res.data.auth;
    const decoded = jwtDecode(token)
    setToken(decoded);
    // setUser(decoded);
    localStorage.setItem('token', token);
    setError('')
  }
  catch(err){
    setError('Invalid email or Password');
    setToken('');
    setUser(null);
  }
};
  return(
  <div>
    <h1> LoginPage</h1>
    <form onSubmit={handleLogin}>
      <input name ='email' value={form.email} onChange={handleChange} placeholder="email"/>
      <input name ='password' value={form.password} onChange={handleChange} placeholder="password"/>
      <button type="submit">Login</button>
    </form>
    {error && <p style= {{color: 'red'}}>{error}</p>}

    {
      token && (
        <div>
        <h3>Token: </h3>
        <code>{token}</code>
        <h3>Decoded User Info</h3>
        <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
      )
     };


  </div>
)
};

export default Login;