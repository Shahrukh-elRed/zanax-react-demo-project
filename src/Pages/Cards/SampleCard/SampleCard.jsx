import { Icon } from "@iconify/react";
import "./sample-card.scss";
import { useState } from "react";

const SampleCard = ({ title, cardTextFirst, cardTextSecond }) => {
    const [showCard, setShowCard] = useState(true);
    const [showBody, setShowBody] = useState(true);

    return (
        <div className="col-xl-4 col-md-12">
            {showCard ? <div className="card m-b-20">
                <div className="card-header">
                    <h3 className="card-title">{title}</h3>
                    <div className="card-options">
                        <div onClick={() => setShowBody(!showBody)} className="card-options-collapse">
                            <Icon icon={showBody ? "feather:chevron-up" : "feather:chevron-down"} />
                        </div>
                        <div  onClick={() => setShowCard(false)} className="card-options-remove">
                            <Icon icon="feather:x" />
                        </div>
                    </div>
                </div>
                {showBody ? <div className="card-body">
                    <p>{cardTextFirst}</p>
                    <p className="mb-0">{cardTextSecond}</p>
                </div> : null}
            </div> : null}
        </div>
    )
}

export default SampleCard;