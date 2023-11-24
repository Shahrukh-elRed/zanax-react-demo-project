import { useState } from "react";
import DefaultStaticTooltip from "../DefaultStaticTooltip/DefaultStaticTooltip";
import "./default-tooltip-example.scss";

const DefaultTooltipExample = ({ text, position }) => {
    return (
        <>
            <div className="position-absolute bottom-4">
                <DefaultStaticTooltip text={text} position={position} />
            </div>
            <div className="col-sm-6 col-lg-3 mt-2 mb-2">
                <button className="btn btn-primary" data-bs-placement="top" data-bs-toggle="tooltip" title="Tooltip on top" >Hover me</button>
            </div>
        </>
    )
}

export default DefaultTooltipExample;