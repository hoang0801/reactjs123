import { useEffect, useState } from "react";
import { UpdateCategoryAPI, addCategoryAPI, deleteCategoryAPI, searchCategoryAPI,testPromise } from "../../service/category.service";
import { Await } from "react-router";

export function Category() {
    let[ categoryArr, setCategoryArr]= useState([])

    let[ category, setCategory]= useState({
        "id":"",
        "name":"test"
    })
     let addCategory = async()=>{
        try{
            console.log(category)
            let resp = await addCategoryAPI(category);
            console.log("ok")
        } catch (err){
            console.log(err)
        }
     }
     useEffect(() => {}, [category]);

    let [ search, setSearch] = useState({
        "start": 0,
        "Length": 10,
        "search": {
          "value": ""
        }
    })

     let searchCategory = async()=>{
        try{
            let resp = await searchCategoryAPI(search)
            console.log(resp.data)
            setCategoryArr(resp.data)
        }catch (err){
            console.log(err)
        }
    }
    useEffect(() =>{
        if(search)
        searchCategory();
    },[search]) // searchDTO thay đổi thì getData() sẽ được gọi

    let deleteCategory = async(id) =>{
        try{
            let yes = window.confirm("Are you sure want to delete this item ?");
          let resp = await deleteCategoryAPI(id); //await dùng trong hàm async em queen
          let newArray = categoryArr.filter(function (item) {
            //Tương đương ((item) => item.id !== id);
            return item.id !== id;
          })
          console.log("delete thang cong")
          setCategoryArr(newArray.data.data)
        }catch(err){
        console.log(err)
        }
    }
    let updateCategory = async ()=>{
        try{
            console.log(category)
            let resp = await UpdateCategoryAPI(category) // await dung trong ham async
            console.log( "update data:", resp.data)
            console.log("update user thanh cong")
            setCategoryArr(resp.data.data)
        } catch(err){
            console.log(err)
        }
    }


     let handleSearchCategory = (e) =>{
        setSearch({...search,[e.target.name]:e.target.value})
     }
     let handleChangCategory = (e) =>{
        setSearch({...category,[e.target.name]:e.target.value})
     }
     return (
        <div id="category-content">
          <h1>Categories Management</h1>
          <th>Create Category</th>
          <form>
            <input name="id" onChange={handleChangCategory} placeholder="ID.." />
            <input name="name" onChange={handleChangCategory} placeholder="Name.." />
            <button type="button" className="save-category" onClick={addCategory}>
              Save
            </button>
    
            <th>Search Category</th>
            <input
              name="search-category"
              onChange={handleSearchCategory}
              placeholder="Search here.."
            />
            <button type="button" className="search-btn" onClick={searchCategory}>
              Search
            </button>
            <table>
              <tr className="table-category">
                <th className="table-category">ID</th>
                <th className="table-category">Name</th>
              </tr>
    
              {categoryArr?.map((item) => {
                return (
                  <tr key={item?.id}>
                    <td className="table-category">{item?.id}</td>
                    <td className="table-category">{item?.name}</td>
                    <td className="table-category"> 
                      <DeleteIcon type="button" onClick={() => deleteCategory(item.id)}/>                    
                      <UpdateIcon type="button" onClick={() => updateCategory(item.id)}/>
                      <Link to={`/hello/${item.name}`}><InfoIcon/></Link>
                    </td>
                  </tr>
                );
              })}
            </table>
          </form>
        </div>
      );
       
}
