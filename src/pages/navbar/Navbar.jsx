import React, { useState } from 'react'
import Logo from '../../assets/cc5pink.png'
import { Link } from 'react-router-dom'
// import Home from '../Home/Home'
// import ReorderIcon from '@mui/icons-material/Reorder'
import { IoMenu } from "react-icons/io5";
import './Navbar.css'
import pfp from "../../assets/pfpwork.png"
import { Avatar, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';


function Navbar () {
    const items = [
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="/updateprofile">
              Update Profile
            </a>
          ),
        },];

  const [openLinks, setOpenLinks] = useState(false)
  const toggleNavbar = () => {
    setOpenLinks(!openLinks)
  }
  return (
    <div className='navbar'>
            <div className='leftSide' id ={openLinks ? 'open' : 'close'}>
            <img src={Logo} />
                <h3>care connect</h3>
                        <div className='hiddenLinks'>
                            <Link to="/test" >Services </Link>
                            <Link to="/login" > Login </Link>
                            <Link to="/reg" > Register </Link>

                            </div>
            </div>

        <div className='rightSide'>
          <Link to="/test" >Services </Link>
          <Link to="/login" > Login </Link>
          <Link to="/reg" > Register </Link>
          <Dropdown menu={{items}}>
                <Avatar
                className='navbarpfp'
                alt='User Profile'
                src={pfp}
                onClick={(e) => e.preventDefault()} // Prevents default click behavior for Avatar
                />
            </Dropdown>
          <button onClick={toggleNavbar}><IoMenu/></button>
        </div>

    </div>
  )
}

export default Navbar