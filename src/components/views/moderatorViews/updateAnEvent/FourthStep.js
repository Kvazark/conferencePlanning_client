import React, {Component, useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import dayjs from "dayjs";

import {useDispatch, useSelector} from "react-redux";
import {addAvatarEvent, updateInfoEvent} from "../../../../redux/actions/event";
import {Button} from "@mantine/core";
import "./fourthStepStyle.css"

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

    const idEventEdit = localStorage.getItem('idEventEdit')
    const idEvent = useSelector(state => state.event.identity)
    let id
    if (idEventEdit != null) {
        id = idEventEdit
    } else {
        id = idEvent
    }

    let startDate = dayjs(date).format("DD.MM.YYYY")

    const dispatch = useDispatch()

    let startTimeEvent;
    let endTimeEvent;
    if(!startTime) startTimeEvent = '00:00:00';
    else startTimeEvent = startTime+':00';
    if(!endTime) endTimeEvent = '00:00:00';
    else endTimeEvent = endTime+':00';

    let categories

    console.log('-=-'+categoryList)
    if(JSON.stringify(categoryList)===null) categories = []
    else {
        categories=[...categoryList];
    }
    console.log(JSON.stringify(categoryList)!==null,categories)
    const moderatorId = useSelector(state => state.user.id)
    console.log(moderatorId)

    let imgUrl = `getConferencePhotoById${id}`
    return (
        <section>
            <div className='full-info'>
                <p><strong style={{color:'rgba(32, 111, 109, 1)'}}>Название события: </strong>{nameEvent}</p>
                <p style={{whiteSpace: "pre-wrap"}}><strong style={{color:'rgba(32, 111, 109, 1)'}}>Краткое описание: </strong>{shortDescription}</p>
                <p><strong style={{color:'rgba(32, 111, 109, 1)'}}>Дата: </strong>{startDate}</p>
                <p><strong style={{color:'rgba(32, 111, 109, 1)'}}>Начало в </strong>{startTime}</p>
                <p><strong style={{color:'rgba(32, 111, 109, 1)'}}>Окончание в </strong>{endTime}</p>
                <p><strong style={{color:'rgba(32, 111, 109, 1)'}}>Формат проведения: </strong>{typeEvent}</p>
                <p style={{whiteSpace: "pre-wrap"}}><strong style={{color:'rgba(32, 111, 109, 1)'}}>Дополнительное описание: </strong>{longDescription}</p>
                <p><strong style={{color:'rgba(32, 111, 109, 1)'}}>Город: </strong>{cityEvent}</p>
                <p><strong style={{color:'rgba(32, 111, 109, 1)'}}>Адресс: </strong>{addressEvent}</p>
                <p><strong style={{color:'rgba(32, 111, 109, 1)'}}>Категории: </strong>{categories.map((x)=>x+' ')}</p>
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