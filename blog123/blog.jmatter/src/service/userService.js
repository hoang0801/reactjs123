import { axiosInstance } from "../utils/myAxios";

export const searchUserAPI = async (search) => {
  const config = {
    url: '/api/admin/accounts',
    method: 'POST',
    data: search
  };
  return handleResponse(config);
};

export const addUserAPI = async (user) => {
  const config = {
    url: '/api/admin/user/add',
    method: 'POST',
    data: user
  };
  return handleResponse(config);

};
export const ViewUserAPI = async (id) => {
  const config = {
    url: '/api/admin/${id}',
    method: 'GET',

  };
  return handleResponse(config);
};

export const updateUserAPI = async (data) => {
  const config = {
    url: '/api/admin/user/update',
    method: 'POST',
    data
  };
  return handleResponse(config);
};

export const deleteUserAPI = async (id) => {
  const config = {
    url: `/api/admin/user/delete${id}`,
    method: 'DELETE'
  };
  return handleResponse(config);
};

const handleResponse = async (config) => {
  try {
    //console.log("config ",JSON.stringify(config));
    let response = await axiosInstance(config);

    let result = response.data;
    return { code: 200, result };
  } catch (error) {
    console.log(error);

    if (error.response) {
      return { code: error.response.status };
    } else if (error.request) {
      return { code: 408 };
    } else {
      return { code: 500 };
    }
  }
};