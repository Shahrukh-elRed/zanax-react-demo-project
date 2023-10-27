import { Icon } from "@iconify/react";
import "./play-music-card.scss";

const PlayMusicCard = ({ bgColor, title, text, titleClickAction, prevClickAction, playClickAction, nextClickAction }) => {
  return (
    <div className="col-md-6 col-xl-6">
    <div className={`card card-aside ${bgColor ? "bg-primary" : ""}`}>
        <div className="card-body d-flex flex-column">
            <h4><span className={`music-card-title ${bgColor ? "text-white" : ""}`} onClick={titleClickAction}>{title}</span></h4>
            <div className={bgColor ? "text-white" : "text-muted"}>{text}</div>
            <div className="d-flex align-items-center mt-auto text-center padding-top-icons">
                <div className="text-muted">
                    <div onClick={prevClickAction} className={`${bgColor ? "icon-white" : "icon"} d-md-inline-block ms-3`}>
                        <Icon icon="fa:step-forward" height="14px" width="8px" />
                    </div>
                    <div onClick={playClickAction} className={`${bgColor ? "icon-white" : "icon"} d-md-inline-block ms-3`}>
                        <Icon icon="fa:play" height="14px" width="11px"  />
                        </div>
                    <div onClick={nextClickAction} className={`${bgColor ? "icon-white" : "icon"} d-md-inline-block ms-3`}>
                        <Icon icon="fa:step-backward" height="14px" width="8px"  />
                        </div>
                </div>
            </div>
        </div>

    </div>
</div>
  )
}

export default PlayMusicCard;