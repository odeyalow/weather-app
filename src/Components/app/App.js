import SunAndMoon from '../sunAndMoon/SunAndMoon';
import Cloud from '../cloud/Cloud';
import CurrentWeatherInfo from '../currentWeatherInfo/CurrentWeatherInfo';
import TenDaysForecast from '../TenDaysForecast/TenDaysForecast';
import DayHoursForecast from '../dayHoursForecast/DayHoursForecast';
import Search from '../search/Search';
import { Component } from 'react';
import IPInfoService from '../../services/IPInfoService'

import './App.scss';

class App extends Component {
    state = {
        location: ''
    }

    componentDidMount() {
        this.updateLocation();
    }

    ipInfoService = new IPInfoService();

    onLocationLoaded = (city) => {
        this.setState({location:city})
    }

    updateLocation = () => {
        this.ipInfoService
        .getLocation()
        .then(res => this.onLocationLoaded(res.city));
    }

    render() {
        return (
            <div className="main day">
                <SunAndMoon/>
                <Cloud/> 
                <div className="main__content">
                    <h1 className="main-title">Weather App</h1>
                    <span className="current-user-location__text">Now in <strong>{this.state.location}</strong></span>
                    <div className="info__columns">
                        <CurrentWeatherInfo location={this.state.location}/>
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