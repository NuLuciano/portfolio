import React from 'react'
import Typed from 'react-typed';


const Hero = () => {

    return (
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
            <div className="hero-container" data-aos="fade-in">
            <h1>Luciano Nuñez</h1>
            <p>I'm a <Typed
                    strings={['Full Stack Web Developer.', 'Front-End Developer.', 'Back-End Developer.']}
                    typeSpeed={50}
                    backSpeed={30}
                    loop
                /></p>
            </div>
         </section>
    )
}

export default Hero
