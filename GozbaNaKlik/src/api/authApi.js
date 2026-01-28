import axios from 'axios';

var Axios = axios.create({
    baseURL: 'http://localhost:5173/api',
    // Prostor za dodatnu konfiguraciju
});

export default Axios;