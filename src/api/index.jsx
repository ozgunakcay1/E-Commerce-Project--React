//axios un temel ayarlarinin yapildigi bir ornek olusturulur

import axios from 'axios';

const api = axios.create({
    baseURL: 'https://fakestoreapi.com',
    }
);


export default api;