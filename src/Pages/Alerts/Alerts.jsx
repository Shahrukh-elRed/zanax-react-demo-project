import "./alerts.scss";
import AlertsCommonHeader from "./AlertsCommonHeader/AlertsCommonHeader";
import AlertWithAvatar from "./AlertWithAvatar/AlertWithAvatar";
import AlertWithIcon from "./AlertWithIcon/AlertWithIcon";
import DefaultAlert from "./DefaultAlert/DefaultAlert";
import LinksInAlert from "./LinksInAlert/LinksInAlert";
import DummyImage from "./assets/images/dummy.jpg";
import AlertsWithIcons from "./AlertsWithIcons/AlertsWithIcons";
import AlertsWithIconsDismissing from "./AlertsWithIconsDismissing/AlertsWithIconsDismissing";

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

                        <div class="row">
                            <div class="col-lg-12">
                                <div class="card">
                                    <div class="card-header">
                                        <h3 class="card-title">Alert with icon</h3>
                                    </div>
                                    <div class="card-body">
                                        <div class="text-wrap">
                                            <p>Add <code class="highlighter-rouge">.alert-icon</code> class.</p>
                                            <div class="example">
                                                <AlertWithIcon icon="fa:check-circle-o" color="success" text="Well done! You successfully read this important alert message." />
                                                <AlertWithIcon icon="fa:bell-o" color="info" text="Heads up! This alert needs your attention, but it's not super important." />
                                                <AlertWithIcon icon="fa:exclamation" color="warning" text="Warning! Better check yourself, you're not looking too good." />
                                                <AlertWithIcon icon="fa:frown-o" color="danger" text="Oh snap!Change a few things up and try submitting again." />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="card">
                                    <div class="card-header">
                                        <h3 class="card-title">Alert with avatar</h3>
                                    </div>
                                    <div class="card-body">
                                        <div class="text-wrap">
                                            <div class="example">
                                                <AlertWithAvatar avatarImage={DummyImage} color="primary" 
                                                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
                                                <AlertWithAvatar avatarImage={DummyImage} color="success" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
								<div class="col-xl-12">
									<div class="card">
										<div class="card-header">
											<h3 class="card-title">Alerts With Icons</h3>
										</div>
										<div class="card-body">
											<div class="text-wrap">
												<div class="example">
                                                <AlertsWithIcons icon="material-symbols:download" color="default" strongText="Default!"
                                                    text="This is a warning alert—check it out that has an icon too!" />
                                                <AlertsWithIcons icon="feather:check-square" color="primary" strongText="Primary!"
                                                    text="This is a warning alert—check it out that has an icon too!" />
                                                <AlertsWithIcons icon="feather:thumbs-up" color="success" strongText="Success!"
                                                    text="This is a warning alert—check it out that has an icon too!" />
                                                <AlertsWithIcons icon="feather:bell" color="info" strongText="Info!"
                                                    text="This is a warning alert—check it out that has an icon too!" />
                                                <AlertsWithIcons icon="fe:info" color="warning" strongText="Warning!"
                                                    text="This is a warning alert—check it out that has an icon too!" />
                                                <AlertsWithIcons icon="feather:slash" color="danger" strongText="Danger!"
                                                    text="This is a warning alert—check it out that has an icon too!" />
												</div>
											</div>
										</div>
									</div>
									<div class="card">
										<div class="card-header">
											<h3 class=" card-title mb-0">Alerts With Icons Dismissing</h3>
										</div>
										<div class="card-body">
											<div class="text-wrap">
												<div class="example">
                                                <AlertsWithIconsDismissing color="default" strongText="Default!" text="This is a default alert—check it out!" icon="material-symbols:download" />
                                                <AlertsWithIconsDismissing color="primary" strongText="Primary!" text="This is a default alert—check it out!" icon="feather:check-square" />
                                                <AlertsWithIconsDismissing color="success" strongText="Success!" text="This is a default alert—check it out!" icon="feather:thumbs-up" />
                                                <AlertsWithIconsDismissing color="warning" strongText="Warning!" text="This is a default alert—check it out!" icon="fe:info" />
                                                <AlertsWithIconsDismissing color="info" strongText="Info!" text="This is a default alert—check it out!" icon="feather:bell" />
                                                <AlertsWithIconsDismissing color="danger" strongText="Danger!" text="This is a default alert—check it out!" icon="feather:slash" />
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