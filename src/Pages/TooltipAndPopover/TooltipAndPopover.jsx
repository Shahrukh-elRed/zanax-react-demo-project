import DefaultStaticTooltip from "./DefaultStaticTooltip/DefaultStaticTooltip";
import DefaultTooltipExample from "./DefaultTooltipExample/DefaultTooltipExample";
import "./tooltip-and-popover.scss";
import TooltipCommonHeader from "./TooltipCommonHeader/TooltipCommonHeader"

const TooltipAndPopover = () => {
    return (
        <div className="main-content app-content mt-0">
            <div className="side-app">
                <div className="main-container container-fluid">
                    <TooltipCommonHeader title="Tooltip and Popover" />

                    <div className="row">
						<div className="col-lg-12">

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card" id="Tooltip">
                                    <div className="card-header border-bottom-0">
                                        <div className="card-title">
                                            Default Tooltip
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="form-label mb-2">
                                            Static Example
                                        </div>
                                        <div className="tooltip-static-demo mb-4 border br-3">
											<div className="row">
                                                <DefaultStaticTooltip text="Tooltip on the top" position="top" />
                                                <DefaultStaticTooltip text="Tooltip on the bottom" position="bottom" />
                                                <DefaultStaticTooltip text="Tooltip on the left" position="start" />
                                                <DefaultStaticTooltip text="Tooltip on the right" position="end" />
                                            </div>
                                        </div>

                                        <div className="form-label mb-2">
                                            Example
                                        </div>
                                        <div className="bg-light p-3 border br-3">
                                            <div className="row text-center">
                                                <DefaultTooltipExample text="Tooltip on top" position="top" />
                                                {/* <DefaultTooltipExample text="Tooltip on bottom" position="bottom" />
                                                <DefaultTooltipExample text="Tooltip on left" position="start" />
                                                <DefaultTooltipExample text="Tooltip on right" position="end" /> */}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TooltipAndPopover;