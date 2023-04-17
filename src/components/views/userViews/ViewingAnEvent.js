import React, {Component, useEffect, useState} from 'react';
import TopMenu from "../../user/TopMenu";
import {NavLink, useLocation} from "react-router-dom";
import {ClockHistory, PinMap} from "react-bootstrap-icons";
import dayjs from "dayjs";

const ViewingAnEvent =(props)=> {
    const location = useLocation();
    const { state } = location;

    const [event, setEvent] = useState({});

    useEffect(() => {
        fetch(`https://localhost:7215/api/conferences/getConferenceById?id=${state.eventId}`)
            .then(res => res.json())
            .then(result => {
                setEvent(result);
            })
            .catch(() => {

            })
    }, [state.eventId]);

        return (
            <main>
                <TopMenu></TopMenu>
                <h2>{event.conf?.name}</h2>

                {/*<h2>{event.conf.name}</h2>*/}

                {/*{event.map((x) => <>*/}
                {/*    <div>*/}
                {/*    <h2>x.name</h2>*/}
                {/*    </div>*/}
                {/*</>)}*/}
            </main>
        );

}

export default ViewingAnEvent;