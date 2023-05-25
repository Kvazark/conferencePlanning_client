import React, {Component, useEffect, useMemo, useState} from 'react';
import headCardEvent from "../../img/head-card-event.svg";
import {NavLink} from "react-router-dom";
import {ClockHistory, PinMap, Wechat} from "react-bootstrap-icons";
import dayjs from "dayjs";
import {useSelector} from "react-redux";
import "./listEventStyle.css"
import axios from "axios";

const ListEvent = ({filteredEvents}) => {

    // const apiURL = "http://localhost:5215/api/conferences/getAllConferences";
    const role = useSelector(state => state.user.role)

    // useEffect(() => {
    //     axios.get('http://localhost:5215/api/photos/getConferencePhotoById8984d437-5498-4fbc-9d38-838a6299d7ef')
    //         .then(response => setPhoto(response.data.total));
    // }, []);

    // console.log(setEvent())
    const avatarCardEvent = headCardEvent

    let path
    if (role == 'Moderator') {
        path = '/moderator/mainPageModerator/viewingAnEvent'
    } else if (role == 'User') {
        path = '/user/viewingAnEvent'
    }
    let events = filteredEvents.sort((a, b) => new Date(...a.date.split('.').reverse()) - new Date(...b.date.split('.').reverse()));
    //сортировка событий по дате
    let sortedEvents = events.sort((a, b) => new Date(...a.date.split('.').reverse()) - new Date(...b.date.split('.').reverse()));
    sortedEvents.reverse()

    //разделение событий на архив и актуальные
    const cD = new Date()
    let currentDate = dayjs(cD).format('DD.MM.YYYY')
    const archiveEvents = []
    const actualEvents = []
    const [showListEvents, setShowListEvents] = useState(Array.from(sortedEvents))

    sortedEvents.map((x) => {
        if (x.date.split('.').reverse().join('') > currentDate.split('.').reverse().join('')) {
            actualEvents.push(x);
        } else archiveEvents.push(x);
    })

    const [showArchive, setShowArchive] = useState(false)
    useEffect(() => {
        if (showArchive) {
            setShowListEvents(Array.from(archiveEvents));
        } else setShowListEvents(Array.from(actualEvents));
    }, [showArchive, sortedEvents])

    let switchBtn = <div className="filter-panel" style={role == 'User' ? {left: `33.5%`} : {left: `47.5%`}}>
        {!showArchive &&
            <button className="filter-archive-btn" style={role=='User'?{
                background: 'rgba(126, 25, 25, 0.9)',
                color: '#F2F2F2',
                boxShadow: `0px 3px 3px rgba(0, 0, 0, 0.25)`
            }:{background: '#206F6D', color: '#F2F2F2', boxShadow: `0px 3px 3px rgba(0, 0, 0, 0.25)`}
            }
                    onClick={() => setShowArchive(true)}>
                показать архив</button>
        }
        {showArchive &&
            <button className="filter-archive-btn" style={role == 'User' ? {
                background: '#FFFFFF',
                color: 'rgba(126, 25, 25, 0.9)',
                boxShadow: `0px 3px 3px rgba(0, 0, 0, 0.25)`,
                marginLeft: '3vw'
            }: {
                background: '#FFFFFF',
                color: '#206F6D',
                boxShadow: `0px 3px 3px rgba(0, 0, 0, 0.25)`,
                marginLeft: '3vw'
            }}
                    onClick={() => setShowArchive(false)}>
                показать актуальные</button>
        }
    </div>

    return (
        <section className="list-events-section">
            {switchBtn}
            {showListEvents.map((x) => <>
                <div className="card"><NavLink
                    to={path} state={{eventId: x.id}} style={{textDecoration: 'none'}}>
                    <div className="avatarEvent">
                        {/*<img src={avatarCardEvent}/>*/}
                        {/*<img src={`https://localhost:7215/api/photos/${x.imgUrl}`!== null?`https://localhost:7215/api/photos/${x.imgUrl}`: avatarCardEvent}/>*/}
                        {console.log(x.imgUrl)}
                        <img id='myimage' onError={(e)=>e.target.src =avatarCardEvent} src={`https://localhost:7215/api/photos/${x.imgUrl}`}/>
                    </div>
                    <div className="event-info-card">
                        <h3>{x.name}</h3>
                        <p><Wechat size="22px"
                                   style={role == 'Moderator' ? {color: "#206F6D"} : {color: "rgba(126, 25, 25, 0.9)"}}></Wechat>формат
                            проведения: {x.type}</p>
                        <p><ClockHistory size="22px"
                                         style={role == 'Moderator' ? {color: "#206F6D"} : {color: "rgba(126, 25, 25, 0.9)"}}></ClockHistory>
                            {x.date} {x.startTime ? x.startTime.substring(0, 5) : ''}-{x.endTime ? x.endTime.substring(0, 5) : ''}
                        </p>
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