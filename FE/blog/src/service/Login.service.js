import { axiosQuiz } from "../utils/Axios";

export const LoginAPI = async(data)=>{

  var config ={
      method: 'post',
      url: '/api/login',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      data: urlencoded
      
    }
    return handleRequest(config)

  }

  const handleRequest = async (config) => {
    try {
      const resp = await axiosQuiz(config);
      return resp.data;
    } catch (error) {
      console.log(error);
      if (error.response)
        return (error.response.data)
  
      return ({ code: "408", message: error.message })
    }
  }