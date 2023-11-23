import "./default-static-tooltip.scss"

const DefaultStaticTooltip = ({ text, position }) => {
    return (
        <div class="col-sm-6 col-lg-3">
            <div class={`tooltip bs-tooltip-${position}`} role="tooltip">
                <div class={`tooltip-arrow tooltip-arrow-${position}`}></div>
                <div class="tooltip-inner">
                    {text}
                </div>
            </div>
        </div>
    )
}

export default DefaultStaticTooltip