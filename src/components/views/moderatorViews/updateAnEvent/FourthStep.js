import React, {Component, useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import dayjs from "dayjs";

import {useDispatch, useSelector} from "react-redux";
import {updateInfoEvent} from "../../../../redux/actions/event";
import {Button} from "@mantine/core";

const FourthStep = ({step}) => {

    const nameEvent = localStorage.getItem('nameEvent')
    const shortDescription = localStorage.getItem('shortDescriptionEvent')!=`undefined`? localStorage.getItem('shortDescriptionEvent'): ' '
    const date = localStorage.getItem('startDateEvent')
    const startTime = localStorage.getItem('startTimeEvent')
    const endTime = localStorage.getItem('endTimeEvent')
    const typeEvent = localStorage.getItem('typeEvent')
    const organizersName = localStorage.getItem('organizersName')
    const longDescription = localStorage.getItem('longDescription')!=`undefined`?localStorage.getItem('longDescription') : ' '
    const cityEvent = localStorage.getItem('cityEvent')
    const addressEvent = localStorage.getItem('addressEvent')
    const categoryList = JSON.parse(localStorage.getItem('categoryList'))

    const id = useSelector(state => state.event.id)

    let startDate = dayjs(date).format("DD.MM.YYYY")
    // console.log({date})
    const dispatch = useDispatch()
    //let id = 1

    const startTimeEvent = startTime+':00'
    const endTimeEvent = endTime+':00'
    console.log(categoryList)

    let imgUrl = 'https://sun9-22.userapi.com/impf/JE4MhUUAwR_NNugWJJUbiQ-4ZpaB8uR2DCsTUQ/X74abVCzZg8.jpg?size=1590x530&quality=95&crop=80,0,1437,479&sign=74fa159992ac5dc1278e50d09cdacd5b&type=cover_group'
    return (
        <section>
            <div>
                <p>{id}</p>
                <p>{nameEvent}</p>
                <p style={{whiteSpace: "pre-wrap"}}>{shortDescription}</p>
                <p>{startDate}</p>
                <p>{startTime}</p>
                <p>{endTime}</p>
                <p>{typeEvent}</p>
                <div style={{whiteSpace: "pre-wrap"}}>{longDescription}</div>
                <p>{organizersName}</p>
                <p>{cityEvent}</p>
                <p>{addressEvent}</p>
                <p>{categoryList}</p>
            </div>

            <div className="buttons-stepper4">
                <Button className="save-change-event-button" style={{}}
                        onClick={() => {
                            dispatch(updateInfoEvent(id,nameEvent, typeEvent, shortDescription, longDescription,
                                addressEvent, cityEvent, startDate, startTimeEvent,endTimeEvent, organizersName, imgUrl,categoryList));
                            step();
                        }}>Опубликовать</Button>
            </div>

        </section>
    );
}

export default FourthStep;