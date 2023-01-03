import axios from 'axios';

import config from '../config/config';

const api = axios.create({
  baseURL: config.API_BASE_URL,
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      console.log('unauthorized');
    }
    return error;
  },
);

export default api;
