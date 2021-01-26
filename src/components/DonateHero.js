import React, { Fragment } from 'react'
import './DonateHero.css'

const DonateHero = () => {
    return (
        <Fragment>
            <div className="hero-container">
                <div className="donate-wraper" />
                <h1>Donate to our Initiative</h1>
                <p>Message us on Instagram or Email</p>
                <a href="https://www.paypal.com/paypalme/ridetheeastbay">
                    <button className="btn">
                        DONATE<i className="fas fa-donate" />
                    </button>
                </a>
            </div>
        </Fragment>
    )
}

export default DonateHero