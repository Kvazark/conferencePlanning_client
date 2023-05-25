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
    const apiURL = "https://localhost:7215/api/conferences/getAllConferences";
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch(apiURL)
            .then(response => response.json())
            .then(result => {
                //result.sort((a,b) => new Date(a.date).getTime()< new Date(b.date).getTime()? 1: -1);
                setEvents(result);
            });
    }, []);

    ///поиск по названию события
    const [searchInput, setSearchInput] = useState()
    const getFilteredEvents = () => {
        if (!searchInput) return events
        return events.filter(value => value.name.toLowerCase().includes(searchInput.toLowerCase()))
    }
    const filteredEvents = getFilteredEvents()

    return (
        <main>
            <LeftMenu />
            <div className="list-events-div" style={{left:'22%'}}>
                <input className="search-input-byName" style={{position: `relative`, left: `0`, top: `77px`}}
                       type="text" onChange={(e) => setSearchInput(e.target.value)} value={searchInput} placeholder="Искать по названию..."/>
                <ListEvent filteredEvents={filteredEvents}></ListEvent>
            </div>
        </main>

    );

}

export default HomePageModerator;