import React, { useState } from "react";
import Child from "./Child";

function Parent(){

    var [data] = useState({name:'Sachin', address: {city:"hyderabad"}})
   var {name, address} =data
   var {city} = address
   
    return(
        <div>Parent
            {/* <h3>Name:{data.name}</h3>
            <h3>City:{data.address.city}</h3> */}
            <h3>Name:{name}</h3>
            <h3>City:{address.city}</h3>
             <h3>City:{city}</h3>
            <Child data ={data}/>
        </div>
    )
}

export default Parent;