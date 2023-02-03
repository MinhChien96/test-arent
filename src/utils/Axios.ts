import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { API_ENDPOINT, PATHS } from 'configs';
import { getToken, clearToken } from './storage';

const axiosClient = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config: InternalAxiosRequestConfig) {
    // Do something before request is sent
    const headerPayload = getToken();
    if (headerPayload) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${headerPayload}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    try {
      switch (error.response.status) {
        case 401:
          clearToken();
          window.location.href = PATHS.LOGIN;
          return Promise.reject(error);
        default:
          return Promise.reject(error);
      }
    } catch (e) {
      return Promise.reject(error);
    }
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosClient;
