import React from 'react';
import './Footer.css';
import apple from '../../siteImages/apple.png';
import android from '../../siteImages/android.png';

const Footer = () => {
    return (
        <div className="footer-section text-center text-secondary">
            <h6>All right reserved &copy; 2020</h6>
            <div className="row justify-content-center">
                <img src={apple} alt=""/>
                <img src={android} alt=""/>
            </div>
        </div>
    );
};

export default Footer;