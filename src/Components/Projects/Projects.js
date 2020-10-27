import React from 'react';

import './Projects.css';

function Projects({ title, image, link, github }) {
    return (
        <div className="projects">
            <div className="projects__card">
                <div className="projects__title">{title}</div>
                <div className="projects__image">
                    <img src={image} alt="" />
                </div>
                <div className="projects__links">
                    <a href={link}>
                        <i className="fas fa-link fa-3x"></i>
                    </a>
                    <a href={github}>
                        <i className="fab fa-github fa-3x"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Projects;
