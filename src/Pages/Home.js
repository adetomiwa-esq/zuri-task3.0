import React from 'react'
import '../Components/Home.css'
import Image1 from '../images/image4.png';
import Image2 from '../images/image6.png';
import Image3 from '../images/image3.png';
import Image4 from '../images/image5.png'

function Home() {
  return (
    <div>
      <div className='body-top'>
       <div className='left'>
          <h1 className='left-heading'>Rent a <span className='purple'>Place</span> away from <span className='purple'>Home</span> in the <span className='purple'>Metaverse</span></h1>
           <p className='left-para'>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>

           <div className='search-box'>
             <input type='text' placeholder='Search for location' className='search-input'/>
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
           MBToken
         </div>
         <div className='mask'>
           METAMASK
         </div>
         <div className='sea'>
           OpenSea
         </div>
       </div>
    </div>
  )
}

export default Home