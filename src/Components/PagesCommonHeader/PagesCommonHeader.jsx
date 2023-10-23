import Icon from "@mdi/react";
import { mdiLogin, mdiPlus } from "@mdi/js";
import { Link } from "react-router-dom";
import "./pages-common-header.scss";

const PagesCommonHeader = () => {
  return (
    <div className="page-header">
    <div>
        <h1 className="page-title">About</h1>
        <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Pages</Link></li>
            <li className="breadcrumb-item active" aria-current="page">About</li>
        </ol>
    </div>
    <div className="ms-auto pageheader-btn">
        <Link to="/" className="btn btn-primary btn-icon text-white me-2">
            <span>
                <Icon path={mdiPlus} size="16px" />
            </span> Add Account
        </Link>
        <Link to="/" className="btn btn-success btn-icon text-white">
            <span>
                <Icon path={mdiLogin} size="16px" />
            </span> Export
        </Link>
    </div>
</div>
  )
}

export default PagesCommonHeader