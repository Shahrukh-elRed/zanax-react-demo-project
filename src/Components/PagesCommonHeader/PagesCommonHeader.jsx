import { Link } from "react-router-dom";
import "./pages-common-header.scss";
import AddIcon from "../../assets/svg/add-icon.svg";
import LoginIcon from "../../assets/svg/login-icon.svg";
import { useLocation } from 'react-router-dom';

const PagesCommonHeader = ({ title }) => {
    const location = useLocation();
    const breadcrumbs = location.pathname.split("/");

  return (
    <div className="page-header">
    <div>
        <h1 className="page-title">{title}</h1>
        <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/pages">Pages</Link></li>
            <li className="text-capitalize breadcrumb-item active" aria-current="page">{breadcrumbs[breadcrumbs.length - 1]}</li>
        </ol>
    </div>
    <div className="ms-auto pageheader-btn">
        <button onClick={() => console.log("add account")} className="btn btn-primary btn-icon text-white me-2">
            <span>
                <img src={AddIcon} height="16px" alt="" />
            </span> Add Account
        </button>
        <button onClick={() => console.log("export")} className="btn btn-success btn-icon text-white">
            <span>
                <img src={LoginIcon} height="16px" alt="" />
            </span> Export
        </button>
    </div>
</div>
  )
}

export default PagesCommonHeader;