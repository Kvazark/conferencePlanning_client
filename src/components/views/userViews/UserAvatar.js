import React, {Component, useState} from 'react';
import avatarLogo from "../../../img/cat.jpg";
import {useDispatch} from "react-redux";
import {deleteAvatar, updateAvatar} from "../../../redux/actions/user";
import {Camera, Pencil, XLg} from "react-bootstrap-icons";
import {addAvatarEvent} from "../../../redux/actions/event";

const UserAvatar = ({idUser}) => {
    // const avatar = currentUser.avatar ? `${API_URL + currentUser.avatar}` : avatarLogo
    const avatar = avatarLogo
    const dispatch = useDispatch()

    //https://localhost:7215/api/photos/getUserPhotoById?userId
    function changeHandler(e) {
        const file = e.target.files[0]
        dispatch(updateAvatar(idUser,file))
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
        <div>
            <div className="photo-container" >
                <img className="photo"  onError={(e)=>e.target.src =avatar} src={`https://localhost:7215/api/photos/getUserPhotoById?userId=${idUser}`} onMouseOver={handleMouseOver1}
                     onMouseOut= {handleMouseOut1}/>
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
                                                             color="rgba(126, 25, 25, 0.9)"></Camera> загрузить фото</label>
                    <label className="remove-file-text" onClick={()=>dispatch(deleteAvatar(idUser))}><XLg size="16px" color="rgba(126, 25, 25, 0.9)"
                                                                                                    style={{
                                                                                                        marginRight: `5px`,
                                                                                                        paddingLeft: `2px`
                                                                                                    }}></XLg> удалить фото</label>
                </div>
            )}
        </div>
    );

}

export default UserAvatar;