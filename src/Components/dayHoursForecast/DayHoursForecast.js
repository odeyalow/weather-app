import DayIcon from '../../resources/day icon.svg'
import './DayHoursForecast.scss';

const DayHoursForecast = () => {
    // const scrollContainer = document.querySelector('.hours__list');
    // scrollContainer.addEventListener('wheel', (event) => {
    //     event.preventDefault();
    //     scrollContainer.scrollLeft += event.deltaY; 
    // });
    return (
        <div>
            <span className="hours__title">24 hour forecast for <strong>30/08</strong></span>
            <ul className="hours__list">
                <li className="hours__list-item">
                    <div className="hours__condition--block">
                        <img src={DayIcon} alt="Day" className="codition__icon"/>
                        <span className="condition__text">Sunny</span>
                    </div>
                    <h3 className="temperature__text">27°</h3>
                    <span className="hours">14:00</span>
                </li>
                <li className="hours__list-item">
                    <div className="hours__condition--block">
                        <img src={DayIcon} alt="Day" className="codition__icon"/>
                        <span className="condition__text">Sunny</span>
                    </div>
                    <h3 className="temperature__text">27°</h3>
                    <span className="hours">14:00</span>
                </li>
                <li className="hours__list-item">
                    <div className="hours__condition--block">
                        <img src={DayIcon} alt="Day" className="codition__icon"/>
                        <span className="condition__text">Sunny</span>
                    </div>
                    <h3 className="temperature__text">27°</h3>
                    <span className="hours">14:00</span>
                </li>
                <li className="hours__list-item">
                    <div className="hours__condition--block">
                        <img src={DayIcon} alt="Day" className="codition__icon"/>
                        <span className="condition__text">Sunny</span>
                    </div>
                    <h3 className="temperature__text">27°</h3>
                    <span className="hours">14:00</span>
                </li>
                <li className="hours__list-item">
                    <div className="hours__condition--block">
                        <img src={DayIcon} alt="Day" className="codition__icon"/>
                        <span className="condition__text">Sunny</span>
                    </div>
                    <h3 className="temperature__text">27°</h3>
                    <span className="hours">14:00</span>
                </li>
                <li className="hours__list-item">
                    <div className="hours__condition--block">
                        <img src={DayIcon} alt="Day" className="codition__icon"/>
                        <span className="condition__text">Sunny</span>
                    </div>
                    <h3 className="temperature__text">27°</h3>
                    <span className="hours">14:00</span>
                </li>
            </ul>
        </div>
    )
}

export default DayHoursForecast;