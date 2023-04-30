import React, {Component, useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import headCardEvent from "../../../img/head-card-event.svg";
import "./contentEventStyle.css"
import {useSelector} from "react-redux";

const ContentEvent = () => {
    const location = useLocation();
    const { state } = location;
    const [event, setEvent] = useState({});
    const role = useSelector(state => state.user.role)

    useEffect(() => {
        fetch(`https://localhost:7215/api/conferences/getConferenceById?id=${state.eventId}`)
            .then(res => res.json())
            .then(result => {
                setEvent(result);
            })
            .catch(() => {

            })
    }, [state.eventId]);

    return (
        <section className="content-event">
            <article>
                <p className="short-description-event">Здесь будет находится краткое описание конференции, здесь будет находится краткое
                    описание конференции, десь будет находится краткое описание конференции, десь будет
                    находится краткое описание конференции</p>
                <div className="btn-group-event">

                </div>
                <div className="long-description-event-block">
                    <h3 style={role=="Moderator"?{color:"#206F6D"}:{color:`rgba(126, 25, 25, 0.9)`}}>что нужно знать ещё</h3>
                    <p style={{whiteSpace: "pre-wrap"}}>
                        Здесь находится дополнительная информация о данном событии, здесь находится дополнительная информация о данном событи,
                        находится дополнительная информация о данном событи, здесь находится дополнительная информация о данном событи, здесь находится
                        дополнительная информация о данном событи,
                        здесь находится дополнительная информация о данном событи, здесь находится дополнительная информация о данном событи...
                    </p>
                </div>
                <div className="schedule-event">

                </div>
            </article>

            <footer className="footer-event" style={role=="Moderator"?{borderTop: `1px solid #206F6D`}:{borderTop: `1px solid rgba(126, 25, 25, 0.9)`}}>
                <div className="contact-info-event">
                    <h4>Контактная информация</h4>
                    <p></p>
                </div>
                <div className="name-org-event">
                    <h4>Организация</h4>
                    <p>{event.conf?.organizer}</p>
                </div>
            </footer>
        </section>
    );

}

export default ContentEvent;