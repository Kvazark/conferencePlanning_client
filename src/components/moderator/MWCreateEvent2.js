import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import InputCreateEvent from "../inputs/input_forCreateEvent/InputCreateEvent";
import RadioButtons from "../inputs/input_forCreateEvent/RadioButtons";
import {Calendar2Week} from "react-bootstrap-icons";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import {addNewEvent} from "../../redux/actions/event";
import {useDispatch, useSelector} from "react-redux";

const MwCreateEvent2 = () => {
    const dispatch = useDispatch()
    const nameEvent = localStorage.getItem('nameEvent')
    const date = localStorage.getItem('startDateEvent')
    const typeEvent = localStorage.getItem('typeEvent')
    // const [startDate, setStartDate] = useState(new Date())

    let startDate = dayjs(date).format("DD.MM.YYYY")
    const moderatorId = useSelector(state => state.user.id)

    console.log(nameEvent,typeEvent, startDate, moderatorId)


/////навигация
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/moderator/eventsListModerator/updateAnEvent`;
        navigate(path);
    }
    const idEvent = useSelector(state => state.event.id)
    console.log(idEvent)
    if(idEvent.length>0){
        routeChange()
    }


    return (
        <div className="create-event-div" >
            <p>Привет</p>
            <button className="cont-create-new-event-Btn"  type="button"  onClick={()=>{dispatch(addNewEvent(nameEvent,typeEvent,startDate, moderatorId))}}>создать</button>
        </div>
    );

}

export default MwCreateEvent2;