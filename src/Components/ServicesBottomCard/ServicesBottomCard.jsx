import "./services-bottom-card.scss";

const ServicesBottomCard = ({ title, topText, ServicesBottomData }) => {
  return (
    <div className="row">
        <div className="col-md-12 col-lg-12">
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">{title}</h3>
                </div>
                <div className="card-body">
                    <div className="text-wrap">
                        <p>{topText}</p>
                        <div className="row mt-3">
                            {ServicesBottomData.map(item => 
                                <div key={item.id} className="col-md-6">
                                    <label>{item.serviceLabelText}</label>
                                    <div className="progress progress-md mb-3">
                                        <div className={`progress-bar bg-${item.progressBarColor}`} style={{ width: `${item.progressValue}%` }}>{item.progressValue}%</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServicesBottomCard;