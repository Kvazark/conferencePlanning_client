import React, {Component} from 'react';
import { useState } from "react";
import style from "./checkboxStyle.css"

const Checkbox = ({ label }) => {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <div className="checkbox-wrapper">
            <label>
                <input type="checkbox" checked={isChecked} onChange={() => setIsChecked((prev) => !prev)}/>
                <span>{label}</span>

            </label>
        </div>
    );
};
export default Checkbox;