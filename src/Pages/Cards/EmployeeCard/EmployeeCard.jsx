import { useState } from "react";
import "./employee-card.scss";
import { Icon } from "@iconify/react";

const EmployeeCard = ({ title, employeeName, designation, profileImg, fbLink, googlePlusLink, twitterLink }) => {
    const [showCard, setShowCard] = useState(true);
    const [showBodyAndFooter, setShowBodyAndFooter] = useState(true);

    return (
        <div className="col-md-12 col-xl-4">
            {showCard ? <div className="card ">
                <div className="card-header ">
                    <h3 className="card-title ">{title}</h3>
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
                    <div className="card-body text-center">
                        <img className="avatar avatar-xxl brround cover-image cover-image" src={profileImg} alt="profile" />
                        <div className="mb-0 mt-3 header-text-name ">{employeeName}</div>
                        <p className="card-text">{designation}</p>
                    </div>
                    <div className="card-footer text-center">
                        <div className="row user-social-detail">
                            <div onClick={() => window.open(fbLink)} className="social-profile me-4 rounded-circle text-center">
                                <Icon icon="fa:facebook" color="#6259ca" />
                                </div>
                            <div onClick={() => window.open(googlePlusLink)} className="social-profile me-4 rounded-circle text-center">
                                <Icon icon="fa6-brands:google-plus-g" color="#6259ca" />
                            </div>
                            <div onClick={() => window.open(twitterLink)} className="social-profile me-4 rounded-circle text-center">
                                <Icon icon="fa:twitter" color="#6259ca" />
                            </div>
                        </div>
                    </div>
                </div> : null}
            </div> : null}
        </div>
    )
}

export default EmployeeCard;