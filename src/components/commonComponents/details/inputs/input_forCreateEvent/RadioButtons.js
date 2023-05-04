import React, {Component, useEffect, useState} from 'react';
import {Radio, RadioGroup} from "@mui/material";
import "./radioButtonsStyle.css"


const RadioButtons = () => {

    const [typeEvent, setTypeEvent] = useState(localStorage.getItem('typeEvent') || '')

    useEffect(()=>{
        localStorage.setItem('typeEvent', typeEvent)
    },[typeEvent])
    const handleChange = (e) => {
        setTypeEvent(e.target.value);


        // onChange(e.target.value);
    }


    return (
        <section className="full-inputEvent">
            <RadioGroup onChange={handleChange} value={typeEvent}>
                <label>Формат проведения</label>
                <label className="radio-btn-block">
                    <Radio
                        name="type"
                        id='1'
                        value="онлайн"
                        checked={typeEvent === 'онлайн'}
                        sx={{"& .MuiSvgIcon-root": {
                                color: 'rgba(32, 111, 109, 0.7)',
                                }}}
                    />
                    <span>онлайн</span>
                </label>
                <label className="radio-btn-block">
                    <Radio
                        name="type"
                        id='2'
                        value="очный"
                        checked={typeEvent === 'очный'}
                        sx={{"& .MuiSvgIcon-root": {
                                color: 'rgba(32, 111, 109, 0.7)',
                            }}}
                    />
                    <span>очный</span>
                </label>
                <label className="radio-btn-block">
                    <Radio
                        name="type"
                        id='3'
                        value="гибридный"
                        checked={typeEvent === 'гибридный'}
                        sx={{"& .MuiSvgIcon-root": {
                                color: 'rgba(32, 111, 109, 0.7)',
                            }}}
                    />
                    <span>гибридный</span>
                </label>
            </RadioGroup>
        </section>
    );

}

export default RadioButtons;