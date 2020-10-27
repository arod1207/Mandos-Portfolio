import React from 'react';

import ScrollAnimation from 'react-animate-on-scroll';

import './Home.css';

function Home() {
    return (
        <div className="home">
            <div className="home__header">
                <ScrollAnimation
                    duration={3}
                    animateIn="bounceInUp"
                    initiallyVisible={true}
                    animateOnce={true}
                >
                    <h1>In This World, Creations Are Limitless</h1>
                </ScrollAnimation>
            </div>
        </div>
    );
}

export default Home;
