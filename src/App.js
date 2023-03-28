import { Routes, Route} from 'react-router-dom';

import './App.css';
import Homepage from './components/user/Homepage';
import Profile from './components/user/Profile';
import TopMenu from './components/user/TopMenu'
import LeftMenu from "./components/moderator/LeftMenu";
import HomePageModerator from "./components/moderator/HomePageModerator";
import OrganizationProfile from "./components/moderator/OrganizationProfile";
import EventsList from "./components/moderator/EventsList";

// function App() {
//   return (
//     <div className="App">
//         <TopMenu />
//         <Routes>
//             <Route path="/mainPage" element={<Homepage />} />
//             <Route path="/profilePage" element={<Profile />} />
//         </Routes>
//       {/*<header className="App-header">*/}
//       {/*</header>*/}
//     </div>
//   );
// }
export default function User  () {
    return(
        // <main>
        //     <div>
        //         <TopMenu />
        //     </div>
        //     <div>
        //         <Routes>
        //             <Route path="/mainPageUser" element={<Homepage />} />
        //             <Route path="/profilePageUser" element={<Profile />} />
        //         </Routes>
        //     </div>
        // </main>
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



// export default App;
