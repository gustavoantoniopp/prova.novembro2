import axios from 'axios';
import api from './service/api'

export const fetchData = () => {
    const url = `${api}/`;

    return axios.get(url);
};

fetchData('react');