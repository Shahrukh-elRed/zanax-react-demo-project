import { useState } from "react";
import "./fullscreen-button-card.scss";
import { Icon } from "@iconify/react";

const FullscreenButtonCard = ({ title, bodyText, isWide=false }) => {
    const [showCard, setShowCard] = useState(true);
    const [showBody, setShowBody] = useState(true);
    const [maximized, setMaximized] = useState(false);

    return (
        <div className={`${isWide ? "col-xl-6" : " col-xl-4"} col-md-12`}>
            {showCard ? <div className="card">
                <div className="card-header">
                    <h3 className="card-title">{title}</h3>
                    <div className="card-options">
                        <div onClick={() => setShowBody(!showBody)} className="card-options-collapse">
                            <Icon icon={showBody ? "feather:chevron-up" : "feather:chevron-down"} />
                        </div>
                        <div onClick={() => setMaximized(!maximized)} className="card-options-fullscreen">
                            <Icon icon={maximized ? "feather:minimize" : "feather:maximize"} />
                        </div>
                        <div  onClick={() => setShowCard(false)} className="card-options-remove">
                            <Icon icon="feather:x" />
                        </div>
                    </div>
                </div>
                {showBody ? <div className="card-body">{bodyText}</div> : null}               
            </div> : null}
        </div>
    )
}

export default FullscreenButtonCard;