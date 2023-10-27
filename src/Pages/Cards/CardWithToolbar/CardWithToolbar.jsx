import { Icon } from "@iconify/react";
import "./card-with-toolbar.scss";

const CardWithToolbar = ({ title, cardTextFirst, cardTextSecond }) => {
    return (
        <div className="col-xl-4 col-md-12">
            <div className="card d-flex m-b-20">
                <div className="card-header">
                    <h3 className="card-title">{title}</h3>
                    <div className="card-options">
                        <div onClick={() => console.log("refresh")} className="text-gray card-options-icon">
                            <Icon icon="mdi:refresh" />
                        </div>
                        <div onClick={() => console.log("bookmark")} className="text-gray card-options-icon">
                            <Icon icon="mdi:bookmark-outline" />
                        </div>
                        <div onClick={() => console.log("dots")} className="text-gray card-options-icon">
                            <Icon icon="mdi:dots-vertical" />
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <p>{cardTextFirst}</p>
                    <p className="mb-0">{cardTextSecond}</p>
                </div>
            </div>
        </div>
    )
}

export default CardWithToolbar;