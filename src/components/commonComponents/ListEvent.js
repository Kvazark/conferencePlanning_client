import React, {Component, useEffect, useMemo, useState} from 'react';
import headCardEvent from "../../img/head-card-event.svg";
import {NavLink} from "react-router-dom";
import {ClockHistory, PinMap, Wechat} from "react-bootstrap-icons";
import dayjs from "dayjs";
import {useSelector} from "react-redux";
import "./listEventStyle.css"

const ListEvent = () => {

    const [photo, setPhoto] = useState([]);
    const apiURL = "https://localhost:7215/api/conferences/getAllConferences";
    const role = useSelector(state => state.user.role)

    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch(apiURL)
            .then(response => response.json())
            .then(result => {
                //result.sort((a,b) => new Date(a.date).getTime()< new Date(b.date).getTime()? 1: -1);
                setEvents(result);
            });
    }, []);
    // useEffect(()=>{
    //     fetch('http://localhost:5215/api/photos/getConferencePhotoByIdf02ac54b-1b95-4e15-9699-eb7cc787ff7f')
    //         .then(response=>response.json())
    //         .then(result=>{
    //             setPhoto(result)
    //         })
    // })
    // console.log(setEvent())
     const avatarCardEvent = headCardEvent
     const avatar = 'http://localhost:5215/api/photos/getConferencePhotoByIdc778c499-a546-4cb0-b507-9479894ea566'
    let path
    if (role == 'Moderator') {
        path = '/moderator/mainPageModerator/viewingAnEvent'
    } else if (role == 'User') {
        path = '/user/viewingAnEvent'
    }
    //сортировка событий по дате
    let sortedEvents = events.sort((a, b) => new Date(...a.date.split('.').reverse()) - new Date(...b.date.split('.').reverse()));
    sortedEvents.reverse()

    const archiveEvents = []
    const actualEvents = []
    const [showListEvents, setShowListEvents] = useState('')

    const cD = new Date()
    let currentDate = dayjs(cD).format('DD.MM.YYYY')
    console.log(currentDate)
    sortedEvents.map((x) =>{
        if(x.date > currentDate){
            actualEvents.push(x)
        }else{
            archiveEvents.push(x)
        }

    })
    const [showArchive, setShowArchive] = useState(false)
    useEffect(()=>{
        if(showArchive){
            setShowListEvents(Array.from(archiveEvents))
            console.log(showListEvents)
        }else setShowListEvents(Array.from(actualEvents))
        //console.log(showListEvents)
    },[showArchive])
    console.log(showListEvents)

    return (
        <section className="list-events-section">
            <div className="filter-panel">
                {!showArchive &&
                    <button className="filter-archive-btn" style = {{background:'rgba(126, 25, 25, 0.9)', color: '#F2F2F2', boxShadow: `0px 3px 3px rgba(0, 0, 0, 0.25)`}}
                            onClick={()=>setShowArchive(true)}>
                        показать архив</button>
                }
                {showArchive &&
                    <button className="filter-archive-btn" style = {{background:'#FFFFFF',color: 'rgba(126, 25, 25, 0.9)', boxShadow: `0px 3px 3px rgba(0, 0, 0, 0.25)`}}
                            onClick={()=>setShowArchive(false)}>
                        показать актуальные</button>
                }

            </div>
            {showListEvents.map((x) => <>
                <div className="card"><NavLink
                    to={path} state={{eventId: x.id}} style={{textDecoration: 'none'}}>
                    <div className="avatarEvent">
                        <img src={avatarCardEvent}/>
                        {/*<img src={photo}/>*/}
                        {/*<img src = {avatar} style={{width:'400px', height:'200px'}}/>*/}
                    </div>
                    <div className="event-info-card">
                        <h3>{x.name}</h3>
                        <p><Wechat size="22px" style={role == 'Moderator' ? {color: "#206F6D"} : {color: "rgba(126, 25, 25, 0.9)"}}></Wechat>формат проведения: {x.type}</p>
                        <p><ClockHistory size="22px"
                                         style={role == 'Moderator' ? {color: "#206F6D"} : {color: "rgba(126, 25, 25, 0.9)"}}></ClockHistory>
                            {x.date} {x.startTime? x.startTime.substring(0, 5): ''} {x.endTime? x.endTime.substring(0, 5) : ''}</p>
                        <div className="categories-card">
                            {x.categories?.map(category => (
                                <div className="separately-category" key={category.call}>{category}</div>
                            ))}
                        </div>
                    </div>
                </NavLink>
                </div>
            </>)}
        </section>
    );

}

export default ListEvent;