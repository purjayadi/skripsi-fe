import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const api = axios.create({
    // Set your API base URL here
    baseURL: 'http://192.168.1.3:3200/api/v1',
});

// Add a request interceptor to attach the token to headers
api.interceptors.request.use(
    async (config) => {
        try {
            // Retrieve token from secure storage
            const token = await SecureStore.getItemAsync('token');

            if (token) {
                config.headers['Authorization'] = `Bearer ${token}`;
            }

            return config;
        } catch (error) {
            console.error('Error retrieving token:', error);
            return config;
        }
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;