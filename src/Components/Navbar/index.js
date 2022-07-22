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
                        <a href='about'>About</a>
                    </li>
                    <li className='nav__item'>
                        <a href='consultation'>Consultation</a>
                    </li>
                </div>
                <div className='nav__item__center'>
                    <li className='nav__item'>
                        sooth
                    </li>
                </div>
                
                <div className='nav__top__right'>
                    <li className='nav__item'>
                    
                        <FontAwesomeIcon icon={faSearch}/>
                    
                    
                    </li>
                <li className='nav__item'>
                    <a href='cart'>Cart</a>
                </li>
                <li className='nav__item'>
                    <a href='login'>Login</a>
                </li>
                </div>
                
            </ul>
            
        </div>
        <div className='nav__bottom'>
            <ul>
                <li className='nav__item__bottom'>
                    <a href='acne'>Acne</a>
                </li>
                <li className='nav__item__bottom'>
                    <a href='sun'>Sun</a>
                </li>
                <li className='nav__item__bottom'>
                    <a href='ezcema'>Ezcema</a>
                </li>
                <li className='nav__item__bottom'>
                    <a href='psoriasis'>Psoriasis</a>
                </li>
                <li className='nav__item__bottom'>
                    <a href='vitiligio'>Vitiligio</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar