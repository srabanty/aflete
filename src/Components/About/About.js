import React from 'react';
import './About.css';
import aboutImg from '../../siteImages/banner.jpg';
import android from '../../siteImages/android.png';
import apple from '../../siteImages/apple.png';

const About = () => {
    return (
        <div className="about-section" id="about">
            <h1 className="text-center">About Us</h1>
            <div className="container">
                <div className="row about-body d-flex">
                    <div className="col-xs-12 col-sm-4 col-md-6 about-left">
                        <img className="img-fluid" src={aboutImg} alt="" />
                    </div>
                    <div className="col-xs-12 col-sm-8 col-md-6 about-right pl-5">
                        <h2><span>AFLETE</span> is a fitness app where you can workout with our influencer team.</h2>
                        <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates iusto aspernatur, eveniet totam commodi veritatis rerum cum sapiente libero impedit?</p>
                        {/* <button className="btn btn-contact text-white font-weight-bold">Read More</button> */}
                        <a href="" className="text-danger font-weight-bold">Read More...</a>
                        <br/>
                        <br/>
                        <div className="row get-it d-flex">
                            <img className="apple" src={apple} alt=""/>
                            <img className="android" src={android} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;