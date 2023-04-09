import React, {Component, useState} from 'react';
import Input from "../../inputs/input/Input";
import { login } from "../../../redax/actions/user";
import {NavLink} from "react-router-dom";
import style from "./loginStyle.css"
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../../redax/reducers/userReducer";
import {DoorOpen} from "react-bootstrap-icons";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.user.isAuth)
    return (
        <fieldset className="form-authorization2">
            <div className="headerLogin">Вход в аккаунт</div>
            <div className="group-input">
                <Input value={email} setValue={setEmail} type="text" placeholder="Введите ваш Email..."></Input>
                <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..."></Input>
            </div>
            <button className="login_btn"
                    onClick={() => dispatch(login(email,password))}>Войти
            </button>
            <NavLink className="toRegistration" to="/registration">Нет аккаунта?<span>Зарегистрироваться</span></NavLink>

            {isAuth && <div className="navbar__login" onClick={() => dispatch(logout())}><DoorOpen size={30}/></div> }

        </fieldset>
    );

}

export default Login;