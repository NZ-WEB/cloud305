import axios from 'axios';
import { useDispatch } from 'react-redux';

import config from '../config/config';
import { setAuth } from '../modules/auth/AuthSlice';

const api = axios.create({
  baseURL: config.API_BASE_URL,
});

// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response.status === 401) {
//       console.log('unauthorized');
//     }
//     return error;
//   },
// );

// export default api;
