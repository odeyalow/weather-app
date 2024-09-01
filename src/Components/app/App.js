import SunAndMoon from '../sunAndMoon/SunAndMoon';
import Cloud from '../cloud/Cloud';

import './App.scss';
// import CurrentWeatherInfo from '../currentWeatherInfo/CurrentWeatherInfo';


const App = () => {
    return (
        <div className="main day">
            <SunAndMoon/>
            <Cloud/>
            <div className="main__content">
                <h1 className="title">Weather App</h1>
                
            </div>
        </div>
    )
}

export default App;