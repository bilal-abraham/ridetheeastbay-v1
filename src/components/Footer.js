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
                    <a href="https://www.instagram.com/">
                        <i className="fab fa-instagram" />
                    </a>
                    <a href="https://twitter.com/">
                        <i className="fab fa-twitter" />
                    </a>
                    <a href="https://www.linkedin.com/in/bilal-abraham-3140491b8/">
                        <i className="fab fa-linkedin" />
                    </a>
                    <a href="https://github.com/bilal-abraham/secretchat">
                        <i className="fab fa-github" />
                    </a>
                </div>
            </section>
        </Fragment>
    )
}

export default Footer
