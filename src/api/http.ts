import axios from 'axios';

const newHttp = axios.create({
  baseURL: '/api',
});

newHttp.interceptors.response.use((response) => {
  return Promise.resolve(response.data);
}, (err) => {
  return Promise.reject(err);
});

export const http = newHttp;
