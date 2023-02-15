import axios from "axios";
// import { getToken, getAuth } from "../utils/auth/auth";

const config = {};
config.baseURL = process.env.REACT_APP_BACKEND_URI;
const axiosInstance = new axios.create(config);

axiosInstance.interceptors.request.use(
  function (request) {
    // if (getAuth()) {
    //   request.headers = {
    //     "x-auth-token": `${getToken()}`,
    //   };
    // }

    return request;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    console.log(
      `#${error.response.status} Something went wrong while processing your request`
    );
    return Promise.reject(error);
  }
);

export default axiosInstance;
