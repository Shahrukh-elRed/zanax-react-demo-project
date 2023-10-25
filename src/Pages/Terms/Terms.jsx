import "./terms.scss"
import PagesCommonHeader from "../../Components/PagesCommonHeader/PagesCommonHeader";
import TermsWideCard from "../../Components/TermsWideCard/TermsWideCard";
import { termsCardData } from "../../data";
import TermsHelpfulCard from "../../Components/TermsHelpfulCard/TermsHelpfulCard";

const Terms = () => {
  return (
    <div className="main-content app-content mt-0">
        <div className="side-app">
            <div className="main-container container-fluid">
                <PagesCommonHeader title="Terms" />
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