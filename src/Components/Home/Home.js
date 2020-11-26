import React from 'react';
import './Home.css';
import About from '../About/About';
import Influencers from '../Influencers/Influencers';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Influencers></Influencers>
            <Blog></Blog>
            <Contact></Contact>
        </div>
    );
};

export default Home;