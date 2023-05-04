import React, {Component, useContext, useEffect, useState} from 'react';
import styles from "./firstStepStyle.css"
import InputCreateEvent from "../../../commonComponents/details/inputs/input_forCreateEvent/InputCreateEvent";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Calendar2Week, Clock} from "react-bootstrap-icons";
import InputTime from "../../../commonComponents/details/inputs/input_forCreateEvent/InputTime";
import {useDispatch, useSelector} from "react-redux";
import {Button, Group} from "@mantine/core";
import RadioButtons from "../../../commonComponents/details/inputs/input_forCreateEvent/RadioButtons";
import {useLocation} from "react-router-dom";
import headCardEvent from "../../../../img/head-card-event.svg";
import dayjs from "dayjs";


//({onChangeName, onChangeAddress})
const FirstStep = ({step}) => {
    const [event, setEvent] = useState({});

    const idEventEdit = localStorage.getItem('idEventEdit')
    const idEvent = useSelector(state => state.event.id)
    let id
    if (idEventEdit != null) {
        id = idEventEdit
    } else {
        id = idEvent
    }

    useEffect(() => {
        fetch(`https://localhost:7215/api/conferences/getConferenceById?id=${id}`)
            .then(res => res.json())
            .then(result => {
                setEvent(result);
            })
            .catch(() => {

            })
    }, []);


    const [nameEvent, setNameEvent] = useState(localStorage.getItem('nameEvent') || '')
    const [shortDescription, setShortDescription] = useState(localStorage.getItem('shortDescriptionEvent') || '')
    const [startDate, setStartDate] = useState(localStorage.getItem('startDateEvent') ? new Date(localStorage.getItem("startDateEvent")) : '')
    const [startTime, setStartTime] = useState(localStorage.getItem('startTimeEvent') || '')
    const [endTime, setEndTime] = useState(localStorage.getItem('endTimeEvent') || '')
    const [typeEvent, setTypeEvent] = useState(localStorage.getItem('typeEvent'))

    const getDateValue = (date) => {
        setStartDate(date);
    }
    const handleClick = () => {
        setNameEvent()
        setStartDate()
        setShortDescription()
        setStartTime()
        setEndTime()
        setTypeEvent()
    }
    if(localStorage.getItem('typeEvent')==='null'){
        localStorage.setItem('typeEvent', event.conf?.type)
    }
    let shortDescriptionDefault;
    if (shortDescription != `undefined`) {
        shortDescriptionDefault = shortDescription
    } else shortDescriptionDefault = event.conf?.shortTopic

    let stime, etime;
    if (event.conf?.startTime !== null){
        stime = event.conf?.startTime.substring(0,5)
    }else stime = '00:00'
    if(event.conf?.endTime !== null){
        etime=event.conf?.endTime.substring(0,5)
    }else etime = '00:00'

    useEffect(() => {
        localStorage.setItem('nameEvent', nameEvent)
        localStorage.setItem('shortDescriptionEvent', shortDescription.value)
        localStorage.setItem('startDateEvent', startDate)
        localStorage.setItem('startTimeEvent', startTime)
        localStorage.setItem('endTimeEvent', endTime)
        if (localStorage.getItem(`typeEvent`) !== `null`) {
            localStorage.setItem('typeEvent', typeEvent)
        }

    }, [nameEvent, shortDescription, startDate, startTime, endTime, typeEvent])


    return (
        <form className="creation-field-form1">
            <section className="full-inputEvent">
                <label>Название события</label>
                <InputCreateEvent type="text"
                                  value={nameEvent}
                                  setValue={setNameEvent}
                                  placeholder={event.conf?.name}></InputCreateEvent>
            </section>
            <section className="full-inputEvent">
                <label>Краткое описание</label>
                <textarea className="shortDescription-textarea"
                          defaultValue={shortDescriptionDefault}
                          value={shortDescription.value} onChange={v => setShortDescription({value: v.target.value})}>
                < /textarea>
            </section>

            <section className="date-and-time-event">
                <div className="data-time-field">
                    <label>Дата</label>
                    <Calendar2Week className="icons-data-time" size="25px"></Calendar2Week>
                    <DatePicker wrapperClassName="date-picker"
                                selected={startDate? startDate : dayjs(event.conf?.date).toDate()}
                                onChange={getDateValue}
                                dateFormat="dd.MM.yyyy"
                    />
                </div>
                <div className="data-time-field">
                    <label>Время начала</label>
                    <InputTime value={startTime? startTime : stime} setValue={setStartTime} type="time" placeholder="11:40"></InputTime>
                </div>
                <div className="data-time-field">
                    <label>Время окончания</label>
                    <InputTime value={endTime? endTime: etime} setValue={setEndTime} type="time" placeholder=""></InputTime>
                </div>
            </section>
            <RadioButtons></RadioButtons>
            <Group className="buttons-stepper1">
                <Button className="btn-forth-step" onClick={() => {
                    step();
                    handleClick()
                }}>Далее</Button>
            </Group>
        </form>
    );
}

export default FirstStep;