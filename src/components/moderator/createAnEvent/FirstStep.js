import React, {Component, useContext, useState} from 'react';
import styles from "./firstStepStyle.css"
import InputCreateEvent from "../../inputs/input_forCreateEvent/InputCreateEvent";
import InputProfile from "../../inputs/input_forProfile/InputProfile";


const FirstStep = () => {

    const [nameEvent, setNameEvent] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [longDescription, setLongDescription] = useState("");
    const [addressEvent, setAddressEvent] = useState("");
    const [organizersName, setOrganizersName] = useState("");
    return (
        <form className="creation-field1">
            <section className="full-inputEvent">
                <label>Название события</label>
                <InputProfile value={nameEvent} setValue={setNameEvent} type="text" placeholder=""></InputProfile>
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
                <InputProfile value={addressEvent} setValue={setAddressEvent} type="text" placeholder=""></InputProfile>
            </section>
            <section className="full-inputEvent">
                <label>Организатор</label>
                <InputProfile value={organizersName} setValue={setOrganizersName} type="text"
                              placeholder=""></InputProfile>
            </section>
        </form>


    );
}

export default FirstStep;