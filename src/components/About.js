import React from 'react'
import avatar from '../assets/profile-img.jpg'

const About = () => {

    function getAge() {
        var today = new Date();
        var birthDate = new Date("February 11, 1990 00:00:00");
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    return (
        <section id="about" className="about">
            <div className="container">

                <div className="section-title">
                    <h2>About me</h2>
                    <p>My name is Luciano Nuñez, and I decided to change my occupation after five years of working in private security. Now, I am looking for my first full-time job as a full stack web developer. I am always open to challenges and constructive feedback. I am open-minded and learn new things quickly.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4" data-aos="fade-right">
                        <img src={avatar} className="img-fluid" alt="Luciano" style={{ borderRadius: '10px' }} />
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <h3>Full Stack Web Developer</h3>
                        <p className="fst-italic">
                            <strong>Philosophy Of Life: </strong>
                            "Make improvements, not excuses.
                            Seek respect, not attention".
                            Roy T. Bennett The Light in the Heart
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>11 Feb 1990</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+54 9 336 468-0776</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>San Nicolás, Argentina</span></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>{getAge()}</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>nunezluciano@hotmail.com</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Works at:</strong> <span>Ombú Tech Services</span></li>
                                </ul>
                            </div>
                        </div>
                        <p>
                            Adept at handling multiple tasks on a
                            daily basis competently and at working
                            well under pressure.
                            Hardworking and motivated to learn
                            new things. Currently polishing my
                            knowledge in web development.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About
