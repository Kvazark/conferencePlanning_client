import React, {Component} from 'react';
import styles from "./firstStepStyle.css"
import InputCreateEvent from "../../inputs/input_forCreateEvent/InputCreateEvent";
import InputProfile from "../../inputs/input_forProfile/InputProfile";

const FirstStep = () => {
    return (
        <form className="creation-field1">
            <section className="full-inputOrg">
                <label>Название события</label>
                <InputProfile></InputProfile>
            </section>
            <section className="full-inputOrg">
                <label>Краткое описание</label>
                <InputCreateEvent></InputCreateEvent>
            </section>
            <section className="full-inputOrg">
                <label>Дополнительная информация</label>
                <InputCreateEvent></InputCreateEvent>
            </section>
            <section className="full-inputOrg">
                <label>Адрес</label>
                <InputProfile></InputProfile>
            </section>
            <section className="full-inputOrg">
                <label>Организатор</label>
                <InputProfile></InputProfile>
            </section>
        </form>

    );
}

export default FirstStep;