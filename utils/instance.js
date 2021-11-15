import axios from 'axios';

const { NEXT_PUBLIC_API_ENDPOINT } = process.env;

const instance = axios.create({
  baseURL: NEXT_PUBLIC_API_ENDPOINT,
});

export default instance;