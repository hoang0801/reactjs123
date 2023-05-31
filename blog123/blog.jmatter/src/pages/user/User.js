import { Button, Link } from "@mui/material";
import { useEffect, useState } from "react";
import { addUserAPI, deleteUserAPI, searchUserAPI, updateUserAPI } from "../../service/userService";


export function User() {

  let [userArray, setUserArray] = useState([]);
  let [user, setUser] = useState({
    id: "",
    username: "",
    password: "",
    phone: " ",
    address: "",
    enabled: true,
  });

  let [search, setSearch] = useState({
    "start": "0",
    "length": "10",
    "search": {
      "value": ""
    }
  });

  let addUser = async () => {
    try {
      console.log(1234);
      console.log(user);
      let resp = await addUserAPI(user);//awai dung trong ham async

      console.log(resp.result);
      console.log("tao user thanh cong");
    } catch (err) {
      console.log(err);
    }
  };

  let searchUser = async () => {
    try {
      let resp = await searchUserAPI(search);
      console.log(resp.result);
      console.log("Search user thành công");
      setUserArray(resp.result.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (search)
      searchUser();
  }, [search]); // search thay đổi thì getData() sẽ được gọi

  let deleteUser = async (id) => {
    try {
      let yes = window.confirm("Are you sure want to delete this item ?");
      let resp = await deleteUserAPI(id); //await dùng trong hàm async 
      console.log(resp);
      let newArray = userArray.filter(function (item) {
        //Tương đương ((item) => item.id !== id);
        return item.id !== id;
      });
      console.log("delete thang cong");
      setUserArray(newArray.result.data);
    } catch (err) {
      console.log(err);
    }
  };

  let updateUser = async () => {
    try {
      console.log(user);
      let resp = await updateUserAPI(user); // await dung trong ham async
      console.log("update data:", resp.result);
      console.log("update user thanh cong");
      setUserArray(resp.result.data);
    } catch (err) {
      console.log(err);
    }
  };

  let handleSearchUser = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };
  let handleChangeUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  return (
    <div id="user-content">
      <h1>User Management</h1>
      <th>Create User</th>
      <form>
        <input name="id" onChange={handleChangeUser} placeholder="ID.." />
        <input name="name" onChange={handleChangeUser} placeholder="Name.." />
        <input name="password" onChange={handleChangeUser} placeholder="Password.." />
        <input name="phone" onChange={handleChangeUser} placeholder="Phone.." />
        <input name="address" onChange={handleChangeUser} placeholder="Address.." />
        <input name="role" onChange={handleChangeUser} placeholder="Role.." />
        <button type="button" className="save-user" onClick={addUser}> Save </button>

        <th>Search User</th>
        <input name="search-user" onChange={handleSearchUser} placeholder="Search here.." />
        <button type="button" className="search-btn" onClick={searchUser}>Search</button>
        <table>
          <tr className="table-user">
            <th className="table-user">ID</th>
            <th className="table-user">Username</th>
            <th className="table-user">Actions</th>
          </tr>

          {userArray?.map((item) => {
            return (
              <tr key={item?.id}>
                <td className="table-user">{item?.id}</td>
                <td className="table-user">{item.name}</td>
                <td className="table-user">
                  <Button type="button" onClick={() => deleteUser(item.id)}>
                    Delete
                  </Button>
                  <Button type="button" onClick={() => updateUser(item.id)}>
                    Update
                  </Button>
                  <Link to={`/hello/${item.name}`}><button type="button">Xem</button></Link>
                </td>
              </tr>
            );
          })}
        </table>
      </form>
    </div>
  );
}
export default User;
