import axios from 'axios';
import { baseURL } from './env';

// handle get API requests 
export const getApiReq = async (url: string) => {
  const routeUrl = baseURL + url
  try {
    const response = await axios.get(routeUrl);
    return response.data;
  } catch (err) {
    console.error('Something went wrong', err);
  }
};
