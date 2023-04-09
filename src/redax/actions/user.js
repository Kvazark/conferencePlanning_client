import axios from "axios";
import {setUser} from "../reducers/userReducer";

export const registration = async (userSurname,email,password, userName )=>{
    try{
        const response = await axios.post('http://localhost:7215/api/account/registration',{
            userSurname,
            email,
            password,
            userName
        })
        alert("succesfull")
    }catch (error){
        alert(error)
    }
    //поменять локалхост на другой

}
export const login =  (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post(`https://localhost:7215/api/account/login`, {
                email,
                password
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
            const response = await axios.get('https://localhost:7215/api/account/login',
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
            dispatch(setUser(response.data.user))
            localStorage.setItem('token',response.data.token)
        }catch (error){
            alert(error.response.data.message)
            localStorage.removeItem('token')
        }
    }

}