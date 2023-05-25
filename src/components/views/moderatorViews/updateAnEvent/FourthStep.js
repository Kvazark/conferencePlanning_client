import React, {Component, useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import dayjs from "dayjs";

import {useDispatch, useSelector} from "react-redux";
import {addAvatarEvent, updateInfoEvent} from "../../../../redux/actions/event";
import {Button} from "@mantine/core";
import headCardEvent from "../../../../img/head-card-event.svg";
import {updateAvatar} from "../../../../redux/actions/user";

const FourthStep = ({step}) => {

    const nameEvent = localStorage.getItem('nameEvent')
    //console.log(nameEvent)
    let shortDescription = localStorage.getItem('shortDescriptionEvent')
    if(!shortDescription) shortDescription = ' '
    const date = localStorage.getItem('startDateEvent')
    const startTime = localStorage.getItem('startTimeEvent')
    const endTime = localStorage.getItem('endTimeEvent')
    const typeEvent = localStorage.getItem('typeEvent')
    let longDescription = localStorage.getItem('longDescription')
    if(!longDescription) longDescription = ' '
    let cityEvent = localStorage.getItem('cityEvent')
    if(!cityEvent) cityEvent = ' '
    let addressEvent = localStorage.getItem('addressEvent')
    if(!addressEvent) addressEvent = ' '
    let categoryList = JSON.parse(localStorage.getItem('categoryList')? localStorage.getItem('categoryList'): null)

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
    let startTimeEvent;
    let endTimeEvent;
    if(!startTime) startTimeEvent = '00:00:00';
    else startTimeEvent = startTime+':00';
    if(!endTime) endTimeEvent = '00:00:00';
    else endTimeEvent = endTime+':00';

    //console.log(!JSON.stringify(categoryList)==='[{}]')
    let categories

    if(JSON.stringify(categoryList)!==null) categories = []
    else categories = categoryList
    console.log(JSON.stringify(categoryList)!==null,categories)
    const moderatorId = useSelector(state => state.user.id)
    console.log(moderatorId)

    const avatar = headCardEvent
    function changeHandler(e) {
        const file = e.target.files[0]
        dispatch(addAvatarEvent(id,file))
    }
    let imgUrl = `getConferencePhotoById${id}`
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
                <p>city: {cityEvent}</p>
                <p>address: {addressEvent}</p>
                <p>categories: {categories}</p>
                <p>mod id: {moderatorId}</p>
            </div>
            {/*///addAvatarEvent*/}
            <div>
                <input className="" accept="image/*" onChange={e => changeHandler(e)}
                       type="file"/>
            </div>

            <div className="buttons-stepper4">
                <Button className="save-change-event-button" style={{}}
                        onClick={() => {
                            dispatch(updateInfoEvent(id,nameEvent, typeEvent, shortDescription, longDescription,
                                addressEvent, cityEvent, startDate, startTimeEvent,endTimeEvent, moderatorId, imgUrl,categories));
                            step();
                        }}>Опубликовать</Button>
            </div>

        </section>
    );
}

export default FourthStep;