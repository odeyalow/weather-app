import SunAndMoon from '../sunAndMoon/SunAndMoon';
import Cloud from '../cloud/Cloud';
import CurrentWeatherInfo from '../currentWeatherInfo/CurrentWeatherInfo';
import TenDaysForecast from '../TenDaysForecast/TenDaysForecast';
import DayHoursForecast from '../dayHoursForecast/DayHoursForecast';

import './App.scss';

const App = () => {
    return (
        <div className="main day">
            <SunAndMoon/>
            <Cloud/>
            <div className="main__content">
                <h1 className="main-title">Weather App</h1>
                <span className="current-user-location__text">Now in <strong>New-York</strong></span>
                <div className="info__columns">
                    <CurrentWeatherInfo/>
                    <div className="days-hours__columns">
                        <TenDaysForecast/>
                        <DayHoursForecast/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;