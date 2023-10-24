import "./about-top-bar-widget.scss";

const AboutTopBarWidget = ({ cardIconColor, icon, header, totalCount }) => {
  return (
    <div className="col-lg-3 col-sm-6 mt-4 mb-4">
    <div className="counter-status">
        <div className={`counter-icon bg-${cardIconColor}-gradient box-shadow-${cardIconColor}`}>
            <img src={icon} alt="" />
        </div>
        <h5 className="mb-2">{header}</h5>
        <h2 className="counter mb-0">{totalCount}</h2>
    </div>
</div>
  )
}

export default AboutTopBarWidget;