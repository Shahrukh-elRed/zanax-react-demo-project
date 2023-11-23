import "./tabs.scss";
import TabsCommonHeader from './TabsCommonHeader/TabsCommonHeader';
import TabsStyleOne from "./TabsStyleOne/TabsStyleOne";
import { tabsStyleData, tabsRightSideData } from "./data";
import TabsStyleTwo from "./TabsStyleTwo/TabsStyleTwo";
import TabsRightSide from "./TabsRightSide/TabsRightSide";

const Tabs = () => {
    return (
        <div className="main-content app-content mt-0">
            <div className="side-app">
                <div className="main-container container-fluid">
                    <TabsCommonHeader title="Tabs" />

                    <div className="row">
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Tabs style</h3>
                                </div>
                                <div className="card-body p-6">
                                    <TabsStyleOne tabsStyleData={tabsStyleData} />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Tabs style</h3>
                                </div>
                                <div className="card-body p-6">
                                    <TabsStyleTwo tabsStyleData={tabsStyleData} />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Tabs on right side</h3>
                                </div>
                                <div className="card-body p-6">
                                    <TabsRightSide tabsRightSideData={tabsRightSideData} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tabs;