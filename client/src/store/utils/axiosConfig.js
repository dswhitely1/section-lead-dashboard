import axios from 'axios';

export const axiosWithOutAuth = () =>
  axios.create({ baseURL: 'http://localhost:3333/api' });

export const axiosWithAuth = () => {
  const token = localStorage.getItem('sl_token');
  return axios.create({
    baseURL: 'http://localhost:3333/api',
    headers: { Authorization: token, 'Content-Type': 'application/json' },
  });
};
