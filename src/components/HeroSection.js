import React from 'react';
import {Button} from './Button';
import '../App.css'
import './HeroSection.css'

function HeroSection(){

  return (
    <div className='hero-container'>
      <video src='videos\video-2.mp4' autoPlay loop muted/>

      <h1>ASYNC & AWAIT</h1>
      <p>It's all what happening</p>
      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>SEE DOCS</Button>
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
        WATCH TEASER <i className='far fa-play-circle'></i>
        </Button>
      </div>
    </div>
  )
}


export default HeroSection;