import React, {Component, useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

const PotentialParticipants = () => {

    const [potentialParticipants, setPotentialParticipants] = useState([]);
    const location = useLocation()
    const {state} = location;
    const apiURL='https://localhost:7215/api/conferences/getPotentialParticipants?confId='+`${state.eventId}`
    useEffect(() => {
        fetch(apiURL)
            .then(response => response.json())
            .then(result => {
                //result.sort((a,b) => new Date(a.date).getTime()< new Date(b.date).getTime()? 1: -1);
                setPotentialParticipants(result);
            });
    }, []);
    return (
        <div>
            {potentialParticipants.map((x, index) => <>
                <div>
                    <p>{x.userName}, {x.userSurname}, {x.scientificDegree}</p>
                </div>
                </>)}
        </div>
    );

}

export default PotentialParticipants;