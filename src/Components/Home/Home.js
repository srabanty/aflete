import React from 'react';
import './Home.css';
import About from '../About/About';
import Influencers from '../Influencers/Influencers';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div id="home">
            <div className="banner-section">
                <div className="container">
                    <div className="banner-body">
                        <h1 className="font-weight-bold">DON'T STOP <br/><span className="text-white">Until you are proud ...</span></h1>
                        <br/>
                        <br/>
                        <h2 className="text-white">Stay fit with <span>AFLETE</span></h2>
                        <br/>
                        <a href="contact"><button className="btn btn-contact text-white font-weight-bold">Contact Us</button></a>
                    </div>
                </div>
            </div>
            <About></About>
            <Influencers></Influencers>
            <Blog></Blog>
            <Contact></Contact>
        </div>
    );
};

export default Home;