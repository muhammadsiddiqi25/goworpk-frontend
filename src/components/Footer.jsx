import React from 'react'
import '../assets/styles/Footer.css'
import logo from '../assets/images/logo.svg'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import fb from '../assets/images/socialmedia/fb.png'
import insta from '../assets/images/socialmedia/insta.png'
import twitter from '../assets/images/socialmedia/twitter.png'
const Footer = () => {
  return (
    <footer>
      <div className = 'footer-top'>
        <div className = 'footer-links'>          
          <div className = 'footer-logo'>
            <img src = {logo} width = '150px' />
            <Typography variant = 'h4'>A gateway to the better future</Typography>
          </div>
                <ul className='footer-ul'>
                  <li className = 'footer-li'>
                    <Link to = ''>Home</Link>
                  </li>
                  <li className = 'footer-li'>
                    <Link to = ''>Blog</Link>
                  </li>
                  <li className = 'footer-li'>
                    <Link to = ''>Certifications</Link>
                  </li>
                  <li className = 'footer-li'>
                    <Link to = ''>Pricing</Link>
                  </li>
                  <li className = 'footer-li'>
                    <Link to = ''>CV Builder</Link>
                  </li>
                </ul>
                <ul className='footer-ul'>
                  <li className = 'footer-li'>
                    <Link to = ''>Terms & Conditions</Link>
                  </li>
                  <li className = 'footer-li'>
                    <Link to = ''>Privacy Policy</Link>
                  </li>
                  <li className = 'footer-li'>
                    <Link to = ''>Refund policy</Link>
                  </li>
                  <li className = 'footer-li'>
                    <Link to = ''>Contact Us</Link>
                  </li>
                </ul>
                <ul className='footer-ul'>
                  <li className = 'footer-li'>
                    <Link to = ''>Join GoWork</Link>
                  </li>
                  <li className = 'footer-li'>
                    <Link to = ''>Login</Link>
                  </li>
                  <li className = 'footer-li'>
                    <Link to = ''>Support Us</Link>
                  </li>
                  <li className = 'footer-li'>
                    <Link to = ''>Support@gowork.pk</Link>
                  </li>
                </ul>
        </div>
        <div className='footer-socialmedia'>
          <Link to = ''>
            <img src = {fb} className='footer-socialmedia-icon' />
          </Link>
          <Link to = ''>
            <img src = {twitter} className='footer-socialmedia-icon' />
          </Link>
          <Link to = ''>
            <img src = {insta} className='footer-socialmedia-icon' />
          </Link>
        </div>
      </div>
      <hr></hr>
      <div className = 'footer-bottom'>
      <p>Copyright &copy 2023 gowork.pk</p>
      </div>
    </footer>
  )
}

export default Footer