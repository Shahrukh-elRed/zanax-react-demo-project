import { Icon } from "@iconify/react";
import "./services-top-cards.scss";

const ServicesTopCards = ({ topCardsIcons, servicesTopCardsData }) => {

    return (
        <div className="row">
            {servicesTopCardsData.map((item, index) => 
                <div key={item.id} className="col-sm-12 col-md-12 col-lg-6 col-xl-3 ">
                    <div className="card service">
                        <div className="card-body">
                            <div className="item-box text-center">
                                <div className={`text-center mb-4 text-${topCardsIcons[index].iconColor}`}>
                                    <Icon icon={topCardsIcons[index].icon} width="35px" height="35px" />
                                </div> 
                                <div className="item-box-wrap">
                                    <h5 className="mb-2">{item.headerText}</h5>
                                    <p className="text-muted mb-0 description-text">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            )}
        </div>
  )
}

export default ServicesTopCards;