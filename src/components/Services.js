import React from 'react'

const Services = () => {
    return (
        <section id="services" className="services">
            <div className="container">

                <div className="section-title">
                    <h2>Technology Stack</h2>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                        <div className="icon"><i className="devicon-javascript-plain"></i></div>
                        <h4 className="title"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">JavaScript</a></h4>
                    </div>
                    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                        <div className="icon"><i className="devicon-html5-plain"></i></div>
                        <h4 className="title"><a href="https://www.w3.org/html/" target="_blank" rel="noopener noreferrer">HTML</a></h4>
                    </div>
                    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                        <div className="icon"><i className="devicon-css3-plain"></i></div>
                        <h4 className="title"><a href="https://www.w3schools.com/css/" target="_blank" rel="noopener noreferrer">CSS</a></h4>
                    </div>
                    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                        <div className="icon"><i className="devicon-react-plain"></i></div>
                        <h4 className="title"><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React.js</a></h4>
                    </div>
                    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                        <div className="icon"><i className="bx bxl-redux"></i></div>
                        <h4 className="title"><a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">Redux.js</a></h4>
                    </div>
                    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
                        <div className="icon"><i className="devicon-bootstrap-plain"></i></div>
                        <h4 className="title"><a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">Bootstrap</a></h4>
                    </div>
                    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
                        <div className="icon"><i className="devicon-nodejs-plain"></i></div>
                        <h4 className="title"><a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">Node.js</a></h4>
                    </div>
                    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
                        <div className="icon"><i>Ex</i></div>
                        <h4 className="title"><a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">Express.js</a></h4>
                    </div>
                    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
                        <div className="icon"><i>Se</i></div>
                        <h4 className="title"><a href="https://sequelize.org/" target="_blank" rel="noopener noreferrer">Sequelize ORM</a></h4>
                    </div>
                    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
                        <div className="icon"><i className="devicon-postgresql-plain"></i></div>
                        <h4 className="title"><a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">PostgreSQL</a></h4>
                    </div>
                    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
                        <div className="icon"><i className="devicon-git-plain"></i></div>
                        <h4 className="title"><a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">Git</a></h4>
                    </div>
                    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
                        <div className="icon"><i className="devicon-github-plain"></i></div>
                        <h4 className="title"><a href="https://github.com/NuLuciano" target="_blank" rel="noopener noreferrer">Github</a></h4>
                    </div>
                    {/* <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
                        <div className="icon"><i className="devicon-python-plain"></i></div>
                        <h4 className="title"><a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">Python</a></h4>
                    </div>
                    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
                        <div className="icon"><i className="devicon-django-plain"></i></div>
                        <h4 className="title"><a href="https://www.djangoproject.com/" target="_blank" rel="noopener noreferrer">Django</a></h4>
                    </div> */}
                </div>

            </div>
        </section>
    )
}

export default Services
