import axios from "axios";

export const axiosQuiz = axios.create({
  baseURL: 'http://52.193.212.182:8080',
  timeout: 5000
});
// export const axiosCourse = axios.create({
//   baseURL: 'http://localhost:8400/be-course',
//   timeout: 5000
// });
// export const axiosInstance = axios.create({
//   baseURL: 'https://minimal-assets-api.vercel.app',
// });