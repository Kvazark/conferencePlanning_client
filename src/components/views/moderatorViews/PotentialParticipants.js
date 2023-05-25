import React, {Component, useEffect, useState} from 'react';
import {NavLink, useLocation} from "react-router-dom";
import "./potentialParticipantsStyle.css"
import {Plus, X} from "react-bootstrap-icons";
import {useDispatch, useSelector} from "react-redux";
import {removeViewPP} from "../../../redux/reducers/eventReducer";
import {deleteSection} from "../../../redux/actions/event";

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
                //result.sort((a,b) => new Date(a.date).getTime()< new Date(b.date).getTime()? 1: -1);
                setPotentialParticipants(result);
            });
    }, []);

    const dispatch = useDispatch()
   // const viewPP = useSelector(state => state.event.viewPP)
    console.log()

    const handleAddClick = (id) => {

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

    // var array = Array(potentialParticipants.length).fill(false);
    // const [listIndex, setIndexList] = useState('')
    // useEffect(()=>{
    //     setIndexList(array)
    // },[potentialParticipants])
    // console.log(listIndex)

    if(potentialParticipants.length===0){
        return(
            <div>
                <h3 className="no-quest-h3">Новых заявок на событие нет</h3>
                <X className='icon-x1' size='33px' color='#206F6D'
                onClick={()=>dispatch(removeViewPP())}></X>
            </div>

        );

    }else{
        // const handleClick = (index) => {
        //     const list = [...listIndex];
        //     list[index] = true;
        //     setIndexList(list)
        // }
        // console.log(state.value.indexItem)
        return (
            <div>
                <X className='icon-x2' size='33px' color='#206F6D'
                   onClick={()=>dispatch(removeViewPP())}></X>
                <section className="mw-list-pp"
                // onClick={ {x.userId}}
                >
                    {potentialParticipants?.map((x, index) => <>
                        <div className="card-potenPartic"
                             // style={state.value.indexItem===index?{background: 'rgba(101, 101, 101, 0.2)'}:{}}
                            // style = {true?{background: 'rgba(101, 101, 101, 0.2)'}:{}}
                        >
                            <Plus onClick={()=>handleAddClick(x.userId)}
                                size='33px' color='#206F6D'></Plus>
                            <NavLink className="navlink-p"
                                     to={path} state={{
                                    data: {idUser: x.userId, eventId: id, scientificDegree: x.scientificDegree, dockladTheme: x.dockladTheme, type: x.type, indexItem: index
                                    }}} style={{textDecoration: 'none'}}>
                                <p>{x.userName}, {x.userSurname},{x.patronymic}, {x.position}</p>
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