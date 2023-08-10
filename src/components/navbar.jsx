import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='nav'>
        <div className="nav-center">
          
                <a href="/" className='nav-logo'>
                <img src="https://preview.uideck.com/items/appvilla/assets/images/logo/white-logo.svg" alt="logo" className='logo' />
                </a>
            
            <div className="nav-menu">
                <div className="nav-list">  
                    <Link to='/'> Home </Link>
                    <Link to='/features'> Features </Link>
                    <Link to='#'> Overview </Link>
                    <Link to='#'> Pricing </Link>
                    <Link to='#'> Team </Link>
                    <Link to='#'> Blog </Link>
                    <Link to='#'> Contact </Link>
                </div>
                <button className="nav-btn">Get It Now</button>
            </div>
        </div>

    </div>
  )
}
