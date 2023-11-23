import DefaultStaticTooltip from "./DefaultStaticTooltip/DefaultStaticTooltip";
import "./tooltip-and-popover.scss";
import TooltipCommonHeader from "./TooltipCommonHeader/TooltipCommonHeader"

const TooltipAndPopover = () => {
    return (
        <div className="main-content app-content mt-0">
            <div className="side-app">
                <div className="main-container container-fluid">
                    <TooltipCommonHeader title="Tooltip and Popover" />

                    <div class="row">
						<div class="col-lg-12">

                        <div class="row">
                            <div class="col-lg-12">
                                <div class="card" id="Tooltip">
                                    <div class="card-header border-bottom-0">
                                        <div class="card-title">
                                            Default Tooltip
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <div class="form-label mb-2">
                                            Static Example
                                        </div>
                                        <div class="tooltip-static-demo mb-4 border br-3">
											<div class="row ">
                                                <DefaultStaticTooltip text="Tooltip on the top" position="top" />
                                                <DefaultStaticTooltip text="Tooltip on the top" position="bottom" />
                                                <DefaultStaticTooltip text="Tooltip on the top" position="start" />
                                                <DefaultStaticTooltip text="Tooltip on the top" position="end" />
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