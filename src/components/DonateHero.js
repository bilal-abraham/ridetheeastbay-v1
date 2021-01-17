import React, { Fragment } from 'react'
import './DonateHero.css'

const DonateHero = () => {
    return (
        <Fragment>
            <div className="hero-container">
                <div className="donate-wraper" />
                <h1>Donate on to our Initiative</h1>
                <p>Direct Message Us on Instagram</p>
                <a href="https://www.instagram.com/ridetheeastbay/?igshid=lm061psb2uzw">
                    <button className="btn">
                        DONATE<i className="fas fa-donate" />
                    </button>
                </a>
            </div>
        </Fragment>
    )
}

export default DonateHero