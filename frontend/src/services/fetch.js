import axios from 'axios';

const fetch = axios.create({
  baseURL: 'http://localhost:3001',
});

export default fetch;
