
// import logo from './logo.svg';

import './App.css';
import React from 'react';
import Login from './FrontendData/Login';
// import Render from './Performance/Conditional-Rendering/Render';
import Parent from './Client-Side-Routing/Parent';
// import List from './List-Rendering/List';
// import Parent from './Destructuring/Parent';
// import Profile from './components/Profile';
// import Login from './components/Login';
// import { UserProvider } from './context/UserContext';

function App() {
  return (
    <div>
      This is Dilip Kumar
      {/* <Profile/> */}
      {/* <Login/> */}
      {/* <UserProvider/> */}
      {/* <List/> */}
      {/* <Parent/> */}
      {/* <Render/> */}
      <Parent/>
      <Login/>
    </div>
  );
}

export default App;


// import React from 'react';
// import './App.css';

// import Profile from './components/Profile';
// import Login from './components/Login';
// import { UserProvider } from './context/UserContext';
// import PhotoList from './components/PhotoList';
// import List from './List-Rendering/List';

// function App() {
//   return (
//     <UserProvider>
//       <div className='App'>
//        <h1>Context API + REST Example</h1>
//         <Profile />
//         <Login />
//         <PhotoList/>
//         <List/>
//       </div>
//     </UserProvider>
//   );
// }

// export default App;

// src/App.js

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from './features/counter/counterSlice';

// function App() {
//   const count = useSelector((state) => state.counter.value);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <h1>Redux Counter</h1>
//       <p>Count: {count}</p>
//       <button onClick={() => dispatch(increment())}>➕</button>
//       <button onClick={() => dispatch(decrement())}>➖</button>
//     </div>
//   );
// }

// export default App;


