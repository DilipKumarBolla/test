// import React from 'react'

// function Login(props) {
//     console.log(props)
//     var {login, setLogin} = props
//     console.log(login)
//     console.log(setLogin)
//   return (
//     <div>Login

//         {/* <button onClick={()=>setLogin(props.login=true)}>Login</button> */}
//           <button onClick={() => setLogin(true)}>Login</button>

//     </div>
//   )
// }

// export default Login

import React, { useState } from 'react';
import Login from './Login';
import Profile from './Profile';

function App() {
  const [login, setLogin] = useState(false);

  return (
    <div>
      {login ? (
        <Profile data={{ login, setLogin }} />
      ) : (
        <Login login={login} setLogin={setLogin} />
      )}
    </div>
  );
}

export default App;
