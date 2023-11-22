import { Icon } from "@iconify/react";
import "./rounded-split-outline-button-dropdown.scss";

const RoundedSplitOutlineButtonDropdown = ({ color="default", leftButtonAction, buttonText, dropdownHeader, dropdownItems, separatedLinkText, separatedLinkAction }) => {
    return (
        <div className="btn-group mt-2 mb-2">
			<button onClick={leftButtonAction} type="button" className={`btn btn-pill btn-${color}-split-rounded-outline btn-group-split-border-right-${color}`}>{buttonText}</button>
            <button type="button" className={`btn btn-pill btn-${color}-split-rounded-outline dropdown-toggle btn-group-split-border-left-${color}`} data-bs-toggle="dropdown">
                <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" role="menu">
                <li className={`dropdown-plus-title dropdown-border-default`}>
                    {dropdownHeader}
                    <Icon icon="fa:angle-up" className="icon-arrow-up-dropdown" />
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

export default RoundedSplitOutlineButtonDropdown;