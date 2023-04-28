import React, {Component, useState} from 'react';
import LeftMenu from "../../moderator/LeftMenu";
import style from "./eventListStyle.css"
import {HouseDoor, Plus} from "react-bootstrap-icons";
import {useNavigate} from "react-router-dom";
import InputCreateEvent from "../../inputs/input_forCreateEvent/InputCreateEvent";
import ModalWindow from "../../helpers/ModalWindow";
import MWCreateEvent from "../../moderator/MWCreateEvent";


const EventsList = () => {

    const[modalActive, setModalActive]=useState(false)

    return (

        <main>
            <LeftMenu/>
            <div className="topPanel">
                {/*<button className="create-new-event-Btn" onClick={routeChange}><Plus size={30}/>создать событие*/}
                {/*</button>*/}
                <button className="create-new-event-Btn" onClick={()=>{setModalActive(true);localStorage.clear()}}><Plus size={30}/>создать событие
                </button>
            </div>
            <section className="field-events">
                <h2 className="home">Welcome to the events by moderator!</h2>
            </section>
            <ModalWindow active={modalActive} setActive={setModalActive}>
                <MWCreateEvent></MWCreateEvent>
            </ModalWindow>
        </main>

    );

}
export default EventsList;



