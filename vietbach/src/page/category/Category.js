import { useState } from "react";
import { createCategoryAPI } from "../../service/category.service";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { updateCategoryAPI, deleteCategoryAPI, searchCategoryAPI } from "../../service/category.service";
import "./Category.css";
import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';


export function Category() {
    let [categoryArr, setCategoryArr] = useState([])
    let [category, setCategory] = useState({
        "id": "",
        "name": "test"
    })

    let createCategory = async () => {
        try {
          console.log(category);
          let resp = await createCategoryAPI(category); //await dùng trong hàm async
          console.log("Tạo category thành công");
        } catch (err) {
          console.log(err);
        }
      };

      let [search, setSearch] = useState({
        page: 0,
        size: 200,
        value: "%%",
        orders: [
          {
            order: "asc",
            property: "id",
          },
        ],
      });

      useEffect(() => {}, [category]);

      let handleChangeCategory = (e) => {
        setCategory({ ...category, [e.target.name]: e.target.value });
      };

      let handleSearchCategory = (e) => {
        setSearch({ ...search, [e.target.name]: e.target.value });
      };
    
      let searchCategory = async () => {
        try {
          console.log(category);
          let resp = await searchCategoryAPI(search); //await dùng trong hàm async
    
          console.log("data: ", resp.data);
          console.log("Search category thành công");
          setCategoryArr(resp.data.data);
        } catch (err) {
          console.log(err);
        }
      };
    
      let deleteCategory = async (id) => {
        try {
          let yes = window.confirm("Are you sure want to delete this item ?");
          let resp = await deleteCategoryAPI(id); //await dùng trong hàm async em queen
          let newArray = categoryArr.filter(function (item) {
            //Tương đương ((item) => item.id !== id);
            return item.id !== id;
          });
          console.log("Delete category thành công");
          setCategoryArr(newArray.data.data);
        } catch (err) {
          console.log(err);
        }
      }
    
      useEffect(() => {
        if (search) {
          searchCategory();
        }
      }, [search]); // search thay đổi thì getData() sẽ được gọi
    
      let updateCategory = async () => {
        try {
          console.log(category);
          let resp = await updateCategoryAPI(category); //await dùng trong hàm async
          console.log("Update data: ", resp.data);
          console.log("Update user thành công");
          setCategoryArr(resp.data.data);
        } catch (err) {
          console.log(err);
        }
      };

      return (
        <div id="category-content">
          <h1>Categories Management</h1>
          <th>Create Category</th>
          <form>
            <input name="id" onChange={handleChangeCategory} placeholder="ID.." />
            <input name="name" onChange={handleChangeCategory} placeholder="Name.." />
            <button type="button" className="save-category" onClick={createCategory}>
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
