import React from 'react';

import ScrollAnimation from 'react-animate-on-scroll';

import './Projects.css';

function Projects({ title, image, description, link, github }) {
    return (
        <div className="projects">
            <ScrollAnimation
                animateIn="fadeIn"
                initiallyVisible={false}
                duration={2}
            >
                <div className="projects__card">
                    <div className="projects__title">{title}</div>
                    <div className="projects__image">
                        <img src={image} alt="" />
                    </div>
                    <div className="projects__desc">{description}</div>
                    <div className="projects__links">
                        <a href={link}>
                            <i className="fas fa-link fa-3x projects"></i>
                        </a>
                        <a href={github}>
                            <i className="fab fa-github fa-3x projects"></i>
                        </a>
                    </div>
                </div>
            </ScrollAnimation>
        </div>
    );
}

export default Projects;
