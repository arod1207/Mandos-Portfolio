import React from 'react';

import { Link } from 'react-router-dom';

import './CurrentProject.css';

import RestaurantImage from '../Assets/Images/Restaurant-app.png';

function CurrentProject({ link, github }) {
    return (
        <div className="currentProject">
            <div className="currentProject__header">Latest Project</div>
            <div className="currentProject__wrapper">
                <div className="currentProject__Left">
                    <div className="currentProject__title">
                        Resaurant E-Commerce
                    </div>
                    <div className="currentProject__desc">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Corrupti hic illo quaerat eum tenetur amet
                        provident praesentium mollitia quo nisi alias ea harum
                        molestias, asperiores blanditiis quod nostrum debitis
                        distinctio?
                    </div>
                </div>
                <div className="currentProject__Right">
                    <div className="currentProject__image">
                        <img src={RestaurantImage} alt="" />
                    </div>
                    <div className="currentProject__links">
                        <Link to="https://github.com/arod1207/Restaurant-app">
                            <i className="fas fa-link fa-3x"></i>
                        </Link>
                        <Link to="https://github.com/arod1207/Restaurant-app">
                            <i className="fab fa-github fa-3x"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentProject;
