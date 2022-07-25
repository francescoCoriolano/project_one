import React from 'react'
import "./style.scss"
import headerImg from '../../Assets/header-img4.jpg'

const Header = () => {
  return (
    <div className='header'>
      <div className='header__text__container'>
        <div className='text__wrapper'>
          <div className='new__label'>New!</div>
          <h1 className='header__title'>All Natural <br></br> Skin Remedies. </h1>
          <p className='header__text'>A healthier you from the inside out. We've sourced the <br></br> cleanest ingredientes to create a line of clean skin care <br></br> treatments that leave you feeling your best</p>
          <button className='shop__btn'>Shop products</button>
        </div>

      </div>
      <div className='header__img__container'>
        <img src={headerImg} alt='product-img'/>
      </div>




    </div>
  )
}

export default Header