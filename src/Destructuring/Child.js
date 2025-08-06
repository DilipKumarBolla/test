import React from "react";

function Child(props){
    // console.log(props)
    var {data} = props
        var {name, address} = data
        var {city} = address

    return(
        <div>Child Data

             <h3>{props.data.name}</h3>
             <h3>{props.data.address.city}</h3>
            
             <h3>{name}</h3>
            <h3>{city}</h3>
        </div>
       
    )
}

export default Child;