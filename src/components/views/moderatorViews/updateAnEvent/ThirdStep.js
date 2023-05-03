import React, {Component, useState} from 'react';
import AddRemoveInputSchedule from "../../../commonComponents/details/inputs/input_forCreateEvent/AddRemoveInputSchedule";
import "./thirdStepStyle.css"

const ThirdStep = () => {
    const [longDescription, setLongDescription] =  useState(localStorage.getItem('longDescription') || '')
    const [organizersName, setOrganizersName] = useState(localStorage.getItem('organizersName') || '')

    const [typeEvent, setTypeEvent] = useState(localStorage.getItem('typeEvent') || '')
    const [addressEvent, setAddressEvent] = useState(localStorage.getItem('addressEvent') || ' ')
    console.log(longDescription,organizersName,typeEvent,addressEvent)
    return (
        <main className="creation-field3">
            <h2>Расписание события без учёта участников</h2>
            <AddRemoveInputSchedule/>
        </main>
    );
}

export default ThirdStep;