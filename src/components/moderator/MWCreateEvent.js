import React, {Component, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import InputCreateEvent from "../inputs/input_forCreateEvent/InputCreateEvent";
import "./mwCreateEventStyle.css"
import {Calendar2Week} from "react-bootstrap-icons";
import DatePicker from "react-datepicker";

const MwCreateEvent = () => {

    const [nameEvent, setNameEvent] = useState(localStorage.getItem('nameEvent') || '')
    const [typeEvent, setTypeEvent] = useState(localStorage.getItem('typeEvent') || '')
    const [startDate, setStartDate] = useState(localStorage.getItem('startDateEvent') ? new Date(localStorage.getItem("startDateEvent")) : new Date())

    const getDateValue = (date) => {
        setStartDate(date);
    }
    const handleClick=()=>{
        setNameEvent()
        setTypeEvent()
        setStartDate()
    }
    useEffect(()=>{
        localStorage.setItem('nameEvent', nameEvent)
        localStorage.setItem('typeEvent', typeEvent)
        localStorage.setItem('startDateEvent', startDate)
    },[nameEvent, typeEvent, startDate])



/////навигация
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/moderator/eventsListModerator/updateAnEvent`;
        navigate(path);
    }
    /////для кнопки
    const handleChange = (e) => {
        setTypeEvent(e.target.value);
    }
    const check =
        nameEvent.length > 0 &&
        typeEvent != "" &&
        (startDate > new Date());

    return (
        <div className="create-event-div" >
            <section className="full-inputEvent">
                <label>Название события</label>
                <InputCreateEvent type="text" value={nameEvent} setValue={setNameEvent} placeholder="Введите название, состоящее минимум из 3-х символом"></InputCreateEvent>
            </section>
            <section className="full-inputEvent">
                <label>Формат проведения</label>
                <label className="radio-btn-block">
                    <input
                        type="radio"
                        name="type"
                        id='1'
                        value="online"
                        onChange={handleChange}
                        checked={typeEvent === 'online'} />
                    <span>онлайн</span>
                </label>
                <label className="radio-btn-block">
                    <input
                        type="radio"
                        name="type"
                        id='2'
                        value="notOnline"
                        onChange={handleChange}
                        checked={typeEvent === 'notOnline'} />
                    <span>очный</span>
                </label>
                <label className="radio-btn-block">
                    <input
                        type="radio"
                        name="type"
                        id='3'
                        value="hybrid"
                        onChange={handleChange}
                        checked={typeEvent === 'hybrid'} />
                    <span>гибридный</span>
                </label>
            </section>
            <section className="data-time-field">
                <label>Дата проведения</label>
                <Calendar2Week className="icons-data-time" size="25px"></Calendar2Week>
                <DatePicker wrapperClassName="date-picker"
                            selected={startDate}
                            onChange={getDateValue}
                            dateFormat="dd.MM.yyyy"
                />
            </section>
            <button className="cont-create-new-event-Btn" disabled={!check} onClick={()=>{routeChange();handleClick()}}>продолжить</button>
        </div>
    );

}

export default MwCreateEvent;