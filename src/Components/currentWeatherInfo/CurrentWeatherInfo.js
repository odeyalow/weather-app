import DayIcon from '../../resources/day-icon.svg'
import './CurrentWeatherInfo.scss';

const CurrentWeatherInfo = () => {
    return (
        <div className="info-block__column">
            <div className="main-info__block">
                <span className="current-temperature">27°</span>
                <div className="current-weather-condition__block">
                    <span className="text">Sunny</span>
                    <img src={DayIcon} alt="Day" className="condition__icon"/>
                </div>
            </div>
            <div className="other-info__block">
                    <ul className="other-info__list">
                        <li className="list__item">
                            <span>Feels like:</span>
                            <span>26°</span>
                        </li>
                        <li className="list__item">
                            <span>Temperature at night:</span>
                            <span>26°</span>
                        </li>
                        <li className="list__item">
                            <span>Sunrise at:</span>
                            <span>04:32</span>
                        </li>
                        <li className="list__item">
                            <span>Sunset att:</span>
                            <span>19:56</span>
                        </li>
                    </ul>
            </div>
        </div>
    )
}

export default CurrentWeatherInfo;