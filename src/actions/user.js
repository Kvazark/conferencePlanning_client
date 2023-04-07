import axios from "axios";

export const registration = async (userSurname,email,password, userName )=>{
    try{
        const response = await axios.post('http://localhost:7215/api/account/registration',{
            userSurname,
            email,
            password,
            userName
        })
        alert("succesful")
    }catch (error){
        alert(error)
    }
    //поменять локалхост на другой

}