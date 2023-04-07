import React, {Component} from 'react';
import styles from "./inputCreateStyle.css"

const InputCreateEvent = (props) => {

    return (
        <input className="inputCreateEvent" onChange={(event)=> props.setValue(event.target.value)}
               value={props.value}
               type={props.type}
               placeholder={props.placeholder}/>
    );
}

export default InputCreateEvent;