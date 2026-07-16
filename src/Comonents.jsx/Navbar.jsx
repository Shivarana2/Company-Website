import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className="navbar  bg-dark">
  <div className="container-fluid">

    <Link className='navbar-brand text-white' to='/'>SS Tech Solution</Link>
    <ul className='navbar-nav mx-auto flex-row gap-4'>
      <li className='nav-item'>
        <Link className='nav-link text-white' to='/'>Home</Link>
      </li>

      <li className='nav-item'>
        <Link className='nav-link text-white' to='/About'>About</Link>
      </li>

      <li className='nav-item'>
       <Link className='nav-link text-white' to='/Services'>Services</Link>
      </li>

      <li className='nav-item'>
        <a className='nav-link text-white' href='#'>Contact</a>
      </li>

    </ul>
    <div>
        <button className='btn btn-outline-light me-2'>Login</button>
        <button className='btn btn-light  '>Register</button>
    </div>
    
    
  </div>      
  </nav>
   </div>
  )
}

export default Navbar