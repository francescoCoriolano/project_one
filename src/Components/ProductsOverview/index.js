import React from 'react'
import CardItem from '../CardItem'
import "./style.scss"

const ProductsOverview = () => {
  return (
    <div className='products-overview'>
      <div className='title-container'>
        <h2 className='products-title'> Solutions for all skin</h2>
        <p className='title-text'>Explore our innovative skincare products</p>
      </div>
      <CardItem/>
      
    </div>
  )
}

export default ProductsOverview