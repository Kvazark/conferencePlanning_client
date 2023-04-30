import axios from "axios";
import {setEventId} from "../reducers/eventReducer";

export const addNewEvent = (name, type, date) => {

    return async dispatch => {
        const data = {
            name: `${name}`,
            type: `${type}`,
            date: `${date}`
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
            address: `${address}`,
            city: `${city}`,
            date: {
                year: `${1}`,
                month: `${1}`,
                day: `${1}`,
                dayOfWeek: `${0}`
            },
            startTime: {
                hour: `${1}`,
                minute: `${1}`,
                second: `${0}`,
                millisecond: `${0}`,
                ticks: `${0}`
            },
            endTime: {
                hour: `${1}`,
                minute: `${1}`,
                second: `${0}`,
                millisecond: `${0}`,
                ticks: `${0}`
            },
            organizer: `${organizer}`,
            imgUrl: `${imgUrl}`,
            categories: `${categories}`
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