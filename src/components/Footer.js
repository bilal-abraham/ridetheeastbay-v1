import React, { Fragment } from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <Fragment>
            <section className="footer-container">
                <div className="messages">
                    <p className="copyright">Ride The East Bay © 2021</p>
                </div>
                <div className="social-icons">
                    <a href="https://www.instagram.com/ridetheeastbay/?igshid=lm061psb2uzw">
                        <i className="fab fa-instagram i" />
                    </a>
                    <a href="https://www.linkedin.com/in/bilal-abraham-3140491b8/">
                        <i className="fab fa-linkedin i" />
                    </a>
                    <a href="https://github.com/bilal-abraham/ridetheeastbay">
                        <i className="fab fa-github i" />
                    </a>
                </div>
            </section>
        </Fragment>
    )
}

export default Footer