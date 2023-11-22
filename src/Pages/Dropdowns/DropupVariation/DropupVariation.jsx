import "./dropup-variation.scss";

const DropupVariation = ({ color, buttonText, dropUpItems, separatedLinkText, separatedLinkAction }) => {
    return (
        <div className="dropup btn-group mt-2 mb-2">
            <button className={`btn btn-${color} dropdown-toggle`} type="button" data-bs-toggle="dropdown">{buttonText}</button>
            <ul className="dropdown-menu">
                {dropUpItems?.map(item => 
                    <li key={item?.id}>
                        <div className="dropdown-link" onClick={item?.action}>{item?.text}</div>
                    </li>)}
                <li className="divider"></li>
                <li><div className="dropdown-link" onClick={separatedLinkAction}>{separatedLinkText}</div></li>
            </ul>
        </div>
        )
}

export default DropupVariation;