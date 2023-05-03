import React, {Component, useState} from 'react';
import InputCreateEvent from "./details/inputs/input_forCreateEvent/InputCreateEvent";
import "./modalWindowStyle.css"
import {useNavigate} from "react-router-dom";

const ModalWindow = ({active, setActive, children}) => {

    return (
        <div className={active?"modal-block active":"modal-block"} onClick={()=>setActive(false)}>
            <div className="block-content-mw" onClick={e=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    );

}

export default ModalWindow;