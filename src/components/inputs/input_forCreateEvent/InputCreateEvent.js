import React, {Component} from 'react';
import styles from "./inputCreateStyle.css"

const InputCreateEvent = (props,onChange) => {
    // const handleChange = (event) => {
    //     onChange(event.target.value) // callback-функция
    //     props.setValue(event.target.value)
    // }
    return (
        <input className="inputCreateEvent" onChange={(event)=> props.setValue(event.target.value)}
               value={props.value}
               type={props.type}
               placeholder={props.placeholder}/>
        // <input className="inputCreateEvent" onChange={handleChange}
        //        value={props.value}
        //        type={props.type}
        //        placeholder={props.placeholder}/>
    );
}

export default InputCreateEvent;