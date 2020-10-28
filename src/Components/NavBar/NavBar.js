import React from 'react';

import { Link } from 'react-router-dom';

import './NavBar.css';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__button">
                <Link to="/contactme">
                    <button>Contact Me</button>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
