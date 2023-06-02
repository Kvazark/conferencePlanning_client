import React from "react";
import styles from "./inputStyle.css"

const Input=(props)=>{
    return(
        <input className="inputs" onChange={(event)=> props.setValue(event.target.value)}
               id = {props.id}
               value={props.value}
               type={props.type}
               placeholder={props.placeholder}/>
    );
};
export default Input;