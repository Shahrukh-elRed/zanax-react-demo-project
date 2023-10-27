import { Icon } from "@iconify/react";
import "./card-with-alert.scss";
import { useState } from "react";

const CardWithAlert = ({ title, alertText, bodyText, alertColor }) => {
    const [showCard, setShowCard] = useState(true);
    const [showBodyAndFooter, setShowBodyAndFooter] = useState(true);

    return (
        <div className="col-md-12  col-xl-6">
        {showCard ? <div className="card">
            <div className="card-header">
                <h3 className="card-title">{title}</h3>
                <div className="card-options">
                            <div onClick={() => setShowBodyAndFooter(!showBodyAndFooter)} className="card-options-collapse">
                                <Icon icon={showBodyAndFooter ? "feather:chevron-up" : "feather:chevron-down"} />
                            </div>
                            <div  onClick={() => setShowCard(false)} className="card-options-remove">
                                <Icon icon="feather:x" />
                            </div>
                        </div>
            </div>
            {showBodyAndFooter ? <div>
                <div className={`card-alert alert alert-${alertColor} mb-0`}>{alertText}</div>
                <div className="card-body">{bodyText}</div>
            </div> : null}
        </div> : null}
    </div>
    )
}

export default CardWithAlert;