import axios from "axios";

const api = axios.create({
    baseURL: "https://dbh-web-service.onrender.com", 
});

export default api;
