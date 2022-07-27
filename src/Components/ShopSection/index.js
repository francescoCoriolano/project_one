import React from 'react'
import './style.scss'
import flowerFace from '../../assets/images/flower-face.png'
const ShopSection = () => {
  return (
    <div className='shop-section'>
        <div className='text-container'>
        <div className='text-wrapper'>
          <h2 className='header-title'>Clean products that <br></br>deliver better solutions</h2>
          <p className='header-text'>A healthier you from the inside out. We've sourced the <br></br> cleanest ingredientes to create a line of clean skin care <br></br> treatments that leave you feeling your best</p>
          <button className='shop-btn' >Shop more</button>
        </div>
        </div>
        <div className='img-container'>
            <img src={flowerFace} alt='flower-face'/>
        </div>
    </div>
  )
}

export default ShopSection