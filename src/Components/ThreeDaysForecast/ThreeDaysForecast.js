import WeatherService from '../../services/WeatherService';
import { Component } from 'react';
import Spinner from '../spinner/Spinner';

import './ThreeDaysForecast.scss';

class ThreeDaysForecast extends Component {
    state = {
        forecast: [],
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
        .then(this.onThreeDaysForecastLoaded);
    }

    onThreeDaysForecastLoaded = (forecast) => {
        if (forecast && forecast.length > 0) {
            this.setState({forecast, isForecastLoaded:true})
        }          
    }

    render() {
        let marginAdaptivity = '0';
        if (window.innerWidth > 820) {
            marginAdaptivity = '120px 0 0 80px';
        } else if (window.innerWidth <= 820 && window.innerWidth > 550){
            marginAdaptivity = '10px 0 0 185px';
        } else if (window.innerWidth <= 550){
            marginAdaptivity = '10px 0 0 120px';
        }

        const content = this.state.isForecastLoaded
        ? <View 
        selectedDayIndex={this.props.selectedDayIndex} 
        onDaySelect={this.props.onDaySelect} 
        forecast={this.state.forecast} />    
        : <Spinner
        size={window.innerWidth <= 550 ? '50px' : '100px'}
        color={'#2C2C2C'}
        margin={marginAdaptivity}/>;
        return (
            <div>
                <span className="days__title">Three day forecast</span>
                <div className="days-list__wrapper">
                    {content}
                </div>
            </div>
        )
    }
}

const View = (props) => {
    const getDataFromState = (dayIndex, dataType) => {
        return props.length <= 0 ? null : props.forecast[dayIndex][dataType];
    }
    return (
        <ul className="days__list">
            <li>
                <button className={props.selectedDayIndex === 0 ? 'list__btn active' : 'list__btn'}
                onClick={() => props.onDaySelect(0)}>
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
                <button onClick={() => props.onDaySelect(1)} 
                className={props.selectedDayIndex === 1 ? 'list__btn active' : 'list__btn'}>
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
                <button onClick={() => props.onDaySelect(2)}
                    className={props.selectedDayIndex === 2 ? 'list__btn active' : 'list__btn'}>
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
    )
}

export default ThreeDaysForecast;