import React from 'react'
import Logo from '../../assets/cc5.png'
import { Link } from 'react-router-dom'
import Home from '../Home/Home'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>

        </div>
        <div className='leftSide'>
            <img src={Logo} />
        </div>
        <div className='rightSide'>
          <Link to="/" >Home </Link>
          <Link to="/login" > Login </Link>
          <Link to="/creg" > Register </Link>
          
        </div>

    </div>
  )
}

export default Navbar
