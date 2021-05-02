import axios from "axios";


const instance = axios.create({baseURL : "http://35.73.39.65:8000"});
export {instance};
