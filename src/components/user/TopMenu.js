import {Link, NavLink} from 'react-router-dom';
import styles from './topMenu.style.css';
import {FormControl, Nav, Navbar, Form, Container, Button} from "react-bootstrap";
import Profile from "../views/userViews/Profile";
import * as Icon from 'react-bootstrap-icons';
import {ArrowRight, Bell, DoorOpen, HouseDoor, PersonCircle} from "react-bootstrap-icons";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../reducers/userReducer";


export default function TopMenu() {
    let activeStyle = {
        background: "#7E1919",
        color: "#F2F2F2",
        // marginTop:"-7px",
        // paddingTop: "7px",
        borderRadius: "0px 0px 100px 100px"
    };
    let noActiveStyle = {
        color: "#7E1919",
    };
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.user.isAuth)

    return (
        <Navbar className="blockNav">
            <ul className="menu">
                <NavLink style={({isActive}) =>
                    isActive ? activeStyle : noActiveStyle}
                         to="/listNotifications">
                    <li><Bell size={30}/></li>
                </NavLink>

                <NavLink style={({isActive}) =>
                    isActive ? activeStyle : noActiveStyle}
                         to="/mainPageUser">
                    <li>
                        <HouseDoor size={30}/>
                    </li>
                </NavLink>
                <NavLink style={({isActive}) =>
                    isActive ? activeStyle : noActiveStyle}
                         to="/profilePageUser">
                    <li>
                        <PersonCircle size={30}/>
                    </li>
                </NavLink>
                {/*<NavLink style={({isActive}) =>*/}
                {/*    isActive ? activeStyle : noActiveStyle}*/}
                {/*         to="/login">*/}
                {/*    <li>*/}
                {/*        <DoorOpen size={30}/>*/}
                {/*    </li>*/}
                {/*</NavLink>*/}
                <li>
                    {isAuth && <div className="navbar__login" onClick={() => dispatch(logout()) }><DoorOpen size={30}/></div> }
                    {/*<Button onClick={()=>dispatch(logout())} ><DoorOpen size={30}/></Button>*/}
                </li>
            </ul>
            {/*<figure>*/}
            {/*    <img src={process.env.PUBLIC_URL+"Elipse2.svg"} />*/}
            {/*</figure>*/}

        </Navbar>


    );
}
