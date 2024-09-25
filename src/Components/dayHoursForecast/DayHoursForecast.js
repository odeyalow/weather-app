import WeatherService from '../../services/WeatherService';
import { Component } from 'react';
import Spinner from '../spinner/Spinner';

import './DayHoursForecast.scss';

class DayHoursForecast extends Component {
    state = {
        forecast:[],
        isForecastLoaded:false
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
            this.setState({forecast, isForecastLoaded:true})
        }
    }

    render() {
        const dayDetermine = (dayIndex) => {
            let day = '';
            switch (dayIndex) {
                case 0:
                    day = 'Today';
                    break;
                case 1:
                    day = 'Tomorrow';
                    break;
                case 2:
                    day = 'Day after tomorrow';
                    break;
                default:
                    day = 'Please select a day';
            }
            return day;
        }

        const showHours = (dayIndex) => {
            return this.state.forecast.length <= 0 ? null : this.state.forecast[dayIndex].hours.map(hour => {
                return (
                    <button key={hour.time} className="hours__list-item">
                        <div className="hours__condition--block">
                            <img src={hour.condition.icon} alt="Day" className="codition__icon"/>
                            <span className="condition__text">{hour.condition.text}</span>
                        </div>
                        <h3 className="temperature__text">{Math.round(hour.temp_c)}°</h3>
                        <span className="hours">{hour.time.slice(10, 16)}</span>
                    </button>
                )
            });
        }
        showHours(0);
        return (
            <div className='main-wrapper'>
                <span className="hours__title"><strong>{dayDetermine(this.props.selectedDayIndex)}'s</strong> hourly forecast</span>
                <div className="hours-list__wrapper">
                    <ul className="hours__list">
                        {this.state.isForecastLoaded 
                        ? showHours(this.props.selectedDayIndex) 
                        : <Spinner 
                        size={'100px'}
                        color={'#2C2C2C'}
                        margin={window.innerWidth <= 550 ? '15px 0 0 85px' : '0 0 0 175px'}/>}
                    </ul>
                </div>
            </div>
        )
    }
}

export default DayHoursForecast;