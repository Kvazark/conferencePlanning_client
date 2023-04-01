import React, {Component, useState} from 'react';
import Input from "../../inputs/input/Input";
import {NavLink} from "react-router-dom";
import style from "./registrationStyle.css"
import Checkbox from "../../inputs/input/Checkbox";
import {registration} from "../../../actions/user";

const Registration = ()=>{
        const [email,setEmail]=useState("");
        const [password,setPassword]=useState("");
        const [userName,setUserName]=useState("");
        return (
            <fieldset>
                <div className="headerReg">Регистация</div>
                <div className="group-input">
                    <Input value={email} setValue={setEmail} type="text" placeholder="Введите ваш Email..."></Input>
                    <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..."></Input>
                    <Input value={userName} setValue={setUserName} type="password" placeholder="Введите ваше имя..."></Input>
                    <Checkbox label="как модератор"/>
                </div>
                <button className="registration_btn" onClick={()=> registration(email,password,userName)}>Зарегистрироваться</button>
                <NavLink className="toLogin" to="/login">Уже есть аккаунт?<span>Войти</span></NavLink>
            </fieldset>


        );
}

export default Registration;


// import React, { useState } from 'react'
// import axios from "axios";
// import { useHistory } from "react-router-dom";
//
// const Register = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confPassword, setConfPassword] = useState('');
//     const [msg, setMsg] = useState('');
//     const history = useHistory();
//
//     const Register = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post('http://localhost:5000/users', {
//                 email: email,
//                 password: password,
//                 confPassword: confPassword
//             });
//             history.push("/");
//         } catch (error) {
//             if (error.response) {
//                 setMsg(error.response.data.msg);
//             }
//         }
//     }
//
//     return (
//         <section className="hero has-background-grey-light is-fullheight is-fullwidth">
//             <div className="hero-body">
//                 <div className="container">
//                     <div className="columns is-centered">
//                         <div className="column is-4-desktop">
//                             <form onSubmit={Register} className="box">
//                                 <p className="has-text-centered">{msg}</p>
//                                 <div className="field mt-5">
//                                     <label className="label">Email</label>
//                                     <div className="controls">
//                                         <input type="text" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//                                     </div>
//                                 </div>
//                                 <div className="field mt-5">
//                                     <label className="label">Password</label>
//                                     <div className="controls">
//                                         <input type="password" className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
//                                     </div>
//                                 </div>
//                                 <div className="field mt-5">
//                                     <label className="label">Confirm Password</label>
//                                     <div className="controls">
//                                         <input type="password" className="input" placeholder="******" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
//                                     </div>
//                                 </div>
//                                 <div className="field mt-5">
//                                     <button className="button is-success is-fullwidth">Register</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }
// export default Register