import React, {Component} from 'react';
import AddRemoveInput from "../../inputs/input_forCreateEvent/AddRemoveInput";
import "./thirdStepStyle.css"

const ThirdStep = () => {
    return (
        <main className="creation-field3">
            <h2>Расписание события без учёта участников</h2>
            <AddRemoveInput/>
        </main>
    );
}

export default ThirdStep;