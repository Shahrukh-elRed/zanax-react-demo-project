import DefaultStaticTooltip from "./DefaultStaticTooltip/DefaultStaticTooltip";
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
                                                <DefaultStaticTooltip text="Tooltip on the top" position="bottom" />
                                                <DefaultStaticTooltip text="Tooltip on the top" position="start" />
                                                <DefaultStaticTooltip text="Tooltip on the top" position="end" />
                                            </div>
                                        </div>

                                        <div className="form-label mb-2">
                                            Example
                                        </div>
                                        <div className="bg-light p-3 border br-3">
                                            <div className="row text-center">
                                                <div className="col-sm-6 col-lg-3 mt-2 mb-2">
                                                    <button className="btn btn-primary" data-bs-placement="top" data-bs-toggle="tooltip" title="Tooltip on top" >Hover me</button>
                                                </div>
                                                <div className="col-sm-6 col-lg-3  mt-2 mb-2">
                                                    <button className="btn btn-primary" data-bs-placement="bottom" data-bs-toggle="tooltip" title="Tooltip on Bottom" >Hover me</button>
                                                </div>
                                                <div className="col-sm-6 col-lg-3  mt-2 mb-2">
                                                    <button className="btn btn-primary" data-bs-placement="left" data-bs-toggle="tooltip" title="Tooltip on left" >Hover me</button>
                                                </div>
                                                <div className="col-sm-6 col-lg-3  mt-2 mb-2">
                                                    <button className="btn btn-primary" data-bs-placement="right" data-bs-toggle="tooltip" title="Tooltip on right" >Hover me</button>
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
        </div>
    )
}

export default TooltipAndPopover;