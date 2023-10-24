import { Link } from 'react-router-dom';
import "./terms-helpful-card.scss";

const TermsHelpfulCard = () => {
  return (
    <div className="card">
    <div className="card-body text-start">
        <div className="terms">
            <div className="info-helpful-text">Was this information is Helpful?</div>
            <Link to="/terms" className="btn btn-primary text-white terms-yes-btn">Yes</Link>
            <Link to="/terms" className="btn btn-secondary text-white terms-no-btn">No</Link>
        </div>
    </div>
</div>
  )
}

export default TermsHelpfulCard;