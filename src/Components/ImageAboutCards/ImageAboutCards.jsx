import { Link } from 'react-router-dom';
import "./image-about-card.scss";

const ImageAboutCards = ({ imageUrl, header, description, link, btnColor }) => {
  return (
    <div className="col-md-6 col-sm-12 col-lg-6 col-xl-3">
        <div className="card text-center overflow-hidden">
            <img src={imageUrl} alt="img" className="" />
            <div className="card-body">
                <h3 className="header-img-card">{header}</h3>
                <p className="img-card-text">{description}</p>
                <Link to={link} className={`btn btn-${btnColor}`}>-Read More</Link>
            </div>
        </div>
    </div>
  )
}

export default ImageAboutCards;