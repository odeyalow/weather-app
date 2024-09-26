import { Component } from 'react';
import WeatherService from '../../services/WeatherService';
import Spinner from '../spinner/Spinner';

import './CurrentWeatherInfo.scss';

class CurrentWeatherInfo extends Component{
    state = {
        weather: {},
        astronomy:{},
        isWeatherLoaded: false,
        isAstronomyLoaded: false
    }

    componentDidMount() {
        if (this.state.weatherLoaded && this.state.astrnomyLoaded) {
            this.updateCurrentForecast();
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.location !== this.props.location) {
          this.updateCurrentForecast();
        }
    }

    weatherService = new WeatherService();

    onWeatherLoaded = (weather) => {
        this.setState({weather, isWeatherLoaded:true});
    }

    onAstronomyLoaded = (astronomy) => {
        this.setState({astronomy, isAstronomyLoaded: true});
    }

    updateCurrentForecast = () => {
        this.weatherService
        .getCurrentForecast(this.props.location)
        .then(this.onWeatherLoaded)
        .catch(this.props.onError);
        const date = new Date(),
        filteredDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDay() < 10 ? '0' + date.getDay() : date.getDay()}`;
        this.weatherService
        .getAstronomy(this.props.location, filteredDate)
        .then(this.onAstronomyLoaded)
        .catch(this.props.onError);
    }

    render() {
        const {isWeatherLoaded, isAstronomyLoaded} = this.state,
        
        content = isWeatherLoaded && isAstronomyLoaded 
        ? <View state={this.state}/>
        : <Spinner 
        size={'200px'}
        color={'#fff'}
        margin={'100px auto'}/>;

        return (
            <div className="info-block__column">
                {content}
            </div>
        )
    }
}

const View = ({state}) => {
    const {temperature, conditionText, conditionIcon, feelslike, humidity} = state.weather,
        {sunrise, sunset} = state.astronomy;

    return (
        <>
        <div className="main-info__block">
                <span className="current-temperature">{temperature}°</span>
                <div className="current-weather-condition__block">
                    <span className="text">{conditionText}</span>
                    <img src={conditionIcon} alt={conditionText} className="condition__icon"/>
                </div>
            </div>
            <div className="other-info__block">
                    <ul className="other-info__list">
                        <li className="list__item">
                            <span>Humidity:</span>
                            <span>{humidity}%</span>
                        </li>
                        <li className="list__item">
                            <span>Feels like:</span>
                            <span>{feelslike}°</span>
                        </li>
                        <li className="list__item">
                            <span>Sunrise at:</span>
                            <span>{sunrise}</span>
                        </li>
                        <li className="list__item">
                            <span>Sunset at:</span>
                            <span>{sunset}</span>
                        </li>
                    </ul>
            </div>
        </>
    )
}

export default CurrentWeatherInfo;