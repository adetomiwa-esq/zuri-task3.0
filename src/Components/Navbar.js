import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Vector from '../images/Vector.png'
import './Navbar.css'
import Modal from './Modal';

function Navbar() {

  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    const navLinks = document.querySelectorAll(".mobile")
    navLinks.forEach(x => {
      x.addEventListener('click', changeActive)     
    });

    function changeActive(){
      navLinks.forEach(link => {
        link.classList.remove('mobile-navigators')
        this.classList.add('mobile-navigators')
      })
    }
  },[])

  const [positive, setPositive] = useState(false)
  function toggle(){
    setPositive(prev => !prev)
  }

  function changePositive(){
    setPositive(false)
  }

  function modalReveal(){
    setPositive(false)
    setOpenModal(true)
  }

  return (
    <div>
      <div className='nav'>
        <div className='logo'>
          <img src={Vector} alt="logo" className='vector'/>
          <div className='meta-name'>Metabnb</div>
          <div className='mobile-toggle' onClick={toggle}>
            <i className={positive ? `fas fa-close` : `fas fa-bars`}></i>
          </div>
        </div>
        <div className={`navigators ${positive ? 'mobile-navigators' : ''}`}>
          <ul className='nav-links'>
            <Link to='/' onClick={changePositive} className='link mobile'><li>Home</li></Link>
            <Link to='/place' onClick={changePositive} className='link mobile'><li>Place to stay</li></Link>
            <Link to='/' onClick={changePositive} className='link mobile'><li>NFTs</li></Link>
            <Link to='/' onClick={changePositive} className='link mobile'><li>Community</li></Link>
          </ul>
          <button className='connect mobile' onClick={modalReveal}>Connect wallet</button>
        </div>
      </div>
      <Modal open={openModal} onClose={() => setOpenModal(false)}/>
    </div>
  )
}

export default Navbar