import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistackbr.herokuapp.com'
});

export default api;