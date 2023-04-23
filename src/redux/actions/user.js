import axios from "axios";
import {setId, setRole, setUser} from "../reducers/userReducer";
import {redirect, useNavigate} from "react-router-dom";


export const registrationUser = async (userSurname, userName, email, password) => {
    try {
        const response = await axios.post('https://localhost:7215/api/Account/registration/user', {
            userSurname,
            userName,
            email,
            password
        })
        alert("succesfull")
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
        alert("succesfull")
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
// export const auth = () => {
//     return async dispatch => {
//         try {
//             const response = await axios.get('https://localhost:7215/api/Account/login',
//                 {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
//             dispatch(setUser(response.data.user))
//             console.log(response.data.user)
//             localStorage.setItem('token', response.data.token)
//         } catch (error) {
//             alert(error.response.data.message)
//             localStorage.removeItem('token')
//         }
//     }
// }

// export const setRoleUser = () => {
//     return async dispatch => {
//         try {
//             const response = await axios.get('https://localhost:7215/api/Account/login',
//                 {headers: {Authorization: `Bearer ${localStorage.getItem('role')}`}})
//             dispatch(setUser(response.data.user))
//             localStorage.setItem('role', response.data.role)
//         } catch (error) {
//             alert(error.response.data.message)
//             localStorage.removeItem('role')
//         }
//     }
//
// }
export const updateAvatar = (file) => {
    return async dispatch => {
        try {
            const formData = new FormData()
            formData.append('file', file)
            ///поменять адрес
            const response = await axios.post('https://localhost:7215/api/Account/login', formData,
                {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
            dispatch(setUser(response.data))

        } catch (error) {
            alert(error)
        }
    }
}
export const deleteAvatar = () => {
    return async dispatch => {
        try {
            ///поменять адрес
            const response = await axios.delete('https://localhost:7215/api/Account/login',
                {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
            dispatch(setUser(response.data))

        } catch (error) {
            alert(error)
        }
    }
}
export const updateInfoModerator = (id, organizationName, email) => {
    return async dispatch => {
        const data = {
            id: `${id}`,
            organizationName: `${organizationName}`,
            email: `${email}`
        };
        try {
            const response = await axios.put(`https://localhost:7215/api/moderator/updateModerator`, data,
                {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
            dispatch(setUser(response.data))
                .then((res) => {
                    console.log(res.data);
                })
            alert("succesfull")
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}
