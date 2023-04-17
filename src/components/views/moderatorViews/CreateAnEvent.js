import React, {Component} from 'react';
import LeftMenu from "../../moderator/LeftMenu";
import {First} from "react-bootstrap/PageItem";
import FirstStep from "./createAnEvent/FirstStep";
import styles from "./createAnEventStyle.css"
import {Bell} from "react-bootstrap-icons";
import {NavLink} from "react-router-dom";
import StepperEvent from "./createAnEvent/StepperEvent";
import SecondStep from "./createAnEvent/SecondStep";
import FourthStep from "./createAnEvent/FourthStep";
import ThirdStep from "./createAnEvent/ThirdStep";

const CreateAnEvent = () => {

    return (
        <main>
            <StepperEvent></StepperEvent>
        </main>
    );
}

export default CreateAnEvent;