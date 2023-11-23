import { Icon } from "@iconify/react";
import { Link, useLocation } from "react-router-dom";
import "./tabs-common-header.scss";

const TabsCommonHeader = ({title}) => {
    const location = useLocation();
    const breadcrumbs = location.pathname.split("/");

    return (
        <div className="page-header">
            <div>
                <h1 className="page-title">{title}</h1>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/advanced-elements">Advanced Elements</Link></li>
                    <li className="text-capitalize breadcrumb-item active" aria-current="page">{breadcrumbs[breadcrumbs.length - 1]}</li>
                </ol>
            </div>
            <div className="ms-auto pageheader-btn d-flex">
                <button onClick={() => console.log("add account")} className="btn btn-primary btn-icon text-white me-2">
                    <span>
                        <Icon icon="mdi:plus" color="#fff" />
                    </span> Add Account
                </button>
                <button onClick={() => console.log("export")} className="btn btn-success btn-icon text-white">
                    <span>
                        <Icon icon="fe:login" color="#fff" />
                    </span> Export
                </button>
            </div>
        </div>
    )
}

export default TabsCommonHeader;