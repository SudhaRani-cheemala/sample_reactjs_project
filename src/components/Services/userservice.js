import axios from 'axios';

let base_url = 'http://localhost:5000/login';


    // posting Data
export let saveForm = (registedata) =>{
    return axios.post(base_url,registedata);
}
    // getting data 
export let getForm = (regData)=>{
    return axios.get(base_url,regData);
}