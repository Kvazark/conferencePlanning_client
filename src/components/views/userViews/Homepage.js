import TopMenu from "../../user/TopMenu";
import {useSelector} from "react-redux";
import {Navigate, NavLink, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import headCardEvent from "../../../img/head-card-event.svg";
import style from"./homePageStyle.css"
import dayjs from "dayjs";
import {ClockHistory, HouseDoor, PinMap} from "react-bootstrap-icons";
import ViewingAnEvent from "./ViewingAnEvent";

const Homepage = () => {
    const [events, setEvents] = useState([]);
    const apiURL = "https://localhost:7215/api/conferences/getAllConferences";
    // const arr = Array.from({length: 180}, (v, i) => i + 1);
    //
    useEffect(() => {
        fetch(`https://localhost:7215/api/conferences/getAllConferences`)
            .then(res => res.json())
            .then(result => {
                setEvents(result);
            });
    }, []);
    const avatarCardEvent = headCardEvent

    // const fetchData = async () => {
    //     const response = await axios.get(`https://localhost:7215/api/conferences/getAllConferences`)
    //
    //     setEvents(response.data)
    // }
    // const id = `0a45e30e-e56d-4d0e-8ae2-8f15e0f09ac4`
    // axios.get(`https://localhost:7215/api/conferences/getConferenceById?:id=${id}`).then((response) => console.log(response));
    const data = "Hello Everyone";
    return (
        <main>
            <TopMenu/>
            <section className="list-events-section">
                <h2 className="home">Welcome to the homepage!</h2>
                {events.map((x) => <>
                <div className="card">   <NavLink to='/user/viewingAnEvent' state={{eventId:x.id}} style={{ textDecoration: 'none' }}>
                    <div className="avatarEvent">
                        <img src={avatarCardEvent}/>
                    </div>
                    <div className="event-info-card">
                        <h3>{x.name}</h3>
                        <p><PinMap size = "22px" color="rgba(126, 25, 25, 0.9)"></PinMap> {x.addres}, {x.city}</p>
                        <p><ClockHistory size="22px" color="rgba(126, 25, 25, 0.9)"></ClockHistory>
                            {dayjs(x.date).format("DD.MM.YYYY")} {x.startTime} {x.endTime}</p>
                        <div className="categories-card">
                            {x.categories.map(category => (
                                <div className="separately-category" key={category.call}>{category}</div>
                            ))}
                        </div>
                    </div>
                </NavLink>
                </div>
                    </>)}
            </section>
        </main>
    );
};

export default Homepage;