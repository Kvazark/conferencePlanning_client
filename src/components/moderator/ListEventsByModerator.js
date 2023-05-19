import React, {Component, useCallback, useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import headCardEvent from "../../img/head-card-event.svg";
import {NavLink} from "react-router-dom";
import {ClockHistory, PinMap, ThreeDots} from "react-bootstrap-icons";
import "./listEventsByModeratorStyle.css"
import MWCreateEvent from "./MWCreateEvent";
import MWCreateEvent2 from "./MWCreateEvent2";
import ModalWindow from "../commonComponents/ModalWindow";
import MWEditEvent from "./MWEditEvent";
import dayjs from "dayjs";

const ListEventsByModerator = ({filteredEvents, onChange}) => {

    const [photo, setPhoto] = useState([]);
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

    const avatarCardEvent = headCardEvent
    const avatar = 'http://localhost:5215/api/photos/getConferencePhotoByIdc778c499-a546-4cb0-b507-9479894ea566'


    const [show, setShow] = useState(false)
    const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

    //id для списка потенциальных участников
    const [idEventEdit, setIdEventEdit] = useState(localStorage.getItem('idEventEdit') || '')
    useEffect(() => {
        localStorage.setItem('idEventEdit', idEventEdit)
        handleChange(idEventEdit)
    }, [idEventEdit])
    const handleChange=(e)=>{
        onChange(e)
    }
    const handleClick=(index, id)=> {
        setShow(!show)
        setSelectedItemIndex(index)
        localStorage.clear()
        setIdEventEdit(id)
    }

    //чтобы закрывался и не мешал
    const viewPP = useSelector(state => state.event.viewPP)
    if(show){
        if(viewPP) {
            setShow(()=>false)
        }

    }




    // ///поиск по названию события
    // const [searchInput, setSearchInput] = useState()
    // const getFilteredEvents = () => {
    //     if (!searchInput) return events
    //     return events.filter(value => value.name.toLowerCase().includes(searchInput.toLowerCase()))
    // }
    // const filteredEvents = getFilteredEvents()

    return (
        <section className="list-events-section">
            {/*<input className="search-input-byName" type="text" onChange={(e) => setSearchInput(e.target.value)} value={searchInput} placeholder="Искать по названию..."/>*/}
            {filteredEvents.map((x, index) => <>
                <div className="card-eventMod" key={index} >
                    <div className="info-cardMod">
                        <h3>{x.name}</h3>
                        <p className="info-cardMod-type-p"><span style={{color: 'rgb(48, 48, 48, 0.8)', fontWeight: '600',fontSize: '18px'}}>формат:</span> {x.type}</p>
                        {/*{console.log(x.name,x.date)}*/}
                        <p className="info-cardMod-date-p"><span style={{color: 'rgb(48, 48, 48, 0.8)', fontWeight: '600',  fontSize: '18px'}}>дата: </span>
                            {dayjs(x.date).format('DD.MM.YYYY')}</p>
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

export default ListEventsByModerator;