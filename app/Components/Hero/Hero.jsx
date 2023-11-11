import React from 'react'
import './Hero.css'
import Image from 'next/image'
import hand_icon from '../Assets/hand_icon.png'
import arrow from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <h2>new arrivals only</h2>
          
            <div className="hand-icon" >
              <p>new</p>
              <Image
                src={hand_icon}
                alt="hand"
              />
            </div>
            <p>collections</p>
            <p>for everyone</p>
          
          <div className="latest-btn">
            <div>latest collection</div>
            <Image
              src={arrow}
              alt="arrow"
            />
          </div>
        </div>
        <div className="hero-right">
          <Image
            src={hero_image}
            alt="arrow"
          />
        </div>
      </div>
    </>
  )
}

export default Hero
