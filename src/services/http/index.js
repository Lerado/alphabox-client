import axios from 'axios';

const http = axios.create({
    baseURL: process.env.VUE_APP_ROOT_API
});

// Add interceptors to format responses and errors correctly
http.interceptors.response.use(response => response.data, error => Promise.reject(error.response ? error.response.data : error));

export default http;