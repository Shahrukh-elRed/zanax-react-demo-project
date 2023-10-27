import "./simple-quote-card.scss";

const SimpleQuoteCard = ({ textPosition, quoteText, title, author }) => {
  return (
    <div className="col-md-12 col-xl-4">
    <div className="card ">
        <div className={`card-body text-${textPosition}`}>
            <blockquote className="quote">
                <p>{quoteText}</p>
                    <div className="text-muted small">
                        {title}<cite title="Source Title" className="cite">{author}</cite>
                    </div>
            </blockquote>
        </div>
    </div>
</div>
  )
}

export default SimpleQuoteCard;