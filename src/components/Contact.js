import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import env from "react-dotenv";

const {
    TEMPLATE_ID, SERVICE_ID, USER_ID
  } = env;

const Contact = () => {
    const [ success, setSuccess ] = useState(false)
    function sendEmail(e) {
        e.preventDefault();
        setSuccess(false)

        emailjs.sendForm(`${SERVICE_ID}`, `${TEMPLATE_ID}`, e.target, `${USER_ID}`)
          .then((result) => {
              console.log(result.text);
              setSuccess(true)
          }, (error) => {
              console.log(error.text);
          });
        
        e.target.reset()
    }
    
    return (
        <section id="contact" className="contact">
            <div className="container">

                <div className="section-title">
                <h2>Contact</h2>
                <p>To contact me, you can use the form below.
                    I will get back to you as soon as possible.</p>
                </div>

                <div className="row" data-aos="fade-in">

                    <div className="col-lg-5 d-flex align-items-stretch">
                        <div className="info">
                            <div className="address">
                                <i className="bi bi-geo-alt"></i>
                                <h4>Location:</h4>
                                <p>San Nicolás de los Arroyos, Argentina, CP 2900</p>
                            </div>

                            <div className="email">
                                <i className="bi bi-envelope"></i>
                                <h4>Email:</h4>
                                <p>nunezluciano@hotmail.com</p>
                            </div>

                            <div className="phone">
                                <i className="bi bi-phone"></i>
                                <h4>Call:</h4>
                                <p>+54 9 336 468-0776</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                        <form onSubmit={sendEmail} className="php-email-form">
                        <div className="row">
                            <div className="form-group col-md-6">
                            <label for="name">Your Name</label>
                            <input type="text" name="name" className="form-control" id="name" required/>
                            </div>
                            <div className="form-group col-md-6">
                            <label for="name">Your Email</label>
                            <input type="email" className="form-control" name="email" id="email" required/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="name">Subject</label>
                            <input type="text" className="form-control" name="subject" id="subject" required/>
                        </div>
                        <div className="form-group">
                            <label for="name">Message</label>
                            <textarea className="form-control" name="message" rows="10" required></textarea>
                        </div>
                        <div className="text-center"><button type="submit">Send Message</button></div>
                        {success === true ? <div className="sent-message">Your message has been sent. Thank you!</div> : null}
                        </form>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Contact
