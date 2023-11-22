import { Icon } from "@iconify/react";
import "./social-icon-button.scss";

const SocialIconButton = ({socialIconType}) => {
    return (
        <div className="btn-group mt-2 mb-2">
            <button type="button" className={`btn btn-${socialIconType} btn-pill`} data-bs-toggle="">
                <Icon icon={`fa:${socialIconType}`} color="white" height="13px" />
            </button>
        </div>
    )
}

export default SocialIconButton;