import React, {Component} from 'react';
import { useState } from "react";
import style from "./radioBtnStyle.css"

const RadioBtn = ({ label }) => {
    const [isRadio, setIsRadio] = useState(false);
    const handleChange = () => {
        setIsRadio(!isRadio);
    };
    return (
        <div className="radioBtn-wrapper">
            <label>
                <input type="radio" checked={isRadio} onChange={handleChange}/>
                <span>{label}</span>

            </label>
        </div>
    );
};
export default RadioBtn;