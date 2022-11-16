import React from 'react'
import '../Components/Home.css'
import Image1 from '../images/image4.png';
import Image2 from '../images/image6.png';
import Image3 from '../images/image3.png';
import Image4 from '../images/image5.png'
import Data1 from '../Components/Data1';
import NftImg from '../images/threepiece.png'
import Dog from '../images/Group4038dogg.png'
import Token from '../images/Group59536token.png'
import Seaa from '../images/Subtractseaa.png'

function Home() {
  return (
    <div>
      <div className='body-top'>
       <div className='left'>
          <h1 className='left-heading'>Rent a <span className='purple'>Place</span> away from <span className='purple'>Home</span> in the <span className='purple'>Metaverse</span></h1>
           <p className='left-para'>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone.</p>

           

           <div className='search-box'>
             <input 
              type="text" 
              placeholder='Search for location'
              className='search-input'/>
             <button className='search'>Search</button>
           </div>
           
       </div>

       <div className='right'>
         <img src={Image1} alt='img' className='image first' />
         <img src={Image2} alt='img' className='image second' />
         <img src={Image3} alt='img' className='image third' />
         <img src={Image4} alt='img' className='image fourth' />
       </div>

      </div>


      
      <div className='mid'>
         <div className='token'>
          <img src={Token} alt="lil img" />
           MBToken
         </div>
         <div className='mask'>
           <img src={Dog} alt="lil img" />
           METAMASK
         </div>
         <div className='sea'>
          <img src={Seaa} alt="lil img" />
           OpenSea
         </div>
       </div>


      <div className='home-end'>
        <h1 className='base-heading'>Inspiration for your next adventure</h1>
        <div className='base'>
         {
           Data1.map(x => {
             return <div className='x-box'>
               <img src={x.ImgSrc} className='img-location' alt='location img'/>
               <div className='location'>{x.location} <span className='price bold'>{x.price}</span></div>
               <div className='distance'>{x.distance} <span className='duration'>{x.duration}</span></div>
               <div className='star'>
                 <img src={x.star} alt='star' />
                 <img src={x.star} alt='star' />
                 <img src={x.star} alt='star' />
                 <img src={x.star} alt='star' />
                 <img src={x.star} alt='star' />
                 <img src={x.star} alt='star' />
               </div>
             </div>
           })
         }
       </div>
      </div>
      <div className='nft-section'>
        <div className='nft-text'>
          <h1 className='nft-head'>Metabnb NFTs</h1>
          <p className='nft-para'>
            Discover our NFT gift cards collection. Loyal customers get amazing gift cardswhich are traded as NFTs. These NFTs give our customers access to loads of our exclusive services.
          </p>
          <button className='nft-button'>Learn more</button>
        </div>
        <div className='nft-image'>
          <img src={NftImg} className='nft-img'  alt='nft-img'/>
        </div>
      </div>

    </div>
  )
}

export default Home