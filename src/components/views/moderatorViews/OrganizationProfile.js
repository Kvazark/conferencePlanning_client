import React, {Component} from 'react';
import InputProfile from "../../inputs/input_forProfile/InputProfile";
import ButtonChangePassword from "../../inputs/input_forProfile/ButtonChangePassword";
import style from "./organizationProfileStyle.css"
import LeftMenu from "../../moderator/LeftMenu";

const OrganizationProfile = () => {
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
        </main>

    );
}

export default OrganizationProfile;