import { useState } from "react";
import "./tabs-right-side.scss";

const TabsRightSide = ({ tabsRightSideData }) => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className="tab_wrapper">
            <ul className="tab_list">
                {tabsRightSideData?.map((item, index) => <li key={item?.id} onClick={() => setActiveTab(index)} 
                    className={`tab_list_item ${activeTab === index ? "active_tab" : ""}`}>{item?.tabTitle}
                </li>)}
            </ul>

            <div className="content_wrapper">
                {tabsRightSideData?.map((item, index) => 
                    <div key={item?.id} className={`tab_content ${activeTab === index ? "active_content" : "inactive_content"}`}>
                        {item?.tabContent}
                    </div>)}
            </div>
        </div>
    )
}

export default TabsRightSide;