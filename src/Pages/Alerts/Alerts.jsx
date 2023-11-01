import "./alerts.scss";
import AlertsCommonHeader from "./AlertsCommonHeader/AlertsCommonHeader";
import DefaultAlert from "./DefaultAlert/DefaultAlert";
import LinksInAlert from "./LinksInAlert/LinksInAlert";

const Alerts = () => {
    return (
        <div className="main-content app-content mt-0">
            <div className="side-app">
                <div className="main-container container-fluid">
                    <AlertsCommonHeader title="Alerts" />
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Default alerts</h3>
                                </div>
                                <div className="card-body">
                                    <div className="text-wrap">
                                        <div className="example">
                                            <DefaultAlert color="primary" text="Primary alert—At vero eos et accusamus praesentium!" />
                                            <DefaultAlert color="secondary" text="Secondary alert—At vero eos et accusamus praesentium!" />
                                            <DefaultAlert color="success" text="Success alert—At vero eos et accusamus praesentium!" />
                                            <DefaultAlert color="warning " text="Warning alert—At vero eos et accusamus praesentium!" />
                                            <DefaultAlert color="info" text="Info alert—At vero eos et accusamus praesentium!" />
                                            <DefaultAlert color="danger" text="Danger alert—At vero eos et accusamus praesentium!" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Links in alerts</h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="text-wrap">
                                            <div className="example">
                                                <LinksInAlert color="success" link="/" exclaimText="Well done!" text="You successfully read" linkText="this important alert message." />
                                                <LinksInAlert color="info" link="/" exclaimText="Well done!" text="You successfully read" linkText="this important alert message." />
                                                <LinksInAlert color="warning" link="/" exclaimText="Warning!" text="Better check yourself, you're" linkText="not looking too good." />
                                                <LinksInAlert color="danger" link="/" exclaimText="Oh snap!" text="Change a few things up" linkText="and try submitting again." />
                                            </div>
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

export default Alerts;