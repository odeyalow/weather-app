import { Component } from 'react';
import WeatherService from '../../services/WeatherService';

import './CurrentWeatherInfo.scss';

class CurrentWeatherInfo extends Component{
    state = {
        weather: {},
        astronomy:{},
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location !== this.props.location) {
          this.updateCurrentForecast();
        }
      }

    weatherService = new WeatherService();

    onWeatherLoaded = (weather) => {
        this.setState({weather})
    }

    onAstronomyLoaded = (astronomy) => {
        this.setState({astronomy})
    }

    updateCurrentForecast = () => {
        this.weatherService
        .getCurrentForecast(this.props.location)
        .then(this.onWeatherLoaded);
        const date = new Date(),
        filteredDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDay() < 10 ? '0' + date.getDay() : date.getDay()}`;
        this.weatherService
        .getAstronomy(this.props.location, filteredDate)
        .then(this.onAstronomyLoaded);
    }

    render() {
        const {temperature, conditionText, conditionIcon, feelslike, humidity} = this.state.weather,
              {sunrise, sunset} = this.state.astronomy;

        return (
            <div className="info-block__column">
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
            </div>
        )
    }
}

export default CurrentWeatherInfo;