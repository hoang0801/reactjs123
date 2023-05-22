import { axiosQuiz } from "../utils/Axios";

  export const searchCategoryAPI = async (data) => {
    const config = {
      url: '/api/category/search',
      method: 'POST',
      data
    }
    return handleRequest(config)
  }

  export const addCategoryAPI = async (category) =>{
    const config = {
      url: '/api/admin/category/add',
      method: 'POST',
      data
    }
    return handleRequest(config)
    
  }
  export const ViewCategoryAPI = async (id) =>{
    const config = {
      url: '/api/category/${id}',
      method: 'GET',
     
    }
    return handleRequest(config)
  }

  export const UpdateCategoryAPI = async(data) =>{
    const config = {
      url: '/api/admin/category/update',
      method: 'POST',
      data
    }
    return handleRequest(config)

  }

  export const deleteCategoryAPI = async (id) => {
    const config = {
      url: `/api/admin/category/delete${id}`,
      method: 'DELETE'
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
  
  

// export function testPromise(){
//   let promise = new  Promise ((resolve, reject)=>{
//     setTimeout(()=>{
//       console.log(111111)

//     setTimeout(()=>{
//       console.log(22222)

//       resolve("ok")
//     },500);
//   },1000)
// });

//  promise.then(
//   (s)=>{
//   console.log(s);
//  },
//  (err)=>{
//   console.log(err);
//  });
// }

// function promise2() {
//   return new Promise((ok, fail)=>{
//     setTimeout(() => {
//       // ok("Ok")
//     }, 500);
//   })
// }
//  export async function testPromise2(){
//   // promise2().then(s=>console(s))
//   try{
//    let s= await promise2()//doc gia tri cua resolve (ok)
//    console.log(s)
//   }catch (err){
//     console.log(err)
//   }
 