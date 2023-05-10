import axios from "axios";

export function LoginAPI(){
    var myHeaders = new Headers();
myHeaders.append("username", "123456789");
myHeaders.append("password", "123456");
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIwMTIzNDU2Nzg5IiwiaWF0IjoxNjgzNjg2MTEzLCJleHAiOjE2ODM2ODk3MTN9.i6llRE-jYv-YNnqi8IDD-Mf7Qo-PMYndh4Wl-b1IO_s");
myHeaders.append("Cookie", "JSESSIONID=B4E5C3D027936DA48FA354234E4795DB");

var urlencoded = new URLSearchParams();
urlencoded.append("username", "0123456789");
urlencoded.append("password", "123456");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

// fetch("http://52.193.212.182:8080/api/login", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
return axios(requestOptions)
}
