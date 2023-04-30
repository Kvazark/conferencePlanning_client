import axios from "axios";
import {setEventId} from "../reducers/eventReducer";

export const addNewEvent = (name, type, date, moderatorId) => {

    return async dispatch => {
        const data = {
            name: `${name}`,
            type: `${type}`,
            date: `${date}`,
            moderatorId: `${moderatorId}`
        };
        try {
            const response = await axios.post('https://localhost:7215/api/conferences/addNewConference', data,
                {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
            dispatch(setEventId(response.data.id))
            alert("successfully")
        } catch (error) {
            alert(error)
        }
    }

}
export const updateInfoEvent = (id, name, type, shortTopic, fullTopic, address, city, date, startTime, endTime, organizer, imgUrl, categories) => {
    return async dispatch => {
        const data = {
            id: `${id}`,
            name: `${name}`,
            type: `${type}`,
            shortTopic: `${shortTopic}`,
            fullTopic: `${fullTopic}`,
            addres: `${address}`,
            city: `${city}`,
            date: `${date}`,
            startTime:`${startTime}`,
            endTime: `${endTime}`,
            organizer: `${organizer}`,
            imgUrl: `${imgUrl}`,
            categories: categories
        };
        try {
            const response = await axios.put(`https://localhost:7215/api/conferences/updateConference`, data,
                {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
            alert("successfully")
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}