import styles from './profileStyle.css';
import InputProfile from "../../commonComponents/details/inputs/input_forProfile/InputProfile";
import {Camera, Key, Pencil, X, XLg} from "react-bootstrap-icons";
import ButtonChangePassword from "../../commonComponents/details/inputs/input_forProfile/ButtonChangePassword";
import TopMenu from "../../user/TopMenu";

import React, {useEffect, useState} from "react";
import UserAvatar from "./UserAvatar";
import {useSelector} from "react-redux";


const Profile = () => {

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



    return (
        <main>
            <TopMenu/>
            <section className="profile">
                <UserAvatar></UserAvatar>
                <form className="info">
                    <div className="fieldset">
                        <section className="full-input">
                            <label>Имя</label>
                            <InputProfile placeholder={info?.userName}></InputProfile>
                        </section>
                        <section className="full-input">
                            <label>Фамилия</label>
                            <InputProfile placeholder={info.userSurname}></InputProfile>
                        </section>
                        <section className="full-input">
                            <label>Отчество</label>
                            <InputProfile placeholder={info.patronymic}></InputProfile>
                        </section>
                        <section className="full-input">
                            <label>Должность</label>
                            <InputProfile></InputProfile>
                        </section>
                        <section className="full-input">
                            <label>Номер телефона</label>
                            <InputProfile placeholder={info.phoneNumber}></InputProfile>
                        </section>
                    </div>
                    <div>
                        <ButtonChangePassword></ButtonChangePassword>
                    </div>
                    <button className="save-changeBtn">сохранить изменения</button>
                </form>
            </section>
        </main>


    );
};

export default Profile;