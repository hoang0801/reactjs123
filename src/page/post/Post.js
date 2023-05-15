import { useState } from "react";
import { useEffect } from "react";
import { createPostAPI, searchPostAPI, updatePostAPI, deletePostAPI } from "../../service/post.service";
import { Link } from "react-router-dom";
import "./Post.css";
import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
export function Post() {
  let [postArray, setPostArray] = useState([]);
  let [post, setPost] = useState(
    {
      "id": 0,
      "title": "test",
      "description": "done",
      "image": "null",
      "category": {
        "id": 1
      },
      "createdBy": {
        "id": 2
      },
      "createdAt": "28/03/2023 14:31:45"
    }
  );

  let [search, setSearch] = useState({
    page: 0,
    size: 20,
    value: "%%", // giá trị
    orders: [  // kiểu kiểu thế ạ :v , the thi sua cau lenh sql thoi
      {
        order: "asc", // cái này là theo chiều tăng của thuộc tính đó
        property: "id", // cái này là thuộc tính
      },
    ],
  });

  let createPost = async () => {
    try {
      console.log(post);
      let resp = await createPostAPI(post); //await dùng trong hàm async
      console.log("Tạo post thành công");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {}, [post]);

  let handleChangePost = (e)=> {
    setPost({...post, [e.target.name]: e.target.value})
  }

  let handleSearchPost = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  let searchPost = async () => {
    try {
      console.log(post);
      let resp = await searchPostAPI(search); //await dùng trong hàm async
      console.log("Search post thành công");
      setPostArray(resp.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  let deletePost = async (id) => {
    try {
      let yes = window.confirm("Are you sure want to delete this item ?");
      let resp = await deletePostAPI(id); //await dùng trong hàm async em queen
      let newArray = postArray.filter(function (item) {
        //Tương đương ((item) => item.id !== id);
        return item.id !== id;
      });
      console.log("Delete post thành công");
      console.log(newArray);
      setPostArray(newArray.data.data);
      // lúc nãy nó chạy đè lên nhau ấy anh, nên bị trùng port, xo tât het roi dung k
      // xem gia tri cua bien o dau nhi
      // eclipse dung k quen
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (search) {
      searchPost();
    }
  }, [search]); // search thay đổi thì getData() sẽ được gọi

  let updatePost = async () => {
    try {
      console.log(post);
      let resp = await updatePostAPI(post); //await dùng trong hàm async
      console.log("Update data: ", resp.data);
      console.log("Update post thành công");
      setPostArray(resp.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id="post-content">
      <h1>Post Management</h1>
      <th>Create Post</th>
      <form>
        <input name="id" onChange={handleChangePost} placeholder="ID.." />
        <input name="title" onChange={handleChangePost} placeholder="Title.." />
        <input
          name="description"
          onChange={handleChangePost}
          placeholder="Description.."
        />
        <input
          name="categoryId"
          onChange={handleChangePost}
          placeholder="categoryId.."
        />
        <input name="categoryName" onChange={handleChangePost} placeholder="categoryName.." />
        <input
          name="author"
          onChange={handleChangePost}
          placeholder="Author.."
        />
        <button type="button" className="save-post" onClick={createPost}>
          Post
        </button>

        <th>Search Post</th>
        <input
          name="search-post"
          onChange={handleSearchPost}
          placeholder="Search here.."
        />
        <button type="button" className="search-btn" onClick={searchPost}>
          Search
        </button>
        <table>
          <tr className="table-post">
            <th className="table-post">ID</th>
            <th className="table-post">Title</th>
            <th className="table-post">Description</th>
            <th className="table-post">Image</th>
            <th className="table-post">Category Name</th>
            <th className="table-post">Author</th>
            <th className="table-post">Date Created</th>
            <th className="table-post">Actions</th>
          </tr>

          {postArray?.map((item) => {
            return (
              <tr key={item?.id}>
                <td className="table-post">{item?.id}</td>
                <td className="table-post">{item?.title}</td>
                <td className="table-post" id="description-content">{item?.description}</td>
                <td className="table-post">{item?.image}</td>
                <td className="table-post">{item?.category.name}</td>
                <td className="table-post">{item?.createBy}</td>
                <td className="table-post">{item?.createdAt}</td>
                <td className="table-post">
                      <DeleteIcon type="button" onClick={() => deletePost(item.id)}/>                    
                      <UpdateIcon type="button" onClick={() => updatePost(item.id)}/>
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
 
