import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-section" id="contact">
            <h1 className="text-center">Get In Touch</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="form">
                            <input className="form-control" type="text" placeholder="Your Name..."/>
                            <br/>
                            <input className="form-control" type="text" placeholder="Your Email..."/>
                            <br/>
                            <textarea className="form-control" name="" id="" cols="20" rows="6" placeholder="Write Message..."></textarea>
                            <br/>
                            <input className="form-control text-center font-weight-bold" type="submit" value="Submit"/>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </div>
    );
};

export default Contact;