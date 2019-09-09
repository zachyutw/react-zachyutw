import axios from 'axios';
const api = {};

export const cloudFetch = axios.create({
  baseURL: process.env.REACT_APP_CLOUD_API
});

api.cloudFetch = cloudFetch;
export default api;
