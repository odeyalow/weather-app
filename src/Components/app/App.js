import SunAndMoon from '../sunAndMoon/SunAndMoon';
import Cloud from '../cloud/Cloud';
import CurrentWeatherInfo from '../currentWeatherInfo/CurrentWeatherInfo';

import './App.scss';

const App = () => {
    return (
        <div className="main day">
            <SunAndMoon/>
            <Cloud/>
            <div className="main__content">
                <h1 className="title">Weather App</h1>
                <CurrentWeatherInfo/>
            </div>
        </div>
    )
}

export default App;