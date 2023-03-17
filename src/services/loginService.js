import axios from "axios";

const apiUrl ="http://restapi.adequateshop.com/api/authaccount/registration";

export function login(email , password){
    axios.post(apiUrl , {email , password})
}

