import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./links-in-alert.scss";

const LinksInAlert = ({ color, exclaimText, text, linkText, link }) => {
    const [hideAlert, setHideAlert] = useState(false);

  return (
        <div className={`alert alert-${color} alert-dismissible fade ${hideAlert ? "" : "show"}`} role="alert">
            <strong>{exclaimText}</strong>
            {color === "danger" ? <span> <Link to={link} className="alert-link">{text}</Link> {linkText}</span> 
                : <span> {text} <Link to={link} className="alert-link">{linkText}</Link></span>}
            <button onClick={() => setHideAlert(true)} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
            </button>
        </div>
    )
}

export default LinksInAlert;