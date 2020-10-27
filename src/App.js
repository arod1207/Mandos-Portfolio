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
                    description="Curated playlist for whatever you do, and your moods. Discovery new music based on your activities and feelings! Browse, rate and listen all within one app!"
                />
                <Projects
                    title="Los Pellets Guapos"
                    image={LosPelletsImage}
                    link="http://los-pellets-guapos.herokuapp.com/"
                    github="https://github.com/arod1207/Los-Pellets-Guapos"
                    description="Los Pellets Guapos is a pellet grill sensor application that automatically tracks the amount of pellets remaining. The software features secured login, recipe finders, and mobile priority design."
                />
                <Projects
                    title="Weather App"
                    image={WeatherImage}
                    link="https://arod1207.github.io/Weather-Dashboard/"
                    github="https://github.com/arod1207/Weather-Dashboard"
                    description="This weather dashboard utilizes the OpenWeather API in order to retrieve data from different cities. The last user search is then saved into local storage. The current forcast is displayed, as well as, a 5 day forcast that is updated in three hour intervals. UV index is highlighted in various colors to inform the user of the UV exposure for that day."
                />
                <Projects
                    title="Google Book Store"
                    image={GoogleBookImage}
                    link="https://google-book-search-w-react.herokuapp.com/"
                    github="https://github.com/arod1207/Google-Book-Search"
                    description="This is a React-based Google Books Search app. It is a full stack MERN applications that uses React on the client-side and Node, Express and MongoDB on the back-end. The user has the ability to save books using MongoDB Atlas."
                />
                <Projects
                    title="Work Day Scheduler"
                    image={WorkDayImage}
                    link="https://arod1207.github.io/Work-Day-Scheduler/"
                    github="https://github.com/arod1207/Work-Day-Scheduler"
                    description="A simple calendar application that allows the user to save events for each hour of the day."
                />
                <Projects
                    title="Employee Directory"
                    image={EmployeeImage}
                    link="https://frozen-badlands-93210.herokuapp.com/"
                    github="https://github.com/arod1207/HW-19-Employee-Directory"
                    description="A react app that employees can use to view non-sensitive data about other employees. Names can also be sorted by alphabetical order."
                />
            </div>
        </div>
    );
}

export default App;
