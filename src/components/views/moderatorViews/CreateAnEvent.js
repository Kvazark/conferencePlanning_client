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

    return (
        <main>
            <StepperEvent></StepperEvent>
        </main>
    );
}

export default CreateAnEvent;