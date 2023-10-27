import { Icon } from "@iconify/react";
import "./card-with-bounce-loader.scss";
import { useState } from "react";

const CardWithBounceLoader = ({ title }) => {
    const [showCard, setShowCard] = useState(true);
    const [showBody, setShowBody] = useState(true);

  return (
        <div class="col-md-12 col-xl-4">
            {showCard ? <div class="card">
                <div class="card-header">
                    <h3 class="card-title">{title}</h3>
                    <div class="card-options">
                    <div onClick={() => setShowBody(!showBody)} className="card-options-collapse">
                        <Icon icon={showBody ? "feather:chevron-up" : "feather:chevron-down"} />
                    </div>
                    <div  onClick={() => setShowCard(false)} className="card-options-remove">
                        <Icon icon="feather:x" />
                    </div>
                    </div>
                </div>
                {showBody ? <div class="card-body">
                    <div class="dimmer active">
                        <div class="spinner1">
                            <div class="double-bounce1"></div>
                            <div class="double-bounce2"></div>
                        </div>
                    </div>
                </div> : null}
            </div> : null}
        </div>
    )
}

export default CardWithBounceLoader;