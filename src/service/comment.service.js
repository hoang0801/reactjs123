import { axiosInstance } from "../utils/myaxios";

export const createCommentAPI = async (comment) => {
// let data = JSON.stringify(comment);

let config = {
method: "post",
maxBodyLength: Infinity,
url: "http://localhost:8811/api/member/comment/",
headers: {
"Content-Type": "application/json",
},
data: comment,
};

return handleResponse(config);
};

export const searchCommentAPI = async (search) => {
let config = {
method: "post",
maxBodyLength: Infinity,
url: "http://localhost:8811/api/member/comment/search",
headers: {
"Content-Type": "application/json",
},
data: search,
};

return handleResponse(config);
};

export const getCommentByIdAPI = async (id) => {
let config = {
method: "get",
maxBodyLength: Infinity,
url: `http://localhost:8811/api/member/comment/${id}`,
};
return handleResponse(config);
};

export const updateCommentAPI = async (comment) => {

let config = {
method: "put",
maxBodyLength: Infinity,
url: "http://localhost:8811/api/member/comment/update",
headers: {
"Content-Type": "application/json",
},
data: comment,
};

return handleResponse(config);
}

export const deleteCommentAPI = async(id) => {

let config = {
method: "delete",
maxBodyLength: Infinity,
url: `http://localhost:8811/api/member/comment/delete/${id}`,
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