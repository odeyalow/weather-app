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
        if (forecast && forecast.length > 0) {
            this.setState({forecast})
        }          
    }

    render() {
        const getDataFromState = (dayIndex, dataType) => {
            return this.state.forecast.length <= 0 ? null : this.state.forecast[dayIndex][dataType];
        }
        return (
            <div>
                <span className="days__title">Three day forecast</span>
                <div className="days-list__wrapper">
                    <ul className="days__list">
                        <li>
                            <button className="list__btn">
                                <span className="date__text">Today</span>
                                <div className="condition__block">
                                    <span className="temperature__text">{getDataFromState(0, 'maxTemperature')}°/{getDataFromState(0, 'minTemperature')}°</span>
                                    <div className="inner__condition__block">
                                        <span className="condition__text">{getDataFromState(0, 'conditionText')}</span>
                                        <img src={getDataFromState(0, 'conditionIcon')} alt="Day" className="condition__icon"/>
                                    </div>
                                </div>
                            </button>
                        </li>
                        <li>
                            <button className="list__btn">
                                <span className="date__text">Tomorrow</span>
                                <div className="condition__block">
                                    <span className="temperature__text">{getDataFromState(1, 'maxTemperature')}°/{getDataFromState(1, 'minTemperature')}°</span>
                                    <div className="inner__condition__block">
                                        <span className="condition__text">{getDataFromState(1, 'conditionText')}</span>
                                        <img src={getDataFromState(1, 'conditionIcon')} alt="Day" className="condition__icon"/>
                                    </div>
                                </div>
                            </button>
                        </li>
                        <li>
                            <button className="list__btn">
                                <span className="date__text">Day after tomorrow</span>
                                <div className="condition__block">
                                    <span className="temperature__text">{getDataFromState(2, 'maxTemperature')}°/{getDataFromState(2, 'minTemperature')}°</span>
                                    <div className="inner__condition__block">
                                        <span className="condition__text">{getDataFromState(2, 'conditionText')}</span>
                                        <img src={getDataFromState(2, 'conditionIcon')} alt="Day" className="condition__icon"/>
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