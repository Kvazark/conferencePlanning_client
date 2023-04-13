import React, {Component} from 'react';
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import ListNotifications from "../components/views/userViews/ListNotifications";
import Homepage from "../components/views/userViews/Homepage";
import Profile from "../components/views/userViews/Profile";
import {useSelector} from "react-redux";

// function RequireAuth({ children }) {
//     const isAuth = useSelector(state => state.user.isAuth)
//
//     return isAuth === true ? children : <Navigate to="/login" replace />;
// }
//
// export default RequireAuth;
const RequireAuth=({children})=>{
    const location = useLocation();
    const isAuth = useSelector(state => state.user.isAuth)
    if(!isAuth){
        return <Navigate to='/login' state={{from: location}}/>
    }
    return children;

}
export default RequireAuth;