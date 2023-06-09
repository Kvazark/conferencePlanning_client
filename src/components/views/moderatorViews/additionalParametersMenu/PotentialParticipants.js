import React, {Component, useEffect, useState} from 'react';
import {NavLink, useLocation} from "react-router-dom";
import "./potentialParticipantsStyle.css"
import {Plus, X} from "react-bootstrap-icons";
import {useDispatch, useSelector} from "react-redux";
import {removeViewPP} from "../../../../redux/reducers/eventReducer";
import {deleteSection} from "../../../../redux/actions/event";
import {addUser, updateStatus} from "../../../../redux/actions/questionnaire";

const PotentialParticipants = ({idEvent}) => {

    const [potentialParticipants, setPotentialParticipants] = useState([]);

    const location = useLocation()
    const {state} = location;
    let id;

    if(idEvent) id = idEvent
    else id = state.eventId

    // const location = useLocation()
    // const {state} = location;
    // const apiURL='https://localhost:7215/api/conferences/getPotentialParticipants?confId='+`${state.eventId}`
    const apiURL='https://localhost:7215/api/conferences/getPotentialParticipants?confId='+`${id}`
    useEffect(() => {
        fetch(apiURL)
            .then(response => response.json())
            .then(result => {
                setPotentialParticipants(result);
            });
    }, []);
    const dispatch = useDispatch()

    const handleAddClick = (idQuest) => {
        dispatch(updateStatus(idQuest,'Accepted'))
    };
    const handleRemoveClick=(index)=>{

        const list = [...potentialParticipants];
        if (list[index].id) {
            //dispatch(deletePP(list[index].id));
        }
        list.splice(index, 1);
        setPotentialParticipants(list);
    }
    let path = `/moderator/eventsListModerator/viewPotentialParticipant`

    if(potentialParticipants.length===0){
        return(
            <div>
                <h3 className="no-quest-h3">Новых заявок на событие нет</h3>
                <X className='icon-x1' size='33px' color='#206F6D'
                onClick={()=>dispatch(removeViewPP())}></X>
            </div>

        );

    }else{
        return (
            <div>
                <X className='icon-x2' size='33px' color='#206F6D'
                   onClick={()=>dispatch(removeViewPP())}></X>
                <section className="mw-list-pp"
                // onClick={ {x.userId}}
                >
                    {potentialParticipants?.map((x, index) => <>
                        <div className="card-potenPartic">
                            <Plus onClick={()=>handleAddClick(x.questId)}
                                size='33px' color='#206F6D'></Plus>
                            <NavLink className="navlink-p"
                                     to={path} state={{
                                    data: {idUser: x.userId, eventId: id, scientificDegree: x.scientificDegree, dockladTheme: x.dockladTheme, type: x.type, indexItem: index
                                    }}} style={{textDecoration: 'none'}}>
                                <p>{x.userSurname} {x.userName} {x.patronymic}, {x.position}</p>
                            </NavLink>
                            <X onClick={() =>
                                handleRemoveClick(index)
                            } size='33px' color='#206F6D'></X>
                        </div>
                    </>)}
                </section>
            </div>

        );
    }
}

export default PotentialParticipants;