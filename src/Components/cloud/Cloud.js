import CloudImg from '../../resources/cloud.svg'
import './Cloud.scss';

const Cloud = () => {
    return (
        <>
            <img src={CloudImg} alt="Cloud" className="cloud-img cloud-img-1" />
            <img src={CloudImg} alt="Cloud" className="cloud-img cloud-img-2" />
        </>
    )
}

export default Cloud;