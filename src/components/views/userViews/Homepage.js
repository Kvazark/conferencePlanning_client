import TopMenu from "../../user/TopMenu";
import React, {useEffect, useState} from "react";
import ListEvent from "../../commonComponents/ListEvent";

const Homepage = () => {

    return (
        <main>
            <TopMenu/>
            <ListEvent></ListEvent>
        </main>
    );
};

export default Homepage;