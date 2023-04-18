import React, {Component, useEffect, useState} from 'react';
import headCardEvent from "../../img/head-card-event.svg";
import {NavLink} from "react-router-dom";
import {ClockHistory, PinMap} from "react-bootstrap-icons";
import dayjs from "dayjs";
import {useSelector} from "react-redux";
import "./listEventStyle.css"

const ListEvent = () => {
    const [events, setEvents] = useState([]);
    const apiURL = "https://localhost:7215/api/conferences/getAllConferences";
    const role = useSelector(state => state.user.role)

    useEffect(() => {
        fetch(apiURL)
            .then(res => res.json())
            .then(result => {
                setEvents(result);
            });
    }, []);
    const avatarCardEvent = headCardEvent
    let path
    if (role == 'Moderator') {
        path = '/moderator/mainPageModerator/viewingAnEvent'
    } else if (role == 'User') {
        path = '/user/viewingAnEvent'
    }
    return (
        <section className="list-events-section">
            {events.map((x) => <>
                <div className="card"><NavLink
                    to={path} state={{eventId: x.id}} style={{textDecoration: 'none'}}>
                    <div className="avatarEvent">
                        <img src={avatarCardEvent}/>
                    </div>
                    <div className="event-info-card">
                        <h3>{x.name}</h3>
                        <p><PinMap size="22px" style={role == 'Moderator' ? {color: "#206F6D"} : {color: "rgba(126, 25, 25, 0.9)"}}></PinMap> {x.addres}, {x.city}</p>
                        <p><ClockHistory size="22px"
                                         style={role == 'Moderator' ? {color: "#206F6D"} : {color: "rgba(126, 25, 25, 0.9)"}}></ClockHistory>
                            {dayjs(x.date).format("DD.MM.YYYY")} {x.startTime} {x.endTime}</p>
                        <div className="categories-card">
                            {x.categories.map(category => (
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