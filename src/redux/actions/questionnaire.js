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
export const deletePP = (idUser) => {
    return async dispatch => {
        try {
            const response = await axios.delete('https://localhost:7215/api/questionnaire/deletePotentialParticipant?userId='+`${idUser}`,
                {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
            alert('запрос на участие удалён')
        } catch (error) {
            alert(error)
        }
    }
}
export const addUser =(idEvent, idUser) => {
    return async dispatch => {
        try {
            const response = await axios.post(`https://localhost:7215/api/conferences/addUser?id=${idEvent}&userId=${idUser}`,
                {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
            alert("Участник добавлен!")
        } catch (error) {
            alert(error)
        }
    }

}