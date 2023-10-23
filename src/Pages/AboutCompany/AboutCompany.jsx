import { Link } from "react-router-dom";
import "./about-company.scss";
import PagesCommonHeader from "../../Components/PagesCommonHeader/PagesCommonHeader";
import CardImage from "../../assets/images/dummy.jpg";
import PeopleIcon from "../../assets/svg/people-icon.svg";
import RocketIcon from "../../assets/svg/rocket-icon.svg";
import DocsIcon from "../../assets/svg/docs-icon.svg";
import TrendingUp from "../../assets/svg/trending-up.svg"

const AboutCompany = () => {
  return (
    <div className="main-content app-content mt-0">
    <div className="side-app">

        <div className="main-container container-fluid">
            <PagesCommonHeader />

            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body p-3 text-dark">
                            <div className="statistics-info">
                                <div className="row text-center">
                                    <div className="col-lg-3 col-sm-6 mt-4 mb-4">
                                        <div className="counter-status">
                                            <div className="counter-icon bg-primary-gradient box-shadow-primary">
                                                <img src={PeopleIcon} alt="" />
                                            </div>
                                            <h5 className="mb-2">Total Employees</h5>
                                            <h2 className="counter mb-0">2569</h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 mt-4 mb-4">
                                        <div className="counter-status">
                                            <div className="counter-icon bg-secondary-gradient box-shadow-secondary">
                                                <img src={RocketIcon} alt="" />
                                            </div>
                                            <h5 className="mb-2">Total Sales</h5>
                                            <h2 className="counter  mb-0">1765</h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6  mt-4 mb-4">
                                        <div className="counter-statuss">
                                            <div className="counter-icon bg-success-gradient box-shadow-success">
                                                <img src={DocsIcon} alt="" />
                                            </div>
                                            <h5 className="mb-2">Total Projects</h5>
                                            <h2 className="counter mb-0">846</h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 mt-4 mb-4">
                                        <div className="counter-status">
                                            <div className="counter-icon bg-danger-gradient box-shadow-danger">
                                                <img src={TrendingUp} alt="" />                                              
                                            </div>
                                            <h5 className="mb-2">Total Growth</h5>
                                            <h2 className="counter  mb-0">7253</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 
            <div className="row">
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-body pabout">
                            <h1 className="mb-3 fw-semibold">Why Zanex ?</h1>
                            <h4 className="">majority have suffered alteration in some form, by injected humour</h4>
                            <p className="leading-normal">There are many variations of passages of Lorem Ipsum available, but the majority have suffered  by injected humour, or randomised words which don't look even slightly believable.
                            If you are going to use a passage of Lorem Ipsum, you need to as  necessary All the Lorem Ipsum generators on the Internet tend to repeat Various versions have evolved over the years, sometimes by accident,
                            sometimes on purpose (injected humour and the like).</p>
                            <Link to="/"  className="btn btn-primary  mt-2">View More</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-body pabout">
                            <h1 className="mb-3 fw-semibold">What is Our Services?</h1>
                            <h4 className="">majority have suffered alteration in some form, by injected humour</h4>
                            <p className="leading-normal">There are many variations of passages of Lorem Ipsum available, but the majority have suffered  by injected humour, or randomised words which don't look even slightly believable.
                            If you are going to use a passage of Lorem Ipsum, you need to as  necessary All the Lorem Ipsum generators on the Internet tend to repeat Various versions have evolved over the years, sometimes by accident,
                            sometimes on purpose (injected humour and the like).</p>
                            <Link to="/"  className="btn btn-primary mt-2">View More</Link>
                        </div>
                    </div>
                </div>
            </div>
 
            <div className="row">
                <div className="col-md-6 col-sm-12 col-lg-6 col-xl-3">
                    <div className="card text-center overflow-hidden">
                        <img src={CardImage} alt="img" className="" />
                        <div className="card-body">
                            <h3 className="header-img-card">Company history</h3>
                            <p className="img-card-text">I must explain to you how all this mistaken idea of denouncing pleasure and you a complete account of the system</p>
                            <Link to="/" className="btn btn-primary">-Read More</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 col-lg-6 col-xl-3">
                    <div className="card text-center overflow-hidden">
                        <img src={CardImage} alt="img" className="" />
                        <div className="card-body">
                            <h3 className="header-img-card">About Team</h3>
                            <p className="img-card-text">I must explain to you how all this mistaken idea of denouncing pleasure and you a complete account of the system</p>
                            <Link to="/"  className="btn btn-secondary">-Read More</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 col-lg-6 col-xl-3">
                    <div className="card text-center overflow-hidden">
                        <img src={CardImage} alt="img" className="" />
                        <div className="card-body">
                            <h3 className="header-img-card">Company growth</h3>
                            <p className="img-card-text">I must explain to you how all this mistaken idea of denouncing pleasure and you a complete account of the system</p>
                            <Link to="/" className="btn btn-success">-Read More</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 col-lg-6 col-xl-3">
                    <div className="card text-center overflow-hidden">
                        <img src={CardImage} alt="img" className="" />
                        <div className="card-body">
                            <h3 className="header-img-card">Our Statistics</h3>
                            <p className="img-card-text">I must explain to you how all this mistaken idea of denouncing pleasure and you a complete account of the system</p>
                            <div className="btn btn-danger">-Read More</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

</div>
</div>
  )
}

export default AboutCompany;