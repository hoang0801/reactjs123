import { axiosInstance } from "../utils/Axios";

export const searchPostAPI = async (search) => {
  const config = {
    url: '/api/post/search',
    method: 'POST',
    data: search
  };
  return handleRequest(config);
};

export const addPostAPI = async (post) => {
  const config = {
    url: '/api/member/post/add',
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data: post
  };
  return handleRequest(config);

};
export const ViewPostAPI = async (id) => {
  const config = {
    url: '/api/post/${id}',
    method: 'GET',

  };
  return handleRequest(config);
};

export const updatePostAPI = async (data) => {
  const config = {
    url: '/api/admin/post/update',
    method: 'POST',
    data
  };
  return handleRequest(config);

};

export const deletePostAPI = async (id) => {
  const config = {
    url: `/api/admin/post/delete${id}`,
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