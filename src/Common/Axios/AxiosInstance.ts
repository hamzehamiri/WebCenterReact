// @ts-ignore
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;
const apiTimeOut = import.meta.env.VITE_API_TIMEOUT;

const axiosInstance = axios.create({
    baseURL: apiUrl,
    timeout: apiTimeOut,
});

axiosInstance.interceptors.request.use(
    (config: any) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error: any) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response: any) => {
        return response.data;
    },
    (error: { response: { status: number; }; }) => {
        if (error.response && error.response.status === 401) {
            // Handle unauthorized error (e.g., redirect to login)
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;