import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {Bell, BuildingGear, CardList, DoorOpen, HouseDoor, PersonCircle} from "react-bootstrap-icons";
import {Navbar} from "react-bootstrap";
import styles from './leftMenu.style.css';

class LeftMenu extends Component {

    render() {

        // Этот стиль будет применен к <NavLink>, когда
        // маршрут, на который он ссылается, в данный момент выбран.
        let activeStyle = {
            background: "#6A888C",
            color: "#F2F2F2",
            borderRadius: "0px 5px 5px 0px"
        };
        let noactiveStyle = {
            color: "#6A888C",
        };

        return (
            <Navbar className="blockNavLeft">
                <ul className="leftMenu">
                    <NavLink style={({isActive}) =>
                        isActive ? activeStyle : noactiveStyle} to="/moderator/mainPageModerator">
                        <li>
                            <div className="blockLi"><HouseDoor size={30}/>Главная</div>
                        </li>
                    </NavLink>
                    <NavLink style={({isActive}) =>
                        isActive ? activeStyle : noactiveStyle} to="/moderator/eventsListModerator">
                        <li>
                            <div className="blockLi"><CardList size={30}/>События</div>
                        </li>
                    </NavLink>
                    <NavLink style={({isActive}) =>
                        isActive ? activeStyle : noactiveStyle} to="/moderator/organizationProfilePageModerator">
                        <li>
                            <div className="blockLi"><BuildingGear size={30}/>Организация</div>
                        </li>
                    </NavLink>
                </ul>
                {/*<figure>*/}
                {/*    <img src={process.env.PUBLIC_URL+"Elipse2.svg"} />*/}
                {/*</figure>*/}

            </Navbar>
        );
    }
}

export default LeftMenu;