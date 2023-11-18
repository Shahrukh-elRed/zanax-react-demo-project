import DropdownsCommonHeader from "./DropdownsCommonHeader/DropdownsCommonHeader";
import RoundedButtonDropdown from "./RoundedButtonDropdown/RoundedButtonDropdown";
import SingleButtonDropdown from "./SingleButtonDropdown/SingleButtonDropdown";
import { dropdownItems } from "./data";
import "./dropdowns.scss";

const Dropdowns = () => {
  return (
    <div className="main-content app-content mt-0">
        <div className="side-app">
            <div className="main-container container-fluid">
                <DropdownsCommonHeader title="Dropdowns" />
                <div className="row">

                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Single button dropdowns</h3>
                            </div>
                            <div className="card-body">
                                <div className="text-wrap">
                                    <div className="example d-flex gap-1">
                                        <SingleButtonDropdown buttonText="Action" dropdownHeader="Dropdown" dropdownItems={dropdownItems} 
                                            separatedLinkText="Separated link" separatedLinkAction={() => console.log("Clicked Separated link")} />
                                        <SingleButtonDropdown color="primary" buttonText="Action" dropdownHeader="Dropdown" dropdownItems={dropdownItems} 
                                            separatedLinkText="Separated link" separatedLinkAction={() => console.log("Clicked Separated link")} />
                                        <SingleButtonDropdown color="success" buttonText="Action" dropdownHeader="Dropdown" dropdownItems={dropdownItems} 
                                            separatedLinkText="Separated link" separatedLinkAction={() => console.log("Clicked Separated link")} />
                                        <SingleButtonDropdown color="info" buttonText="Action" dropdownHeader="Dropdown" dropdownItems={dropdownItems} 
                                            separatedLinkText="Separated link" separatedLinkAction={() => console.log("Clicked Separated link")} />
                                        <SingleButtonDropdown color="warning" buttonText="Action" dropdownHeader="Dropdown" dropdownItems={dropdownItems} 
                                            separatedLinkText="Separated link" separatedLinkAction={() => console.log("Clicked Separated link")} />
                                        <SingleButtonDropdown color="danger" buttonText="Action" dropdownHeader="Dropdown" dropdownItems={dropdownItems} 
                                            separatedLinkText="Separated link" separatedLinkAction={() => console.log("Clicked Separated link")} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Rounded button dropdowns</h3>
                            </div>
                            <div className="card-body">
                                <div className="text-wrap">
                                    <div className="example d-flex gap-1">
                                        <RoundedButtonDropdown buttonText="Action" dropdownHeader="Dropdown" dropdownItems={dropdownItems} 
                                            separatedLinkText="Separated link" separatedLinkAction={() => console.log("Clicked Separated link")} />
                                        <RoundedButtonDropdown color="primary" buttonText="Action" dropdownHeader="Dropdown" dropdownItems={dropdownItems} 
                                            separatedLinkText="Separated link" separatedLinkAction={() => console.log("Clicked Separated link")} />
                                        <RoundedButtonDropdown color="success" buttonText="Action" dropdownHeader="Dropdown" dropdownItems={dropdownItems} 
                                            separatedLinkText="Separated link" separatedLinkAction={() => console.log("Clicked Separated link")} />
                                        <RoundedButtonDropdown color="info" buttonText="Action" dropdownHeader="Dropdown" dropdownItems={dropdownItems} 
                                            separatedLinkText="Separated link" separatedLinkAction={() => console.log("Clicked Separated link")} />
                                        <RoundedButtonDropdown color="warning" buttonText="Action" dropdownHeader="Dropdown" dropdownItems={dropdownItems} 
                                            separatedLinkText="Separated link" separatedLinkAction={() => console.log("Clicked Separated link")} />
                                        <RoundedButtonDropdown color="danger" buttonText="Action" dropdownHeader="Dropdown" dropdownItems={dropdownItems} 
                                            separatedLinkText="Separated link" separatedLinkAction={() => console.log("Clicked Separated link")} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Dropdowns;