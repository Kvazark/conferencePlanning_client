import {Routes, Route, NavLink} from 'react-router-dom';

import './App.css';
import Homepage from './components/user/views/Homepage';
import Profile from './components/user/views/Profile';
import TopMenu from './components/user/TopMenu'
import LeftMenu from "./components/moderator/LeftMenu";
import HomePageModerator from "./components/moderator/views/HomePageModerator";
import OrganizationProfile from "./components/moderator/views/OrganizationProfile";
import EventsList from "./components/moderator/views/EventsList";
import Registration from "./components/authorization/registration/Registration";
import Login from "./components/authorization/login/Login";
import ListNotifications from "./components/user/views/ListNotifications";


// function App() {
//   return (
//     // <div className="App">
//     //     <TopMenu />
//     //     <Routes>
//     //         <Route path="/mainPage" element={<Homepage />} />
//     //         <Route path="/profilePage" element={<Profile />} />
//     //     </Routes>
//     //   {/*<header className="App-header">*/}
//     //   {/*</header>*/}
//     // </div>

//   );
// }
export default function User  () {
    return(
        // <main>
        //     <div>
        //         <Routes>
        //             <Route path="/registration" element={<Registration/>}/>
        //             <Route path="/login" element={<Login/>}/>
        //         </Routes>
        //     </div>
        //     <Registration></Registration>
        // </main>
        // ........................у пользователя
        // <main>
        //     <div>
        //         <TopMenu />
        //     </div>
        //     <div>
        //         <Routes>
        //             <Route path="/listNotifications" element={<ListNotifications />} />
        //             <Route path="/mainPageUser" element={<Homepage />} />
        //             <Route path="/profilePageUser" element={<Profile />} />
        //             <Route path="/login" element={<Login />} />
        //         </Routes>
        //     </div>
        // </main>
        //..................................у модератора
        <main>
            <div>
                <LeftMenu />
            </div>
            <div>
                <Routes>
                    <Route path="/mainPageModerator" element={<HomePageModerator />} />
                    <Route path="/organizationProfilePageModerator" element={<OrganizationProfile />} />
                    <Route path="/eventsListModerator" element={<EventsList/>}/>
                </Routes>
            </div>
         </main>
        )
}



//export default App;
