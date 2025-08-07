// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'



// function LoginForm() {
//     const dispatch = useDispatch()
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [loading, error, user]= useSelector(state => state.auth);

//     const handleSubmit = (e)=>{
//         e.preventDefault();
//           console.log("Login Payload: ", { email, password });
//         dispatch( {type: 'LOGIN_REQUEST', payload: {email, password}});
       

//     }


//   return (

//     <form onSubmit={handleSubmit}>
//         <h2> LoginForm</h2>
//         <input 
//         type='email'
//         placeholder='Email'
//         value={email}
//         onChange={e => setEmail(e.target.value)}
//         />

//         <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={e => setPassword(e.target.value)}
//       />
//       <button type='submit' disabled ={loading}>Login</button>

//       {loading && <p> Loading....</p>}
//       {error && <p style={{color: 'red'}}> {error}</p>}
//        {user && <p>Welcome, {user.name}</p>}
//     </form>
//   )
// }

// export default LoginForm

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, error, user } = useSelector((state) => state.auth);

   useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Token from storage:", token);  // You will see this in browser console
  }, []);

  // 💻 Debugging redux state
  console.log("Redux State:", { loading, error, user });

  const handleSubmit = (e) => {
    e.preventDefault();

    // 💻 Debugging login form values
    console.log("Login Payload: ", { email, password });

    dispatch({
      type: "LOGIN_REQUEST",
      payload: { email, password },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>LoginForm</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit" disabled={loading}>
        Login
      </button>

      {loading && <p>Loading....</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {user && <p>Welcome, {user.name}</p>}
    </form>
  );
}

export default LoginForm;
