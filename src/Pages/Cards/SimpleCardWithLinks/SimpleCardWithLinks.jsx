import { Link } from "react-router-dom";
import "./simple-card-with-links.scss";

const SimpleCardWithLinks = ({ cardTitle, cardSubtitle, cardText, firstLink, firstLinkText, secondLink, secondLinkText }) => {
  return (
    <div className="col-xl-4 col-md-12">
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{cardTitle}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{cardSubtitle}</h6>
            <p className="card-text">{cardText}</p>
            <Link to={firstLink} className="card-link">{firstLinkText}</Link>
            <Link to={secondLink} className="card-link">{secondLinkText}</Link>
        </div>
    </div>
</div>
  )
}

export default SimpleCardWithLinks;