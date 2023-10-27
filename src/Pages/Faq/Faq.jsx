import FaqAccordion from "./FaqAccordion/FaqAccordion";
import FaqForm from "./FaqForm/FaqForm";
import FaqCommonHeader from "./FaqCommonHeader/FaqCommonHeader";
import { faqAccordionData } from "./data";
import "./faq.scss";

const Faq = () => {
    return (
      <div className="main-content app-content mt-0">
          <div className="side-app">
              <div className="main-container container-fluid">
                  <FaqCommonHeader title="Faq" />
                    <div className="row ">
                      <div className="col-md-12">
                        <FaqAccordion title="Faqs" data={faqAccordionData} />
                        <FaqForm />
                      </div>
                    </div>
              </div>
          </div>
      </div>
    )
}

export default Faq;