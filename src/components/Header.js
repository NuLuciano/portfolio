import React, { useState } from 'react'
import avatar from '../assets/profile-img.jpg'

const Header = () => {
    const [nav, setNav] = useState(false)

    const handleClick = () => {
        nav ? setNav(false) : setNav(true)
    }
    return (
        <div>
            <i className="bi bi-list mobile-nav-toggle d-lg-none" onClick={handleClick}></i>
            {nav ?
            <header id="header2">
            <div className="d-flex flex-column">
                <div className="profile">
                    <img src={avatar} alt='Luciano' className="img-fluid rounded-circle" />
                    <h1 className="text-light"><a href="index.html">Luciano Nuñez</a></h1>
                    <div className="social-links mt-3 text-center">
                        <a href="https://github.com/NuLuciano" className="github"><i className="bx bxl-github" /></a>
                        <a href="https://www.linkedin.com/in/luciano-nu%C3%B1ez/" className="linkedin"><i className="bx bxl-linkedin" /></a>
                    </div>
                </div>
                <nav id="navbar" className="nav-menu navbar">
                    <ul>
                        <li><a href="#hero" className="nav-link scrollto"><i className="bx bx-home" /> <span onClick={handleClick}>Home</span></a></li>
                        <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user" /> <span onClick={handleClick}>About</span></a></li>
                        <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content" /> <span onClick={handleClick}>Portfolio</span></a></li>
                        <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server" /> <span onClick={handleClick}>Tech Stack</span></a></li>
                        <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope" /> <span onClick={handleClick}>Contact</span></a></li>
                    </ul>
                </nav>
            </div>
        </header>
            :
            null
            }
            <header id="header">
                <div className="d-flex flex-column">
                    <div className="profile">
                        <img src={avatar} alt='Luciano' className="img-fluid rounded-circle" />
                        <h1 className="text-light"><a href="index.html">Luciano Nuñez</a></h1>
                        <div className="social-links mt-3 text-center">
                            <a href="https://github.com/NuLuciano" className="github" target="_blank" rel="noopener noreferrer"><i className="bx bxl-github" /></a>
                            <a href="https://www.linkedin.com/in/luciano-nu%C3%B1ez/" className="linkedin" target="_blank" rel="noopener noreferrer"><i className="bx bxl-linkedin" /></a>
                        </div>
                    </div>
                    <nav id="navbar" className="nav-menu navbar">
                        <ul>
                            <li><a href="#hero" className="nav-link scrollto"><i className="bx bx-home" /> <span>Home</span></a></li>
                            <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user" /> <span>About</span></a></li>
                            <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content" /> <span>Portfolio</span></a></li>
                            <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server" /> <span>Tech Stack</span></a></li>
                            <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope" /> <span>Contact</span></a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header
