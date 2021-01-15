import React, { Fragment } from 'react'
import Button from './Button'
import './ErrorHero.css'

const ErrorHero = () => {
    return (
        <Fragment>
            <div className="err-hero-container">
                <h1 className="header">Error 404                                        <i className="fas fa-exclamation" /></h1>
                <Button title="Go Home" link="/" />
            </div>
        </Fragment>
    )
}

export default ErrorHero
