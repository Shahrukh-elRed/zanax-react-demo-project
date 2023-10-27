import "./panel-with-custom-buttons.scss";

const PanelWithCustomButtons = ({ title, buttonOneText, buttonTwoText, buttonOneAction, buttonTwoAction, bodyText }) => {
    return (      
        <div className="col-md-12  col-xl-6">
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">{title}</h3>
                    <div className="card-options">
                        <button onClick={buttonOneAction} className="btn btn-primary btn-sm">{buttonOneText}</button>
                        <button onClick={buttonTwoAction} className="btn btn-secondary btn-sm ms-2">{buttonTwoText}</button>
                    </div>
                </div>
                <div className="card-body">{bodyText}</div>
            </div>
        </div>
    )
}

export default PanelWithCustomButtons;