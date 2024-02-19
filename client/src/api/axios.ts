import axios, { AxiosInstance } from 'axios';
import { LOCAL_STORAGE_KEY_TOKEN } from '../constants/localstorageKeys';

const BASE_URL = import.meta.env.VITE_BASE_URL;

console.log('BASE_URL', BASE_URL);

export const axiosWithAuth: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem(LOCAL_STORAGE_KEY_TOKEN),
    }
});

  export const axiosPublic: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });