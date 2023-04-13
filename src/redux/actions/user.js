import axios from "axios";
import {setUser} from "../reducers/userReducer";
import {redirect, useNavigate} from "react-router-dom";



export const registrationUser = async (userSurname,email,password, userName )=>{
    try{
        const response = await axios.post('https://localhost:7215/api/Account/registration/user',{
            userSurname,
            email,
            password,
            userName
        })
        alert("succesfull")
    }catch (error){
        alert(error)
    }

}
export const registrationModerator = async (userSurname,email,password, userName )=>{
    try{
        const response = await axios.post('https://localhost:7215/api/Account/registration/moderator',{
            userSurname,
            email,
            password,
            userName
        })
        alert("succesfull")
    }catch (error){
        alert(error)
    }

}
export const login =  (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post(`https://localhost:7215/api/Account/login`, {
                email,
                password,
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)

        } catch (e) {
            alert(e.response.data.message)
        }
    }
}
export const auth = ()=>{
    return async dispatch =>{
        try{
            const response = await axios.get('https://localhost:7215/api/Account/login',
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
            dispatch(setUser(response.data.user))
            localStorage.setItem('token',response.data.token)
        }catch (error){
            alert(error.response.data.message)
            localStorage.removeItem('token')
        }
    }

}
export const setDataUser = ()=>{
    return async dispatch =>{
        try{
            const response = await axios.get('https://localhost:7215/api/Account/login',
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
            dispatch(setUser(response.data.user))
            localStorage.setItem('role',response.data.role)
        }catch (error){
            alert(error.response.data.message)
            localStorage.removeItem('role')
        }
    }

}
export const updateAvatar = (file)=>{
    return async dispatch =>{
        try{
            const formData = new FormData()
            formData.append('file', file)
            ///поменять адрес
            const response = await axios.post('https://localhost:7215/api/Account/login', formData,
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
            dispatch(setUser(response.data))

        }catch (error){
            alert(error)
        }
    }
}