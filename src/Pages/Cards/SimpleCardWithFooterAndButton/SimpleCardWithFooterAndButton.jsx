import "./simple-card-with-footer-and-button.scss";

const SimpleCardWithFooterAndButton = ({ cardText, buttonAction, buttonText, footerText }) => {
    return (
        <div className="col-xl-4 col-md-12">
            <div className="card">
                <div className="card-body">
                    <p className="">{cardText}</p>
                    <button onClick={buttonAction} className="btn btn-primary">{buttonText}</button>
                </div>
                <div className="card-footer">
                    <div className="card-title">{footerText}</div>
                </div>
            </div>
        </div>
    )
}

export default SimpleCardWithFooterAndButton;