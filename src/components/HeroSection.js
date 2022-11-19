import React from 'react';
import "../App.css";
import Button from './Button';
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className='hero-container'>
         <img src="/public/images/images1.jpg" alt=""/>
         <h1>IMPORTS BY COLLO</h1>
         <div className="hero-btns">
            <Button className="btns" buttonStyle="btn--outline"
            buttonSize="btn--large">GET STARTED</Button>
         </div>
    </div>
  )
}

export default HeroSection