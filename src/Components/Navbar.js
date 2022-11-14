import React from 'react';
import { Link } from 'react-router-dom';
import Vector from '../images/Vector.png'
import './Navbar.css'

function Navbar() {
  return (
    <div>
      <div className='nav'>
        <div className='logo'>
          <img src={Vector} alt="logo" className='vector'/>
          <div className='meta-name'>Metabnb</div>
        </div>
        <ul className='nav-links'>
          <Link to='/' className='link'><li>Home</li></Link>
          <Link to='/' className='link'><li>Place to stay</li></Link>
          <Link to='/' className='link'><li>NFTs</li></Link>
          <Link to='/' className='link'><li>Community</li></Link>
        </ul>
        <button className='connect'>Connect wallet</button>
      </div>
    </div>
  )
}

export default Navbar