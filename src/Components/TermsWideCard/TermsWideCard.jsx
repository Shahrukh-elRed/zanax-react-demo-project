import "./terms-wide-card.scss";
import { Icon } from "@iconify/react";

const TermsWideCard = ({ titleText, description, listData }) => {
  return (
    <div className="col-md-12">
    <div className="card">
        <div className="card-body">
            <h4><b>{titleText}</b></h4>
            <div className="paragraph">{description}</div>
            {listData.length !== 0 ?  listData.map((item, index) => 
                <ul key={index} className="arrow-list">
                    <li className="list-arrow-item">             
                      <Icon icon="mdi:chevron-double-right" width="14px" height="14px" />
                      {item}
                    </li>
                </ul>) : null}
        </div>
    </div>
</div>
  )
}

export default TermsWideCard;