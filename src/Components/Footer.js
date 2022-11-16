import React from 'react';
import './Footer.css';
import { RiFacebookFill } from 'react-icons/ri';
import { AiOutlineInstagram } from 'react-icons/ai';
import { CiTwitter } from 'react-icons/ci';
import White from '../images/Vectorwhite.png'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-left'>
            <h1>
                <img src={White}/>
                Metabnb
            </h1>

            <div className='socials' style={{color: 'white'}}>
                <i><RiFacebookFill /></i>
                <i><AiOutlineInstagram /></i>
                <i><CiTwitter /></i>
            </div>
            <div className='date'>
                <span>&copy; 2022 Metabnb</span>
            </div>
        </div>

        <div className='footer-right'>
            <div className='right-line one'>
                <h3>Community</h3>
                <div className='right-line-body'>
                    <div>NFT</div>
                    <div>Tokens</div>
                    <div>Landlords</div>
                    <div>Discord</div>
                </div>
            </div>

            <div className='right-line two'>
                <h3>Places</h3>
                <div className='right-line-body'>
                    <div>Castle</div>
                    <div>Farms</div>
                    <div>Beach</div>
                    <div>Learn more</div>
                </div>
            </div>

            <div className='right-line'>
                <h3>About us</h3>
                <div className='right-line-body'>
                    <div>Road map</div>
                    <div>Creators</div>
                    <div>Career</div>
                    <dv>Contact us</dv>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer