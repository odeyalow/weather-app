import SunAndMoon from '../sunAndMoon/SunAndMoon';
import Cloud from '../cloud/Cloud';
import CurrentWeatherInfo from '../currentWeatherInfo/CurrentWeatherInfo';
import ThreeDaysForecast from '../ThreeDaysForecast/ThreeDaysForecast';
import DayHoursForecast from '../dayHoursForecast/DayHoursForecast';
import Search from '../search/Search';
import { Component } from 'react';
import IPInfoService from '../../services/IPInfoService';
import WeatherService from '../../services/WeatherService';
import PlaceholderImage from '../../resources/placeholder-image.png';

import './App.scss';

class App extends Component {
    state = {
        location: '',
        localtime: '',
        isDay:null,
        selectedDayIndex: 0,
        searchValue:''
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
            this.setState({isDay:localtime > 6 && localtime < 20 ? true : false})
        });
    }

    updateLocation = () => {
        this.ipInfoService
        .getLocation()
        .then(res => this.onDataLoaded(res.city));
    }

    onDaySelect = (index) => {
        this.setState({selectedDayIndex:index});
    }

    onScroll = () => {
        window.scrollTo({
            top:document.body.scrollHeight,
            behavior:'smooth'
        })
    }
    
    onSearch = searchValue => {
        this.setState({searchValue})
    }

    onResultSelect = (resultCity, resultRegion, resultCountry) => {
        this.setState({searchValue:`${resultCity}, ${resultRegion}, ${resultCountry}`})
    }

    render() {
        const {isDay, location, searchValue} = this.state;

        return (
            <div className={isDay ? 'main day' : 'main night'}>
                <SunAndMoon isDay={isDay}/>
                <Cloud isDay={isDay}/> 
                <div className="main__content">
                    <h1 className="main-title">Weather App</h1>
                    <span className="current-user-location__text">Now in <strong>{location}</strong></span>
                    <div className="info__columns">
                        <CurrentWeatherInfo location={location}/>
                        <div className="days-hours__columns">
                            <ThreeDaysForecast 
                            location={location} 
                            onDaySelect={this.onDaySelect}
                            selectedDayIndex={this.state.selectedDayIndex}/>
                            <DayHoursForecast 
                            location={location}
                            selectedDayIndex={this.state.selectedDayIndex}/>
                        </div>
                    </div>
                    <div className="scroll__wrapper">
                        <button onClick={this.onScroll}>See other places</button>
                    </div>
                </div>
                
                <div className="search__content">
                    <Search 
                    onSearch={this.onSearch}
                    searchValue={searchValue}
                    onResultSelect={this.onResultSelect}/>
                    <img src={PlaceholderImage} className='placeholder__img' alt="Placeholder"/>
                    {/* <span className="current-user-location__text">Now in <strong>New-York</strong></span>
                    <div className="info__columns">
                        <CurrentWeatherInfo/>
                        <div className="days-hours__columns">
                            <ThreeDaysForecast/>
                            <DayHoursForecast/>
                        </div>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default App;