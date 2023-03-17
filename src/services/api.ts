import axios from 'axios';

import { LOCAL_API_URL, API_URL } from '../config';

const api = axios.create({
  baseURL: LOCAL_API_URL,
  withCredentials: false,
});

export default api;
