import axios from 'axios';

export const axiosClient = axios.create({
	baseURL: import.meta.env.VITE_STACKOVERFLOW_API,
});

axiosClient.interceptors.response.use(
	(response) => Promise.resolve(response),
	(error) => Promise.reject(error.response.data)
);
