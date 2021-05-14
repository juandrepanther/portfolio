import React from 'react'
import './HeroSection.css'
import video1 from '../vid/2.mp4'
import Button from './Button'

function HeroSection() {
  return (
    <div className='hero-container'>
      <div className='hero-overlay'></div>
      <video src={video1} autoPlay loop muted />
      <h1>ADVENTURES</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'>
          START NOW
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'>
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
