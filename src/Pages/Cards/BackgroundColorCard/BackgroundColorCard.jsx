import "./background-color-card.scss";

const BackgroundColorCard = ({ bgColor, title, text }) => {
    return (
        <div className="col-md-12 col-xl-4">
            <div className={`card bg-${bgColor}`}>
                <div className="color-card-body">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{text}</p>
                </div>
            </div>
        </div>
    )
}

export default BackgroundColorCard;