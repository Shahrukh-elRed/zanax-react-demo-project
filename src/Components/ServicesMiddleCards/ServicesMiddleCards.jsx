import "./services-middle-cards.scss";

const ServicesMiddleCards = ({ servicesMiddleCardsData }) => {
  return (
    <div className="row">
        {servicesMiddleCardsData.map(item => 
            <div key={item.id} className="col-lg-6 col-md-6">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-xl-2 col-lg-3 feature">
                                <div className={`fa-stack fa-lg fa-1x border bg-${item.iconCardColor} mb-3`}>
                                    <i className="fa fa-globe fa-stack-1x text-white"></i>
                                </div>
                            </div>
                            <div className="col-xl-10 col-lg-9">
                                <div className="mt-1">
                                    <h4 className="fw-semibold">{item.title}</h4>
                                    <p className="mb-0 description-text-middle">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}

export default ServicesMiddleCards;