import WeatherService from '../../services/WeatherService';
import { Component } from 'react';

import './DayHoursForecast.scss';

class DayHoursForecast extends Component {
    state = {
        forecast:[]
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
        .then(this.onForecastLoaded);
    }

    onForecastLoaded = (forecast) => {
        if (forecast && forecast.length > 0) {
            this.setState({forecast})
        }
    }

    render() {
        const showHours = (dayIndex) => {
            return this.state.forecast.length <= 0 ? null : this.state.forecast[dayIndex].hours.map(hour => {
                return (
                    <button className="hours__list-item">
                        <div className="hours__condition--block">
                            <img src={hour.condition.icon} alt="Day" className="codition__icon"/>
                            <span className="condition__text">{hour.condition.text}</span>
                        </div>
                        <h3 className="temperature__text">{Math.round(hour.temp_c)}°</h3>
                        <span className="hours">{hour.time.slice(10, -1)}</span>
                    </button>
                )
            });
        }   
        showHours(0);
        return (
            <div>
                <span className="hours__title">24 hour forecast for <strong>30/08</strong></span>
                <div className="hours-list__wrapper">
                    <ul className="hours__list">
                        {showHours(0)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default DayHoursForecast;