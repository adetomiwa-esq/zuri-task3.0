import React from 'react'
import './Modal.css';
import Foxy from '../images/image66fox.png'
import Wallet from '../images/image69wallet.png'
import { AiOutlineRight } from 'react-icons/ai'

function Modal({open, onClose}) {
    if(!open) return null
  return (
    <div className='overlay'>
        <div className='modal'>
            <div className='modal-head'>
                <h3>Connect Wallet</h3>
                <div onClick={onClose}><i className='fas fa-close'></i></div>
            </div>
            <div className='modal-body'>
                <div>
                    <h3 className='modal-smallhead'>
                        choose your preferred wallet
                    </h3>
                </div>
                <div className='meta-mask'>
                    <div className='lil-icons'>
                        <img src={Foxy} />
                        <span>Metamask</span>
                    </div>
                    <div><AiOutlineRight /></div>
                </div>

                <div className='wallet-connect'>
                    <div className='lil-icons'>
                        <img src={Wallet} />
                        Metamask
                    </div>
                    <div><AiOutlineRight /></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal