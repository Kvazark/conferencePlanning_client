import React, {Component} from 'react';
import LeftMenu from "../../moderator/LeftMenu";
import style from "./eventListStyle.css"
import {HouseDoor, Plus} from "react-bootstrap-icons";
import {useHistory, useNavigate} from "react-router-dom";
import HomePageModerator from "./HomePageModerator";


const EventsList = () => {
    let navigate = useNavigate();
    const routeChange = () =>{
        let path = `/moderator/eventsListModerator/createAnEvent`;
        navigate(path);
    }

    return (

        <main>
            <LeftMenu/>
            <div className="topPanel">
                <button className="create-new-event-Btn" onClick={routeChange}><Plus size={30}/>создать событие
                </button>
            </div>
            <section>
                <h2 className="home">Welcome to the events by moderator!</h2>
            </section>
        </main>

    );

}
export default EventsList;



