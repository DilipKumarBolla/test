import React from "react";

// function List(){

//     var names = ['sachin', "Kohli", 'Rahul', 'Dhoni', 'Gill']
//     return(
//         <>
//          <div>Cricketer names</div>
//         {/* <h4> {names[0]}</h4>
//         <h4> {names[1]}</h4>
//         <h4> {names[2]}</h4>
//         <h4> {names[4]}</h4>   */}
//         {
//             names.map((name)=>{
                
//                 return <h4> {name}</h4> 

//             })
//         } 
//         </>
       
//     )
// }

// export default List

function List(){
    
    var names = ['Dilip', 'Kohli', 'Gill', 'sachin','kohli', 'sewag'];
     
    return(
        
        <div>
        <h1> Cricketer Names</h1>

        {
            names.map((name)=>{
                return <h2 key ={name}>{name}</h2>
            })
        }
        </div>
    )
}

export default List;