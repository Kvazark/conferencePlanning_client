import React from "react";
import styles from "./buttonChangePasswordStyle.css"
import {ChevronRight, Key} from "react-bootstrap-icons";

const ButtonChangePassword=(props)=>{
    return(
        <div className="changePassword">
            <button className="field">
                <Key className="icon-key" size={25} ></Key>
                <label>Пароль</label>
                <ChevronRight className="icon-chevronRight"></ChevronRight>
            </button>
        </div>

    );
};
export default ButtonChangePassword;