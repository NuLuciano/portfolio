import React, { useState } from 'react'
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import { SliderData } from './SliderData';
import pokemonCard from '../assets/portfolio/pokemon-card.png'
import weatherCard from '../assets/portfolio/weather-card.png'
import eshopCard from '../assets/portfolio/eshop-card.png'
import socialNetworkCard from '../assets/portfolio/social-network-card.png'


const Portfolio = () => {
    const [ imgState, setImgState ] = useState({ isOpen: false, imgIndex: 0})

    return (
        <section id="portfolio" className="portfolio section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>Portfolio</h2>
                    <p></p>
                </div>

                <div className="row" data-aos="fade-up">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-flters">
                        <li data-filter="*" className="filter-active">All</li>
                        {/* <li data-filter=".filter-app">App</li>
                        <li data-filter=".filter-card">Card</li> */}
                        <li data-filter=".filter-web">Web</li>
                        </ul>
                    </div>
                </div>

                

                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <img onClick={() => setImgState({isOpen: true, imgIndex: 0})} src={pokemonCard} className="img-fluid portImg" alt=""/>
                            <div className="portfolio-links">
                                <a href="https://adoring-cori-ee39c7.netlify.app/" title="More Details" target="_blank"><i className="bx bx-link"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <img onClick={() => setImgState({isOpen: true, imgIndex: 1})} src={weatherCard} className="img-fluid portImg" alt=""/>
                            <div className="portfolio-links">
                                <a href="https://stupefied-blackwell-30d389.netlify.app/" title="More Details" target="_blank"><i className="bx bx-link"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <a href="https://www.youtube.com/watch?v=wBUiUwZ0UwM&list=WL&index=31" target="_blank"><img src={eshopCard} className="img-fluid portImg" alt=""/></a>
                            <div className="portfolio-links">
                                <a href="https://ec-webft11-g10.vercel.app/" title="More Details" target="_blank"><i className="bx bx-link"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <img onClick={() => setImgState({isOpen: true, imgIndex: 2})} src={socialNetworkCard} className="img-fluid portImg" alt=""/>
                            <div className="portfolio-links">
                                <a href="https://tender-payne-e05e4c.netlify.app/" title="More Details" target="_blank"><i className="bx bx-link"></i></a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            {imgState.isOpen && (
                <Lightbox images={SliderData}
                    onClose={() => setImgState({ ...imgState, isOpen: false })}
                    allowRotate={false}
                    startIndex={imgState.imgIndex}
                />
                )}


        </section>
    )
}

export default Portfolio
