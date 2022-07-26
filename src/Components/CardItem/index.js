import React from 'react'
import './style.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";


const CardItem = () => {
  return (
    <div>
        <div className='card-item'>
            <div className='card-img'>
                <div className='new-label'>New!</div>
            </div>
            <div className='item-description-wrapper'>
                <h3 className='item-name'>Acne Cream</h3>
                <p className='item-description'>All natural ingredients</p>
                <div className='item-price'>$24.99</div>
                <button className='add-product-btn'>
                <FontAwesomeIcon icon={faCartShopping}/>  
                  <span>Add to cart</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default CardItem