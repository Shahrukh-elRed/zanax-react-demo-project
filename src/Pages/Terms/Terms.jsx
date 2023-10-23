import { Link } from "react-router-dom";
import "./terms.scss"
import Icon from '@mdi/react';
import { mdiChevronDoubleRight } from '@mdi/js';
import PagesCommonHeader from "../../Components/PagesCommonHeader/PagesCommonHeader";

const Terms = () => {
  return (
    <div className="main-content app-content mt-0">
    <div className="side-app">

        <div className="main-container container-fluid">
            <PagesCommonHeader />

            <div className="row ">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h4><b>Welcome to Zanex</b></h4>
                            <div className="paragraph">I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h4><b>Using Our Services</b></h4>
                            <div className="paragraph">I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h4><b>Privacy policy</b></h4>
                            <div className="paragraph">I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h4><b>Copyright </b></h4>
                            <div className="paragraph">I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h4><b>Terms and Conditions</b></h4>
                            <div className="paragraph">I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences</div>
                            <ul className="arrow-list">
                                <li className="list-arrow-item"><Icon path={mdiChevronDoubleRight} size="14px" /> ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores </li>
                                <li className="list-arrow-item"><Icon path={mdiChevronDoubleRight} size="14px" /> quas molestias excepturi sint occaecati cupiditate non provident</li>
                                <li className="list-arrow-item"><Icon path={mdiChevronDoubleRight} size="14px" /> Nam libero tempore, cum soluta nobis est eligendi optio cumque</li>
                                <li className="list-arrow-item"><Icon path={mdiChevronDoubleRight} size="14px" /> Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates</li>
                                <li className="list-arrow-item"><Icon path={mdiChevronDoubleRight} size="14px" /> repudiandae sint et molestiae non recusandae itaque earum rerum hic tenetur a sapiente delectus</li>
                                <li className="list-arrow-item"><Icon path={mdiChevronDoubleRight} size="14px" /> ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body text-start">
                            <div className="terms">
                                <div className="info-helpful-text">Was this information is Helpful?</div>
                                <Link className="btn btn-primary text-white terms-yes-btn">Yes</Link>
                                <Link className="btn btn-secondary text-white terms-no-btn">No</Link>
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

export default Terms;