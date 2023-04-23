import React, {Component} from 'react';
import AddRemoveInputSchedule from "../../../inputs/input_forCreateEvent/AddRemoveInputSchedule";
import "./thirdStepStyle.css"

const ThirdStep = () => {
    return (
        <main className="creation-field3">
            <h2>Расписание события без учёта участников</h2>
            <AddRemoveInputSchedule/>
        </main>
    );
}

export default ThirdStep;