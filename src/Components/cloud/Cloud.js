import { Component } from 'react';

import CloudImg from '../../resources/cloud.svg'
import './Cloud.scss';

class Cloud extends Component {
    render() {
        const cloud1Styles = this.props.isDay
        ? 'cloud-img cloud-img-1'
        : 'cloud-img cloud-img-1 cloud-night-filter',
        cloud2Styles = this.props.isDay === true
        ? 'cloud-img cloud-img-2'
        : 'cloud-img cloud-img-2 cloud-night-filter';
    return (
        <>
            <img src={CloudImg} alt="Cloud" className={cloud1Styles} />
            <img src={CloudImg} alt="Cloud" className={cloud2Styles} />
        </>
    )
    }
}

export default Cloud;