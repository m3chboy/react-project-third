import React from 'react'
import { LiaApple } from 'react-icons/lia'

import '../style/home.css'

export const Home = () => {
  return (
    <div className='hero max-width'>
      <div className="hero-container">
        <div className="hero-text">
          <h1>A Powerful App For Your Business.</h1>
          <p>From open source to pro services, Piqes helps you to build, deploy, test, and monitor apps.</p>
          <div className="hero-btn">
            <button className='app-store-btn'>
            <i className="bi bi-apple"></i>
              <span className='app-store-text'>App Store</span>
            </button>
            <button className='play-store-btn'>
            <i className="bi bi-google-play"></i>
              <span className='play-store-text'>Google Play</span>
            </button>
          </div>
        </div>
        <div className="hero-img">
          <img src="https://preview.uideck.com/items/appvilla/assets/images/hero/phone.png" alt="hero image" />
        </div>
      </div>
    </div>
  )
}
