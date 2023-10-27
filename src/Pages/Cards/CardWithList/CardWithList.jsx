import { Icon } from "@iconify/react";
import "./card-with-list.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

const CardWithList = ({ title, cardData }) => {
    const [showCard, setShowCard] = useState(true);
    const [showBody, setShowBody] = useState(true);

    return (
        <div className=" col-xl-4 col-md-12 ">
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
                    <div className="visitor-list">
                        {cardData.map((item, index) => <div key={item.id} className={`media m-0 ${index === 0 ? "mt-0" : "mt-2"} ${index === cardData.length - 1 ? "" : "border-bottom"}`}>
                            <img className="avatar brround avatar-md me-3" alt="avatra-img" src={item.profileImageUrl} />
                            <div className="media-body">
                                <Link to="/" className="text-default fw-semibold">{item.employeeName}</Link>
                                <p className={`text-muted ${index === cardData.length - 1 ? "mb-0" : ""}`}>{item.text}</p>
                            </div>
                        </div> )}
                    </div>
                </div> : null}
            </div> : null}
        </div>
    )
}

export default CardWithList