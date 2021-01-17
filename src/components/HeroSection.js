import React, { Fragment } from 'react'
import Button from './Button'
import './HeroSection.css'


const HeroSection = () => {
    return (
        <Fragment>
            <div className="hero-container">
                <img className="logo-background"> </img>
                <h1>Help Us Distribute Bikes</h1>
                <p>Donate a bike or helmet!</p>
                <Button title="Donate" link="/donate" />
            </div>
        </Fragment >
    )
}

export default HeroSection