import { CustomError } from '@/types/custom-error';
import axios from 'axios';

const baseURL = 'http://localhost:8000/api';

const options = {
  baseURL,
  withCredentials: true,
  timeout: 10000,
};

const API = axios.create(options);

API.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { data, status } = error.response;

    if (data === 'Unauthorized' && status === 401) {
      window.location.href = '/';
    }

    error.errorCode = data?.errorCode || 'UNKNOWN_ERROR';
    return Promise.reject(error);
  }
);

export default API;
