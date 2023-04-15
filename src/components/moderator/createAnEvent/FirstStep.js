import React, {Component, useContext, useState} from 'react';
import styles from "./firstStepStyle.css"
import InputCreateEvent from "../../inputs/input_forCreateEvent/InputCreateEvent";
import InputProfile from "../../inputs/input_forProfile/InputProfile";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Calendar2Week, Clock} from "react-bootstrap-icons";
import Input from "../../inputs/input/Input";
import InputTime from "../../inputs/input_forCreateEvent/InputTime";
import AddRemoveInputSchedule from "../../inputs/input_forCreateEvent/AddRemoveInputSchedule";
import AddRemoveInputCategory from "../../inputs/input_forCreateEvent/AddRemoveInputCategory";


const FirstStep = () => {

    const [nameEvent, setNameEvent] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [longDescription, setLongDescription] = useState("");
    const [addressEvent, setAddressEvent] = useState("");
    const [organizersName, setOrganizersName] = useState("");

    const [startDate, setStartDate] = useState(new Date());
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const getDateValue = (date) => {
        setStartDate(date);
    }

    return (
        <form className="creation-field-form1">
            <section className="full-inputEvent">
                <label>Название события</label>
                <InputCreateEvent value={nameEvent} setValue={setNameEvent} type="text" placeholder=""></InputCreateEvent>
            </section>
            <section className="full-inputEvent">
                <label>Краткое описание</label>
                <textarea className="shortDescription-textarea"
                          value={shortDescription.value} onChange={v => setShortDescription({value: v.target.value})}>
                < /textarea>
            </section>
            <section className="full-inputEvent">
                <label>Дополнительная информация</label>
                <textarea className="longDescription-textarea"
                          value={longDescription.value} onChange={v => setLongDescription({value: v.target.value})}>
                < /textarea>
            </section>
            <section className="full-inputEvent">
                <label>Адрес</label>
                <InputCreateEvent value={addressEvent} setValue={setAddressEvent} type="text" placeholder=""></InputCreateEvent>
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
            <section className="full-inputEvent">
                <label>Организатор</label>
                <InputCreateEvent value={organizersName} setValue={setOrganizersName} type="text"
                                  placeholder=""></InputCreateEvent>
            </section>
            <section className="full-inputEvent">
                <label>Категории</label>
                <AddRemoveInputCategory></AddRemoveInputCategory>
            </section>
        </form>
    );
}

export default FirstStep;