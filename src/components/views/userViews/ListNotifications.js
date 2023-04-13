import React, {Component, useEffect} from 'react';
import TopMenu from "../../user/TopMenu";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const ListNotifications =()=> {
    let navigate = useNavigate()
    // const isAuth = useSelector(state => state.user.isAuth)
    // useEffect(()=>{
    //     if (isAuth){
    //         navigate('/user/listNotifications')
    //     }
    //     if(!isAuth){
    //         navigate('/login')
    //     }
    // },[])
        return (
            <main>
                <TopMenu />
                <div>
                    <h2 className="listNotifications">Welcome to the list notifications!</h2>
                </div>
            </main>

        );

}

export default ListNotifications;