import React from 'react'

function Login() {
  return (
    <div>
        <form>
            <div> <label htmlFor=''>Name</label>
            <input type='text'/>
            </div>
            <div>
                 <label htmlFor=''>Email</label>
            <input type='email'/>
            </div>          
                  
        </form>
    </div>
  )
}

export default Login