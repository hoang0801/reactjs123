import axios from "axios";
import nProgress from "nprogress";

export const axiosQuiz = axios.create({
  baseURL: 'http://52.193.212.182:8080',
  timeout: 5000

});

export const axiosInstance = axios.create({
  baseURL: 'http://52.193.212.182:8080',
  headers: {
    'Content-Type': 'application/json'
  }
});

axiosInstance.interceptors.request.use(function (config) {
  let { headers } = config;

  let accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    console.log(accessToken);
    config.headers = {
      ...headers,
      "Authorization": `Bearer ${accessToken}`
    };
  }
  nProgress.start();

  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use(function (resp) {
  nProgress.done();
  return resp;
}, function (error) {
  nProgress.done();
  // Do something with request error
  return Promise.reject(error);
});
// export const axiosCourse = axios.create({
//   baseURL: 'http://localhost:8400/be-course',
//   timeout: 5000
// });
// export const axiosInstance = axios.create({
//   baseURL: 'https://minimal-assets-api.vercel.app',
// });