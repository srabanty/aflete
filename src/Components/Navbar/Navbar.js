import React from 'react';
import './Navbar.css';
import whiteImg from '../../siteImages/white.png';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
                <div className="container">
                    <a class="navbar-brand text-white font-weight-bold" href="#"><img src={whiteImg} alt="" /></a>
                    <button class="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon text-white"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link text-white" href="home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white ml-2" href="about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white ml-2" href="influencer">Influencers</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white ml-2" href="blog">Blogs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white ml-2" href="contact">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;