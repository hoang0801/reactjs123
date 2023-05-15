import { useState } from "react";
import { useEffect } from "react";
import {
  createCommentAPI,
  searchCommentAPI,
  updateCommentAPI,
  deleteCommentAPI,
} from "../../service/comment.service";
import { Link } from "react-router-dom";
import "./Comment.css";
import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';


export function Comment() {
  let [commentArray, setCommentArray] = useState([]);
  let [comment, setComment] = useState();

  let [search, setSearch] = useState({
    page: 0,
    size: 20,
    value: "%%", // giá trị
    orders: [
      // kiểu kiểu thế ạ :v , the thi sua cau lenh sql thoi
      {
        order: "asc", // cái này là theo chiều tăng của thuộc tính đó
        property: "id", // cái này là thuộc tính
      },
    ],
  });

  let createComment = async () => {
    try {
      console.log(comment);
      let resp = await createCommentAPI(comment); //await dùng trong hàm async
      console.log("Tạo comment thành công");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {}, [comment]);

  let handleChangeComment = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  let handleSearchComment = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  let searchComment = async () => {
    try {
      console.log(comment);
      let resp = await searchCommentAPI(search); //await dùng trong hàm async
      console.log("Search comment thành công");
      console.log(resp.data);
      setCommentArray(resp.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  let deleteComment = async (id) => {
    try {
      let yes = window.confirm("Are you sure want to delete this item ?");
      let resp = await deleteCommentAPI(id); //await dùng trong hàm async em queen
      let newArray = commentArray.filter(function (item) {
        //Tương đương ((item) => item.id !== id);
        return item.id !== id;
      });
      console.log("Delete comment thành công");
      console.log(newArray);
      setCommentArray(newArray.data.data);
      // lúc nãy nó chạy đè lên nhau ấy anh, nên bị trùng port, xo tât het roi dung k
      // xem gia tri cua bien o dau nhi
      // eclipse dung k quen
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (search) {
      searchComment();
    }
  }, [search]); // search thay đổi thì getData() s

  let updateComment = async () => {
    try {
      console.log(comment);
      let resp = await updateCommentAPI(comment); //await dùng trong hàm async
      console.log("Update data: ", resp.data);
      console.log("Update post thành công");
      setCommentArray(resp.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id="post-content">
      <h1>Comment Management</h1>
      <th>Create Comment</th>
      <form>
        <input name="id" onChange={handleChangeComment} placeholder="ID.." />
        <input
          name="content"
          onChange={handleChangeComment}
          placeholder="Content.."
        />
        <input
          name="post-id"
          onChange={handleChangeComment}
          placeholder="Post ID.."
        />
        <button type="button" className="save-comment" onClick={createComment}>
          Comment
        </button>

        <th>Search Comment</th>
        <input
          name="search-comment"
          onChange={handleSearchComment}
          placeholder="Search here.."
        />
        <button type="button" className="search-btn" onClick={searchComment}>
          Search
        </button>
        <table>
          <tr className="table-comment">
            <th className="table-comment">ID</th>
            <th className="table-comment">Comment</th>
            <th className="table-comment">Post ID</th>
            <th className="table-comment">Author</th>
            <th className="table-comment">Date Created</th>
            <th className="table-comment">Actions</th>
          </tr>

          {commentArray?.map((item) => {
            return (
              <tr key={item?.id}>
                <td className="table-comment">{item?.id}</td>
                <td className="table-comment" id="description-content">
                  {item?.content}
                </td>
                <td className="table-comment">{item?.post.id}</td>
                <td className="table-comment">{item?.createdBy.username}</td>
                <td className="table-comment">{item?.createdDate}</td>
                <td className="table-comment">
                <DeleteIcon type="button" onClick={() => deleteComment(item.id)}/>                    
                      <UpdateIcon type="button" onClick={() => updateComment(item.id)}/>
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
