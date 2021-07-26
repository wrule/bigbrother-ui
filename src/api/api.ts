import { http } from './http';

export const getAllProjectInfo =
  () => http.get('/api/getAllProjectInfo');

export const getProjectApiList =
  (params: any) => http.get('/api/getProjectApiList', { params });

export const getApiHistory =
  (params: any) => http.get('/api/getApiHistory', { params });

export const getApiHistoryDetail =
  (params: any) => http.get('/api/getApiHistoryDetail', { params });

export const getLatestApi =
  (params: any) => http.get('/api/getLatestApi', { params });
