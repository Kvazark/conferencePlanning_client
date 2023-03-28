import { Link, NavLink } from 'react-router-dom';
import styles from './topMenu.style.css';
import {FormControl, Nav, Navbar, Form, Container} from "react-bootstrap";
import Profile from "./Profile";
import * as Icon from 'react-bootstrap-icons';
import {ArrowRight, Bell, DoorOpen, HouseDoor, PersonCircle} from "react-bootstrap-icons";





export default function TopMenu() {
    const setNavStyle = ({isActive}) => {
        return isActive
            ? styles['active-link']
            : styles['non-active-link'];
    }

    return (
        <Navbar className="blockNav">
            <ul className = "menu">
                <li>
                    <NavLink to="/mainPageUser"><Bell color="#7E1919" size={30} /></NavLink>
                </li>
                <li>
                    <NavLink style={({isActive})=>({
                        borderBottom: isActive ? "#7E1919 solid 2px": '',
                        opacity: isActive ? 1 : ""
                    })}  to="/mainPageUser"><HouseDoor color="#7E1919" size={30} /></NavLink>
                </li>
                <li>
                    <NavLink className={setNavStyle} to="/profilePageUser"><PersonCircle color="#7E1919" size={30} /></NavLink>
                </li>
                <li>
                    <DoorOpen color="#7E1919" size={30} />
                </li>
            </ul>
            {/*<figure>*/}
            {/*    <img src={process.env.PUBLIC_URL+"Elipse2.svg"} />*/}
            {/*</figure>*/}

        </Navbar>



    );
}
