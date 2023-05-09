export function searchCategoryIPA(){
  return new Promise((resolve, reject)=>{
 // WARNING: For POST requests, body is set to null by browsers.
 var data = JSON.stringify({
  "keyword": "",
  "start": 0,
  "length": 10
});

var xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
   let res = JSON.parse(this.responseText);
   resolve(res) //goi ham call truyen vao
  }
});

xhr.open("POST", "http://52.193.212.182:8080/api/category/search");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.send(data);
  })
}

export function testPromise(){
  let promise = new  Promise ((resolve, reject)=>{
    setTimeout(()=>{
      console.log(111111)

    setTimeout(()=>{
      console.log(22222)

      resolve("ok")
    },500);
  },1000)
});

 promise.then(
  (s)=>{
  console.log(s);
 },
 (err)=>{
  console.log(err);
 });
}

function promise2() {
  return new Promise((ok, fail)=>{
    setTimeout(() => {
      // ok("Ok")
    }, 500);
  })
}
 export async function testPromise2(){
  // promise2().then(s=>console(s))
  try{
   let s= await promise2()//doc gia tri cua resolve (ok)
   console.log(s)
  }catch (err){
    console.log(err)
  }
 }