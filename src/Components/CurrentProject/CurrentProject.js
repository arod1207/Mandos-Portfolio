import React from 'react';

import ScrollAnimation from 'react-animate-on-scroll';

import './CurrentProject.css';

import RestaurantImage from '../Assets/Images/Restaurant-app.png';

function CurrentProject({ link, github }) {
    return (
        <div className="currentProject">
            <div className="currentProject__header">
                <h2>Latest Project</h2>
            </div>
            <ScrollAnimation
                animateIn="fadeIn"
                initiallyVisible={false}
                duration={2}
            >
                <div className="currentProject__wrapper">
                    <div className="currentProject__Left">
                        <div className="currentProject__title">
                            Restaurant Order App
                        </div>
                        <div className="currentProject__desc">
                            It may not be Amazon, but it is an e-commerce site
                            built using React.js and Firebase. This was my first
                            attempt using Firebase. Check it out!
                        </div>
                    </div>
                    <div className="currentProject__Right">
                        <div className="currentProject__image">
                            <img src={RestaurantImage} alt="" />
                        </div>
                        <div className="currentProject__links">
                            <a href="https://restaurant-app-1207.web.app/">
                                <i className="fas fa-link fa-3x"></i>
                            </a>
                            <a href="https://github.com/arod1207/Restaurant-app">
                                <i className="fab fa-github fa-3x"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
            <div className="other__projects">
                <h2>Other Projects</h2>
            </div>
        </div>
    );
}

export default CurrentProject;
