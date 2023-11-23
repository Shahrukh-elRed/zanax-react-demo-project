import { useState } from "react";
import "./tabs-style-one.scss";

const TabsStyleOne = ({ tabsStyleData }) => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div>
            <div className="tab-menu-heading">
                <div className="tabs-menu ">
                    <ul className="nav panel-tabs">
                        {tabsStyleData?.map((item, index) => 
                            <li key={item?.id} onClick={() => setActiveTab(index)}>
                                <div className={`tabs-top ${activeTab === index ? "active-tab" : ""}`}  data-bs-toggle="tab">{item?.tabTitle}</div>
                            </li>)}
                    </ul>
                </div>
            </div>
            <div className="panel-bod-tabs tabs-menu-body">
                <div className="tab-content">
                {tabsStyleData?.map((item, index) =>
                        <div key={item?.id} className={`tab-pane ${activeTab === index ? "active" : ""}`} id="tab1">
                            <p>{item?.tabContentOne}</p>
                            <p>{item?.tabContentTwo}</p>
                        </div>
                    )} 
                </div>
            </div>
        </div>
    )
}

export default TabsStyleOne;