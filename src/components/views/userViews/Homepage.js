import TopMenu from "../../user/TopMenu";
import React, {useContext, useEffect, useState} from "react";
import ListEvent from "../../commonComponents/ListEvent";
import {CheckCircle, Search} from "react-bootstrap-icons";

const Homepage = () => {

    const apiURL = "http://localhost:5215/api/conferences/getAllConferences";
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch(apiURL)
            .then(response => response.json())
            .then(result => {
                setEvents(result);
            });
    }, []);

    ///поиск по названию события
    const [searchInput, setSearchInput] = useState()
    const getFilteredEvents = () => {
        if (!searchInput) return events
        return events.filter(value => value.name.toLowerCase().includes(searchInput.toLowerCase()))
    }
    const filteredEvents = getFilteredEvents()
    return (
        <main>
            <TopMenu/>
            <div id="signalr-notifications">
                {/*<CheckCircle size='30px' color='rgba(126, 25, 25, 0.9)'></CheckCircle>*/}
            </div>
            <section style={{marginTop:'-25px'}}>
                <Search size='18px' color='rgba(126, 25, 25, 0.9)' style={{position:'absolute',zIndex:'1',top:'13.4vh', left:'12vw'}}></Search>
                <input className="search-input-byName-pageUser" type="text" onChange={(e) => setSearchInput(e.target.value)} value={searchInput} placeholder="Искать по названию..."/>
                <ListEvent filteredEvents={filteredEvents}></ListEvent>
            </section>
        </main>
    );
};

export default Homepage;