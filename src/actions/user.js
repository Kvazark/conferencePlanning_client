import axios from "axios";

export const registration = async (email,password, userName, userSurname)=>{
    try{
        const response = await axios.post('http://localhost:8080/api/registration',{
            email,
            password,
            userName,
            userSurname
        })
        alert("succesful")
    }catch (error){
        alert(error)
    }
    //поменять локалхост на другой

}