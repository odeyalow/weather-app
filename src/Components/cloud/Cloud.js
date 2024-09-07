import CloudImg from '../../resources/cloud.svg'
import './Cloud.scss';

const Cloud = (isDay) => {
    const cloud1Styles = isDay === true
    ? 'cloud-img cloud-img-1'
    : 'cloud-img cloud-img-1 cloud-night-filter',
    cloud2Styles = isDay === true
    ? 'cloud-img cloud-img-2'
    : 'cloud-img cloud-img-2 cloud-night-filter';
    return (
        <>
            <img src={CloudImg} alt="Cloud" className={cloud1Styles} />
            <img src={CloudImg} alt="Cloud" className={cloud2Styles} />
        </>
    )
}

export default Cloud;