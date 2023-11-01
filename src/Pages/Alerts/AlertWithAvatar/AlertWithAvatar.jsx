import { useState } from "react";
import "./alert-with-avatar.scss";

const AlertWithAvatar = ({ color, text, avatarImage }) => {
    const [hideAlert, setHideAlert] = useState(false);

    return (
        <>
            {hideAlert ? null : <div className={`alert-avatar alert-${color} alert-dismissible`} role="alert">
                <div className="av-img-container"><img src={avatarImage} alt="avatar" className="avatar-image" /></div><span className="alert-inner--text">{text}</span>
                <button onClick={() => setHideAlert(true)} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>}
        </>
    )
}

export default AlertWithAvatar;