import { axiosQuiz } from "../utils/Axios";

export const searchUserAPI = async (search) => {
  const config = {
    url: '/api/admin/accounts',
    method: 'POST',
    data: search
  };
  return handleRequest(config);
};

export const addUserAPI = async (user) => {
  const config = {
    url: '/api/admin/user/add',
    method: 'POST',
    data: user
  };
  return handleRequest(config);

};
export const ViewUserAPI = async (id) => {
  const config = {
    url: '/api/admin/${id}',
    method: 'GET',

  };
  return handleRequest(config);
};

export const updateUserAPI = async (data) => {
  const config = {
    url: '/api/admin/user/update',
    method: 'POST',
    data
  };
  return handleRequest(config);
};

export const deleteUserAPI = async (id) => {
  const config = {
    url: `/api/admin/user/delete${id}`,
    method: 'DELETE'
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