import WeatherService from '../../services/WeatherService';
import { Component } from 'react';

import './ThreeDaysForecast.scss';

class ThreeDaysForecast extends Component {
    state = {
        forecast: []
    }
    
    weatherService = new WeatherService();

    componentDidUpdate(prevProps) {
        if (prevProps.location !== this.props.location) {
          this.updateForecast();
        }
    }

    updateForecast = () => {
        this.weatherService
        .getThreeDaysForecast(this.props.location)
        .then(this.onThreeDaysForecastLoaded);
    }

    onThreeDaysForecastLoaded = (forecast) => {
        this.setState({forecast})
    }

    render() {
        const {conditionIcon, conditionText, minTemperature, maxTemperature} = this.state.forecast;
        console.log(this.state.forecast)
        return (
            <div>
                <span className="days__title">Three day forecast</span>
                <div className="days-list__wrapper">
                    <ul className="days__list">
                        <li>
                            <button className="list__btn">
                                <span className="date__text">Today</span>
                                <div className="condition__block">
                                    <span className="temperature__text">27°/27°</span>
                                    <div className="inner__condition__block">
                                        <span className="condition__text">Partly Cloudly</span>
                                        <img src="" alt="Day" className="condition__icon"/>
                                    </div>
                                </div>
                            </button>
                        </li>
                        <li>
                            <button className="list__btn">
                                <span className="date__text">Tomorrow</span>
                                <div className="condition__block">
                                    <span className="temperature__text">27°/27°</span>
                                    <div className="inner__condition__block">
                                        <span className="condition__text">Partly Cloudly</span>
                                        <img src="" alt="Day" className="condition__icon"/>
                                    </div>
                                </div>
                            </button>
                        </li>
                        <li>
                            <button className="list__btn">
                                <span className="date__text">Day after tomorrow</span>
                                <div className="condition__block">
                                    <span className="temperature__text">27°/27°</span>
                                    <div className="inner__condition__block">
                                        <span className="condition__text">Partly Cloudly</span>
                                        <img src="" alt="Day" className="condition__icon"/>
                                    </div>
                                </div>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ThreeDaysForecast;