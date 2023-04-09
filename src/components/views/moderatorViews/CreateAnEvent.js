import React, {Component} from 'react';
import LeftMenu from "../../moderator/LeftMenu";
import {First} from "react-bootstrap/PageItem";
import FirstStep from "../../moderator/createAnEvent/FirstStep";
import styles from "./createAnEventStyle.css"
import {Bell} from "react-bootstrap-icons";
import {NavLink} from "react-router-dom";

const CreateAnEvent = () => {

    return (
        <main>
            <NavLink to="/moderator/eventsListModerator">
                <button className="back-to-eventsList">отменить</button>
            </NavLink>
            <div className="stepper">
                <h2 className="home">This is stepper!</h2>
            </div>
            <FirstStep/>
        </main>

    );

}

export default CreateAnEvent;