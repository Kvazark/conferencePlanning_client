import React, {Component} from 'react';
import LeftMenu from "../../moderator/LeftMenu";

const EventsList = () => {
    return (
        <main>
            <LeftMenu />
            <div>
                <h2 className="home">Welcome to the events by moderator!</h2>
            </div>
        </main>

    );

}

export default EventsList;