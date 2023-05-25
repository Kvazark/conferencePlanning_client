import React, {Component, useEffect, useState} from 'react';
import LeftMenu from "../../moderator/LeftMenu";
import style from "./eventListStyle.css"
import {HouseDoor, Plus} from "react-bootstrap-icons";
import {useNavigate} from "react-router-dom";
import InputCreateEvent from "../../commonComponents/details/inputs/input_forCreateEvent/InputCreateEvent";
import ModalWindow from "../../commonComponents/ModalWindow";
import MWCreateEvent from "../../moderator/MWCreateEvent";
import MWCreateEvent2 from "../../moderator/MWCreateEvent2";
import ListEventsByModerator from "../../moderator/ListEventsByModerator";
import {useSelector} from "react-redux";
import PotentialParticipants from "./PotentialParticipants";


const ModeratorsOwnEvents = () => {

    const[modalActive, setModalActive]=useState(false)
    //для списка потенц.участников
    const[modalListActive, setModalListActive]=useState(false)
    //для моального окна "создать событие" уже с полями
    const [showResults, setShowResults] = React.useState(false)

    const handleChange = (showResults) => {
        setShowResults(showResults)
    }

    const moderatorId = useSelector(state => state.user.id)
    const apiURL = "https://localhost:7215/api/conferences/getModeratorConferences?moderatorId="+`${moderatorId}`;
    //const apiURL = "https://localhost:7215/api/conferences/getAllConferences";


    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch(apiURL)
            .then(response => response.json())
            .then(result => {
                //result.sort((a,b) => new Date(a.date).getTime()< new Date(b.date).getTime()? 1: -1);
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

    const viewPP = useSelector(state => state.event.viewPP)
    useEffect(()=>{
        if(viewPP){
            setModalListActive(()=>true)
        }else{
            setModalListActive(()=>false)
        }
    },[viewPP])



    const [idEventCard, setIdEventCard] = useState('')
    const getIdCard = (value) => {
        setIdEventCard(value)
    }


    return (
        <main style={{overflowX: `hidden`}}>
            <LeftMenu/>
            <div className="topPanel">
                <input className="search-input-byName" style={{position: `relative`, left: `10%`, top: `33px`}}
                       type="text" onChange={(e) => setSearchInput(e.target.value)} value={searchInput} placeholder="Искать по названию..."/>
                <button className="create-new-event-Btn" onClick={()=>{setModalActive(true);localStorage.clear()}}><Plus size={30}/>создать событие
                </button>
            </div>
            <section className="field-events">
                <ListEventsByModerator filteredEvents={filteredEvents} onChange={getIdCard} ></ListEventsByModerator>
            </section>
            <ModalWindow active={modalActive} setActive={setModalActive}>
                {!showResults ?
                <MWCreateEvent onChange={handleChange} ></MWCreateEvent>: <MWCreateEvent2></MWCreateEvent2>
                }
            </ModalWindow>
            {/*<ModalWindow active={modalActive} setActive={setModalActive}>*/}
            {/*    {!showResultsPeople ?*/}
            {/*        <MWCreateEvent onChange={handleChange} ></MWCreateEvent>: <MWCreateEvent2></MWCreateEvent2>*/}
            {/*    }*/}
            {/*</ModalWindow>*/}
            <ModalWindow active={modalListActive} setActive={setModalListActive}>
                {viewPP &&
                    <PotentialParticipants idEvent={idEventCard}></PotentialParticipants>
                }
            </ModalWindow>

        </main>

    );

}
export default ModeratorsOwnEvents;



