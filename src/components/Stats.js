import React, { Fragment } from 'react'
import './Stats.css'


const Stats = () => {
    return (
        <Fragment>
            <div class="stat-container">
                <div className="main__cards">
                    <div className="stat-card">
                        <i className="fa fa-bicycle fa-2x text-lightblue" aria-hidden="true"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Bikes Available </p>
                            <span className="font-bold text-title">12</span>
                        </div>
                    </div>
                    <div className="stat-card">
                        <i className="fa fa-wrench fa-2x text-red" aria-hidden="true"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Bikes Being Refurbished</p>
                            <span className="font-bold text-title">5</span>
                        </div>
                    </div>
                    <div className="stat-card">
                        <i className="fa fa-donate fa-2x text-yellow" aria-hidden="true"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Bikes Donated</p>
                            <span className="font-bold text-title">38</span>
                        </div>
                    </div>
                    <div className="stat-card">
                        <i className="fa fa-home fa-2x text-green" aria-hidden="true"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Families Helped</p>
                            <span className="font-bold text-title">24</span>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Stats
