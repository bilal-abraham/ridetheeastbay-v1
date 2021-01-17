import React, { Fragment } from 'react'
import './AboutCard.css'

const AboutCard = (props) => {
    const copyToClipBoard = () => {
        navigator.clipboard.writeText(props.email)
        alert("Email Copied to Clipboard")
    }

    return (
        <Fragment>
            <div className="column">
                <div className="card">
                    <img className="img" src={props.img} alt="Bilal" />
                    <div className="about-container">
                        <h2>{props.name}</h2>
                        <p className="title">{props.position}</p>
                        <p className="center-wrapper">{props.desc}</p>
                        <p className="center-wrapper">{props.email}</p>
                        <p className="center-wrapper"><button className="button" onClick={copyToClipBoard}>Contact</button></p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AboutCard
