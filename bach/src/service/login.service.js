export function loginAPI(username, password) {
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

var urlencoded = new URLSearchParams();
urlencoded.append("username", username);
urlencoded.append("password", password);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

return fetch("https://jmaster.io/jmaster-reactjs/api/login", requestOptions) // return promise để bên Login await
  .then(response => response.json());
}