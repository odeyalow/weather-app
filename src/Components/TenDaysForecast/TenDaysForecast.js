import WeatherService from '../../services/WeatherService';
import { Component } from 'react';

import './TenDaysForecast.scss';

class TenDaysForecast extends Component {
    state = {
        forecast: []
    }
    
    weatherService = new WeatherService();

    componentDidMount() {
        this.weatherService
        .getTenDaysForecast('Atyrau')
        .then(this.onTenDaysForecastLoaded);
    }

    onTenDaysForecastLoaded = (forecast) => {
        this.setState({forecast})
    }

    render() {
        return (
            <div>
                <span className="days__title">10 day forecast</span>
                <div className="days-list__wrapper">
                    <ul className="days__list">
                        <li>
                            <button className="list__btn">
                                <span className="date__text">Today</span>
                                <div className="condition__block">
                                    <span className="temperature__text">27°</span>
                                    <img src="" alt="Day" className="condition__icon"/>
                                </div>
                            </button>
                        </li>
                        <li>
                            <button className="list__btn">
                                <span className="date__text">30/08</span>
                                <div className="condition__block">
                                    <span className="temperature__text">27°</span>
                                    <img src="" alt="Day" className="condition__icon"/>
                                </div>
                            </button>
                        </li>
                        <li>
                            <button className="list__btn">
                                <span className="date__text">30/08</span>
                                <div className="condition__block">
                                    <span className="temperature__text">27°</span>
                                    <img src="" alt="Day" className="condition__icon"/>
                                </div>
                            </button>
                        </li>
                        <li>
                            <button className="list__btn">
                                <span className="date__text">30/08</span>
                                <div className="condition__block">
                                    <span className="temperature__text">27°</span>
                                    <img src="" alt="Day" className="condition__icon"/>
                                </div>
                            </button>
                        </li>
                        <li>
                            <button className="list__btn">
                                <span className="date__text">30/08</span>
                                <div className="condition__block">
                                    <span className="temperature__text">27°</span>
                                    <img src="" alt="Day" className="condition__icon"/>
                                </div>
                            </button>
                        </li>
                        <li>
                            <button className="list__btn">
                                <span className="date__text">30/08</span>
                                <div className="condition__block">
                                    <span className="temperature__text">27°</span>
                                    <img src="" alt="Day" className="condition__icon"/>
                                </div>
                            </button>
                        </li>
                        <li>
                            <button className="list__btn">
                                <span className="date__text">30/08</span>
                                <div className="condition__block">
                                    <span className="temperature__text">27°</span>
                                    <img src="" alt="Day" className="condition__icon"/>
                                </div>
                            </button>
                        </li>
                        <li>
                            <button className="list__btn">
                                <span className="date__text">30/08</span>
                                <div className="condition__block">
                                    <span className="temperature__text">27°</span>
                                    <img src="" alt="Day" className="condition__icon"/>
                                </div>
                            </button>
                        </li>
                        <li>
                            <button className="list__btn">
                                <span className="date__text">30/08</span>
                                <div className="condition__block">
                                    <span className="temperature__text">27°</span>
                                    <img src="" alt="Day" className="condition__icon"/>
                                </div>
                            </button>
                        </li>
                        <li>
                            <button className="list__btn">
                                <span className="date__text">30/08</span>
                                <div className="condition__block">
                                    <span className="temperature__text">27°</span>
                                    <img src="" alt="Day" className="condition__icon"/>
                                </div>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default TenDaysForecast;