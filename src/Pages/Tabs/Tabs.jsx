import "./tabs.scss";
import TabsCommonHeader from './TabsCommonHeader/TabsCommonHeader';


const Tabs = () => {
    return (
        <div className="main-content app-content mt-0">
            <div className="side-app">
                <div className="main-container container-fluid">
                    <TabsCommonHeader title="Tabs" />
                </div>
            </div>
        </div>
    )
}

export default Tabs;