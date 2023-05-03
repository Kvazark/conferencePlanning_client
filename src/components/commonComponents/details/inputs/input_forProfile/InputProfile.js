import React from "react";
import styles from "./inputProfileStyle.css"

const InputProfile=(props)=>{
    return(
        <input className="inputProfile" onChange={(event)=> props.setValue(event.target.value)}
               value={props.value}
               type={props.type}
               placeholder={props.placeholder}/>

    );
};
export default InputProfile;