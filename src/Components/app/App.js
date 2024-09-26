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
        userSearchInput:'',
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
    
    onSearchInput = userSearchInput => {
        this.setState({userSearchInput})
    }

    // onResultSelect = (resultCity, resultRegion, resultCountry) => {
    //     this.setState({searchValue:`${resultCity}, ${resultRegion}, ${resultCountry}`})
    // }

    onSearch = (userSearchInput) => {
        this.setState({isFound:true, searchValue:userSearchInput})
    }

    render() {
        const {selectedDayIndex, onDaySelect} = this.state;
        const {isDay, location, userSearchInput, searchValue, isFound} = this.state;
        const searchActiveStyles = isFound ? 'search-results__wrapper' : 'search-results__wrapper hidden';

        return (
            <div className={isDay ? 'main day' : 'main night'}>
                <SunAndMoon isDay={isDay}/>
                <Cloud isDay={isDay}/> 
                <div className="main__content">
                    <h1 className="main-title">Weather App</h1>
                    <div className="current-user-location__text">
                        <span>Now in <strong>{location}</strong></span>
                    </div>
                    <div className="info__columns">
                        <CurrentWeatherInfo 
                        location={location}
                        />
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
                    onSearchInput={this.onSearchInput}
                    userSearchInput={userSearchInput}
                    onResultSelect={this.onResultSelect}
                    onSearch={this.onSearch}/>

                    {!isFound ? <img src={PlaceholderImage} alt="Placeholder" className='placeholder__img'/> : null}

                    <div className={searchActiveStyles}>
                        <span className="current-user-location__text">Now in <strong>{searchValue}</strong></span>
                        <div className="info__columns">
                            <CurrentWeatherInfo location={searchValue}/>
                            <div className="days-hours__columns">
                                <ThreeDaysForecast
                                location={searchValue}
                                onDaySelect={onDaySelect}
                                selectedDayIndex={selectedDayIndex}/>
                                <DayHoursForecast
                                location={searchValue}
                                selectedDayIndex={selectedDayIndex}/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default App;