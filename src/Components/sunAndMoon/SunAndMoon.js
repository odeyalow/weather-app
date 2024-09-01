import './SunAndMoon.scss';
import SunImg from '../../resources/sun.svg';
// import MoonImg from '../../resources/moon.svg';

const SunAndMoon = () => {
    return (
        <>
            <img src={SunImg} alt="Sun" className="sunMoon-img" />
            {/* <img src={MoonImg} alt="Moon" className="sunMoon-img" /> */}
        </>
    )
}

export default SunAndMoon;