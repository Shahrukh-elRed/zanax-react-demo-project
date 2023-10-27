import { Icon } from "@iconify/react";
import "./collapsible-card-with-image.scss";
import { useState } from "react";

const CollapsibleCardWithImage = ({ bgImage, title, text }) => {
    const [showCard, setShowCard] = useState(true);
    const [showBody, setShowBody] = useState(true);

    return (
        <div className="col-md-12 col-xl-4">
            {showCard ? <div className="card card-blog-overlay" style={{ backgroundImage: `url(${bgImage})` }}>
                <div className="card-header z-index2  border-transparent">
                    <h3 className="card-title text-white">{title}</h3>
                    <div className="card-options">
                    <div onClick={() => setShowBody(!showBody)} className="card-options-collapse card-cons-white">
                            <Icon icon={showBody ? "feather:chevron-up" : "feather:chevron-down"} />
                        </div>
                        <div  onClick={() => setShowCard(false)} className="card-options-remove card-cons-white">
                            <Icon icon="feather:x" />
                        </div>
                    </div>
                </div>
                {showBody ? <div className="card-body text-white">{text}</div> : null}
            </div> : null}
        </div>
    )
}

export default CollapsibleCardWithImage;