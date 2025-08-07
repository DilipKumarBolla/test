import React, { useEffect, useState } from 'react'

function UserList() {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showList, setShowList] = useState(false);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            // console.log(res);
            return res.json()
        })
        .then((data)=>{
            // console.log(data)
            setUser(data)
            setLoading(false)
        })
        .catch((err)=>{
            // console.log(err)
            setLoading(false)
        }, [])

    })
  return (
    <div>
        <h2>User List</h2>
        {/* {!showList && (
            <button onClick={()=> setShowList(true)}>Show User</button>
        )} */}
        <button onClick={() => setShowList((prev) => !prev)}>
        {showList ? 'show Users' : 'hide Users'}
      </button>

        { showList && !loading && (
            <ul>
                {user.map((u)=>(
                    <li key={u.id}>
                        <strong>{u.name}</strong> <br/>
                        <strong>{u.email}</strong> <br/>
                        <strong>{u.phone}</strong> <br/>
                    </li>
                )
                    
                )}
            </ul>
        )}

    </div>
  )
}

export default UserList;