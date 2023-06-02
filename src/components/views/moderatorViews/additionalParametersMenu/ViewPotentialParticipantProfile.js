import React, {Component, useEffect, useState} from 'react';
import {NavLink, useLocation} from "react-router-dom";
import "./viewPotenParticProfileStyle.css"
import {Pencil} from "react-bootstrap-icons";
import avatarLogo from "../../../../img/cat.jpg";
import {updateStatus} from "../../../../redux/actions/questionnaire";
import {useDispatch} from "react-redux";
import potentialParticipants from "./PotentialParticipants";

const ViewPotentialParticipantProfile = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const {state} = location;
    const apiURL='https://localhost:7215/api/user/getUserById?id='+`${state.data.idUser}`
    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetch(apiURL)
            .then(res => res.json())
            .then(result => {
                setInfo(result);
            });
    }, []);
    const apiURL2='https://localhost:7215/api/questionnaire/getQuestionnaireByUserId?userId='+`${state.data.idUser}`
    const [infoQuest, setInfoQuest] = useState([]);
    //чтобы dispatch 3 раза не выполнялся
    useEffect(() => {
        fetch(apiURL2)
            .then(res => res.json())
            .then(result => {
                setInfoQuest(result);
            });
    }, []);

    let path = `/moderator/eventsListModerator`;
    const avatar = avatarLogo
    return (
        <section>
            <NavLink to={path} state={{eventId: state.data.eventId}}>
                <button className="back-viewEvent" style={{background:'#206F6D'}}>
                    назад
                </button>
            </NavLink>
            <section className="field-info-quest" style={{marginTop:'-120px'}}>
                <div className="photo-user" >
                    <img className="photo" onError={(e)=>e.target.src =avatar} src={`https://localhost:7215/api/photos/getUserPhotoById?userId=${state.data.idUser}`} />
                </div>
                <div className="stripe-info">
                    <span>ФИО</span>
                    <p>{info?.userSurname} {info?.userName} {info?.patronymic}</p>
                </div>
                <div className="stripe-info">
                    <span>должность и организация</span>
                    <p>{info?.position}, {info?.organizationName}</p>
                </div>
                <div className="stripe-info">
                    <span>почта</span>
                    <p>{info?.email}</p>
                </div>
                <div className="stripe-info">
                    <span>номер телефона</span>
                    <p>{info?.phoneNumber}</p>
                </div>
                <div className="stripe-info">
                    <span>учёная степень</span>
                    <p>{state.data.scientificDegree}</p>
                </div>
                <div className="stripe-info">
                    <span>тема доклада</span>
                    <p>{state.data.dockladTheme}</p>
                </div>
                <div className="stripe-info">
                    <span>формат выступления</span>
                    <p>{state.data.type}</p>
                </div>
            </section>
        </section>
    );

}

export default ViewPotentialParticipantProfile;