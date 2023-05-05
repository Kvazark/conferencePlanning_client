import React, {Component, useCallback, useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import headCardEvent from "../../img/head-card-event.svg";
import {NavLink} from "react-router-dom";
import {ClockHistory, PinMap, ThreeDots} from "react-bootstrap-icons";
import "./eventsByModeratorStyle.css"
import MWCreateEvent from "./MWCreateEvent";
import MWCreateEvent2 from "./MWCreateEvent2";
import ModalWindow from "../commonComponents/ModalWindow";
import MWEditEvent from "./MWEditEvent";
import dayjs from "dayjs";

const EventsByModerator = () => {

    const [photo, setPhoto] = useState([]);
    const moderatorId = useSelector(state => state.user.id)
    //const apiURL = "https://localhost:7215/api/conferences/getModeratorConferences?moderatorId="+`${moderatorId}`;
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

    const avatarCardEvent = headCardEvent
    const avatar = 'http://localhost:5215/api/photos/getConferencePhotoByIdc778c499-a546-4cb0-b507-9479894ea566'



    const [show, setShow] = useState(false)
    const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

    const [idEventEdit, setIdEventEdit] = useState(localStorage.getItem('idEventEdit') || '')
    useEffect(() => {
        localStorage.setItem('idEventEdit', idEventEdit)
    }, [idEventEdit])

    const handleClick=(index, id)=> {
        setShow(!show)
        setSelectedItemIndex(index)
        localStorage.clear()
        setIdEventEdit(id)
    }


    return (
        <section className="list-events-section">
            {events.map((x, index) => <>
                <div className="card-eventMod" key={index} >
                    <div className="info-cardMod">
                        <h3>{x.name}</h3>
                        <p>{x.type}</p>
                        <p>{dayjs(x.date).format("DD.MM.YYYY")}</p>
                    </div>
                    <div className="avatarEventMod" style={{backgroundImage: `url(${avatarCardEvent})`}}>
                        <div
                            onClick={()=>handleClick(index, x.id)}>
                            <ThreeDots className="three-dots-icon" size="25px"></ThreeDots>
                        </div>
                        {show &&
                            <div className="open-setting-event-field" style={{display: selectedItemIndex != index? `none`: `block`}}>
                                <MWEditEvent idEventEdit={x.id}></MWEditEvent>
                            </div>
                        }
                    </div>
                </div>


            </>)}
        </section>
    );

}

export default EventsByModerator;