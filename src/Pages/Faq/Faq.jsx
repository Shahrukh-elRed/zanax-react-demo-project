import FaqAccordion from "../../Components/FaqAccordion/FaqAccordion";
import FaqForm from "../../Components/FaqForm/FaqForm";
import PagesCommonHeader from "../../Components/PagesCommonHeader/PagesCommonHeader";
import { faqAccordionData } from "../../data";
import "./faq.scss";

const Faq = () => {
    return (
      <div className="main-content app-content mt-0">
          <div className="side-app">
              <div className="main-container container-fluid">
                  <PagesCommonHeader title="Faq" />
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