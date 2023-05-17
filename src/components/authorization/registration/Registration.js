import React, {Component, useState} from 'react';
import Input from "../../commonComponents/details/inputs/input/Input";
import {NavLink} from "react-router-dom";
import style from "./registrationStyle.css"
import Checkbox from "../../commonComponents/details/inputs/input/Checkbox";
import {registration, registrationModerator, registrationUser} from "../../../redux/actions/user";
import RadioBtn from "../../commonComponents/details/inputs/input/RadioBtn";

const Registration = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [userSurname, setUserSurname] = useState("");
    const [organizName, setOrganizName] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => {
        setIsChecked(!isChecked);
    };
    var role = 'user';
    const handleClick=()=>{
        if(role=="user"){
            registrationUser(userSurname, userName, email, password )
        }else if (role =="moderator"){
            registrationModerator(organizName, email, password)
        }

    }
    let message;
    if (isChecked) {
        message = <div className="group-input2">
            <Input value={organizName} setValue={setOrganizName} type="text" placeholder="Введите название организации..."></Input>
        </div>
        role = "moderator";
    } else {
        message = <div className="group-input2">
            <Input value={userName} setValue={setUserName} type="text" placeholder="Введите ваше имя..."></Input>
            <Input value={userSurname} setValue={setUserSurname} type="text" placeholder="Введите вашу фамилию..."></Input>
        </div>
        role = "user";
    }

    return (
        <fieldset className="form-authorization1">
            <div className="headerReg">Регистация</div>
            <div className="group-input">
                <Input value={email} setValue={setEmail} type="text" placeholder="Введите ваш Email..."></Input>
                <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..."></Input>
                <label className="block-reg">
                    <input type="checkbox" checked={isChecked} onChange={handleChange}/>
                    <span>я буду организатором</span>
                </label>
                {message}
            </div>

            <button className="registration_btn"
                    onClick={handleClick}>Зарегистрироваться
            </button>
            <NavLink className="toLogin" to="/login">Уже есть аккаунт?<span>Войти</span></NavLink>
        </fieldset>


    );
}

export default Registration;

