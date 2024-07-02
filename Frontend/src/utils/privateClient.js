import axios from 'axios';

const baseURL = 'http://localhost:5000/api/';
const apiKey = '$11%%22**33++aAbBcCdDeEfFgG33@@??44';

const privateClient = axios.create({
  baseURL,
  headers: {
    'api-key': apiKey,
    'Content-Type': 'application/json',
  },
});

privateClient.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      const access = localStorage.getItem('access');

      if (token) {
        config.headers['session-token'] = token;
      }
      if (userId) {
        config.headers['user_id'] = userId;
      }
      if (access) {
        config.headers['access_code'] = access;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

privateClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('Error response:', error.response);
    return Promise.reject(error);
  }
);

export default privateClient;
