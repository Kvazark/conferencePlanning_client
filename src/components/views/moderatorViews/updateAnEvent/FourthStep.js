import React, {Component, useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import dayjs from "dayjs";

import {useDispatch, useSelector} from "react-redux";
import {updateInfoEvent} from "../../../../redux/actions/event";
import {Button} from "@mantine/core";

const FourthStep = ({step}) => {

    const nameEvent = localStorage.getItem('nameEvent')
    //console.log(nameEvent)
    const shortDescription = localStorage.getItem('shortDescriptionEvent')!=`undefined`? localStorage.getItem('shortDescriptionEvent'): ' '
    const date = localStorage.getItem('startDateEvent')
    const startTime = localStorage.getItem('startTimeEvent')
    const endTime = localStorage.getItem('endTimeEvent')
    const typeEvent = localStorage.getItem('typeEvent')
    const organizersName = localStorage.getItem('organizersName')
    const longDescription = localStorage.getItem('longDescription')!=`undefined`?localStorage.getItem('longDescription') : ' '
    const cityEvent = localStorage.getItem('cityEvent')
    const addressEvent = localStorage.getItem('addressEvent')
    const categoryList = JSON.parse(localStorage.getItem('categoryList')? localStorage.getItem('categoryList'): null)

    // const currentIdEvent = localStorage.getItem('currentIdEvent')
    // console.log(currentIdEvent)
    const idEventEdit = localStorage.getItem('idEventEdit')
    const idEvent = useSelector(state => state.event.identity)
    let id
    if (idEventEdit != null) {
        id = idEventEdit
    } else {
        id = idEvent
    }

    let startDate = dayjs(date).format("DD.MM.YYYY")
    // console.log({date})
    const dispatch = useDispatch()
    //let id = 1

    const startTimeEvent = startTime+':00'
    const endTimeEvent = endTime+':00'
    //console.log(!JSON.stringify(categoryList)==='[{}]')
    let categories
    if(JSON.stringify(categoryList)!=='[{}]') categories = categoryList
    else categories = "categories"
    const moderatorId = useSelector(state => state.user.id)
    console.log(moderatorId)

    let imgUrl = 'https://sun9-22.userapi.com/impf/JE4MhUUAwR_NNugWJJUbiQ-4ZpaB8uR2DCsTUQ/X74abVCzZg8.jpg?size=1590x530&quality=95&crop=80,0,1437,479&sign=74fa159992ac5dc1278e50d09cdacd5b&type=cover_group'
    return (
        <section>
            <div>
                <p>id: {id}</p>
                <p>name: {nameEvent}</p>
                <p style={{whiteSpace: "pre-wrap"}}>shortTopic: {shortDescription}</p>
                <p>date: {startDate}</p>
                <p>startTime: {startTime}</p>
                <p>endTime: {endTime}</p>
                <p>type: {typeEvent}</p>
                <div style={{whiteSpace: "pre-wrap"}}>fullTopic: {longDescription}</div>
                <p>organizer: {organizersName}</p>
                <p>city: {cityEvent}</p>
                <p>address: {addressEvent}</p>
                <p>categories: {categories}</p>
                <p>mod id: {moderatorId}</p>
            </div>

            <div className="buttons-stepper4">
                <Button className="save-change-event-button" style={{}}
                        onClick={() => {
                            dispatch(updateInfoEvent(id,nameEvent, typeEvent, shortDescription, longDescription,
                                addressEvent, cityEvent, startDate, startTimeEvent,endTimeEvent, moderatorId, imgUrl,categoryList));
                            step();
                        }}>Опубликовать</Button>
            </div>

        </section>
    );
}

export default FourthStep;