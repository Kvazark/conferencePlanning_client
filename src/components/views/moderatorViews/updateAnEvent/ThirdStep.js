import React, {Component, useEffect, useState} from 'react';
import AddRemoveInputSchedule from "./input_forCreateEvent/AddRemoveInputSchedule";
import "./thirdStepStyle.css"
import {Button} from "@mantine/core";
import {addNewSchedule, updateInfoEvent} from "../../../../redux/actions/event";
import {useDispatch, useSelector} from "react-redux";
import dayjs from "dayjs";

const ThirdStep = ({step}) => {
    const idEventEdit = localStorage.getItem('idEventEdit')
    const idEvent = useSelector(state => state.event.id)
    let id
    if (idEventEdit != null) {
        id = idEventEdit
    } else {
        id = idEvent
    }
    const[section, setSection] = useState('')
    useEffect(() => {
        fetch(`https://localhost:7215/api/section/getSections?confId=${id}`)
            .then(res => res.json())
            .then(result => {
                setSection(result);
            })
            .catch(() => {

            })
    }, []);
    
    return (
        <main className="creation-field3">
            <h2>Расписание события без учёта участников</h2>
            <AddRemoveInputSchedule dataList={section} idEvent={id} step={step}></AddRemoveInputSchedule>
        </main>
    );
}

export default ThirdStep;