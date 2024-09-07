import SunAndMoon from '../sunAndMoon/SunAndMoon';
import Cloud from '../cloud/Cloud';
import CurrentWeatherInfo from '../currentWeatherInfo/CurrentWeatherInfo';
import TenDaysForecast from '../TenDaysForecast/TenDaysForecast';
import DayHoursForecast from '../dayHoursForecast/DayHoursForecast';
import Search from '../search/Search';
import { Component } from 'react';
import IPInfoService from '../../services/IPInfoService';
import WeatherService from '../../services/WeatherService';
import LoadingDarkSmall from '../loading/LoadingDarkSmall';

import './App.scss';

class App extends Component {
    state = {
        location: '',
        localtime: '',
        isDay:'',
        loading:true,
        error:false
    }

    componentDidMount() {
        this.updateLocation();
    }

    ipInfoService = new IPInfoService();
    weatherService = new WeatherService();

    onDataLoaded = (city) => {
        this.setState({location:city, loading:false})
        this.weatherService
        .getLocalTime(city)
        .then(res => {
            let localtime = res.location.localtime.slice(11, 13);
            this.setState({localtime})
            this.setState({isDay:localtime > 6 && localtime < 8 ? true : false})
        });   
    }

    updateLocation = () => {
        this.ipInfoService
        .getLocation()
        .then(res => this.onDataLoaded(res.city));
    }

    render() {
        const {location, isDay, loading} = this.state;
        const isLocationLoaded = loading ? <LoadingDarkSmall/> : <span className="current-user-location__text">Now in <strong>{location}</strong></span>;
        return (
            <div className={isDay === true ? 'main day' : 'main night'}>
                <SunAndMoon isDay={isDay}/>
                <Cloud isDay={isDay}/> 
                <div className="main__content">
                    <h1 className="main-title">Weather App</h1>
                    {isLocationLoaded}
                    <div className="info__columns">
                        <CurrentWeatherInfo location={location}/>
                        <div className="days-hours__columns">
                            <TenDaysForecast/>
                            <DayHoursForecast/>
                        </div>
                    </div>
                    <div className="scroll__wrapper">
                        <button>See other places</button>
                    </div>
                </div>
                
                <div className="search__content">
                    <Search/>
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
}

export default App;