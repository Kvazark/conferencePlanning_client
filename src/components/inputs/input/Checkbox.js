import React, {Component} from 'react';
import { useState } from "react";
import style from "./checkboxStyle.css"
import Input from "./Input";

const Checkbox = ({ label }) => {
    const [isChecked, setIsChecked] = useState(false);
    const handleChange = () => {
        setIsChecked(!isChecked);
    };
    return (
        <div className="checkbox-wrapper">
            <label>
                <input type="checkbox" checked={isChecked} onChange={handleChange}/>
                <span>{label}</span>
            </label>
        </div>

    );
};
export default Checkbox;