import ServicesCommonHeader from "./ServicesCommonHeader/ServicesCommonHeader";
import ServicesTopCards from "./ServicesTopCards/ServicesTopCards";
import ServicesMiddleCards from "./ServicesMiddleCards/ServicesMiddleCards";
import ServicesBottomCard from "./ServicesBottomCard/ServicesBottomCard";
import { servicesMiddleCardsData, servicesTopCardsData, ServicesBottomData } from "./data";
import "./services.scss";

const Services = () => {
  const topCardsIcons = [{ icon: "simple-line-icons:people", iconColor: "primary"}, { icon: "teenyicons:clock-outline", iconColor: "danger-gradient" }, 
                         { icon: "fa:building-o", iconColor: "success" }, { icon: "simple-line-icons:action-redo", iconColor: "warning-gradient" }];

  const middleCardIcons = [{icon: "fa:globe", iconColor: "primary"}, {icon: "fa:building-o", iconColor: "warning"}, {icon: "fa:file-word-o", iconColor: "pink"}, 
                           {icon:"fa:camera", iconColor: "danger"}, {icon: "fa:pencil-square-o", iconColor:"purple"}, {icon: "fa:eercast", iconColor: "success"}];

  const progressBarColors = ["purple", "danger", "warning", "primary", "pink", "success"];
 
  return (
    <div className="main-content app-content mt-0">
        <div className="side-app">
            <div className="main-container container-fluid">
                <ServicesCommonHeader title="Services" />
                <ServicesTopCards servicesTopCardsData={servicesTopCardsData} topCardsIcons={topCardsIcons} />
                <ServicesMiddleCards servicesMiddleCardsData={servicesMiddleCardsData} middleCardIcons={middleCardIcons} />
                <ServicesBottomCard 
                    title="Our services"
                    topText="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text" 
                    ServicesBottomData={ServicesBottomData} progressBarColors={progressBarColors} />
            </div>
        </div>
    </div>
  )
}

export default Services;