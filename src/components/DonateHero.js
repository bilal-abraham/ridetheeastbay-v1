import React, { Fragment } from 'react'
import './DonateHero.css'

const DonateHero = () => {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    return (
        <Fragment>
            <div className="hero-container">
                <div className="donate-wrapper" />
                <h1>Donate to our Initiative</h1>
                <p>Message us on Instagram or Email</p>
                <div className="donation-inline">
                    <div onClick={() => openInNewTab('https://www.gofundme.com/f/ride-the-east-bay?utm_campaign=p_cp+share-sheet&utm_medium=copy_link_all&utm_source=customer')}>
                        <button className="btn">
                            DONATE<i className="fas fa-donate" />
                        </button>
                    </div>
                    <div className="donate-btn-spacer" />
                    <div onClick={() => openInNewTab('https://docs.google.com/forms/d/e/1FAIpQLSdQgLPfFF-6bucteUCHSQ9jI1AVAynPDyETGo_a9gH1Okw6fA/viewform?usp=sf_link')}>
                        <button className="btn">
                            DONATE<i className="fas fa-bicycle" />
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default DonateHero