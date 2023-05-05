import React, {Component, useEffect, useState} from 'react';
import "./mwEditEventStyle.css"
import {Journal, Pencil, People, X} from "react-bootstrap-icons";
import {NavLink, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteEvent} from "../../redux/actions/event";

const MwEditEvent = ({idEventEdit}) => {
    const dispatch = useDispatch()
    //const idEventEdit = localStorage.getItem('idEventEdit')
    console.log(idEventEdit)

    let path = `/moderator/eventsListModerator/updateAnEvent`
    return (
            <div className="setting-event-field">
                <NavLink
                    to={path} state={{eventId: idEventEdit}} style={{textDecoration: 'none'}}>
                    <button className='btn-setting-event-field'>
                        <Pencil size="18px" style={{marginTop:'3px'}}></Pencil>
                        <span>редактировать</span>
                    </button>
                </NavLink>

                <button className='btn-setting-event-field'>
                    <People size="18px" style={{marginTop:'3px'}}></People>
                    <span>анкеты</span>
                </button>
                <button className='btn-setting-event-field' >
                    <Journal size="18px" style={{marginTop:'3px'}}></Journal>
                    <span>порядок выступления</span>
                </button>
                <button className='btn-setting-event-field' onClick={()=>{dispatch(deleteEvent(idEventEdit))}}>
                    <X size="25px" style={{marginRight:'-3px', marginLeft:'-3px'}}></X>
                    <span>удалить</span>
                </button>
            </div>

    );
}

export default MwEditEvent;