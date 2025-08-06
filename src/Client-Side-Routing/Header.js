import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <h1>Header Component</h1>
        <ul>
            <li><Link to='/Home'>Home</Link></li>
            <li><Link to='/About'>About</Link></li>
            <li><Link to='/Product'>Product</Link></li>
            <li><Link to='/Login'>Login</Link></li>
        </ul>
    </div>
  )
}

export default Header