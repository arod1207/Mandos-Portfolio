import { BrowserRouter as Router } from 'react-router-dom';

import LosPelletsImage from './Components/Assets/Images/LosPellets.png';
import MoodifiImage from './Components/Assets/Images/Moodifi.png';
import WeatherImage from './Components/Assets/Images/weatherDashboard.png';
import Project1Image from './Components/Assets/Images/Project1.png';
import WorkDayImage from './Components/Assets/Images/workDayScheduler.png';
import MyTeamImage from './Components/Assets/Images/MyTeam.png';

import Home from './Components/Home/Home';
import CurrentProject from './Components/CurrentProject/CurrentProject';
import Projects from './Components/Projects/Projects';

import './App.css';

function App() {
    return (
        <div className="app">
            <Router>
                <Home />
                <CurrentProject />
                <div className="projects">
                    <Projects title="Moodifi" image={MoodifiImage} />
                    <Projects
                        title="Los Pellets Guapos"
                        image={LosPelletsImage}
                    />
                    <Projects title="Weather App" image={WeatherImage} />
                    <Projects title="Weather App" image={Project1Image} />
                    <Projects title="Weather App" image={WorkDayImage} />
                    <Projects title="Weather App" image={MyTeamImage} />
                </div>
            </Router>
        </div>
    );
}

export default App;
