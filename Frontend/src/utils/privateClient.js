import axios from 'axios';

const privateClient = axios.create({
  baseURL: 'http://localhost:5000/api/',
  headers: {
    'api-key': '$11%%22**33++aAbBcCdDeEfFgG33@@??44',
    'session-token': sessionStorage.getItem('token'),
    'user_id': sessionStorage.getItem('userId'),
    'content-type': 'application/json',
  },
});

export default privateClient;
