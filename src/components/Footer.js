import React from 'react'
import Button from './Button'

function Footer() {
  return (
    <div className= "footer-container">
        <section className ="footer-subscription">
            <p className="footer-subscription-heading">
                Subscribe to our Newsletter to receive updates on car deals.
            </p>
            <p className="footer-subscription-text">
                Unsubscribe at any time.
            </p>
            <div className="input-areas">
                <form>
                    <input type="email" name ="email" placeholder="Your Email"className="footer-input" />
                    <Button buttonStyle="btn--outline">Subscribe</Button>
                </form>
            </div>
                

        </section>
    </div>
  )
}

export default Footer