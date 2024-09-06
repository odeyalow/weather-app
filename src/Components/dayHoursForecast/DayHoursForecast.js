import DayIcon from '../../resources/day-icon.svg'
import './DayHoursForecast.scss';

const DayHoursForecast = () => {
    return (
        <div>
            <span className="hours__title">24 hour forecast for <strong>30/08</strong></span>
            <div className="hours-list__wrapper">
                <ul className="hours__list">
                    <button className="hours__list-item">
                        <div className="hours__condition--block">
                            <img src={DayIcon} alt="Day" className="codition__icon"/>
                            <span className="condition__text">Sunny</span>
                        </div>
                        <h3 className="temperature__text">27°</h3>
                        <span className="hours">Now</span>
                    </button>
                    <button className="hours__list-item">
                        <div className="hours__condition--block">
                            <img src={DayIcon} alt="Day" className="codition__icon"/>
                            <span className="condition__text">Sunny</span>
                        </div>
                        <h3 className="temperature__text">27°</h3>
                        <span className="hours">14:00</span>
                    </button>
                    <button className="hours__list-item">
                        <div className="hours__condition--block">
                            <img src={DayIcon} alt="Day" className="codition__icon"/>
                            <span className="condition__text">Sunny</span>
                        </div>
                        <h3 className="temperature__text">27°</h3>
                        <span className="hours">14:00</span>
                    </button>
                    <button className="hours__list-item">
                        <div className="hours__condition--block">
                            <img src={DayIcon} alt="Day" className="codition__icon"/>
                            <span className="condition__text">Sunny</span>
                        </div>
                        <h3 className="temperature__text">27°</h3>
                        <span className="hours">14:00</span>
                    </button>
                    <button className="hours__list-item">
                        <div className="hours__condition--block">
                            <img src={DayIcon} alt="Day" className="codition__icon"/>
                            <span className="condition__text">Sunny</span>
                        </div>
                        <h3 className="temperature__text">27°</h3>
                        <span className="hours">14:00</span>
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default DayHoursForecast;