import React, { Fragment } from 'react'
import Button from './Button'
import './HeroSection.css'


const HeroSection = (props) => {
    return (
        <Fragment>
            <div className="hero-container">
                <video src="/videos/video-2.mp4" autoPlay loop muted />
                <h1>Secretly Chat With Friends</h1>
                <p>What are you waiting for?</p>
                <Button title="Create Chat Room" link="/chatrooms" />
            </div>
        </Fragment >
    )
}

export default HeroSection
