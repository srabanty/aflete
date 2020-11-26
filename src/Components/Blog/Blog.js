import React from 'react';
import person1 from '../../siteImages/person1.jpg';
import person2 from '../../siteImages/person2.jpg';
import person3 from '../../siteImages/person3.jpg';
import person4 from '../../siteImages/person4.jpg';
import './Blog.css';

const Blog = () => {
    return (
        <div className="blog-section" id="blog">
            <h1 className="text-center">Blogs</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 blog-1 mt-4">
                        <div className="row">
                            <div className="col-4">
                                <img className="img-fluid" src={person1} alt="" />
                            </div>
                            <div className="col-8">
                                <h4>All progress takes place outside the comfort zone</h4>
                                <h5 className="text-secondary">-Ashley</h5>
                                <a href="#" className="text-danger font-weight-bold">Read More...</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-5 blog-2 mt-4">
                        <div className="row">
                            <div className="col-4">
                                <img className="img-fluid" src={person3} alt="" />
                            </div>
                            <div className="col-8">
                                <h4>Action is the foundational key to all success</h4>
                                <h5 className="text-secondary">-Benjamin</h5>
                                <a href="#" className="text-danger font-weight-bold">Read More...</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5 blog-2 mt-4">
                        <div className="row">
                            <div className="col-4">
                                <img className="img-fluid" src={person2} alt="" />
                            </div>
                            <div className="col-8">
                                <h4>A champion is someone who gets up when they can’t.</h4>
                                <h5 className="text-secondary">-Lily</h5>
                                <a href="#" className="text-danger font-weight-bold">Read More...</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-5 blog-1 mt-4">
                        <div className="row">
                            <div className="col-4">
                                <img className="img-fluid" src={person4} alt="" />
                            </div>
                            <div className="col-8">
                                <h4>Action is the foundational key to all success</h4>
                                <h5 className="text-secondary">-Jacob</h5>
                                <a href="#" className="text-danger font-weight-bold">Read More...</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center pt-5">
                    <button className="btn btn-contact text text-center font-weight-bold">View More</button>
                </div>
            </div>
        </div>
    );
};

export default Blog;