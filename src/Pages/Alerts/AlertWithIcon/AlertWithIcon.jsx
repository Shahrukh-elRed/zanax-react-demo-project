import { useState } from "react";
import "./alert-with-icon.scss";
import { Icon } from "@iconify/react";

const AlertWithIcon = ({ color, text, icon }) => {
    const [hideAlert, setHideAlert] = useState(false);

    return (
        <>
            <div className={`alert alert-${color} alert-dismissible fade ${hideAlert ? "" : "show"}`} role="alert">
                <span className="alert-inner--text"><Icon icon={icon} className="icon-alert" />{text}</span>
                <button onClick={() => setHideAlert(true)} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
        </>
    )
}

export default AlertWithIcon;