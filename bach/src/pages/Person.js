import { useState } from "react";
import React from "react";
import { createUserAPI } from "../service/user.service";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export function Person() {
  // các hàm bắt đầu bằng chữ use là hàm Hook ( hook use )
  let [personArr, setPersonArr] = useState([]); // destruction
  // let [id, setId] = useState(0);
  // let [name, setName] = useStat    e("Ăng gu lờ");
  let [userDTO, setUserDTO] = useState({
    name: "bach",
    avatar: "string13",
    username: "bachdeptrai",
    password: "123",
    email: "string13",
    birthdate: "01/06/2003",
    userRoles: [
      {
        role: "ROLE_ADMIN",
      },
    ],
  });

  let createUser = async () => {
    try {
        console.log(userDTO);
      let resp = await createUserAPI(userDTO); //await dùng trong hàm async
    //   console.log(resp.data);
    
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    //getData();
    // testPromise2();
  }, [userDTO]);

  let [person, setPerson] = useState({ id: 0, name: "" }); // hàm state biến tạo đối tượng thay vì tạo từng thuộc tính riêng của nó (id, name)

  let save = (e) => {
    console.log("save");
    // let p = { id, name} đẩy Person vừa tạo vào mảng kết quả
    // setPersonArr([...personArr, p]);  dấu ... + tên mảng là lấy hết cả mảng => mảng mới
    setPersonArr([...personArr, userDTO]);
  };

  // let handleChangeId = (e) => setId(parseInt(e.target.value)); giá trị nhập vào ném vào state setId
  // let handleChangeName = (e) => setName(e.target.value);
  let handleChangePerson = (e) => {
    // e.target.name là thuộc tính(như id, name,..)
    // setPerson({...person, [e.target.name]: e.target.value});
    setUserDTO({ ...userDTO, [e.target.name]: e.target.value });
  };

  let deletePerson = (id) => {
    let newArr = personArr.filter(function (item) {
      //Tương đương ((item) => item.id !== id);
      return item.id !== id;
    });
    setPersonArr(newArr);
  };

  return (
    <div>
      <form>
        <input name="id" onChange={handleChangePerson} />
        <input name="name" onChange={handleChangePerson} />
        {/* <select name="gender" onChange={handleChangePerson}>
                    <option value="Nam" selected>Nam</option>
                    <option value="Nu">Nữ</option>
                </select> */}
        <input name="username" onChange={handleChangePerson} />
        <input name="password" onChange={handleChangePerson} />
        <input name="email" onChange={handleChangePerson} />
        <input name="birthdate" onChange={handleChangePerson} />
        <input name="role" onChange={handleChangePerson} />

        <button type="button" onClick={createUser}>
          Save
        </button>
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            {/* <th>Gender</th> */}
            <th>Username</th>
            <th>Password</th>
            <th>Email</th>
            <th>Birthdate</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
          {personArr.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                {/* <td>{item.gender}</td> */}
                <td>{item.username}</td>
                <td>{item.password}</td>
                <td>{item.email}</td>
                <td>{item.birthdate}</td>
                <td>{item.role}</td>
                <td>
                  <button type="button" onClick={() => deletePerson(item.id)}>
                    Delete
                  </button>
                </td>
                <Link to={`/hello/${item.name}`}>Xem</Link>
              </tr>
            );
          })}
        </table>
      </form>
    </div>
  );
}
