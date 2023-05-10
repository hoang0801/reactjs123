export function createUserAPI(userDTO) {
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify(userDTO);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

return fetch("http://localhost:8081/api/user/new", requestOptions)
  .then(response => response.json());
}