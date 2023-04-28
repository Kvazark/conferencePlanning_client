import React, {Component, useState} from 'react';
import {useLocation} from "react-router-dom";

const FourthStep = () => {
    const [nameEvent, setNameEvent] = useState(localStorage.getItem('nameEvent') || '')
    return (
        <section>
            <p>{nameEvent}</p>

        </section>
    );
}

export default FourthStep;