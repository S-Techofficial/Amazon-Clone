import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-82bc3/us-central1/api' // The API (Cloud Functions) URL
});

export default instance;