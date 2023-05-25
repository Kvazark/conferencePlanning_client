import React, {Component, useEffect, useState} from 'react';
import "./mwEditEventStyle.css"
import {Journal, Pencil, People, X} from "react-bootstrap-icons";
import {NavLink, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteEvent} from "../../redux/actions/event";
import {logout} from "../../redux/reducers/userReducer";
import {setViewPP} from "../../redux/reducers/eventReducer";

const MwEditEvent = ({idEventEdit}) => {
    const dispatch = useDispatch()
    //const idEventEdit = localStorage.getItem('idEventEdit')


    let path = `/moderator/eventsListModerator/updateAnEvent`
    let path2 = `/moderator/eventsListModerator/editParticipantsList`

    return (
        <div className="setting-event-field">
            <NavLink
                to={path} state={{eventId: idEventEdit}} style={{textDecoration: 'none'}}>
                <button className='btn-setting-event-field'>
                    <Pencil size="18px" style={{marginTop: '3px'}}></Pencil>
                    <span>редактировать</span>
                </button>
            </NavLink>
            {/*<NavLink to={path2} state={{eventId: idEventEdit}} style={{textDecoration: 'none'}}>*/}
            {/*    <button className='btn-setting-event-field'>*/}
            {/*        <People size="18px" style={{marginTop:'3px'}}></People>*/}
            {/*        <span>анкеты</span>*/}
            {/*    </button>*/}
            {/*</NavLink>*/}

            <button className='btn-setting-event-field' onClick={()=>{dispatch(setViewPP()) }}>
                <People size="18px" style={{marginTop: '3px'}}></People>
                <span>анкеты</span>
            </button>
            <NavLink
                to={path2} state={{eventId: idEventEdit}} style={{textDecoration: 'none'}}>
                <button className='btn-setting-event-field'>
                    <Journal size="18px" style={{marginTop: '3px'}}></Journal>
                    <span>порядок выступления</span>
                </button>
            </NavLink>
            <button className='btn-setting-event-field' onClick={() => {
                dispatch(deleteEvent(idEventEdit))
            }}>
                <X size="25px" style={{marginRight: '-3px', marginLeft: '-3px'}}></X>
                <span>удалить</span>
            </button>
        </div>

    );
}

export default MwEditEvent;