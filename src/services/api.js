import axios from 'axios';

const api = axios.create({

    baseURL: 'http://165.22.142.228:1688/'

});

export default api;