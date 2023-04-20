import styles from './profileStyle.css';
import InputProfile from "../../inputs/input_forProfile/InputProfile";
import {Camera, Key, Pencil, X, XLg} from "react-bootstrap-icons";
import ButtonChangePassword from "../../inputs/input_forProfile/ButtonChangePassword";
import TopMenu from "../../user/TopMenu";
import {useDispatch, useSelector} from "react-redux";
import {API_URL} from "../../user/config";
// import avatarLogo from "../../../img/avatarLogo.svg"
import avatarLogo from "../../../img/cat.jpg"
import {deleteAvatar, updateAvatar} from "../../../redux/actions/user";
import {Navigate} from "react-router-dom";
import React, {useState} from "react";


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

    const [isHovering1, setIsHovering1] = useState(false);
    const [isHovering2, setIsHovering2] = useState(false);

    const handleMouseOver1 = () => {
        setIsHovering1(true);
    };
    const handleMouseOut1 = () => {
        setTimeout(()=>{
            setIsHovering1(false);
        }, 2000);
    };
    const handleMouseOver2= () => {
        setIsHovering2(true);

    };
    const handleMouseOut2 = () => {
        setIsHovering2(false);
    };


    return (
        <main>
            <TopMenu/>
            <section className="profile">
                <div className="photo-container" onMouseOver={handleMouseOver1}
                     onMouseOut= {handleMouseOut1}>
                    <img className="photo" src={avatar}/>
                    {isHovering1 && ( <div className="drawer-block" onMouseOver={handleMouseOver2}
                         onMouseOut= {handleMouseOut2}>
                        <label className="edit-text"><Pencil size="18px"></Pencil>изменить
                            фото</label>
                    </div>)}

                </div>
                {isHovering2 && (
                    <div className="sliding-block" onMouseOver={handleMouseOver2} onMouseOut= {handleMouseOut2}>
                        <input className="update-avatarUser-input" accept="image/*" onChange={e => changeHandler(e)}
                               type="file"/>
                        <label className="add-file-text"><Camera size="20px"
                                                                 color="rgba(126, 25, 25, 0.9)"></Camera> изменить
                            фото</label>
                        <label className="remove-file-text" onClick={()=>dispatch(deleteAvatar())}><XLg size="16px" color="rgba(126, 25, 25, 0.9)"
                                                                 style={{
                                                                     marginRight: `5px`,
                                                                     paddingLeft: `2px`
                                                                 }}></XLg> удалить фото</label>
                    </div>
                )}
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