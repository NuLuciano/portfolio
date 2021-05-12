import React from 'react'

const Facts = () => {
    return (
        <section id="facts" className="facts">
            <div className="container">

                <div className="section-title">
                <h2>Skills</h2>
                </div>

                <div className="row no-gutters">

                <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
                    <div className="count-box">
                    <i className="bi bi-pencil-square"></i>
                    <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                    <p><strong>Responsible</strong></p>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="100">
                    <div className="count-box">
                    <i className="bi bi-hammer"></i>
                    <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                    <p><strong>Hard Worker</strong></p>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="200">
                    <div className="count-box">
                    <i className="bi bi-headset"></i>
                    <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" className="purecounter"></span>
                    <p><strong>Communicative</strong></p>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="300">
                    <div className="count-box">
                    <i className="bi bi-puzzle-fill"></i>
                    <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" className="purecounter"></span>
                    <p><strong>Problem Solver</strong></p>
                    </div>
                </div>

                </div>

            </div>
        </section>
    )
}

export default Facts
