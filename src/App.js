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
            <Home />
            <CurrentProject />
            <div className="projects">
                <Projects
                    title="Moodifi"
                    image={MoodifiImage}
                    link=""
                    github=""
                />
                <Projects
                    title="Los Pellets Guapos"
                    image={LosPelletsImage}
                    link=""
                    github=""
                />
                <Projects
                    title="Weather App"
                    image={WeatherImage}
                    link="https://arod1207.github.io/Weather-Dashboard/"
                    github="https://github.com/arod1207/Weather-Dashboard"
                />
                <Projects
                    title="Covid Flight Tracker"
                    image={Project1Image}
                    link=""
                    github=""
                />
                <Projects
                    title="Work Day Scheduler"
                    image={WorkDayImage}
                    link=""
                    github=""
                />
                <Projects
                    title="Team Generator"
                    image={MyTeamImage}
                    link=""
                    github=""
                />
            </div>
        </div>
    );
}

export default App;
