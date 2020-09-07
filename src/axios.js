import axios from 'axios';

const instance = axios.create({
    baseURL: "https://nbs-whatsapp-backend.herokuapp.com/",
});

export default instance;