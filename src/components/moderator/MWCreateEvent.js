import React, {Component, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import InputCreateEvent from "../views/moderatorViews/updateAnEvent/input_forCreateEvent/InputCreateEvent";
import "./mwCreateEventStyle.css"
import {Calendar2Week} from "react-bootstrap-icons";
import DatePicker from "react-datepicker";
import RadioButtons from "../views/moderatorViews/updateAnEvent/input_forCreateEvent/RadioButtons";
import dayjs from "dayjs";
import {addNewEvent} from "../../redux/actions/event";
import {useDispatch, useSelector} from "react-redux";

const MwCreateEvent = ({onChange}) => {
    const dispatch = useDispatch()

    const [nameEvent, setNameEvent] = useState(localStorage.getItem('nameEvent') || '')
    const [typeEvent, setTypeEvent] =  useState(localStorage.getItem('typeEvent') || '')
    // const [startDate, setStartDate] = useState(localStorage.getItem('startDateEvent') ? new Date(localStorage.getItem("startDateEvent")) : new Date())
    const [startDate, setStartDate] = useState(new Date())

    const getDateValue = (date) => {
        setStartDate(date);
    }
    //let startDate1 = dayjs(startDate).format("DD.MM.YYYY")
    let show=true


    const handleClick=()=>{
        setNameEvent()
        setTypeEvent()
        setStartDate()
        onChange(show)
        //addNewEvent(nameEvent,typeEvent,startDate1)
    }
    useEffect(()=>{
        localStorage.setItem('nameEvent', nameEvent)
       // localStorage.setItem('typeEvent', typeEvent)
        localStorage.setItem('startDateEvent', startDate)
    },[nameEvent, startDate])


/////навигация
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/moderator/eventsListModerator/updateAnEvent`;
        navigate(path);
    }
    /////для кнопки
    // const [value, setValue] = useState('')
    // const handleChange = () => {
    //     setValue(value)
    // }
    const check =
        nameEvent.length > 0 &&
        // typeEvent != "" &&
        (startDate > new Date());

    // let d = startDate1[0]+startDate1[1]
    // let m = startDate1[3]+startDate1[4]
    // let y = startDate1[6]+startDate1[7]+startDate1[8]+startDate1[9]

    // console.log(d, m, y)
    return (
        <div className="create-event-div" >
            <section className="full-inputEvent">
                <label>Название события</label>
                <InputCreateEvent type="text" value={nameEvent} setValue={setNameEvent} placeholder="Введите название, состоящее минимум из 3-х символом"></InputCreateEvent>
            </section>
            <RadioButtons></RadioButtons>
            <section className="data-time-field">
                <label>Дата проведения</label>
                <Calendar2Week className="icons-data-time" size="25px"></Calendar2Week>
                <DatePicker wrapperClassName="date-picker"
                            selected={startDate}
                            onChange={getDateValue}
                            dateFormat="dd.MM.yyyy"
                />
            </section>
            {/*<button className="cont-create-new-event-Btn"  type="button" disabled={!check} onClick={()=>{routeChange();handleClick()}}>создать</button>*/}
            <button className="cont-create-new-event-Btn"  type="button" disabled={!check} onClick={()=>{handleClick()}}>продолжить</button>
        </div>
    );

}

export default MwCreateEvent;