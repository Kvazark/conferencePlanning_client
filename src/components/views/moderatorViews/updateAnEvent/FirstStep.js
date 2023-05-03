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


//({onChangeName, onChangeAddress})
const FirstStep = ({step}) => {


    const [event, setEvent] = useState({});
    const idEventEdit = localStorage.getItem('idEventEdit')

    useEffect(() => {
        fetch(`https://localhost:7215/api/conferences/getConferenceById?id=${idEventEdit}`)
            .then(res => res.json())
            .then(result => {
                setEvent(result);
            })
            .catch(() => {

            })
    }, []);
    console.log(event.conf?.name)

    const [nameEvent, setNameEvent] = useState(localStorage.getItem('nameEvent') || '')
    const [shortDescription, setShortDescription] = useState(localStorage.getItem('shortDescriptionEvent') || '')

    const [startDate, setStartDate] = useState(localStorage.getItem('startDateEvent') ? new Date(localStorage.getItem("startDateEvent")) : '')
    const [startTime, setStartTime] = useState(localStorage.getItem('startTimeEvent') || '')
    const [endTime, setEndTime] = useState(localStorage.getItem('endTimeEvent') || '')

    const [typeEvent, setTypeEvent] = useState(localStorage.getItem('typeEvent') || '')

    const idCurrentEvent = localStorage.getItem('idCurrentEvent')
    const idEvent = useSelector(state => state.event.id)
    let id
    if(idCurrentEvent!=null){
        id = idCurrentEvent
    }else{
        id = idEvent
    }

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
        useEffect(() => {
            localStorage.setItem('nameEvent', nameEvent)
            localStorage.setItem('shortDescriptionEvent', shortDescription.value)
            localStorage.setItem('startDateEvent', startDate)
            localStorage.setItem('startTimeEvent', startTime)
            localStorage.setItem('endTimeEvent', endTime)
            localStorage.setItem('typeEvent', typeEvent)
        }, [nameEvent, shortDescription,startDate, startTime, endTime,typeEvent])


    let shortDescriptionDefault;
    if(shortDescription!= `undefined`){
        shortDescriptionDefault = shortDescription
    }else{
        shortDescriptionDefault=""
    }

    return (
        <form className="creation-field-form1">
            <section className="full-inputEvent">
                <label>Название события</label>
                <InputCreateEvent type="text"
                                  value={nameEvent}
                                  setValue={setNameEvent}
                                  placeholder=""></InputCreateEvent>
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
                                selected={startDate}
                                onChange={getDateValue}
                                dateFormat="dd.MM.yyyy"
                    />
                </div>
                <div className="data-time-field">
                    <label>Время начала</label>
                    <InputTime value={startTime} setValue={setStartTime} type="time" placeholder=""></InputTime>
                </div>
                <div className="data-time-field">
                    <label>Время окончания</label>
                    <InputTime value={endTime} setValue={setEndTime} type="time" placeholder=""></InputTime>
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