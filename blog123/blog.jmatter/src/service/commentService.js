import { axiosInstance } from "../utils/Axios";

export const searchCommentAPI = async (search) => {
  const config = {
    url: '/api/comment/search',
    method: 'POST',
    data: search
  };
  return handleRequest(config);
};

export const addCommentAPI = async (post) => {
  const config = {
    url: '/api/member/comment/add',
    method: 'POST',
    data: post
  };
  return handleRequest(config);

};

export const deleteCommentAPI = async (id) => {
  const config = {
    url: `/api/admin/comment/delete${id}`,
    method: 'DELETE'
  };
  return handleRequest(config);
};


const handleRequest = async (config) => {
  try {
    const resp = await axiosInstance(config);
    return resp.data;
  } catch (error) {
    console.log(error);
    if (error.response)
      return (error.response.data);

    return ({ code: "408", message: error.message });
  }
};