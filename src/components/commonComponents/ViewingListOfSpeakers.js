import React, {Component, useEffect, useState} from 'react';
import ListItemPartic from "../views/moderatorViews/participantsList/ListItemPartic";
import {NavLink, useLocation} from "react-router-dom";
import "./viewingListOfSpeakersStyle.css"

const ViewingListOfSpeakers = () => {
    const location = useLocation()
    const {state} = location;
    let id = state.idEvent
    console.log(id)
    const [speakers, setSpeaker] = useState([]);
    const apiURL='https://localhost:7215/api/conferences/getUsers?confId='+`${id}`
    useEffect(() => {
        fetch(apiURL)
            .then(response => response.json())
            .then(result => {
                setSpeaker(result);
            });
    }, []);
    let path = `/user/viewingAnEvent`;
    let sortedSpeakers = speakers.sort((a, b) => a.speechNumber - b.speechNumber);
    return (
        <section>
            <NavLink to={path} state={{eventId: state.idEvent}}>
                <button className="back-viewEvent">
                    назад
                </button>
            </NavLink>
            <div className='list-speakers-block'>
                {sortedSpeakers?.map((x, index) => (
                    <div className='card-speaker'>
                        <h5>{index+1}</h5>
                        <div>
                            <p className='fio-p'>{x.position} <span>{x.userSurname} {x.userName} {x.patronymic}</span>, {x.organizationName}</p>
                            <p className='format-theme-p'><span>формат выступления: </span>{x.type}</p>
                            <p className='format-theme-p'><span>тема выступления: </span>{x.dockladTheme}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );

}

export default ViewingListOfSpeakers;