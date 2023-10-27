import { useState } from "react";
import "./card-with-switch.scss";

const CardWithSwitch = ({ title, bodyText, isWide }) => {
    const [isOn, setIsOn] = useState(true);

    return (
        <div className={`${isWide ? "col-xl-6" : " col-xl-4"} col-md-12`}>
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">{title}</h3>
                <div className="card-options">
                <label className="custom-switch m-0">
                    <input onClick={() => setIsOn(!isOn)} onChange={(e) => console.log(e.target.value)} type="checkbox" 
                        value={isOn ? "0" : "1"} className="custom-switch-input" checked={isOn} />
                    <span className="custom-switch-indicator"></span>
                </label>
                </div>
            </div>
            <div className="card-body">{bodyText}</div>             
        </div>
    </div>
    )
}

export default CardWithSwitch;
