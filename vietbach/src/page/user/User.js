import { useState } from "react";
import { createUserAPI } from "../../service/user.service";
import { useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { searchUserAPI } from "../../service/user.service";
import axios from "axios";
import "./User.css";
import { updateUserAPI } from "../../service/user.service";
import { deleteUserAPI } from "../../service/user.service";

export function User() {
  let [userArray, setUserArray] = useState([]);
  let [user, setUser] = useState({
    id: "",
    username: "bach123",
    password: "123",
    enabled: true,
    email: "huybach010603@gmail.com",

  });

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

  let createUser = async () => {
    try {
      console.log(user);
      let resp = await createUserAPI(user); //await dùng trong hàm async
      console.log("Tạo user thành công");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {}, [user]);

  let handleChangeUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  let handleSearchUser = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  let searchUser = async () => {
    try {
      console.log(user);
      let resp = await searchUserAPI(search); //await dùng trong hàm async

      console.log("data: ", resp.data);
      console.log("Search post thành công");
      setUserArray(resp.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  let deleteUser = async (id) => {
    try {
      let yes = window.confirm("Are you sure want to delete this item ?");
      let resp = await deleteUserAPI(id); //await dùng trong hàm async em queen
      let newArray = userArray.filter(function (item) {
        //Tương đương ((item) => item.id !== id);
        return item.id !== id;
      });
      console.log("Delete user thành công");
      setUserArray(newArray.data.data);
      // setUserArray(resp.data.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (search) {
      searchUser();
    }
  }, [search]); // search thay đổi thì getData() sẽ được gọi

  let updateUser = async () => {
    try {
      console.log(user);
      let resp = await updateUserAPI(user); //await dùng trong hàm async
      console.log("Update data: ", resp.data);
      console.log("Update user thành công");
      setUserArray(resp.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id="user-content">
      <h1>User Management</h1>
      <th>Create User</th>
      <form>
        <input name="id" onChange={handleChangeUser} placeholder="ID.." />
        <input
          name="username"
          onChange={handleChangeUser}
          placeholder="Username.."
        />
        <input
          name="password"
          onChange={handleChangeUser}
          placeholder="Password.."
        />
        <input name="email" onChange={handleChangeUser} placeholder="Email.." />
        <input name="role" onChange={handleChangeUser} placeholder="Role.." />

        <button type="button" className="save-user" onClick={createUser}>
          Save
        </button>

        <th>Search User</th>
        <input
          name="search-user"
          onChange={handleSearchUser}
          placeholder="Search here.."
        />
        <button type="button" className="search-btn" onClick={searchUser}>
          Search
        </button>
        <table>
          <tr className="table-user">
            <th className="table-user">ID</th>
            <th className="table-user">Username</th>
            <th className="table-user">Email</th>
            <th className="table-user">Role</th>
            <th className="table-user">Actions</th>
          </tr>

          {userArray?.map((item) => {
            return (
              <tr key={item?.id}>
                <td className="table-user">{item?.id}</td>
                <td className="table-user">{item?.username}</td>
                <td className="table-user">{item?.email}</td>
                <td className="table-user">{item?.userRoles[0].role}</td>
                <td className="table-user">
                  <button type="button" onClick={() => deleteUser(item.id)}>
                    Delete
                  </button>
                  <button type="button" onClick={() => updateUser(item.id)}>
                    Update
                  </button>
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



