import {Routes, Route, NavLink, useNavigate, Navigate} from 'react-router-dom';

import './App.css';
import Homepage from './components/views/userViews/Homepage';
import Profile from './components/views/userViews/Profile';
import HomePageModerator from "./components/views/moderatorViews/HomePageModerator";
import OrganizationProfile from "./components/views/moderatorViews/OrganizationProfile";
import EventsListByModerator from "./components/views/moderatorViews/EventsListByModerator";
import Registration from "./components/authorization/registration/Registration";
import Login from "./components/authorization/login/Login";
import ListNotifications from "./components/views/userViews/ListNotifications";
import UpdateAnEvent from "./components/views/moderatorViews/UpdateAnEvent";
import RequireAuth from "./routes/RequireAuth";
import ViewingAnEvent from "./components/views/userViews/ViewingAnEvent";
import ViewingAnEventModerator from "./components/views/moderatorViews/ViewingAnEventModerator";


function App() {
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(auth())
    // }, [])

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
                        <Route path="eventsListModerator" element={<RequireAuth><EventsListByModerator/></RequireAuth>}></Route>
                        <Route path="eventsListModerator/updateAnEvent"
                               element={<RequireAuth><UpdateAnEvent/></RequireAuth>}></Route>
                        <Route path="mainPageModerator/viewingAnEvent"
                               element={<RequireAuth><ViewingAnEventModerator/></RequireAuth>}></Route>
                    </Route>
                </Routes>

            </div>
        </main>
    )
}

export default App;
