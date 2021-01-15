import React, { Fragment } from 'react'
import Navbar from '../Navbar'
import HeroSection from '../HeroSection'
import Cards from '../Cards'
import Footer from '../Footer'

const Home = () => {
    return (
        <Fragment>
            <Navbar />
            <HeroSection />
            <Cards />
            <Footer />
        </Fragment>
    )
}

export default Home
