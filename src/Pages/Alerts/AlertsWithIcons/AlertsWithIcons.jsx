import "./alerts-with-icons.scss";
import { Icon } from "@iconify/react";

const AlertsWithIcons = ({ color, strongText, text, icon }) => {
    return (
        <>
            <div className={`alerts alert-${color} alert-dismissible`} role="alert">
                <span className="alert-inner--text"><Icon icon={icon} className="icon-alerts" /><strong>{strongText} </strong>{text}</span>
            </div>
        </>
    )
}

export default AlertsWithIcons;