import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-section" id="home">
            <div className="container">
                <div className="banner-body">
                    <h1 className="font-weight-bold">DON'T STOP <br /><span className="text-white">Until you are proud ...</span></h1>
                    <br />
                    <br />
                    <h2 className="text-white">Stay fit with <span>AFLETE</span></h2>
                    <br />
                    <a href="contact"><button className="btn btn-contact text-white font-weight-bold">Contact Us</button></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;