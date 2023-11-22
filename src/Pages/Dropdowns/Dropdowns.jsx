import DropdownsCommonHeader from "./DropdownsCommonHeader/DropdownsCommonHeader";
import DropupVariation from "./DropupVariation/DropupVariation";
import RoundedButtonDropdown from "./RoundedButtonDropdown/RoundedButtonDropdown";
import RoundedOutlineButtonDropdown from "./RoundedOutlineButtonDropdown/RoundedOutlineButtonDropdown";
import RoundedSplitButtonDropdown from "./RoundedSplitButtonDropdown/RoundedSplitButtonDropdown";
import RoundedSplitOutlineButtonDropdown from "./RoundedSplitOutlineButtonDropdown/RoundedSplitOutlineButtonDropdown";
import SingleButtonDropdown from "./SingleButtonDropdown/SingleButtonDropdown";
import SingleSquareOutlineButtonDropdown from "./SingleSquareOutlineButtonDropdown/SingleSquareOutlineButtonDropdown";
import SocialIconButton from "./SocialIconButton/SocialIconButton";
import SplitButtonDropdown from "./SplitButtonDropdown/SplitButtonDropdown";
import SplitSquareOutlineButtonDropdown from "./SplitSquareOutlineButtonDropdown/SplitSquareOutlineButtonDropdown";
import { dropUpItems, dropdownItems } from "./data";
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

                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Split button dropdowns</h3>
                            </div>
                            <div className="card-body">
                                <div className="text-wrap">
                                    <div className="example d-flex gap-1">
                                        <SplitButtonDropdown leftButtonAction={() => console.log("Clicked Action")} buttonText="Action" dropdownHeader="Dropdown" dropdownItems={dropdownItems} 
                                            separatedLinkText="Separated link" separatedLinkAction={() => console.log("Clicked Separated link")} />
                                        <SplitButtonDropdown color="primary" leftButtonAction={() => console.log("Clicked Action")} buttonText="Action" dropdownHeader="Dropdown" dropdownItems={dropdownItems} 
                                            separatedLinkText="Separated link" separatedLinkAction={() => console.log("Clicked Separated link")} />
                                        <SplitButtonDropdown color="success" leftButtonAction={() => console.log("Clicked Action")} buttonText="Action" dropdownHeader="Dropdown" dropdownItems={dropdownItems} 
                                            separatedLinkText="Separated link" separatedLinkAction={() => console.log("Clicked Separated link")} />
                                        <SplitButtonDropdown color="info" leftButtonAction={() => console.log("Clicked Action")} buttonText="Action" dropdownHeader="Dropdown" dropdownItems={dropdownItems} 
                                            separatedLinkText="Separated link" separatedLinkAction={() => console.log("Clicked Separated link")} />
                                        <SplitButtonDropdown color="warning" leftButtonAction={() => console.log("Clicked Action")} buttonText="Action" dropdownHeader="Dropdown" dropdownItems={dropdownItems} 
                                            separatedLinkText="Separated link" separatedLinkAction={() => console.log("Clicked Separated link")} />
                                        <SplitButtonDropdown color="danger" leftButtonAction={() => console.log("Clicked Action")} buttonText="Action" dropdownHeader="Dropdown" dropdownItems={dropdownItems} 
                                            separatedLinkText="Separated link" separatedLinkAction={() => console.log("Clicked Separated link")} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Rounded Split button dropdowns</h3>
                            </div>
                            <div className="card-body">
                                <div className="text-wrap">
                                    <div className="example d-flex gap-1">
                                        <RoundedSplitButtonDropdown leftButtonAction={() => console.log("Clicked Action")} buttonText="Action" dropdownHeader="Dropdown" dropdownItems={dropdownItems} 
                                            separatedLinkText="Separated link" separatedLinkAction={() => console.log("Clicked Separated link")} />
                                        <RoundedSplitButtonDropdown color="primary" leftButtonAction={() => console.log("Clicked Action")} buttonText="Action" dropdownHeader="Dropdown" dropdownItems={dropdownItems} 
                                            separatedLinkText="Separated link" separatedLinkAction={() => console.log("Clicked Separated link")} />
                                        <RoundedSplitButtonDropdown color="success" leftButtonAction={() => console.log("Clicked Action")} buttonText="Action" dropdownHeader="Dropdown" dropdownItems={dropdownItems} 
                                            separatedLinkText="Separated link" separatedLinkAction={() => console.log("Clicked Separated link")} />
                                        <RoundedSplitButtonDropdown color="info" leftButtonAction={() => console.log("Clicked Action")} buttonText="Action" dropdownHeader="Dropdown" dropdownItems={dropdownItems} 
                                            separatedLinkText="Separated link" separatedLinkAction={() => console.log("Clicked Separated link")} />
                                        <RoundedSplitButtonDropdown color="warning" leftButtonAction={() => console.log("Clicked Action")} buttonText="Action" dropdownHeader="Dropdown" dropdownItems={dropdownItems} 
                                            separatedLinkText="Separated link" separatedLinkAction={() => console.log("Clicked Separated link")} />
                                        <RoundedSplitButtonDropdown color="danger" leftButtonAction={() => console.log("Clicked Action")} buttonText="Action" dropdownHeader="Dropdown" dropdownItems={dropdownItems} 
                                            separatedLinkText="Separated link" separatedLinkAction={() => console.log("Clicked Separated link")} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Single Square outline button dropdowns</h3>
                            </div>
                            <div className="card-body">
                                <div className="text-wrap">
                                    <div className="example d-flex gap-1">
                                        <SingleSquareOutlineButtonDropdown color="primary" buttonText="Action" dropdownHeader="Dropdown" dropdownItems={dropdownItems} 
                                            separatedLinkText="Separated link" separatedLinkAction={() => console.log("Clicked Separated link")} />
                                        <SingleSquareOutlineButtonDropdown color="success" buttonText="Action" dropdownHeader="Dropdown" dropdownItems={dropdownItems} 
                                            separatedLinkText="Separated link" separatedLinkAction={() => console.log("Clicked Separated link")} />
                                        <SingleSquareOutlineButtonDropdown color="info" buttonText="Action" dropdownHeader="Dropdown" dropdownItems={dropdownItems} 
                                            separatedLinkText="Separated link" separatedLinkAction={() => console.log("Clicked Separated link")} />
                                        <SingleSquareOutlineButtonDropdown color="warning" buttonText="Action" dropdownHeader="Dropdown" dropdownItems={dropdownItems} 
                                            separatedLinkText="Separated link" separatedLinkAction={() => console.log("Clicked Separated link")} />
                                        <SingleSquareOutlineButtonDropdown color="danger" buttonText="Action" dropdownHeader="Dropdown" dropdownItems={dropdownItems} 
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
                                        <RoundedOutlineButtonDropdown color="primary" buttonText="Action" dropdownHeader="Dropdown" dropdownItems={dropdownItems} 
                                            separatedLinkText="Separated link" separatedLinkAction={() => console.log("Clicked Separated link")} />
                                        <RoundedOutlineButtonDropdown color="success" buttonText="Action" dropdownHeader="Dropdown" dropdownItems={dropdownItems} 
                                            separatedLinkText="Separated link" separatedLinkAction={() => console.log("Clicked Separated link")} />
                                        <RoundedOutlineButtonDropdown color="info" buttonText="Action" dropdownHeader="Dropdown" dropdownItems={dropdownItems} 
                                            separatedLinkText="Separated link" separatedLinkAction={() => console.log("Clicked Separated link")} />
                                        <RoundedOutlineButtonDropdown color="warning" buttonText="Action" dropdownHeader="Dropdown" dropdownItems={dropdownItems} 
                                            separatedLinkText="Separated link" separatedLinkAction={() => console.log("Clicked Separated link")} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Split button dropdowns</h3>
                            </div>
                            <div className="card-body">
                                <div className="text-wrap">
                                    <div className="example d-flex gap-1">
                                        <SplitSquareOutlineButtonDropdown color="primary" leftButtonAction={() => console.log("Clicked Action")} buttonText="Action" dropdownHeader="Dropdown" dropdownItems={dropdownItems} 
                                            separatedLinkText="Separated link" separatedLinkAction={() => console.log("Clicked Separated link")} />
                                        <SplitSquareOutlineButtonDropdown color="success" leftButtonAction={() => console.log("Clicked Action")} buttonText="Action" dropdownHeader="Dropdown" dropdownItems={dropdownItems} 
                                            separatedLinkText="Separated link" separatedLinkAction={() => console.log("Clicked Separated link")} />
                                        <SplitSquareOutlineButtonDropdown color="info" leftButtonAction={() => console.log("Clicked Action")} buttonText="Action" dropdownHeader="Dropdown" dropdownItems={dropdownItems} 
                                            separatedLinkText="Separated link" separatedLinkAction={() => console.log("Clicked Separated link")} />
                                        <SplitSquareOutlineButtonDropdown color="warning" leftButtonAction={() => console.log("Clicked Action")} buttonText="Action" dropdownHeader="Dropdown" dropdownItems={dropdownItems} 
                                            separatedLinkText="Separated link" separatedLinkAction={() => console.log("Clicked Separated link")} />
                                        <SplitSquareOutlineButtonDropdown color="danger" leftButtonAction={() => console.log("Clicked Action")} buttonText="Action" dropdownHeader="Dropdown" dropdownItems={dropdownItems} 
                                            separatedLinkText="Separated link" separatedLinkAction={() => console.log("Clicked Separated link")} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Rounded Split button dropdowns</h3>
                            </div>
                            <div className="card-body">
                                <div className="text-wrap">
                                    <div className="example d-flex gap-1">
                                        <RoundedSplitOutlineButtonDropdown color="primary" leftButtonAction={() => console.log("Clicked Action")} buttonText="Action" dropdownHeader="Dropdown" dropdownItems={dropdownItems} 
                                            separatedLinkText="Separated link" separatedLinkAction={() => console.log("Clicked Separated link")} />
                                        <RoundedSplitOutlineButtonDropdown color="success" leftButtonAction={() => console.log("Clicked Action")} buttonText="Action" dropdownHeader="Dropdown" dropdownItems={dropdownItems} 
                                            separatedLinkText="Separated link" separatedLinkAction={() => console.log("Clicked Separated link")} />
                                        <RoundedSplitOutlineButtonDropdown color="info" leftButtonAction={() => console.log("Clicked Action")} buttonText="Action" dropdownHeader="Dropdown" dropdownItems={dropdownItems} 
                                            separatedLinkText="Separated link" separatedLinkAction={() => console.log("Clicked Separated link")} />
                                        <RoundedSplitOutlineButtonDropdown color="warning" leftButtonAction={() => console.log("Clicked Action")} buttonText="Action" dropdownHeader="Dropdown" dropdownItems={dropdownItems} 
                                            separatedLinkText="Separated link" separatedLinkAction={() => console.log("Clicked Separated link")} />
                                        <RoundedSplitOutlineButtonDropdown color="danger" leftButtonAction={() => console.log("Clicked Action")} buttonText="Action" dropdownHeader="Dropdown" dropdownItems={dropdownItems} 
                                            separatedLinkText="Separated link" separatedLinkAction={() => console.log("Clicked Separated link")} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Dropup variation</h3>
                            </div>
                            <div className="card-body">
                                <div className="example d-flex gap-1">
                                    <DropupVariation color="primary" buttonText="Dropup1" dropUpItems={dropUpItems} 
                                        separatedLinkText="About us" separatedLinkAction={() => console.log("clicked about us")} />
                                    <DropupVariation color="info" buttonText="Dropup1" dropUpItems={dropUpItems} 
                                        separatedLinkText="About us" separatedLinkAction={() => console.log("clicked about us")} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">social Icon</h3>
                            </div>
                            <div className="card-body">
                                <div className="example">
                                    <div className="p-0 d-flex gap-1">
                                        <SocialIconButton socialIconType="facebook" />
                                        <SocialIconButton socialIconType="twitter" />
                                        <SocialIconButton socialIconType="google" />
                                        <SocialIconButton socialIconType="youtube" />
                                        <SocialIconButton socialIconType="vimeo" />
                                        <SocialIconButton socialIconType="github" />
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