import {  useMediaQuery } from '@mui/material'
import SmallButton from '../components/custom-mui-comp/Button'
import React, { useState } from 'react'
import logo from '../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {
  const navigate = useNavigate()
  const isNonMobile = useMediaQuery('(min-width:1000px)')
  const [show,setShow] = useState(false)
  return (
    <nav>
                 { !isNonMobile? <MenuIcon sx={{
            fontSize:'60px',

            padding:'0px'
          }}
          onClick={()=>{
            setShow(!show)
          }}
          /> : null}
        {/* LEFT SIDE LOGO */}
        <div className='nav-right'>

            <img src = {logo} alt = 'Gowork' width = '60px' />
            <ul className='nav-ul' 
            style={show && !isNonMobile?{
              display:'flex',position:'absolute',flexDirection:'column',
              top:'80px',
              left:'0px',
              backgroundColor:'white',
              width:'100vw',
              zIndex:'10',
              height:'190px',
              animation:'navAnmiation 0.7s ease-in-out',
              
            }:null}
            >
            <li className='nav-li'><Link to=''>Home</Link></li>
            <li className='nav-li'><Link to=''>Blog</Link></li>
            <li className='nav-li'><Link to=''>Certifications</Link></li>
            {/* <li className='nav-li'><Link to=''>Pricing</Link></li> */}
            <li className='nav-li'><Link to=''>CV Builder</Link></li>    
            <li className='nav-li'><Link to='/about'>About Us</Link></li>    
        </ul>
        </div>
        <div>
        <SmallButton type='button' variant = 'contained' onClick={()=>navigate('/login')}>Login</SmallButton>
        </div>

    </nav>
  )
}

export default Navbar