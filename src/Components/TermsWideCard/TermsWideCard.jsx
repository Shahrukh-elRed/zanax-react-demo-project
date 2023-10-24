import "./terms-wide-card.scss";
import ChevronDoubleRight from "../../assets/svg/chevron-double-right.svg"

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
                      <img src={ChevronDoubleRight} height="14px" alt="" />
                      {item}
                    </li>
                </ul>) : null}
        </div>
    </div>
</div>
  )
}

export default TermsWideCard;