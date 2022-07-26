import React from 'react'
import './style.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";


const CardItem = ({image, name, description, price}) => {
  return (
    <div>
        <div className='card-item'>
            <div className='card-img'>
                <div className='new-label'>New!</div>
                <img src={image} alt="product-img"/>
            </div>
            <div className='item-description-wrapper'>
                <h3 className='item-name'>{name}</h3>
                <p className='item-description'>{description}</p>
                <div className='item-price'>{price}</div>
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