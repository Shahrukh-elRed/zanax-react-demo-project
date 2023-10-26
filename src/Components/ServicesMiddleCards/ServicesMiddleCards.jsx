import { Icon } from "@iconify/react";
import "./services-middle-cards.scss";

const ServicesMiddleCards = ({ servicesMiddleCardsData, middleCardIcons }) => {
  return (
    <div className="row">
        {servicesMiddleCardsData.map((item, index) => 
            <div key={item.id} className="col-lg-6 col-md-6">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-xl-2 col-lg-3 feature">
                                <div className={`fa-stack fa-lg fa-1x border bg-${middleCardIcons[index].iconColor} mb-3`}>
                                    <div className="middle-icon-div">
                                        <Icon icon={middleCardIcons[index].icon} color="#fff" />
                                    </div>                                
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