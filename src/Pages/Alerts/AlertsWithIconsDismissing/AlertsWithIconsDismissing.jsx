import { useState } from "react";
import "./alerts-with-icons-dismissing.scss";
import { Icon } from "@iconify/react";

const AlertsWithIconsDismissing = ({ color, strongText, text, icon }) => {
    const [hideAlert, setHideAlert] = useState(false);

    return (
        <>
            <div className={`alert-icon-dismissing alert-${color} alert-dismissible fade ${hideAlert ? "" : "show"}`} role="alert">
                <span className="alert-inner--text"><Icon icon={icon} className="icon-alert-dismissing" /><strong>{strongText} </strong>{text}</span>
                <button onClick={() => setHideAlert(true)} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
        </>
    )
}

export default AlertsWithIconsDismissing;