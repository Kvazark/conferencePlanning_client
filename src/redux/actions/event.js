import axios from "axios";
import {setEventId, setIdSection} from "../reducers/eventReducer";
import {setRole, setUser} from "../reducers/userReducer";

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
export const updateInfoEvent = (id, name, type, shortTopic, fullTopic, address, city, date, startTime, endTime, moderatorId, imgUrl, categories) => {
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
            moderatorId: `${moderatorId}`,
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
export const deleteEvent = (id) => {
    return async dispatch => {
        const idEvent= id;
        try {
            ///поменять адрес
            const response = await axios.delete('https://localhost:7215/api/conferences/DeleteConference?confId='+`${idEvent}`,
                {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
            alert('событие удалено')
        } catch (error) {
            alert(error)
        }
    }
}

export const addNewSchedule = (array,eventId) => {

    return async dispatch => {

        try {
            const response = await axios.post('https://localhost:7215/api/section/addSections?ConferenceId='+`${eventId}`, array,
                {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
            alert("расписание обновлено")
        } catch (error) {
            alert(error)
        }
    }

}
export const addNewSection = (name, startTime, endTime, eventId) => {

    return async dispatch => {
        const data = {
            name: `${name}`,
            startTime: `${startTime}`,
            endTime: `${endTime}`,
        };
        try {
            const response = await axios.post('https://localhost:7215/api/section/addSection?ConferenceId='+`${eventId}`, data,
                {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
            dispatch(setIdSection(response.data.id))
            alert("расписание обновлено")
        } catch (error) {
            alert(error)
        }
    }

}
export const updateSection = (id, name, startTime, endTime) => {
    return async dispatch => {
        const data = [{
            id: `${id}`,
            name: `${name}`,
            startTime: `${startTime}`,
            endTime: `${endTime}`
        }];
        try {
            const response = await axios.put(`https://localhost:7215/api/section/updateSections`, data,
                {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}
export const deleteSection = (id) => {
    return async dispatch => {
        const idSection= id;
        try {
            ///поменять адрес
            const response = await axios.delete('https://localhost:7215/api/section/deleteSection?secId='+`${idSection}`,
                {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
            alert('удалено')
        } catch (error) {
            alert(error)
        }
    }
}


//https://localhost:7215/api/section/deleteSection?secId=47f5bb75-2768-4b2a-a2f9-72573b396060