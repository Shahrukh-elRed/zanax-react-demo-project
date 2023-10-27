import "./terms-helpful-card.scss";

const TermsHelpfulCard = () => {
  return (
    <div className="card">
    <div className="card-body text-start">
        <div className="terms">
            <div className="info-helpful-text">Was this information is Helpful?</div>
            <button onClick={() => console.log("yes")} className="btn btn-primary text-white terms-yes-btn">Yes</button>
            <button onClick={() => console.log("no")} className="btn btn-secondary text-white terms-no-btn">No</button>
        </div>
    </div>
</div>
  )
}

export default TermsHelpfulCard;