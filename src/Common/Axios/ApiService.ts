import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

class ApiService {
    private axiosInstance: AxiosInstance;
    private authToken: string | null = null;

    constructor(baseURL: string) {
        this.axiosInstance = axios.create({
            baseURL: baseURL,
        });

        this.axiosInstance.interceptors.request.use(
            (config: any) => {
                if (this.authToken) {
                    config.headers!['Authorization'] = `Bearer ${this.authToken}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );
    }

    setAuthToken(token: string) {
        this.authToken = token;
    }

    clearAuthToken() {
        this.authToken = null;
    }

    async get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.axiosInstance.get<T>(url, config);
    }

    async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.axiosInstance.post<T>(url, data, config);
    }

    async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.axiosInstance.put<T>(url, data, config);
    }

    async delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.axiosInstance.delete<T>(url, config);
    }
}

export default ApiService;