import { Icon } from "@iconify/react";
import "./icon-drop-down.scss";

const IconDropDown = ({ color="default", icon, dropdownHeader, dropdownItems, separatedLinkText, separatedLinkAction }) => {
        return (
        <div className="btn-group mt-2 mb-2 d-flex">
            <button type="button" className={`btn ${color === "primary" ? "btn-dropdown-icon-primary" : "btn-dropdown-icon"} btn-pill dropdown-toggle`} data-bs-toggle="dropdown">
                <Icon icon={`fa-${icon}`} className={color === "primary" ? "icon-dropdown-icon-primary" : "icon-dropdown-icon"} />
            </button>
            <ul className="dropdown-menu" role="menu">
                <li className={`dropdown-plus-title dropdown-border-primary`}>
                    {dropdownHeader}
                    <Icon icon="fa:angle-up" />
                </li>
                {dropdownItems?.map(item => 
                    <li key={item?.id}>
                        <div className="dropdown-link" onClick={item?.action}>{item?.text}</div>
                    </li>)}
                <li className="divider"></li>
                <li><div className="dropdown-link" onClick={separatedLinkAction}>{separatedLinkText}</div></li>
            </ul>
        </div>
        )
}

export default IconDropDown;