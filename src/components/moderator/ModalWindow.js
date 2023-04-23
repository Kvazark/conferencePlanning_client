import React, {Component, useState} from 'react';
import InputCreateEvent from "../inputs/input_forCreateEvent/InputCreateEvent";
import "./modalWindowStyle.css"
import {useNavigate} from "react-router-dom";

const ModalWindow = ({active, setActive}) => {
    const [type, setType] = useState("");

    const handleChange = (e) => {
        setType(e.target.value);
    }

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/moderator/eventsListModerator/updateAnEvent`;
        navigate(path);
    }
    return (
        <div className={active?"modal-block active":"modal-block"} onClick={()=>setActive(false)}>
            <div className="create-event-div" onClick={e=>e.stopPropagation()}>
                <section className="full-inputEvent">
                    <label>Название события</label>
                    <InputCreateEvent type="text" placeholder=""></InputCreateEvent>
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
                            checked={type === 'online'} />
                        <span>онлайн</span>
                    </label>
                    <label className="radio-btn-block">
                        <input
                            type="radio"
                            name="type"
                            id='2'
                            value="notOnline"
                            onChange={handleChange}
                            checked={type === 'notOnline'} />
                        <span>очный</span>
                    </label>
                    <label className="radio-btn-block">
                        <input
                            type="radio"
                            name="type"
                            id='3'
                            value="hybrid"
                            onChange={handleChange}
                            checked={type === 'hybrid'} />
                        <span>гибридный</span>
                    </label>
                </section>
                <button className="cont-create-new-event-Btn" onClick={routeChange}>продолжить</button>
            </div>
        </div>
    );

}

export default ModalWindow;