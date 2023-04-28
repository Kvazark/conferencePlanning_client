import React, {Component, useEffect, useState} from 'react';
import headCardEvent from "../../img/head-card-event.svg";
import {NavLink} from "react-router-dom";
import {ClockHistory, PinMap} from "react-bootstrap-icons";
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
                setEvents(result);
            });
    }, []);
    // useEffect(()=>{
    //     fetch('http://localhost:5215/api/photos/getConferencePhotoById1631986a-7be6-4f8c-b6b6-55a69749fc10')
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
    return (
        <section className="list-events-section">
            {events.map((x) => <>
                <div className="card"><NavLink
                    to={path} state={{eventId: x.id}} style={{textDecoration: 'none'}}>
                    <div className="avatarEvent">
                        <img src={avatarCardEvent}/>
                        {/*<img src={photo}/>*/}
                        {/*<img src = {avatar} style={{width:'400px', height:'200px'}}/>*/}
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