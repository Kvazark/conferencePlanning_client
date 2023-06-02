import React, {Component, useCallback, useEffect, useState} from 'react';
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import "./participantsListEditStyle.css"
import ListItemPartic from "./ListItemPartic";
import {useDispatch} from "react-redux";
import {updateListSequences} from "../../../../redux/actions/event";
const ParticipantsListEdit = () => {
    const dispatch = useDispatch();

    const [participants, setParticipants] = useState([]);
    const [newList, setNewList] = useState([]);

    const location = useLocation()
    const {state} = location;
    let id = state.eventId

    const apiURL='https://localhost:7215/api/conferences/getUsers?confId='+`${id}`
    useEffect(() => {
        fetch(apiURL)
            .then(response => response.json())
            .then(result => {
                setParticipants(result.sort((a, b) => a.speechNumber - b.speechNumber));
            });
    }, []);
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/moderator/eventsListModerator`;
        navigate(path);
    }

    const moveParticListItem = useCallback(
        (dragIndex, hoverIndex) => {
            const dragItem = participants[dragIndex]
            const hoverItem = participants[hoverIndex]
            // Swap places of dragItem and hoverItem in the pets array
            setParticipants(pets => {
                const updatedPets = [...pets]
                updatedPets[dragIndex] = hoverItem
                updatedPets[hoverIndex] = dragItem
                return updatedPets
            })
        },
        [participants],
    )
    console.log()
    useEffect(()=>{
        for(let i=0; i <participants.length; i++){
            setNewList(...participants[i].id)
        }

    },[participants])

    let array = new Array();
    for(let i = 0; i < participants.length*2; i+=2){
        if(i===0) array.push(participants[i/2].id, "1")
        else array.push(participants[i/2].id, `${i/2+1}`)
    }

    return (
        <div>
            <button className="back-eventsList" onClick={routeChange}>вернуться</button>
            <section className="filed-list-participants">
                {participants?.map((x, index) => (
                        <ListItemPartic
                            key={participants.id}
                            index={index}
                            FIO={x.userSurname +' '+ x.userName+' '+ x.patronymic}
                            theme={x.dockladTheme}
                            presentationFormat={x.type}
                            moveListItem={moveParticListItem}
                        />
                    ))}
                <button className="save-changeButton-list" type='button' onClick={()=>dispatch(updateListSequences(id,array))}>сохранить изменения</button>
            </section>

        </div>
    );

}

export default ParticipantsListEdit;