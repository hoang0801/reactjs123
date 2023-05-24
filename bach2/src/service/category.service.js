
import { axiosInstance } from "../utils/myaxios";

export const createCategoryAPI = async (category) => {
  // let data = JSON.stringify(category);

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:8811/api/admin/category/",
    headers: {
      "Content-Type": "application/json",
    },
    data: category,
  };

  return handleResponse(config);
};

export const searchCategoryAPI = async (search) => {
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:8811/api/admin/category/search",
    headers: {
      "Content-Type": "application/json",
    },
    data: search,
  };

  return handleResponse(config);
};

export const getCategoryByIdAPI = async (id) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `http://localhost:8811/api/admin/category/${id}`,
  };
  return handleResponse(config);
};

export const  updateCategoryAPI = async (category) => {

  let config = {
    method: "put",
    maxBodyLength: Infinity,
    url: "http://localhost:8811/api/admin/category/update",
    headers: {
      "Content-Type": "application/json",
    },
    data: category,
  };

  return handleResponse(config);
}

export const deleteCategoryAPI = async(id) => {

  let config = {
    method: "delete",
    maxBodyLength: Infinity,
    url: `http://localhost:8811/api/admin/category/delete/${id}`,
  };

  return handleResponse(config);

}

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
