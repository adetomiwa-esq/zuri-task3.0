import React from 'react'
import Data2 from '../Components/Data2';
import '../Components/Place.css';
import { VscSettings } from 'react-icons/vsc'

function Place() {
  return (
    <div>
        <div>
            <div className='places-nav'>
                <div>Resturant</div>
                <div>Cottage</div>
                <div>Castle</div>
                <div>fantast city</div>
                <div>beach</div>
                <div>Carbins</div>
                <div>off-grid</div>
                <div>Farm</div>
                <div><div className='button'>Location <i><VscSettings style = {{transform: 'rotate(90deg)'}}/></i></div></div>
            </div>



             <div className='base'>
              {
                Data2.map(x => {
                  return <div className='x-box'>
                    <img src={x.ImgSrc} className='img-location' alt='location img'/>
                    <div className='location'>{x.location}<span className='price bold'>{x.price}</span></div>
                    <div className='distance'>{x.distance} <span className='duration'>{x.duration}</span></div>
                    <div className='star'>
                      <img src={x.star} />
                      <img src={x.star} />
                      <img src={x.star} />
                      <img src={x.star} />
                      <img src={x.star} />
                      <img src={x.star} />
                    </div>
                  </div>
                })
              }
            </div>
        </div>
    </div>
  )
}

export default Place