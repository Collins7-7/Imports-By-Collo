import React from 'react';
import "../App.css";
import Button from './Button';
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className='hero-container'>
         <img src="/public/images/images1.jpg" alt=""/>
         <h1>Feel The Power!</h1>
         <p>Get yours today!</p>
         <div className="hero-btns">
            <Button className="btns" buttonStyle="btn--outline"
            buttonSize="btn--large">GET STARTED</Button>
            <Button className="btns" buttonStyle="btn--primary"
            buttonSize="btn--large">Check this out</Button>
         </div>
    </div>
  )
}

export default HeroSection