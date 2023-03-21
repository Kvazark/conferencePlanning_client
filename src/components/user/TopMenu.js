import { Link, NavLink } from 'react-router-dom';
import styles from './Style.module.css';

export default function TopMenu() {
    const setNavStyle = ({isActive}) => {
        return isActive
            ? styles['active-link']
            : styles['non-active-link'];
    }

    return (
        <nav>
            <ul className = "menu">
                <li><NavLink className={setNavStyle} to="/" >Home</NavLink></li>

                <li>
                    <NavLink
                        to="/"
                        className={setNavStyle}
                    >
                        Home page
                    </NavLink>
                </li>
                <li><NavLink className={setNavStyle} to="/p">Profile</NavLink></li>
            </ul>
            <hr className = "menuLine"></hr>
        </nav>

    );
}