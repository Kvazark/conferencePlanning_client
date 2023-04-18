import React, {Component, useEffect, useState} from 'react';
import LeftMenu from "../../moderator/LeftMenu";
import {NavLink} from "react-router-dom";
import {ClockHistory, PinMap} from "react-bootstrap-icons";
import dayjs from "dayjs";
import headCardEvent from "../../../img/head-card-event.svg";
import ListEvent from "../ListEvent";

const HomePageModerator = () => {
    return (
        <main>
            <LeftMenu />
            <div className="list-events-div">
                <ListEvent></ListEvent>
            </div>
        </main>

    );

}

export default HomePageModerator;