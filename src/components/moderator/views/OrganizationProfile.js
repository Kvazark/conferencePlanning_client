import React, {Component} from 'react';
import InputProfile from "../../inputs/input_forProfile/InputProfile";
import ButtonChangePassword from "../../inputs/input_forProfile/ButtonChangePassword";
import style from"./organizationProfileStyle.css"

const OrganizationProfile = () => {
    return (
        <section className="profile">
            <form className="info">
                <div className="fieldset">
                    <section className="full-input">
                        <label>Название организации</label>
                        <InputProfile></InputProfile>
                    </section>
                    <section className="full-input">
                        <label>Контактная почта</label>
                        <InputProfile></InputProfile>
                    </section>
                    <section className="full-input">
                        <label>Контактный телефон</label>
                        <InputProfile></InputProfile>
                    </section>
                </div>
                <ButtonChangePassword></ButtonChangePassword>
                <button className="save-changeBtn">сохранить изменения</button>
            </form>
        </section>
    );
}

export default OrganizationProfile;