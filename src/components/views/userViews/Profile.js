import styles from './profileStyle.css';
import InputProfile from "../../inputs/input_forProfile/InputProfile";
import {Key} from "react-bootstrap-icons";
import ButtonChangePassword from "../../inputs/input_forProfile/ButtonChangePassword";
import TopMenu from "../../user/TopMenu";
const Profile = () => {
    return (
        <main>
            <TopMenu />
            <section className="profile">
                <div className="photo-container">
                    <img className="photo" src="https://img.championat.com/s/1350x900/news/big/u/w/mona-liza-s-nogami-nejroset-dopolnila-klassicheskie-kartiny_16544453091715239255.jpg"/>
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