import React, {Component, useEffect, useState} from 'react';
import {NavLink, useLocation} from "react-router-dom";
import "./viewPotenParticProfileStyle.css"
import {Pencil} from "react-bootstrap-icons";
import avatarLogo from "../../../img/cat.jpg";
import {updateStatus} from "../../../redux/actions/questionnaire";
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
    const [replay, setReplay] = useState(false);
    useEffect(() => {
        setReplay(true)
        fetch(apiURL2)
            .then(res => res.json())
            .then(result => {
                setInfoQuest(result);
            });
    }, []);

    if(infoQuest.id && replay){
        if(infoQuest.status !== 1){
            dispatch(updateStatus(infoQuest.id, "Viewed"));
            setReplay(false);
        }
    }
    console.log(state.data.indexItem)
    //indexItem: state.data.indexItem}

    let path = `/moderator/eventsListModerator`;
    const avatar = avatarLogo
    return (
        <section>
            <NavLink to={path} state={{eventId: state.data.eventId}}>
                <button className="back-viewEvent" style={{background:'#206F6D'}}>
                    назад
                </button>
            </NavLink>
            <section className="profile" style={{marginTop:'-100px'}}>
                <div className="photo-user" >
                    <img className="photo" src={avatar} />
                </div>
                <div className="stripe-info">
                    <span>ФИО</span>
                    <p>{info?.userName} {info?.userSurname}</p>
                </div>
                <div className="stripe-info">
                    <span>должность</span>
                    <p>{info?.position}</p>
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