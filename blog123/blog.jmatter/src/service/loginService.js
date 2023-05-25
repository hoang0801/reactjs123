import { axiosQuiz } from "../utils/Axios";

export const LoginAPI = async (data) => {

  var config = {
    method: 'post',
    url: '/api/login',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  };
  return handleRequest(config);


};

const handleRequest = async (config) => {
  try {
    const resp = await axiosQuiz(config);
    console.log(resp);
    return { code: "200", result: resp.data };
  } catch (error) {
    console.log(error);
    if (error.response)
      return { code: error.response.status, result: error.response.data };

    return ({ code: "408", message: error.message });
  }
};