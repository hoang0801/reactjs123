import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import UpdateIcon from '@mui/icons-material/Update';
import { TextField } from '@mui/material';
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { addCategoryAPI, deleteCategoryAPI, searchCategoryAPI, updateCategoryAPI } from "../../service/categoryService";



export default function Category() {
  let [categoryArr, setCategoryArr] = useState([]);
  let dispatch = useDispatch();
  let [category, setCategory] = useState({
    "id": "",
    "name": ""
  });

  // const { categories, search, error, category } = useSelector((state) => state.category);
  // console.log("categories", JSON.stringify(categories));
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     find();
  //   }, 500);
  //   return () => clearTimeout(timeout);
  // }, [search]);

  // const find = async () => {
  //   dispatch(getCategoryIds());
  // };

  // const handleChange = (e) => {
  //   let newSearch = {
  //     ...search,
  //     start: 0,
  //     [e.target.name]: e.target.value
  //   };
  //   dispatch(setCategorySearch(newSearch));
  // };
  let [search, setSearch] = useState({
    "start": 0,
    "Length": 10,
    "search": {
      "value": ""
    }
  });

  let addCategory = async () => {
    try {
      console.log(category);
      let resp = await addCategoryAPI(category);
      console.log("ok");
    } catch (err) {
      console.log(err);
    }
  };


  let searchCategory = async () => {
    try {

      let resp = await searchCategoryAPI(search);
      console.log(resp.data);
      setCategoryArr(resp.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (search)
      searchCategory();
    // searchDTO thay đổi thì getData() sẽ được gọi
  }, [search]);

  let deleteCategory = async (id) => {
    try {
      let yes = window.confirm("Are you sure want to delete this item ?");
      let resp = await deleteCategoryAPI(id); //await dùng trong hàm async em queen
      let newArray = categoryArr.filter(function (item) {
        //Tương đương ((item) => item.id !== id);
        return item.id !== id;
      });
      console.log("delete thang cong");
      setCategoryArr(newArray.data);
    } catch (err) {
      console.log(err);
    }
  };
  let updateCategory = async () => {
    try {
      console.log(category);
      let resp = await updateCategoryAPI(category); // await dung trong ham async
      console.log("update data:", resp.result);
      console.log("update user thanh cong");
      setCategoryArr(resp.result.data);
    } catch (err) {
      console.log(err);
    }
  };

  // categoryArr = categories;


  let handleSearchCategory = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };
  let handleChangCategory = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
    // setCategory({ ...category, [e.target.id]: e.target.value });
  };
  return (
    <div id="category-content">
      <h1>Categories Management</h1>
      <th>Create Category</th>
      <form>
        <input name="name" onChange={handleChangCategory} placeholder="Name.." />
        <button type="button" className="save-category" onClick={addCategory}>
          Save
        </button>

        <th>Search Category</th>
        <TextField label="Keyword" variant="standard" name="value" value={search.value} onChange={handleChange} size='small' />

        <table>
          <tr>
            <th >ID</th>
            <th >Name</th>
          </tr>

          {categoryArr?.map((item) => {
            return (
              <tr key={item?.id}>
                <td>{item?.id}</td>
                <td >{item?.name}</td>
                <td>
                  <DeleteIcon type="button" onClick={() => deleteCategory(item.id)} />
                  <UpdateIcon type="button" onClick={() => updateCategory(item.id)} />
                  <Link to={`/hello/${item.name}`}><InfoIcon /></Link>
                </td>
              </tr>
            );
          })}
        </table>
      </form>
    </div >
  );

}