import axios from "axios";
import {setId, setUser} from "../reducers/userReducer";

export const addNewEvent = async (name, type, date) => {
    // let d = date[0]+date[1]
    // let m = date[3]+date[4]
    // let y = date[6]+date[7]+date[8]+date[9]
    return async dispatch => {
    try {
        const response = await axios.post('https://localhost:7215/api/conferences/addNewConference', {
            name:`${name}`,
            type:`${type}`,
            date:`${date}`
        })
            // date: {
            //     year: y,
            //     month: m,
            //     day: d,
            //     dayOfWeek: 1
            // }})
        dispatch(setId(response.data.id))
        alert("successfully")
    } catch (error) {
        alert(error)
    }}

}
export const updateInfoEvent = (id, name, type, shortTopic, fullTopic, addres, city, date, startTime,endTime, organizer, imgUrl,categories) => {
    return async dispatch => {
        const data = {
            id: `${id}`,
            name: `${name}`,
            type: `${type}`,
            shortTopic: `${shortTopic}`,
            fullTopic: `${fullTopic}`,
            addres: `${addres}`,
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
            dispatch(setUser(response.data))
                .then((res) => {
                    console.log(res.data);
                })
            alert("successfully")
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}