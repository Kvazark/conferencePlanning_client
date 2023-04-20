import {Routes, Route, NavLink, useNavigate, Navigate} from 'react-router-dom';

import './App.css';
import Homepage from './components/views/userViews/Homepage';
import Profile from './components/views/userViews/Profile';
import TopMenu from './components/user/TopMenu'
import LeftMenu from "./components/moderator/LeftMenu";
import HomePageModerator from "./components/views/moderatorViews/HomePageModerator";
import OrganizationProfile from "./components/views/moderatorViews/OrganizationProfile";
import EventsList from "./components/views/moderatorViews/EventsList";
import Registration from "./components/authorization/registration/Registration";
import Login from "./components/authorization/login/Login";
import ListNotifications from "./components/views/userViews/ListNotifications";
import CreateAnEvent from "./components/views/moderatorViews/CreateAnEvent";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "./redux/actions/user";
import RequireAuth from "./routes/RequireAuth";
import ViewingAnEvent from "./components/views/userViews/ViewingAnEvent";
import ViewingAnEventModerator from "./components/views/moderatorViews/ViewingAnEventModerator";


function App() {
////////////////////////////////////авторизация/////////////////////////////////////////////////
    const isAuth = useSelector(state => state.user.isAuth)
    const role = useSelector(state => state.user.role)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(auth())
    }, [])

    return (
        <main>
            <div>
                <Routes>
                    <Route path="/registration" element={<Registration/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
                <Routes>
                    <Route path="/user">
                        <Route path="listNotifications" element={<RequireAuth><ListNotifications/></RequireAuth>}/>
                        <Route path="mainPageUser" element={<RequireAuth><Homepage/></RequireAuth>}/>
                        <Route path="viewingAnEvent" element={<RequireAuth><ViewingAnEvent/></RequireAuth>}/>
                        <Route path="profilePageUser" element={<RequireAuth><Profile/></RequireAuth>}/>
                    </Route>
                </Routes>

                <Routes>
                    <Route path="/moderator">
                        <Route path="mainPageModerator" element={<RequireAuth><HomePageModerator/></RequireAuth>}/>
                        <Route path="organizationProfilePageModerator"
                               element={<RequireAuth><OrganizationProfile/></RequireAuth>}/>
                        <Route path="eventsListModerator" element={<RequireAuth><EventsList/></RequireAuth>}></Route>
                        <Route path="eventsListModerator/createAnEvent"
                               element={<RequireAuth><CreateAnEvent/></RequireAuth>}></Route>
                        <Route path="mainPageModerator/viewingAnEvent"
                               element={<RequireAuth><ViewingAnEventModerator/></RequireAuth>}></Route>
                    </Route>
                </Routes>

            </div>
        </main>
    )
}

export default App;
