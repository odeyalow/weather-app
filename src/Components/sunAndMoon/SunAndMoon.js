import { Component } from 'react';

import './SunAndMoon.scss';
import SunImg from '../../resources/sun.svg';
import MoonImg from '../../resources/moon.svg'; 

class SunAndMoon extends Component {
    render() {
        return (
            <>
                {this.props.isDay
                ? <img src={SunImg} alt="Sun" className="sunMoon-img"/> 
                : <img src={MoonImg} alt="Moon" className="sunMoon-img"/>}
            </>
        )
    }
}

export default SunAndMoon;