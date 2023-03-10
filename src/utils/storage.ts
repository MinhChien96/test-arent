import { USER_TOKEN } from 'configs';

export const setItem = (key: string, value: string) => {
  window.localStorage.setItem(key, value);
};

export const getItem = (key: string) => {
  const value = window.localStorage.getItem(key);
  return value === null ? '' : value;
};

export const setToken = (value: string) => {
  setItem(USER_TOKEN, value);
};

export const clearToken = () => window.localStorage.removeItem(USER_TOKEN);

export const getToken = () => getItem(USER_TOKEN);
