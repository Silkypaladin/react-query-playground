import Axios from "axios";

const API_URL = import.meta.env.VITE_API_URL as string;

export const axios = Axios.create({
  baseURL: API_URL,
  withCredentials: true
});

axios.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error)
);
