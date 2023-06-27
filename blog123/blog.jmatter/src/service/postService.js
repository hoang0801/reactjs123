import { axiosInstance, axiosPublicInstance } from "../utils/Axios";

export const searchPostAPI = async (search) => {
  const config = {
    url: '/api/post/search',
    method: 'POST',
    data: search
  };
  return handleRequestPublic(config);
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
    url: `/api/admin/post/delete?id=${id}`,
    method: 'DELETE'
  };
  return handleRequest(config);
};

const handleRequest = async (config) => {
  try {
    const resp = await axiosInstance(config);
    let result = resp.data;
    return { code: 200, result };
  } catch (error) {
    console.log(error);
    if (error.response)
      return (error.response.data);

    return ({ code: "408", message: error.message });
  }
};

const handleRequestPublic = async (config) => {
  try {
    const resp = await axiosPublicInstance(config);
    let result = resp.data;
    return { code: 200, result };
  } catch (error) {
    console.log(error);
    if (error.response)
      return (error.response.data);

    return ({ code: "408", message: error.message });
  }
};