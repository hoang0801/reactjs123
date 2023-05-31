import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import UpdateIcon from '@mui/icons-material/Update';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { addPostAPI, deletePostAPI, searchPostAPI, updatePostAPI } from "../../service/postService";


export function Post() {
  let [postArray, setPostArray] = useState([]);
  let [post, setPost] = useState(
    {
      "id": "",
      "title": "",
      "description": "",
      "image": "",
      "categoryId": ""
    }
  );

  let [search, setSearch] = useState(
    {
      "start": 0,
      "length": 10,
      "categoryId": ""

    });

  const [selectedFile, setSelectedFile] = useState();

  function handleChange(event) {
    //console.log("file up ",event.target.files[0]);
    setSelectedFile(event.target.files[0]);
  }

  let createPost = async () => {
    try {
      console.log(post);
      var formdata = new FormData();
      formdata.append("title", post.title);
      formdata.append("description", post.description);
      formdata.append("imageFile ", selectedFile);
      formdata.append("categoryId ", post.categoryId);

      let resp = await addPostAPI(formdata); //await dùng trong hàm async
      console.log("Tạo post thành công");
    } catch (err) {
      console.log(err);
    }
  };


  let handleChangePost = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  let handleSearchPost = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  let searchPost = async () => {
    try {
      console.log(post);
      let resp = await searchPostAPI(search); //await dùng trong hàm async
      console.log(resp.data);
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
    } catch (err) {
      console.log(err);
    }
  };

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
        {/* <input name="id" onChange={handleChangePost} placeholder="ID.." /> */}
        <input name="title" onChange={handleChangePost} placeholder="Title.." />
        <input name="description" onChange={handleChangePost} placeholder="Description.." />
        <input name="categoryId" onChange={handleChangePost} placeholder="CategoryId.." />
        <button type="button">
          <input accept="*" multiple type="file" name="imageFile " onChange={handleChange} />
        </button>
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
            <th className="table-post">createdBy</th>
            <th className="table-post">Date Created</th>
            <th className="table-post">Actions</th>
          </tr>

          {postArray?.map((item) => {
            return (
              <tr key={item?.id}>
                <td className="table-post">{item?.id}</td>
                <td className="table-post">{item?.title}</td>
                <td className="table-post" id="description-content">{item?.description}</td>
                <td className="table-post">{item?.imageFile}</td>
                <td className="table-post">{item?.category.name}</td>
                <td className="table-post">{item?.createBy}</td>
                <td className="table-post">{item?.createdAt}</td>
                <td className="table-post">
                  <DeleteIcon type="button" onClick={() => deletePost(item.id)} />
                  <UpdateIcon type="button" onClick={() => updatePost(item.id)} />
                  <Link to={`/hello/${item.name}`}><InfoIcon /></Link>
                </td>
              </tr>
            );
          })}
        </table>
      </form>
    </div>
  );
}