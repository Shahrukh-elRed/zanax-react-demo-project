import "./simple-card-with-header-and-button.scss";

const SimpleCardWithHeaderAndButton = ({ cardTitle, bodyText, buttonAction, buttonText }) => {
    return (
        <div className="col-xl-4 col-md-12">
            <div className="card">
                <div className="card-header">
                    <div className="card-title">{cardTitle}</div>
                </div>
                <div className="card-body">
                    <p className="">{bodyText}</p>
                    <button onClick={buttonAction} className="btn btn-primary">{buttonText}</button>
                </div>
            </div>
        </div>
    )
}

export default SimpleCardWithHeaderAndButton;