import React, {Component, useEffect, useState} from 'react';
import LeftMenu from "../../moderator/LeftMenu";
import {NavLink} from "react-router-dom";
import {ClockHistory, PinMap} from "react-bootstrap-icons";
import dayjs from "dayjs";
import headCardEvent from "../../../img/head-card-event.svg";
import ListEvent from "../../commonComponents/ListEvent";

const HomePageModerator = () => {
    const [idCurrentEvent, setIdCurrentEvent] = useState(localStorage.getItem('idCurrentEvent') || '')

    const handleClick = () => {
       setIdCurrentEvent()
    }
    useEffect(() => {
        localStorage.setItem('idCurrentEvent', idCurrentEvent)

    }, [idCurrentEvent])
    return (
        <main>
            <LeftMenu />
            <div className="list-events-div" style={{left:'22%'}}>
                <ListEvent></ListEvent>
            </div>
        </main>

    );

}

export default HomePageModerator;