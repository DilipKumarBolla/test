// import React, { useState } from "react";
// import Login from "./Login";
// import Profile from "./Profile";

// function Render(){
//     var [login, setLogin] = useState(false)

//    if(login){
//     return <Profile data = {{login, setLogin}}/>
//    }
//    else{
//     return <Login data = {{login, setLogin}}/>
//    }
// }
// export default Render
import React, { useState } from "react";
import Login from "./Login";
import Profile from "./Profile";

function Render() {
  const [login, setLogin] = useState(false);

  return login 
    ? <Profile data={{ login, setLogin }} /> 
    : <Login data={{ login, setLogin }} />;
}

export default Render;
