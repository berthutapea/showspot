import axios from 'axios';

const privateClient = axios.create({
  baseURL: 'http://localhost:5000/api/',
  headers: {
    'Content-Type': 'application/json',
    'Api-Key': '$11%%22**33++aAbBcCdDeEfFgG33@@??44',
  },
});

export default privateClient;
