import "./terms.scss"
import TermsCommonHeader from "./TermsCommonHeader/TermsCommonHeader";
import TermsWideCard from "./TermsWideCard/TermsWideCard";
import TermsHelpfulCard from "./TermsHelpfulCard/TermsHelpfulCard";
import { termsCardData } from "./data";

const Terms = () => {
  return (
    <div className="main-content app-content mt-0">
        <div className="side-app">
            <div className="main-container container-fluid">
                <TermsCommonHeader title="Terms" />
                <div className="row">
                    <div className="col-md-12">
                        {termsCardData.map(item => <TermsWideCard key={item.id} titleText={item.titleText} description={item.description} listData={item.listData} /> )}
                        <TermsHelpfulCard />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Terms;