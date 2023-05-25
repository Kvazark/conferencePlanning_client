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
    let sortedEvents = filteredEvents.sort((a, b) => new Date(...a.date.split('.').reverse()) - new Date(...b.date.split('.').reverse()));
    sortedEvents.reverse()

    function imageExists(image_url){


    }
    const imageUrl = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";

    return (
        <section className="list-events-section" >
            {sortedEvents.map((x, index) => <>
                <div className="card-eventMod" key={index} style={{overflowX: 'hidden'}}>
                    <div className="info-cardMod">
                        <h3>{x.name}</h3>
                        <p className="info-cardMod-type-p"><span style={{color: 'rgb(48, 48, 48, 0.8)', fontWeight: '600',fontSize: '18px'}}>формат:</span> {x.type}</p>

                        <p className="info-cardMod-date-p"><span style={{color: 'rgb(48, 48, 48, 0.8)', fontWeight: '600',  fontSize: '18px'}}>дата: </span>
                            {dayjs(x.date).format('DD.MM.YYYY')}</p>
                    </div>
                    {/*{bi = `url(https://localhost:7215/api/photos/${x.imgUrl})`}*/}
                    {/*<img src={`https://localhost:7215/api/photos/${x.imgUrl}`}*/}
                    {/*     onError={()=>{bi = `url(${avatarCardEvent})`}} style={{display:'none'}}/>*/}
                    <div className="avatarEventMod"
                         // style={{backgroundImage: `url(https://localhost:7215/api/photos/${x.imgUrl})`}}>
                        style={{backgroundImage: `url(${avatarCardEvent})`}}>
                        {/*// style={{backgroundImage: bi}}>*/}

                        <div
                            onClick={()=>handleClick(index, x.id)}>
                            {/*<svg className="three-dots-icon"  xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"*/}
                            {/*     viewBox="0 0 16 16" style={{border: `none`}}>*/}
                            {/*    <path style={{border: `0.3px solid rgba(0, 0, 0, 0.8)`}}*/}
                            {/*        d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>*/}
                            {/*</svg>*/}
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