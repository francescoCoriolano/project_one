import React from 'react'
import "./style.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='nav__top'>
            <ul>
                <div className='nav__top__left'>
                    <li className='nav__item'>
                        <a>About</a>
                    </li>
                    <li className='nav__item'>
                        <a>Consultation</a>
                    </li>
                </div>
                <div className='nav__item__center'>
                    <li className='nav__item'>
                        <a>sooth</a>
                    </li>
                </div>
                
                <div className='nav__top__right'>
                    <li className='nav__item'>
                    <a>
                        <FontAwesomeIcon icon={faSearch}/>
                    </a>
                    
                    </li>
                <li className='nav__item'>
                    <a>Cart</a>
                </li>
                <li className='nav__item'>
                    <a>Login</a>
                </li>
                </div>
                
            </ul>
            
        </div>
        <div className='nav__bottom'>
            <ul>
                <li className='nav__item__bottom'>
                    <a>Acne</a>
                </li>
                <li className='nav__item__bottom'>
                    <a>Sun</a>
                </li>
                <li className='nav__item__bottom'>
                    <a>Ezcema</a>
                </li>
                <li className='nav__item__bottom'>
                    <a>Psoriasis</a>
                </li>
                <li className='nav__item__bottom'>
                    <a>Vitiligio</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar