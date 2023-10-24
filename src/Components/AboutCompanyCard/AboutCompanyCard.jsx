import { Link } from "react-router-dom";
import "./about-company-card.scss";

const AboutCompanyCard = ({ title, subTitle, description, viewMoreLink }) => {
  return (
    <div className="col-lg-6">
        <div className="card">
            <div className="card-body pabout">
                <h1 className="mb-3 fw-semibold">{title}</h1>
                <h4 className="">{subTitle}</h4>
                <p className="leading-normal">{description}</p>
                <Link to={viewMoreLink} className="btn btn-primary mt-2">View More</Link>
            </div>
        </div>
    </div>
  )
}

export default AboutCompanyCard;