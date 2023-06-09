import React, {Component, useEffect, useState} from 'react';
import {NavLink, useLocation, useNavigate} from "react-router-dom";
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
    const idEvent = state.eventId



    console.log(event.conf?.date)
    let dateEvent;
    if(event.conf?.date != 'undefined'){
        let date = (event.conf?.date)?.replace(/[./]/g, "-")
        date = date?.split('-').reverse().join('-');
        dateEvent = new Date(date)
        console.log(dateEvent)
    }


    // let dateEvent = dayjs(event.conf?.date).format("DD.MM.YYYY")
    // console.log(dateEvent)
    const dateEventR = new Date();
    dateEventR.setDate(dateEventR.getDate() + 5)
    // console.log(dateEventR, dateEvent.valueOf(), dateEventR.valueOf())
    // dateEventR.setDate(dateEventR.getDate() + 5);
    // console.log(dateEventR.getDate() + 5)

    let block
    let btnBack
    let addressAndCity;
    let path = `/user/questionnairePage`;
    let type = event.conf?.type

    if (event.conf?.type==='онлайн'){
        addressAndCity =
            <p className="address-event">формат проведения онлайн</p>
    }if (event.conf?.type === 'очный'){
        addressAndCity =
            <p className="address-event">
               <span>по адресу: </span> {event.conf?.city}, {event.conf?.addres}</p>

    }if (event.conf?.type==='гибридный'){
        addressAndCity =
            <div className="address-and-city-block">
                <p className="address-event">
                    <span>по адресу: </span> {event.conf?.city}, {event.conf?.addres} </p>
                <p className='footnote' style={role=='User'? {color: 'rgba(128, 14, 14, 0.5)'}: {color:'#206F6D'}}>можно выступить онлайн</p>
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
        //x.date.split('.').reverse().join('') > currentDate.split('.').reverse().join('')
        console.log('1: '+ dayjs(dateEvent).format("DD.MM.YYYY"))
        console.log('1: '+dayjs(dateEventR).format("DD.MM.YYYY").split('.').reverse().join(''))
        console.log('2: '+dayjs(dateEvent).format("DD.MM.YYYY").split('.').reverse().join(''))

        if (dayjs(dateEventR).format("DD.MM.YYYY").split('.').reverse().join('') < dayjs(dateEvent).format("DD.MM.YYYY").split('.').reverse().join('')) {
            block = <div className="block-main-info-event-active">
                <h3 className="title-event">{event.conf?.name}</h3>
                <p className="data-event">{event.conf?.date}</p>
                {addressAndCity}
                <NavLink to={path} state={{idEvent: idEvent, typeEvent: type}}>
                    <button className="btn-submit-an-application"
                            style={{backgroundColor: `rgb(126, 25, 25, 0.8)`}}>подать
                        заявку
                    </button>
                </NavLink>

                <p className="termination-date" style={{color:`rgba(126, 25, 25, 0.9)`}}>регистрация закончится за 5 дней до начала события</p>

            </div>
        } else {
            block = <div className="block-main-info-event-Noactive">
                <h3 className="title-event">{event.conf?.name}</h3>
                <p className="data-event">{dayjs(dateEvent).format("DD.MM.YYYY")}</p>
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
                <p className="data-event">{event.conf?.date}</p>
                {addressAndCity}
            </div>
        } else {
            block = <div className="block-main-info-event-active">
                <h3 className="title-event">{event.conf?.name}</h3>
                <p className="data-event">{event.conf?.date}</p>
                {addressAndCity}

            </div>
        }
    }
    console.log(event.conf?.imgUrl)

    return (
        <section className="block-img-event"
                 // style={{backgroundImage: `url(${avatarEvent})`}}
        >
            <img className='img-head-event' onError={(e)=>e.target.src =headCardEvent} src={`https://localhost:7215/api/photos/${event.conf?.imgUrl}`}/>
            {btnBack}
            {block}
        </section>
    );

}

export default BlockImgEvent;