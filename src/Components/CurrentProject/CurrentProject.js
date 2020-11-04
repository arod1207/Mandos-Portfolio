import React from 'react';

import ScrollAnimation from 'react-animate-on-scroll';

import './CurrentProject.css';

import WeatherFi from '../Assets/Images/WeatherFi.png';

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
                        <div className="currentProject__title">WeatherFi</div>
                        <div className="currentProject__desc">
                            WeatherFi is a progressive web app built using
                            React. The user can view the current weather along
                            with a 3 day forecast.
                        </div>
                    </div>
                    <div className="currentProject__Right">
                        <div className="currentProject__image">
                            <img src={WeatherFi} alt="" />
                        </div>
                        <div className="currentProject__links">
                            <a href="https://react-weatherfi.netlify.app//">
                                <i className="fas fa-link fa-3x"></i>
                            </a>
                            <a href="https://github.com/arod1207/react-weather-app">
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
