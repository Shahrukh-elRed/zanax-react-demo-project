import { useState } from "react";
import "./built-card.scss";
import { Icon } from "@iconify/react";

const BuiltCard = ({ title, bodyText, cardColor="", isWide }) => {
    const [showCard, setShowCard] = useState(true);
    const [showBody, setShowBody] = useState(true);

    return (
        <div className={`${isWide ? "col-xl-6" : " col-xl-4"} col-md-12`}>
        {showCard ? <div className={`${cardColor ? `card text-white bg-${cardColor} ${showBody && cardColor === "primary" ? "border-primary" : "" }` : "card"}`}>
            <div className={`${cardColor ? `card-header bg-${cardColor} ${!showBody && (!cardColor || cardColor === "primary") ? "" : `border-${cardColor}` }` : "card-header"}`}>
                <h3 className="card-title">{title}</h3>
                <div className={cardColor ? "card-options text-white" : "card-options"}>
                    <div onClick={() => setShowBody(!showBody)} className="card-options-collapse">
                        <Icon icon={showBody ? "feather:chevron-up" : "feather:chevron-down"} />
                    </div>
                    <div  onClick={() => setShowCard(false)} className="card-options-remove">
                        <Icon icon="feather:x" />
                    </div>
                </div>
            </div>
            {showBody ? <div className={cardColor ? "card-body text-white" : "card-body"}>{bodyText}</div> : null}               
        </div> : null}
    </div>
    )
}

export default BuiltCard;