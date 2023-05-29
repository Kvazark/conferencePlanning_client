import React, {Component, useEffect, useState} from 'react';
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import './questionnaireStyle.css'
import InputProfile from "../../commonComponents/details/inputs/input_forProfile/InputProfile";
import {Radio, RadioGroup} from "@mui/material";
import {addNewQuestionnaire} from "../../../redux/actions/questionnaire";


const Questionnaire = () => {
    const dispatch = useDispatch();

    const location = useLocation();
    const {state} = location;

    let navigate = useNavigate();

    let path = `/user/viewingAnEvent`;
    const idUser = useSelector(state => state.user.id)

    let eventType = state.typeEvent


    const [theme, setTheme] = useState('')
    const [scientificDegree, setScientificDegree] = useState('')
    const [typeEvent, setTypeEvent] = useState(eventType)
    const handleChange = (e) => {
        setTypeEvent(e.target.value);
    }
    console.log(idUser, theme, scientificDegree, typeEvent)
    if(eventType==='гибридный'){
        var block = <div className='radio-group'>
            <RadioGroup onChange={handleChange} value={typeEvent}>
                <label>Выберите формат выстплуения</label>
                <label className="radio-btn-block">
                    <Radio
                        name="type"
                        id='1'
                        value="онлайн"
                        checked={typeEvent === 'онлайн'}
                        sx={{"& .MuiSvgIcon-root": {
                                color: 'rgb(128, 14, 14, 0.8)',
                            }}}
                    />
                    <span>я буду выступать онлайн</span>
                </label>
                <label className="radio-btn-block">
                    <Radio
                        name="type"
                        id='2'
                        value="очно"
                        checked={typeEvent === 'очно'}
                        sx={{"& .MuiSvgIcon-root": {
                                color: 'rgb(128, 14, 14,0.8)',
                            }}}
                    />
                    <span>я буду выступать очно</span>
                </label>
            </RadioGroup>
        </div>
    }else{
        var block = <div></div>
    }


    return (
        <div className='field-ques'>
            <NavLink to={path} state={{eventId: state.idEvent}}>
                <button className="back-viewEvent">
                    назад
                </button>
            </NavLink>

            <form className='questionnaire-form'>
                <div className="fieldset-quest">
                    <section className="full-input">
                        <label>Тема доклада</label>
                        <InputProfile value={theme} setValue={setTheme}
                                      placeholder='Введите тему докалада...'></InputProfile>
                    </section>
                    <section className="full-input">
                        <label>Учёная стрепень</label>
                        <InputProfile
                            value={scientificDegree} setValue={setScientificDegree}
                            placeholder='Введите свою учёную степень, в случае отсутствия напишите "у.с. отсутствует"'></InputProfile>
                    </section>
                    {block}
                </div>
                <button className="send-quest-btn" type='button'
                        onClick={() => dispatch(addNewQuestionnaire(idUser, state.idEvent, theme, typeEvent, scientificDegree))}>отправить
                </button>
            </form>
        </div>
    );

}

export default Questionnaire;