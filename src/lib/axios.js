/* eslint-disable no-param-reassign */
import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';

const axiosInstance = applyCaseMiddleware(
  axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
  }),
);

export default axiosInstance;
