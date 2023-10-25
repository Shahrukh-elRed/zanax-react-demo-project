import "./about-company.scss";
import PagesCommonHeader from "../../Components/PagesCommonHeader/PagesCommonHeader";
import AboutCompanyCard from "../../Components/AboutCompanyCard/AboutCompanyCard";
import { aboutCompanyMiddleCardData, aboutTopBarData } from "../../data"
import ImageAboutCards from "../../Components/ImageAboutCards/ImageAboutCards";
import { ImageCardData } from "../../data"
import AboutTopBarWidget from "../../Components/AboutTopBarWidget/AboutTopBarWidget";

const AboutCompany = () => {
  return (
    <div className="main-content app-content mt-0">
      <div className="side-app">
        <div className="main-container container-fluid">
            <PagesCommonHeader title="About" />
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body p-3 text-dark">
                            <div className="statistics-info">
                                <div className="row text-center">
                                    {aboutTopBarData.map(item => 
                                      <AboutTopBarWidget key={item.id} cardIconColor={item.cardIconColor} icon={item.iconImageUrl} header={item.header} totalCount={item.totalCount} /> )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                {aboutCompanyMiddleCardData.map(item => 
                  <AboutCompanyCard key={item.id} title={item.title} subTitle={item.subTitle} description={item.description} viewMoreLink={item.viewMoreLink} /> )}
            </div>
            <div className="row">
                {ImageCardData.map(item => 
                  <ImageAboutCards key={item.id} imageUrl={item.imageUrl} header={item.header} description={item.description} link={item.link} btnColor={item.btnColor} /> )}
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutCompany;