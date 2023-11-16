import { useEffect, useRef } from 'react';
import "./alert-popover.scss";
import { Popover } from 'bootstrap';

const AlertPopover = ({ buttonText, btnColor, alertTitle, alertMessage, popoverPlacement }) => {
    const popoverRef = useRef();  
    useEffect(() => {
        var popover = new Popover(popoverRef.current, {
            content: alertMessage,
            title: alertTitle,
            trigger: 'click',
            placement: popoverPlacement,
        })
    })

    return (
        <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 mt-2 mb-2">
            <button ref={popoverRef} type="button" className={`btn-popover btn-block btn-${btnColor} d-grid`} >
                {buttonText}
            </button>
        </div>
    )
}

export default AlertPopover;