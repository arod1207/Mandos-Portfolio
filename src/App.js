import LosPelletsImage from './Components/Assets/Images/LosPellets.png';
import MoodifiImage from './Components/Assets/Images/Moodifi.png';
import WeatherImage from './Components/Assets/Images/weatherDashboard.png';
import GoogleBookImage from './Components/Assets/Images/GoogleSearch.png';
import WorkDayImage from './Components/Assets/Images/workDayScheduler.png';
import EmployeeImage from './Components/Assets/Images/EmployeeDirectory.png';

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
                    link="https://shrouded-chamber-97830.herokuapp.com/"
                    github="https://github.com/arod1207/Moodifi"
                />
                <Projects
                    title="Los Pellets Guapos"
                    image={LosPelletsImage}
                    link="http://los-pellets-guapos.herokuapp.com/"
                    github="https://github.com/arod1207/Los-Pellets-Guapos"
                />
                <Projects
                    title="Weather App"
                    image={WeatherImage}
                    link="https://arod1207.github.io/Weather-Dashboard/"
                    github="https://github.com/arod1207/Weather-Dashboard"
                />
                <Projects
                    title="Google Book Store"
                    image={GoogleBookImage}
                    link="https://google-book-search-w-react.herokuapp.com/"
                    github="https://github.com/arod1207/Google-Book-Search"
                />
                <Projects
                    title="Work Day Scheduler"
                    image={WorkDayImage}
                    link="https://arod1207.github.io/Work-Day-Scheduler/"
                    github="https://github.com/arod1207/Work-Day-Scheduler"
                />
                <Projects
                    title="Team Generator"
                    image={EmployeeImage}
                    link="https://frozen-badlands-93210.herokuapp.com/"
                    github="https://github.com/arod1207/HW-19-Employee-Directory"
                />
            </div>
        </div>
    );
}

export default App;
