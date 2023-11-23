import { useState } from "react";
import "./tabs-style-two.scss";

const TabsStyleTwo = ({ tabsStyleData }) => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div>
            <div className="tab-menu-heading">
                <div className="tabs-menu ">
                    <ul className="nav panel-tabs">
                        {tabsStyleData?.map((item, index) => 
                            <li key={item?.id} onClick={() => setActiveTab(index)}>
                                <div className={`tabs-top-style-two ${activeTab === index ? "active-tab-style-two" : ""}`}  data-bs-toggle="tab">{item?.tabTitle}</div>
                            </li>)}
                    </ul>
                </div>
            </div>
            <div className="panel-body-tabs tabs-menu-body">
                <div className="tab-content">
                {tabsStyleData?.map((item, index) =>
                        <div key={item?.id} className={`tab-pane ${activeTab === index ? "active" : ""}`} id="tab1">
                            <p>{item?.tabContentOne}</p>
                            <p className="tabs-para-2">{item?.tabContentTwo}</p>
                        </div>
                    )} 
                </div>
            </div>
        </div>
    )
}

export default TabsStyleTwo;