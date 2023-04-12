import {Routes, Route, NavLink} from 'react-router-dom';

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
import {auth} from "./redax/actions/user";


function App() {
    // return (
    //     <Routes>
    //         <Route path="/moderator" element={Moderator}/>
    //         <Route path="/user" element={User}/>
    //     </Routes>)
    // <div className="App">
    //     <TopMenu />
    //     <Routes>
    //         <Route path="/mainPage" element={<Homepage />} />
    //         <Route path="/profilePage" element={<Profile />} />
    //     </Routes>
    //   {/*<header className="App-header">*/}
    //   {/*</header>*/}
    // </div>

////////////////////////////////////авторизация/////////////////////////////////////////////////
//     const isAuth = useSelector(state => state.user.isAuth)
//     const dispatch = useDispatch()
//
//     useEffect(() => {
//         dispatch(auth())
//     }, [])
//
//     return (
//         <main>
//             <div>
//                 {!isAuth &&
//                     <Routes>
//                         <Route path="/registration" element={<Registration/>}/>
//                         <Route path="/login" element={<Login/>}/>
//                     </Routes>
//                 }
//                 <Routes>
//                     <Route path="/listNotifications" element={<ListNotifications/>}/>
//                     <Route path="/mainPageUser" element={<Homepage/>}/>
//                     <Route path="/profilePageUser" element={<Profile/>}/>
//                     <Route path="/login" element={<Login/>}/>
//                 </Routes>
//             </div>
//         </main>
//     )
////////////////////////////////////авторизация/////////////////////////////////////////////////
/////////////////////////////////////пользователь//////////////////////////////////////////
    return(
        <main>
            <div>
                <Routes>
                    <Route path="/listNotifications" element={<ListNotifications />} />
                    <Route path="/mainPageUser" element={<Homepage />} />
                    <Route path="/profilePageUser" element={<Profile />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </main>
    )
/////////////////////////////////////модератор//////////////////////////////////////////
//     return (
//         <main>
//             <div>
//                 <Routes>
//                     <Route path="/moderator">
//                         <Route path="mainPageModerator" element={<HomePageModerator/>}/>
//                         <Route path="organizationProfilePageModerator" element={<OrganizationProfile/>}/>
//                         <Route path="eventsListModerator" element={<EventsList/>}></Route>
//                         <Route path="eventsListModerator/createAnEvent" element={<CreateAnEvent/>}></Route>
//                     </Route>
//                 </Routes>
//             </div>
//         </main>
//     )
///////////////////////////////////////////////////////////////////////////////
}

export default App;
