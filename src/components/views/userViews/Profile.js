import styles from './profileStyle.css';
import InputProfile from "../../inputs/input_forProfile/InputProfile";
import {Camera, Key} from "react-bootstrap-icons";
import ButtonChangePassword from "../../inputs/input_forProfile/ButtonChangePassword";
import TopMenu from "../../user/TopMenu";
import {useDispatch, useSelector} from "react-redux";
import {API_URL} from "../../user/config";
// import avatarLogo from "../../../img/avatarLogo.svg"
import avatarLogo from "../../../img/cat.jpg"
import {updateAvatar} from "../../../redux/actions/user";
import {Navigate} from "react-router-dom";
import React from "react";

const Profile = () => {
    // const avatar = currentUser.avatar ? `${API_URL + currentUser.avatar}` : avatarLogo
    const avatar = avatarLogo
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.user)
    console.log(currentUser)


    function changeHandler(e) {
        const file = e.target.files[0]
        dispatch(updateAvatar(file))
    }

    return (
        <main>
            <TopMenu/>
            <section className="profile">
                <div className="photo-container">
                    {/*<img className="photo" src="https://img.championat.com/s/1350x900/news/big/u/w/mona-liza-s-nogami-nejroset-dopolnila-klassicheskie-kartiny_16544453091715239255.jpg"/>*/}
                    <img className="photo" src={avatar}/>

                    <input className="update-avatarUser-input" accept="image/*" onChange={e => changeHandler(e)}
                           type="file"/>
                    <div>
                        <label className="input-file-text"><Camera size="20px" color="#f2f2f2"></Camera> изменить
                            фото</label>
                    </div>

                </div>
                <form className="info">
                    <div className="fieldset">
                        <section className="full-input">
                            <label>Имя</label>
                            <InputProfile></InputProfile>
                        </section>
                        <section className="full-input">
                            <label>Фамилия</label>
                            <InputProfile></InputProfile>
                        </section>
                        <section className="full-input">
                            <label>Отчество</label>
                            <InputProfile></InputProfile>
                        </section>
                        <section className="full-input">
                            <label>Должность</label>
                            <InputProfile></InputProfile>
                        </section>
                        <section className="full-input">
                            <label>Номер телефона</label>
                            <InputProfile></InputProfile>
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