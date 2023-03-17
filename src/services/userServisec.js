import axios from "axios";

const apiUrl= "http://restapi.adequateshop.com/api/authaccount/registration";

export function register(values) {
     axios.post(apiUrl , {
        email :values.email ,
        password:values.password ,
        name: values.name
    } )
}