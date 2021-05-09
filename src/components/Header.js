import React, { useState } from 'react'

const Header = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => {
        nav ? setNav(false) : setNav(true)
    }
    return (
        <div>
            <i className="bi bi-list mobile-nav-toggle d-xl-none" onClick={handleClick}></i>
            {nav ?
            <header id="header2">
            <div className="d-flex flex-column">
                <div className="profile">
                    <img src="assets/img/profile-img.jpg" alt='Luciano' className="img-fluid rounded-circle" />
                    <h1 className="text-light"><a href="index.html">Luciano Nuñez</a></h1>
                    <div className="social-links mt-3 text-center">
                        <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
                        <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
                        <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
                        <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
                        <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
                    </div>
                </div>
                <nav id="navbar" className="nav-menu navbar">
                    <ul>
                        <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home" /> <span onClick={handleClick}>Home</span></a></li>
                        <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user" /> <span onClick={handleClick}>About</span></a></li>
                        <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank" /> <span onClick={handleClick}>Resume</span></a></li>
                        <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content" /> <span onClick={handleClick}>Portfolio</span></a></li>
                        <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server" /> <span onClick={handleClick}>Services</span></a></li>
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
                        <img src="assets/img/profile-img.jpg" alt='Luciano' className="img-fluid rounded-circle" />
                        <h1 className="text-light"><a href="index.html">Luciano Nuñez</a></h1>
                        <div className="social-links mt-3 text-center">
                            <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
                            <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
                            <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
                            <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
                            <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
                        </div>
                    </div>
                    <nav id="navbar" className="nav-menu navbar">
                        <ul>
                            <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home" /> <span>Home</span></a></li>
                            <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user" /> <span>About</span></a></li>
                            <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank" /> <span>Resume</span></a></li>
                            <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content" /> <span>Portfolio</span></a></li>
                            <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server" /> <span>Services</span></a></li>
                            <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope" /> <span>Contact</span></a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header
