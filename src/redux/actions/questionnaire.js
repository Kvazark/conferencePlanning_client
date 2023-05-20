import axios from "axios";

export const addNewQuestionnaire = (idUser, idEvent, theme, type, scientificDegree) => {

    return async dispatch => {
        const data = {
            dockladTheme: `${theme}`,
            scientificDegree: `${scientificDegree}`,
            type: `${type}`,
            userId: `${idUser}`,
            conferenceId: `${idEvent}`
        };
        try {
            const response = await axios.post('https://localhost:7215/api/questionnaire/AddNewQuestionnaire', data,
                {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
            alert("успешно")
        } catch (error) {
            alert(error)
        }
    }

}
export const updateStatus =(idQuest, value) => {
    return async dispatch => {
        try {
            const response = await axios.post(`https://localhost:7215/api/questionnaire/changeStatus?quesId=${idQuest}&status=${value}`,
                {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
            alert("Status was changed")
        } catch (error) {
            alert(error)
        }
    }

}