import React, {Component} from 'react';
import LeftMenu from "../../moderator/LeftMenu";

const HomePageModerator = () => {
    return (
        <main>
            <LeftMenu />
            <div>
                <h2 className="home">Welcome to the homepage moderator!</h2>
            </div>
        </main>

    );

}

export default HomePageModerator;