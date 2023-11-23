import { useNavigate } from 'react-router-dom';
import "./image-about-card.scss";

const ImageAboutCards = ({ imageUrl, header, description, link, buttonColor }) => {
  const navigate = useNavigate(); 
  
  return (
    <div className="col-md-6 col-sm-12 col-lg-6 col-xl-3">
        <div className="card text-center overflow-hidden">
            <img src={imageUrl} alt="img" className="" />
            <div className="card-body">
                <h3 className="header-img-card">{header}</h3>
                <p className="img-card-text">{description}</p>
                <div className="img-card-btn"><button onClick={() => navigate(link)} className={`btn btn-${buttonColor}`}>-Read More</button></div>
            </div>
        </div>
    </div>
  )
}

export default ImageAboutCards;