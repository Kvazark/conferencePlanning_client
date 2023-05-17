import React, {Component} from 'react';
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addNewQuestionnaire} from "../../../redux/actions/event";

const Questionnaire = () => {
    const dispatch = useDispatch();

    const location = useLocation();
    const {state} = location;

    let navigate = useNavigate();

    let path = `/user/viewingAnEvent`;
    const idUser = useSelector(state => state.user.id)
    const theme = 'tema'
    const type = true
    const scientificDegree = 'scientificDegree'
    console.log(idUser)



    return (
        <div>
            <NavLink to={path} state={{eventId: state.idEvent}}>
                <div>
                    назад
                </div>
            </NavLink>
            <button className="send-aue-btn" onClick={()=>dispatch(addNewQuestionnaire(idUser,state.idEvent, theme, type, scientificDegree))}>ryjgrf </button>

                <h2>hfuebifvcb</h2>
        </div>
    );

}

export default Questionnaire;