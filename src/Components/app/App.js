import SunAndMoon from '../sunAndMoon/SunAndMoon';
import Cloud from '../cloud/Cloud';
import CurrentWeatherInfo from '../currentWeatherInfo/CurrentWeatherInfo';
import ThreeDaysForecast from '../threeDaysForecast/ThreeDaysForecast';
import DayHoursForecast from '../dayHoursForecast/DayHoursForecast';
import Search from '../search/Search';
import { Component } from 'react';
import IPInfoService from '../../services/IPInfoService';
import WeatherService from '../../services/WeatherService';
import PlaceholderImage from '../../resources/placeholder-image.png';
import ErrorImage from '../../resources/error-image.png';

import './App.scss';

class App extends Component {
    state = {
        location: '',
        localtime: '',
        isDay:null,
        selectedUserDayIndex: 0,
        selectedSearchDayIndex:0,
        userSearchInput:'',
        searchValue:'',
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
            this.setState({isDay:localtime > 6 && localtime < 20 ? true : false})
        });
    }

    updateLocation = () => {
        this.ipInfoService
        .getLocation()
        .then(res => this.onDataLoaded(res.city))
        .catch(this.onError);
    }

    onUserLocationDaySelect = (index) => {
        this.setState({selectedUserDayIndex:index});
    }

    onSearchForecastDaySelect = (index) => {
        this.setState({selectedSearchDayIndex:index});
    }

    onScroll = () => {
        window.scrollTo({
            top:document.body.scrollHeight,
            behavior:'smooth'
        })
    }
    
    onSearchInput = userSearchInput => {
        this.setState({userSearchInput})
    }

    onResultSelect = (selectedResult) => {
        this.setState({userSearchInput:selectedResult})
    }
    
    onSearch = (userSearchInput) => {
        this.setState({isFound:true, searchValue:userSearchInput, selectedSearchDayIndex:0})
    }

    onError = () => {
        this.setState({error:true});
    }

    render() {
        const {isDay, location, userSearchInput, searchValue, isFound, selectedUserDayIndex, selectedSearchDayIndex, error} = this.state;
        const searchActiveStyles = isFound ? 'search-results__wrapper' : 'search-results__wrapper hidden';

        return (
            <div className={isDay ? 'main day' : 'main night'}>
                <SunAndMoon isDay={isDay}/>
                <Cloud isDay={isDay}/> 

                {error
                ? <div className="error__block">
                    <img src={ErrorImage} alt="Error" className="error__img waiting-animation" />
                  </div>
                :
                <>
                    <div className="main__content">
                        <h1 className="main-title">Weather App</h1>
                        <div className="current-user-location__text">
                            <span>Now in <strong>{location}</strong></span>
                        </div>
                        <div className="info__columns">
                            <CurrentWeatherInfo 
                            location={location}
                            onError={this.onError}
                            />
                            <div className="days-hours__columns">
                                <ThreeDaysForecast
                                location={location} 
                                onDaySelect={this.onUserLocationDaySelect}
                                selectedDayIndex={selectedUserDayIndex}
                                onError={this.onError}/>
                                <DayHoursForecast
                                location={location}
                                selectedDayIndex={selectedUserDayIndex}
                                onError={this.onError}/>
                            </div>
                        </div>
                        <div className="scroll__wrapper">
                            <button onClick={this.onScroll}>See other places</button>
                        </div>
                    </div>
                    <div className="search__content">
                        <Search 
                        onSearchInput={this.onSearchInput}
                        userSearchInput={userSearchInput}
                        onResultSelect={this.onResultSelect}
                        onSearch={this.onSearch}/>

                        {!isFound ? <img src={PlaceholderImage} alt="Placeholder" className='placeholder__img waiting-animation'/> : null}

                        <div className={searchActiveStyles}>
                            <span className="current-user-location__text">Now in <strong>{searchValue}</strong></span>
                            <div className="info__columns">
                                <CurrentWeatherInfo location={searchValue}
                                onError={this.onError}/>
                                <div className="days-hours__columns">
                                    <ThreeDaysForecast
                                    location={searchValue}
                                    onDaySelect={this.onSearchForecastDaySelect}
                                    selectedDayIndex={selectedSearchDayIndex}
                                    onError={this.onError}/>
                                    <DayHoursForecast
                                    location={searchValue}
                                    selectedDayIndex={selectedSearchDayIndex}
                                    onError={this.onError}/>
                                </div>
                            </div>
                        </div>

                    </div>
                </>
                }
            </div>
        )
    }
}

export default App;