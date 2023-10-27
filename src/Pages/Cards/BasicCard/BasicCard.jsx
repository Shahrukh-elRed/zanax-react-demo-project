import { Icon } from "@iconify/react";
import "./basic-card.scss";
import { useState } from "react";

const BasicCard = ({ bgColorHeader="header-white", title, bodyText, footerText, bgColorFooter="footer-white" }) => {
    const [showCard, setShowCard] = useState(true);
    const [showBodyAndFooter, setShowBodyAndFooter] = useState(true);
    return (
        <div className="col-md-12 col-xl-4">
            {showCard ? <div className="card">
                <div className={`card-header bg-${bgColorHeader}`}>
                    <h3 className="card-title">{title}</h3>
                    <div className="card-options">
                        <div onClick={() => setShowBodyAndFooter(!showBodyAndFooter)} 
                            className={`${bgColorHeader === "header-white" ? "card-options-collapse" : "icon-color card-options-collapse"}`}>
                            <Icon icon={showBodyAndFooter ? "feather:chevron-up" : "feather:chevron-down"} />
                        </div>
                        <div onClick={() => setShowCard(false)} className={`${bgColorHeader === "header-white" ? "card-options-remove" : "icon-color card-options-remove"}`}>
                            <Icon icon="feather:x" />
                        </div>
                    </div>
                </div>
                {showBodyAndFooter ? <div>
                    <div className="card-body">
                        {bodyText}									
                    </div>
                    <div className={`card-footer bg-${bgColorFooter}`}>{footerText}</div>
                </div> : null}
            </div> : null}
        </div>
    )
}

export default BasicCard;