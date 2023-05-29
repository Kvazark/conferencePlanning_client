import styles from './profileStyle.css';
import InputProfile from "../../commonComponents/details/inputs/input_forProfile/InputProfile";
import {Camera, Key, Pencil, X, XLg} from "react-bootstrap-icons";
import ButtonChangePassword from "../../commonComponents/details/inputs/input_forProfile/ButtonChangePassword";
import TopMenu from "../../user/TopMenu";

import React, {useEffect, useState} from "react";
import UserAvatar from "./UserAvatar";
import {useDispatch, useSelector} from "react-redux";
import {updateInfoUser} from "../../../redux/actions/user";


const Profile = () => {
    const dispatch = useDispatch()
    const apiURL = "https://localhost:7215/api/user/getUserById?id=";
    const [info, setInfo] = useState([]);
    const id = useSelector(state => state.user.id)

    useEffect(() => {
        fetch(apiURL+`${id}`)
            .then(res => res.json())
            .then(result => {
                setInfo(result);
            });
    }, []);
    console.log(id)


    const [userName, setUserName] = useState("");
    const [userSurname, setUserSurname] = useState("");
    const [patronymic, setPatronymic] = useState("");
    const [position, setPosition] = useState("");
    const [organizationName, setOrganizationName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");


    let newUserName;
    let newUserSurname;
    let newPatronymic;
    let newPosition;
    let newOrganizationName;
    let newPhoneNumber;

    if (userName===""){
        if(info.userName) newUserName = info.userName
        else newUserName = " "
    }
    else{newUserName = userName}

    if (userSurname===""){
        if(info.userSurname) newUserSurname = info.userSurname
        else newUserSurname = " "
    }
    else{newUserSurname = userSurname}

    if (patronymic===""){
        if(info.patronymic) newPatronymic = info.patronymic
        else newPatronymic = " "
    }
    else{newPatronymic = patronymic}

    if (position===""){
        if(info.position) newPosition = info.position
        else newPosition = " "
    }
    else{newPosition = position}

    if (organizationName===""){
        if(info.organizationName) newOrganizationName = info.organizationName
        else newOrganizationName = " "
    }
    else{newOrganizationName = organizationName}

    if (phoneNumber===""){
        if(info.phoneNumber) newPhoneNumber = info.phoneNumber
        else newPhoneNumber = " "
    }
    else{newPhoneNumber = phoneNumber}

    console.log(id, newUserName, newUserSurname, newPatronymic, newPosition, newOrganizationName, newPhoneNumber)

    return (
        <main>
            <TopMenu/>
            <section className="profile">
                <UserAvatar idUser={id}></UserAvatar>
                <form className="info">
                    <div className="fieldset">
                        <section className="full-input">
                            <label>Имя</label>
                            <InputProfile value={userName} setValue={setUserName} type="text" placeholder={info.userName}></InputProfile>
                        </section>
                        <section className="full-input">
                            <label>Фамилия</label>
                            <InputProfile value={userSurname} setValue={setUserSurname} type="text"  placeholder={info.userSurname}></InputProfile>
                        </section>
                        <section className="full-input">
                            <label>Отчество</label>
                            <InputProfile value={patronymic} setValue={setPatronymic} type="text" placeholder={info.patronymic} ></InputProfile>
                        </section>
                        <section className="full-input">
                            <label>Должность</label>
                            <InputProfile value={position} setValue={setPosition} type="text" placeholder={info.position} ></InputProfile>
                        </section>
                        <section className="full-input">
                            <label>Номер телефона</label>
                            <InputProfile value={phoneNumber} setValue={setPhoneNumber} type="text" placeholder={info.phoneNumber} ></InputProfile>
                        </section>
                    </div>
                    <div>
                        <ButtonChangePassword></ButtonChangePassword>
                    </div>
                    <button className="save-changeBtn"  type="button" onClick={() => dispatch(updateInfoUser(id, newUserName, newUserSurname, newPatronymic, newPosition, newOrganizationName, newPhoneNumber))}
                    >сохранить изменения</button>
                </form>
            </section>
        </main>


    );
};

export default Profile;