import React, {Component, useEffect, useState} from 'react';
import InputProfile from "../../commonComponents/details/inputs/input_forProfile/InputProfile";
import ButtonChangePassword from "../../commonComponents/details/inputs/input_forProfile/ButtonChangePassword";
import style from "./organizationProfileStyle.css"
import LeftMenu from "../../moderator/LeftMenu";
import {logout} from "../../../redux/reducers/userReducer";
import {DoorOpen} from "react-bootstrap-icons";
import {useDispatch, useSelector} from "react-redux";
import {updateInfoModerator} from "../../../redux/actions/user";
import {useNavigate} from "react-router-dom";

const OrganizationProfile = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.user.isAuth)
    const apiURL = "https://localhost:7215/api/moderator/getModeratorById?id=";
    const [info, setInfo] = useState([]);
    const id = useSelector(state => state.user.id)

    let navigate = useNavigate();
    const routeChange = () =>{
        let path = `/moderator/eventsListModerator/createAnEvent`;
        navigate(path);
    }

    useEffect(() => {
        fetch(apiURL+`${id}`)
            .then(res => res.json())
            .then(result => {
                setInfo(result);
            });
    }, []);

    const [email, setEmail] = useState("");
    const [orgName, setOrgName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    // const [numberPhone, setNumberPhone] = useState("");
    console.log(id)

    let newOrgName;
    if (orgName==""){newOrgName = info.organizationName}
    else{newOrgName = orgName}

    let newEmail;
    if (email==""){newEmail = info.email}
    else{newEmail = email}

    let newPhoneNumber;
    if (phoneNumber==""){newPhoneNumber = info.phoneNumber}
    else{newPhoneNumber = phoneNumber}

    return (
        <main>
            <LeftMenu />
            <section className="profileOrg">
                <form className="infoOrg">
                    <div className="fieldsetOrg">
                        <section className="full-inputOrg">
                            <label>Название организации</label>
                            {/*/// */}
                            <InputProfile value={orgName} setValue={setOrgName} type="text" placeholder={info.organizationName} ></InputProfile>
                        </section>
                        <section className="full-inputOrg">
                            <label>Контактная почта</label>
                            <InputProfile value={email} setValue={setEmail} type="text" placeholder={info.email}></InputProfile>
                        </section>
                        <section className="full-inputOrg">
                            <label>Контактный телефон</label>
                            <InputProfile value={phoneNumber} setValue={setPhoneNumber} type="text" placeholder={info.phoneNumber!=='undefined'?info.phoneNumber: ''}></InputProfile>
                        </section>
                    </div>
                    <div className="changePasswordOrg">
                        <ButtonChangePassword></ButtonChangePassword>
                    </div>
                    <button className="save-changeButton" type="button" onClick={() => dispatch(updateInfoModerator(id,newOrgName,newEmail))}
                    >сохранить изменения</button>
                </form>
            </section>
            {isAuth && <div className="exit" onClick={() => dispatch(logout()) }>выход<DoorOpen size={30}/></div> }
        </main>

    );
}

export default OrganizationProfile;