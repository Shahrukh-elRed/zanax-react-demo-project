import { Icon } from "@iconify/react";
import "./card-with-search-form.scss";

const CardWithSearchForm = ({ title, placeholderText, bodyText}) => {
  return (
    <div className="col-md-12  col-xl-6">
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">{title}</h3>
                <div className="card-options">
                <form>
                    <div className="input-group">
                        <input type="text" className="form-control form-control-sm" placeholder={placeholderText} name="s" />
                        <span className="input-group-btn ms-0">
                            <button className="btn btn-sm btn-primary" type="submit">
                                <span className="text-white"><Icon icon="fe:search" height="11px" /></span>
                            </button>
                        </span>
                    </div>
                </form>
                </div>
            </div>
            <div className="card-body">{bodyText}</div>
        </div>
    </div>
  )
}

export default CardWithSearchForm;