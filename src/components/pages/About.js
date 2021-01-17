import React, { Fragment } from 'react'
import Navbar from '../Navbar'
import AboutCard from '../AboutCard'
import Footer from '../Footer'

const About = () => {
    return (
        <Fragment>
            <Navbar />
            <div className="about-section">
                <h1>About Us</h1>
                <p>Our goal as a collective group is to get more people outside and riding bikes. With the recent implementation of many different biking lanes and routes around Oakland, we want to get people outside and exploring the town. To accomplish this task, the four of us have been taking donations and finding any bikes to clean up and make rideable for people in need.</p>
            </div>
            <h2 className="sub-header">Our Team</h2>
            <div className="frag">
                <div className="row">
                    <AboutCard img="/images/img-bilal.jpg" name="Bilal Abraham" position="Co-Founder / Website Developer" desc="I am a sophomore at Head-Royce School, and I am an avid mountain biker. I am the devloper of our site and also help buying, maintenancing, and delivering bikes to kids in need. Biking before and through quarintine has helped me get through the dreaded quarintine and my goal is to help as many kids as possible do the same." email="bilal.abraham.717@gmail.com" />
                    <AboutCard img="/images/img-joaquin.jpg" name="Joaquin Gonzalez" position="Co-Founder" desc="I am a sophomore at Head-Royce School, and I love biking. I have been going to the monthly bike party rides in the east bay since I was a little kid. I want to help those enjoy an activity that I love so much by making it accessible to those who are in need of a bike. Oakland has had a bike boom recently during covid, and I hope to spread happiness and get more people riding!" email="joaquing2023@headroyce.org" />
                    <AboutCard img="/images/img-jj.jpg" name="JJ Svenson" position="Co-Founder" desc="I am a junior at Oakland Technical High School. I am doing this because I know how fun and useful biking is, and I want everybody to be able to experience that. I hope that we can put as many smiles on faces as possible and help people who need it." email="jjsportsvenson@gmail.com" />
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default About