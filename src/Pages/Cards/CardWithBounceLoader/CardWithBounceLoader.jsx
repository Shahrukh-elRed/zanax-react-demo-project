import { Icon } from "@iconify/react";
import "./card-with-bounce-loader.scss";
import { useState } from "react";

const CardWithBounceLoader = ({ title }) => {
    const [showCard, setShowCard] = useState(true);
    const [showBody, setShowBody] = useState(true);

  return (
        <div className="col-md-12 col-xl-4">
            {showCard ? <div className="card">
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
                    <div className="dimmer active">
                        <div className="spinner1">
                            <div className="double-bounce1"></div>
                            <div className="double-bounce2"></div>
                        </div>
                    </div>
                </div> : null}
            </div> : null}
        </div>
    )
}

export default CardWithBounceLoader;