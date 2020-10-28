import React from 'react';
import { Link } from 'react-router-dom';

import ScrollAnimation from 'react-animate-on-scroll';

import './ContactMe.css';

function ContactMe() {
    return (
        <div className="contactMe">
            <div className="contactMe__card">
                <div className="contactMe__Header">
                    <ScrollAnimation
                        duration={3}
                        delay={1000}
                        animateIn="hinge"
                        initiallyVisible={true}
                    >
                        <h1>Contact Me</h1>
                    </ScrollAnimation>
                </div>
                <div className="contactMe__LinkedIn contactMe__options ">
                    <a href="https://www.linkedin.com/in/armandorodriguez7/">
                        <i class="fab fa-linkedin fa-3x"></i>
                    </a>
                </div>
                <div className="contactMe__Email contactMe__options ">
                    <p>
                        <a href="mailto:arod1207@me.com">
                            <i class="fas fa-envelope fa-3x"></i>
                        </a>
                    </p>
                </div>
                <div className="contactMe__PhoneNumber contactMe__options">
                    (210)999-1191
                </div>
                <div className="contactMe__Button contactMe__options">
                    <Link to="/">
                        <ScrollAnimation
                            duration={3}
                            delay={2000}
                            animateIn="fadeIn"
                            initiallyVisible={false}
                        >
                            <h2>Return Home</h2>
                        </ScrollAnimation>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ContactMe;
