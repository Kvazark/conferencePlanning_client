import React, {Component} from 'react';
import StepperEvent from "./updateAnEvent/StepperEvent";
import {useNavigate} from "react-router-dom";
import "./updateAnEventStyle.css"


const UpdateAnEvent = () => {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/moderator/eventsListModerator`;
        navigate(path);
    }
    return (
        <main>
            <button className="back-eventsList" onClick={routeChange}>вернуться</button>
            <div className="stepper">
                <StepperEvent></StepperEvent>
            </div>

        </main>
    );
}

export default UpdateAnEvent;