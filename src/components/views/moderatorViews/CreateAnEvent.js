import React, {Component} from 'react';
import LeftMenu from "../../moderator/LeftMenu";
import {First} from "react-bootstrap/PageItem";
import FirstStep from "../../moderator/createAnEvent/FirstStep";
import styles from "./createAnEventStyle.css"
import {Bell} from "react-bootstrap-icons";
import {NavLink} from "react-router-dom";
import StepperEvent from "../../moderator/createAnEvent/StepperEvent";
import SecondStep from "../../moderator/createAnEvent/SecondStep";
import FourthStep from "../../moderator/createAnEvent/FourthStep";
import ThirdStep from "../../moderator/createAnEvent/ThirdStep";

const CreateAnEvent = () => {

    // let mes = 1;
    // if(mes == 1){
    //     return (
    //         <main>
    //             <NavLink to="/moderator/eventsListModerator">
    //                 <button className="back-to-eventsList">отменить</button>
    //             </NavLink>
    //             <div className="stepper">
    //                 <StepperEvent></StepperEvent>
    //             </div>
    //             <FirstStep/>
    //         </main>
    //     )
    // }
    // else if (mes == 2){
    //     return <main>
    //         <NavLink to="/moderator/eventsListModerator">
    //             <button className="back-to-eventsList">отменить</button>
    //         </NavLink>
    //         <div className="stepper">
    //             <StepperEvent></StepperEvent>
    //         </div>
    //         <SecondStep/>
    //     </main>
    // }
    // else if (mes == 3){
    //     return <main>
    //         <NavLink to="/moderator/eventsListModerator">
    //             <button className="back-to-eventsList">отменить</button>
    //         </NavLink>
    //         <div className="stepper">
    //             <StepperEvent></StepperEvent>
    //         </div>
    //         <ThirdStep/>
    //     </main>
    // }
    // else if (mes == 4){
    //     return <main>
    //         <NavLink to="/moderator/eventsListModerator">
    //             <button className="back-to-eventsList">отменить</button>
    //         </NavLink>
    //         <div className="stepper">
    //             <StepperEvent></StepperEvent>
    //         </div>
    //         <FourthStep/>
    //     </main>
    // }
    return (
        <main>
            <StepperEvent></StepperEvent>
        </main>
    );
}

export default CreateAnEvent;