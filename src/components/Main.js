import React from 'react'
import About from './About'
import Facts from './Facts'
import Portfolio from './Portfolio'
import Services from './Services'
import Contact from './Contact'
import BackToTopButton from './BackToTop'

const Main = () => {
    return (
        <main id="main">
            <About/>
            <Facts/>
            <Portfolio/>
            <Services/>
            <Contact/>
            <BackToTopButton/>
        </main>
    )
}

export default Main
