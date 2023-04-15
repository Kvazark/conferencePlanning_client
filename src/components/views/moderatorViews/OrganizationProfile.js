import React, {Component} from 'react';
import InputProfile from "../../inputs/input_forProfile/InputProfile";
import ButtonChangePassword from "../../inputs/input_forProfile/ButtonChangePassword";
import style from "./organizationProfileStyle.css"
import LeftMenu from "../../moderator/LeftMenu";
import {logout} from "../../../redux/reducers/userReducer";
import {DoorOpen} from "react-bootstrap-icons";
import {useDispatch, useSelector} from "react-redux";

const OrganizationProfile = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.user.isAuth)
    return (
        <main>
            <LeftMenu />
            <section className="profileOrg">
                <form className="infoOrg">
                    <div className="fieldsetOrg">
                        <section className="full-inputOrg">
                            <label>Название организации</label>
                            <InputProfile></InputProfile>
                        </section>
                        <section className="full-inputOrg">
                            <label>Контактная почта</label>
                            <InputProfile></InputProfile>
                        </section>
                        <section className="full-inputOrg">
                            <label>Контактный телефон</label>
                            <InputProfile></InputProfile>
                        </section>
                    </div>
                    <div className="changePasswordOrg">
                        <ButtonChangePassword></ButtonChangePassword>
                    </div>
                    <button className="save-changeButton">сохранить изменения</button>
                </form>
            </section>
            {isAuth && <div className="exit" onClick={() => dispatch(logout()) }>выход<DoorOpen size={30}/></div> }
        </main>

    );
}

export default OrganizationProfile;