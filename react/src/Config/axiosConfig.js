import axios from 'axios';

const http = axios.create({
    baseURL : 'http://localhost:1072',
    headers : {
        "Content-Type":"application/json"
    }
})

export {http};