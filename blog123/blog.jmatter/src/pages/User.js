import { useEffect, useState } from "react";
import { addUserAPI, deleteUserAPI, searchUserAPI, updateUserAPI } from "../service/userService";

export function User() {
  let [userArray, setUserArray] = useState([]);
  let [user, setUser] = useState({
    id: "",
    username: "",
    password: "",
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
      console.log(user);
      let resp = await addUserAPI(user);//awai dung trong ham async
      console.log("tao user thanh cong");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {}, [user]);

  let searchUser = async () => {
    try {
      let resp = await searchUserAPI(search);
      console.log(resp.data);
      console.log("Search post thành công");
      setUserArray(resp.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (search)
      searchUser(), [];
  }, [search]); // searchDTO thay đổi thì getData() sẽ được gọi

  let deleteUser = async (id) => {
    try {
      let yes = window.confirm("Are you sure want to delete this item ?");
      let resp = await deleteUserAPI(id); //await dùng trong hàm async 
      let newArray = userArray.filter(function (item) {
        //Tương đương ((item) => item.id !== id);
        return item.id !== id;
      });
      console.log("delete thang cong");
      setUserArray(newArray.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  let updateUser = async () => {
    try {
      console.log(user);
      let resp = await updateUserAPI(category); // await dung trong ham async
      console.log("update data:", resp.data);
      console.log("update user thanh cong");
      setCategoryArr(resp.data.data);
    } catch (err) {
      console.log(err);
    }
  };


  let handleSearchUser = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };
  let handleChangeUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div id="user-content">
      <h1>User Management</h1>
      <th>Create User</th>
      <form>
        <input name="id" onChange={handleChangeUser} placeholder="ID.." />
        <input name="username" onChange={handleChangeUser} placeholder="Username.." />
        <input name="password" onChange={handleChangeUser} placeholder="Password.." />
        <input name="role" onChange={handleChangeUser} placeholder="Role.." />
        <button type="button" className="save-user" onClick={addUser}> Save </button>

        <th>Search User</th>
        <input name="search-user" onChange={handleSearchUser} placeholder="Search here.." />
        <button type="button" className="search-btn" onClick={searchUser}>Search</button>
        <table>
          <tr className="table-user">
            <th className="table-user">ID</th>
            <th className="table-user">Username</th>
            <th className="table-user">Email</th>
            <th className="table-user">Actions</th>
          </tr>

          {userArray?.map((item) => {
            return (
              <tr key={item?.id}>
                <td className="table-user">{item?.id}</td>
                <td className="table-user">{item?.username}</td>
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
