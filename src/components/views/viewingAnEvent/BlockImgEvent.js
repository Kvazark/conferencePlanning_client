import React, {Component, useEffect, useState} from 'react';
import {NavLink, useLocation} from "react-router-dom";
import headCardEvent from "../../../img/head-card-event.svg";
import {ArrowLeftShort} from "react-bootstrap-icons";
import dayjs from "dayjs";
import "./blockImgEventStyle.css"
import {useSelector} from "react-redux";

const BlockImgEvent = () => {
    const location = useLocation();
    const {state} = location;
    const avatarEvent = headCardEvent
    const role = useSelector(state => state.user.role)

    const [event, setEvent] = useState({});

    useEffect(() => {
        fetch(`https://localhost:7215/api/conferences/getConferenceById?id=${state.eventId}`)
            .then(res => res.json())
            .then(result => {
                setEvent(result);
            })
            .catch(() => {

            })
    }, [state.eventId]);



    let dateEvent = dayjs(event.conf?.date).format("DD.MM.YYYY")
    const dateEventR = new Date();
    dateEventR.setDate(dateEventR.getDate() + 5);

    let block
    let btnBack
    let addressAndCity;

    if (event.conf?.type==='онлайн'){
        addressAndCity =
            <p className="address-event">формат проведения онлайн</p>
    }if (event.conf?.type === 'очный'){
        addressAndCity =
            <p className="address-event">по адресу: {event.conf?.city}, {event.conf?.addres}</p>

    }if (event.conf?.type==='гибридный'){
        addressAndCity =
            <div>
                <p className="address-event">по адресу: {event.conf?.city}, {event.conf?.addres} </p>
                <p className='footnote'>можно выступить онлайн</p>
            </div>
    }
    if (role == 'User') {
        btnBack =
            <NavLink to="/user/mainPageUser">
                <div className="btn-back-to-list">
                    <ArrowLeftShort size="50px" color="rgba(126, 25, 25, 0.9)"></ArrowLeftShort>
                </div>
            </NavLink>
        // поменять условие на ">"
        if (dayjs(dateEventR).format("DD.MM.YYYY") < dateEvent) {
            block = <div className="block-main-info-event-active">
                <h3 className="title-event">{event.conf?.name}</h3>
                <p className="data-event">{dayjs(event.conf?.date).format("DD.MM.YYYY")}</p>
                {addressAndCity}
                <button className="btn-submit-an-application" style={{backgroundColor: `rgb(126, 25, 25, 0.8)`}}>подать
                    заявку
                </button>
                <p className="termination-date" style={{color:`rgba(126, 25, 25, 0.9)`}}>регистрация закончится за 5 дней до начала события</p>
            </div>
        } else {
            block = <div className="block-main-info-event-Noactive">
                <h3 className="title-event">{event.conf?.name}</h3>
                <p className="data-event">{dayjs(event.conf?.date).format("DD.MM.YYYY")}</p>
                {addressAndCity}
                <p className="termination-date-end">регистрация завершилась</p>
            </div>
        }
    } else if (role == 'Moderator') {
        btnBack =
            <NavLink to="/moderator/mainPageModerator">
                <div className="btn-back-to-list">
                    <ArrowLeftShort size="50px" color="#206F6D"></ArrowLeftShort>
                </div>
            </NavLink>
        if (dayjs(dateEventR).format("DD.MM.YYYY") < dateEvent) {
            block = <div className="block-main-info-event-active">
                <h3 className="title-event">{event.conf?.name}</h3>
                <p className="data-event">{dayjs(event.conf?.date).format("DD.MM.YYYY")}</p>
                {addressAndCity}
                <p className="termination-date" style={{color:"#206F6D"}}>регистрация закончится за 5 дней до начала события</p>
            </div>
        } else {
            block = <div className="block-main-info-event-active">
                <h3 className="title-event">{event.conf?.name}</h3>
                <p className="data-event">{dayjs(event.conf?.date).format("DD.MM.YYYY")}</p>
                {addressAndCity}
                <p className="termination-date">регистрация закончится за 5 дней до начала события</p>
            </div>
        }
    }

    return (
        <section className="block-img-event" style={{backgroundImage: `url(${avatarEvent})`}}>
            {btnBack}
            {block}
        </section>
    );

}

export default BlockImgEvent;