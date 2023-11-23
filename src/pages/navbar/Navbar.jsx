import React, {useState } from 'react';
import Logo from '../../assets/cc5pink.png'
import { Link } from 'react-router-dom'
//import Home from '../Home/Home'
import ReorderIcon from '@mui/icons-material/Reorder';
import './Navbar.css'

function Navbar() {
  const [openLinks, setOpenLinks]= useState(false);
  const toggleNavbar = ()=> {
    setOpenLinks(!openLinks)
  }
  return (
    <div className='navbar'>
      
        <div className='leftSide' id ={openLinks? "open":"close"}>
            <img src={Logo} />
            <h3>care connect</h3>
           <div className='hiddenLinks'>
            <Link to="/home" >Home </Link>
            <Link to="/login" > Login </Link>
            <Link to="/creg" > Register </Link>
           
  </div>
        </div>
        <div className='rightSide'>
          <Link to="/home" >Home </Link>
          <Link to="/login" > Login </Link>
          <Link to="/creg" > Register </Link>
          <button onClick={toggleNavbar}><ReorderIcon/></button> 
        </div>

    </div>
  )
}

export default Navbar
