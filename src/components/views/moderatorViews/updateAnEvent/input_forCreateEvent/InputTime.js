import React, {Component} from 'react';
import style from "./inputTime.css"
const InputTime = (props) => {
    return (
        <input className="inputTime" onChange={(event) => props.setValue(event.target.value)}
               value={props.value}
               type={props.type}
               placeholder={props.placeholder}/>

    );

}

export default InputTime;