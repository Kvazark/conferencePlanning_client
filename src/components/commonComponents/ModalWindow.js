import React, {Component, useState} from 'react';
import InputCreateEvent from "./details/inputs/input_forCreateEvent/InputCreateEvent";
import "./modalWindowStyle.css"
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {removeViewPP, setViewPP} from "../../redux/reducers/eventReducer";

const ModalWindow = ({active, setActive, children}) => {
    const dispatch = useDispatch()
    const viewPP = useSelector(state => state.event.viewPP)
    const handleChange=()=>{
        setActive(false)
        if(viewPP){
            dispatch(removeViewPP())
        }
    }

    return (
        <div className={active?"modal-block active":"modal-block"} onClick={handleChange}>
            <div className="block-content-mw" onClick={e=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    );

}

export default ModalWindow;