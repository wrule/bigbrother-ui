import axios from 'axios';

const http = axios.create({
  baseURL: '/api',
});

http.interceptors.response.use((response) => {
  return Promise.resolve(response.data);
}, (err) => {
  return Promise.reject(err);
});

export const http1 = http;
