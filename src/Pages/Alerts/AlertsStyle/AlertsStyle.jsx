import "./alerts-style.scss";

const AlertsStyle = ({ title, message, color }) => {
    return (                                              
        <div className="text-wrap mb-4">
            <div className="example">
                <div className={`alert alert-${color} alert-dismissible fade show mb-0`} role="alert">
                    <strong>{title}</strong>
                    <hr className="message-inner-separator"/>
                    <div>{message}</div>
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AlertsStyle;