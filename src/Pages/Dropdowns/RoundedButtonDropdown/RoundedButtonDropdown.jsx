import { Icon } from "@iconify/react";
import "./rounded-button-dropdown.scss";

const RoundedButtonDropdown = ({ color="default", buttonText, dropdownHeader, dropdownItems, separatedLinkText, separatedLinkAction }) => {
    return (
        <div className="btn-group mt-2 mb-2">
            <button type="button" className={`btn btn-${color} btn-pill dropdown-toggle`} data-bs-toggle="dropdown">
                {buttonText} <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" role="menu">
                <li className={`dropdown-plus-title dropdown-border-${color}`}>
                    {dropdownHeader}
                    <Icon icon="fa:angle-up" className="icon-arrow-up-dropdown" />
                </li>
                {dropdownItems?.map((item, index) => 
                    <li key={item?.id}>
                        <div className="dropdown-link" onClick={item?.action}>{item?.text}</div>
                    </li>)}
                <li className="divider"></li>
                <li><div className="dropdown-link" onClick={separatedLinkAction}>{separatedLinkText}</div></li>
            </ul>
        </div>
    )
}

export default RoundedButtonDropdown;