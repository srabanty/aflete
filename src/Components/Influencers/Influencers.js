import React from 'react';
import './Influencers.css';
import person1 from '../../siteImages/person1.jpg';
import person2 from '../../siteImages/person2.jpg';
import person3 from '../../siteImages/person3.jpg';
import person4 from '../../siteImages/person4.jpg';

const Influencers = () => {
    return (
        <div className="influencer-section text-center" id="influencer">
            <h1>Meet Our Influencers</h1>
            <div className="container">
                <div className="row influencer-body">
                    <div className="col-md-4 mt-3">
                        <img src={person1} alt=""/>
                        <h4 className="pt-3">Samantha Smith</h4>
                        <p className="text-secondary">4.5M Follower</p>
                        <button className="btn-contact font-weight-bold pt-1 pb-1">Join Now</button>
                    </div>
                    <div className="col-md-4 col-middle mt-3">
                        <img src={person3} alt=""/>
                        <h4 className="pt-3">Benjamin</h4>
                        <p className="text-secondary">5M Follower</p>
                        <button className="btn-contact font-weight-bold pt-1 pb-1">Join Now</button>
                    </div>
                    <div className="col-md-4 mt-3">
                        <img src={person2} alt=""/>
                        <h4 className="pt-3">Elizabeth Smith</h4>
                        <p className="text-secondary">5.5M Follower</p>
                        <button className="btn-contact font-weight-bold pt-1 pb-1 border-radius-5">Join Now</button>
                    </div>
                </div>
                <br/>
                <hr/>
                <br/>
                <div className="row influencer-body">
                    <div className="col-md-4 mt-3">
                        <img src={person2} alt=""/>
                        <h4 className="pt-3">Ashley</h4>
                        <p className="text-secondary">2.5M Follower</p>
                        <button className="btn-contact font-weight-bold pt-1 pb-1">Join Now</button>
                    </div>
                    <div className="col-md-4 col-middle mt-3">
                        <img src={person1} alt=""/>
                        <h4 className="pt-3">Crystal Watson</h4>
                        <p className="text-secondary">799K Follower</p>
                        <button className="btn-contact font-weight-bold pt-1 pb-1">Join Now</button>
                    </div>
                    <div className="col-md-4 mt-3">
                        <img src={person4} alt=""/>
                        <h4 className="pt-3">Jacob Doe</h4>
                        <p className="text-secondary">980K Follower</p>
                        <button className="btn-contact font-weight-bold pt-1 pb-1 border-radius-5">Join Now</button>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <button className="btn btn-contact-new text-white font-weight-bold">View More</button>
            </div>
        </div>
    );
};

export default Influencers;