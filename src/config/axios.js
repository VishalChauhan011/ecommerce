import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

instance.interceptors.response.use(
  function (res) {
    return res;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
