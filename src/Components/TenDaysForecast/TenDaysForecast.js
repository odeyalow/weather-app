import DayIcon from '../../resources/day-icon.svg'
import './TenDaysForecast.scss';

const TenDaysForecast = () => {
    return (
        <div>
            <span className="days__title">10 day forecast</span>
            <div className="days-list__wrapper">
                <ul className="days__list">
                    <li>
                        <button className="list__btn">
                            <span className="date__text">30/08</span>
                            <div className="condition__block">
                                <span className="temperature__text">27°</span>
                                <img src={DayIcon} alt="Day" className="condition__icon"/>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button className="list__btn">
                            <span className="date__text">30/08</span>
                            <div className="condition__block">
                                <span className="temperature__text">27°</span>
                                <img src={DayIcon} alt="Day" className="condition__icon"/>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button className="list__btn">
                            <span className="date__text">30/08</span>
                            <div className="condition__block">
                                <span className="temperature__text">27°</span>
                                <img src={DayIcon} alt="Day" className="condition__icon"/>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button className="list__btn">
                            <span className="date__text">30/08</span>
                            <div className="condition__block">
                                <span className="temperature__text">27°</span>
                                <img src={DayIcon} alt="Day" className="condition__icon"/>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button className="list__btn">
                            <span className="date__text">30/08</span>
                            <div className="condition__block">
                                <span className="temperature__text">27°</span>
                                <img src={DayIcon} alt="Day" className="condition__icon"/>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button className="list__btn">
                            <span className="date__text">30/08</span>
                            <div className="condition__block">
                                <span className="temperature__text">27°</span>
                                <img src={DayIcon} alt="Day" className="condition__icon"/>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button className="list__btn">
                            <span className="date__text">30/08</span>
                            <div className="condition__block">
                                <span className="temperature__text">27°</span>
                                <img src={DayIcon} alt="Day" className="condition__icon"/>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button className="list__btn">
                            <span className="date__text">30/08</span>
                            <div className="condition__block">
                                <span className="temperature__text">27°</span>
                                <img src={DayIcon} alt="Day" className="condition__icon"/>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button className="list__btn">
                            <span className="date__text">30/08</span>
                            <div className="condition__block">
                                <span className="temperature__text">27°</span>
                                <img src={DayIcon} alt="Day" className="condition__icon"/>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button className="list__btn">
                            <span className="date__text">30/08</span>
                            <div className="condition__block">
                                <span className="temperature__text">27°</span>
                                <img src={DayIcon} alt="Day" className="condition__icon"/>
                            </div>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TenDaysForecast;