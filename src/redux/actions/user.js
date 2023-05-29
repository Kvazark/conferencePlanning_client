import axios from "axios";
import {setId, setRole, setUser} from "../reducers/userReducer";
import {redirect, useNavigate} from "react-router-dom";


export const registrationUser = async (userSurname, userName, email, password) => {
    try {
        const response = await axios.post('https://localhost:7215/api/Account/registration/user', {
            userSurname,
            userName,
            patronymic: '-',
            position: '-',
            email,
            password
        })
        alert("successfully")
    } catch (error) {
        alert(error)
    }

}
export const registrationModerator = async (organizationName, email, password) => {
    try {
        const response = await axios.post('https://localhost:7215/api/Account/registration/moderator', {
            organizationName,
            email,
            password,

        })
        alert("successfully")
    } catch (error) {
        alert(error)
    }

}
export const login = (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post(`https://localhost:7215/api/Account/login`, {
                email,
                password,
            })
            dispatch(setUser(response.data.user))
            dispatch(setRole(response.data.role))
            dispatch(setId(response.data.id))
            localStorage.setItem('token', response.data.token)
            // localStorage.setItem('role', response.data.role)

        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export const updateAvatar = (id,file) => {
    return async dispatch => {
        try {
            const formData = new FormData()
            formData.append('formFile', file)
            const response = await axios.post(`https://localhost:7215/api/photos/addNewUserPhotoById?userId=${id}`, formData,
                {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
            alert('фотография успешно изменена!')
        } catch (error) {
            alert(error)
        }
    }
}
export const deleteAvatar = (id) => {
    return async dispatch => {
        try {
            ///поменять адрес
            const response = await axios.delete(`https://localhost:7215/api/photos/deleteUserPhotoById?userId=${id}`,
                {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
        } catch (error) {
            alert(error)
        }
    }
}
export const updateInfoModerator = (id, organizationName, email, phoneNumber) => {
    return async dispatch => {
        const data = {
            id: `${id}`,
            organizationName: `${organizationName}`,
            position: 'position',
            email: `${email}`,
            userSurname: "userSurname",
            userName: "userName",
            patronymic: "patronymic",
            phoneNumber: `${phoneNumber}`

        };
        try {
            const response = await axios.put(`https://localhost:7215/api/moderator/updateModerator`, data,
                {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
            alert("информация обновленна успешно")
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}
export const updateInfoUser = (id, userName, userSurname, patronymic, position, organizationName, phoneNumber) => {
    return async dispatch => {
        const data = {
            id: `${id}`,
            userName: `${userName}`,
            userSurname: `${userSurname}`,
            patronymic: `${patronymic}`,
            position: `${position}`,
            organizationName: `${organizationName}`,
            phoneNumber: `${phoneNumber}`
        };
        try {
            const response = await axios.put(`https://localhost:7215/api/user/updateUser`, data,
                {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
            alert("информация обновленна успешно")
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

