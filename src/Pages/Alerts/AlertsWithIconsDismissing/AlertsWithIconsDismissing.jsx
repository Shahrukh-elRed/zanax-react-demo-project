import "./alerts-with-icons-dismissing.scss";
import { Icon } from "@iconify/react";

const AlertsWithIconsDismissing = ({ color, strongText, text, icon }) => {

    return (
        <>
            <div className={`alert alert-icon-dismissing alert-${color} alert-dismissible fade show"}`} role="alert">
                <span className="alert-inner--text"><Icon icon={icon} className="icon-alert-dismissing" /><strong>{strongText} </strong>{text}</span>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
        </>
    )
}

export default AlertsWithIconsDismissing;