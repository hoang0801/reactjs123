import axios from "axios";

export const LoginAPI = async(username,password)=>{
    var urlencoded = new URLSearchParams(username,password);
    urlencoded.append("username", username);
    urlencoded.append("password", password);

    const config ={
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

 

