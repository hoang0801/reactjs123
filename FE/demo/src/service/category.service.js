export function searchCategoryIPA(callbackData){
    // WARNING: For POST requests, body is set to null by browsers.
var data = JSON.stringify({
    "keyword": "",
    "start": 0,
    "length": 10
  });
  
  var xhr = new XMLHttpRequest();
  
  xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
     let res = JSON.parse(this.responseText);
      callbackData(res) //goi ham callbackData truyen vao
    }
  });
  
  xhr.open("POST", "https://jmaster.io/jmaster-reactjs/api/category/search");
  xhr.setRequestHeader("Content-Type", "application/json");
  
  xhr.send(data);
}