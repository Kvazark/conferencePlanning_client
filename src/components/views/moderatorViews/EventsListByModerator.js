import React, {Component, useEffect, useState} from 'react';
import LeftMenu from "../../moderator/LeftMenu";
import style from "./eventListStyle.css"
import {HouseDoor, Plus} from "react-bootstrap-icons";
import {useNavigate} from "react-router-dom";
import InputCreateEvent from "../../commonComponents/details/inputs/input_forCreateEvent/InputCreateEvent";
import ModalWindow from "../../commonComponents/ModalWindow";
import MWCreateEvent from "../../moderator/MWCreateEvent";
import MWCreateEvent2 from "../../moderator/MWCreateEvent2";
import EventsByModerator from "../../moderator/EventsByModerator";
import {useSelector} from "react-redux";


const EventsListByModerator = () => {

    const[modalActive, setModalActive]=useState(false)
    const [showResults, setShowResults] = React.useState(false)

    const handleChange = (showResults) => {
        setShowResults(showResults)
    }
    console.log(showResults)

    const moderatorId = useSelector(state => state.user.id)
    const apiURL = "https://localhost:7215/api/conferences/getModeratorConferences?moderatorId="+`${moderatorId}`;
    //const apiURL = "https://localhost:7215/api/conferences/getAllConferences";


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
        <main style={{overflowX: `hidden`}}>
            <LeftMenu/>
            <div className="topPanel">
                <input className="search-input-byName" type="text" onChange={(e) => setSearchInput(e.target.value)} value={searchInput} placeholder="Искать по названию..."/>
                <button className="create-new-event-Btn" onClick={()=>{setModalActive(true);localStorage.clear()}}><Plus size={30}/>создать событие
                </button>
            </div>
            <section className="field-events">
                <EventsByModerator filteredEvents={filteredEvents}></EventsByModerator>
            </section>
            <ModalWindow active={modalActive} setActive={setModalActive}>
                {!showResults ?
                <MWCreateEvent onChange={handleChange} ></MWCreateEvent>: <MWCreateEvent2></MWCreateEvent2>
                }
            </ModalWindow>
        </main>

    );

}
export default EventsListByModerator;



