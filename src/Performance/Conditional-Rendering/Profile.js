// import React from 'react'
// // import Login from './Login'

// function Profile(props) {
//     // var {login, setLogin} = props.data
//     var {login, setLogin} = props.data
//   return (
//     <div>

//         <h4>The Profile Component</h4>
//         {/* <button onClick={()=>setLogin(login =false)}>Logout</button> */}
//       <button onClick={() => setLogin(false)}>Logout</button>
//        </div>
//   )
// }

// export default Profile

import React, { useState } from 'react';
import Profile from './Profile';

function App() {
  const [login, setLogin] = useState(true);

  return (
    <div>
      {login ? (
        <Profile data={{ login, setLogin }} />
      ) : (
        <h2>Please Login</h2>
      )}
    </div>
  );
}

export default App;
