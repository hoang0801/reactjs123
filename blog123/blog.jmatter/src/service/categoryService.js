import { axiosInstance } from "../utils/Axios";

export const searchCategoryAPI = async (search) => {
  let config = {
    url: '/api/category/search',
    method: 'POST',
    data: search,
  };
  return handleRequest(config);
};

export const addCategoryAPI = async (category) => {
  const config = {
    url: '/api/admin/category/add',
    method: 'POST',
    data: category
  };
  return handleRequest(config);

};

export const viewCategoryAPI = async (id) => {
  const config = {
    url: '/api/category/${id}',
    method: 'GET',

  };
  return handleRequest(config);
};

export const updateCategoryAPI = async (data) => {
  const config = {
    url: '/api/admin/category/update',
    method: 'POST',
    data
  };
  return handleRequest(config);

};

export const deleteCategoryAPI = async (id) => {
  const config = {
    url: `/api/admin/category/delete?id=${id}`,
    method: 'DELETE'
  };
  return handleRequest(config);
};





const handleRequest = async (config) => {
  try {
    let resp = await axiosInstance(config);
    let result = resp.data;
    return { code: 200, result };
  } catch (error) {
    console.log(error);
    if (error.response)
      return (error.response.data);

    return ({ code: "408", message: error.message });
  }
};
