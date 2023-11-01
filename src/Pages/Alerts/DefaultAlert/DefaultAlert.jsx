import { useState } from "react";
import "./default-alert.scss";

const DefaultAlert = ({ color, text }) => {
    const [hideAlert, setHideAlert] = useState(false);

    return (
        <>
            <div className={`alert alert-${color} alert-dismissible fade ${hideAlert ? "" : "show"}`} role="alert">
                <span className="alert-inner--text">{text}</span>
                <button onClick={() => setHideAlert(true)} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
        </>)
}

export default DefaultAlert;