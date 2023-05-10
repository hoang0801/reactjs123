export function searchCategoryAPI(searchDTO) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify(searchDTO);
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  return fetch("https://jmaster.io/jmaster-reactjs/api/category/search", requestOptions)
    .then(response => response.json());
}

export function testPromise() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(111111111);
      setTimeout(() => {
        console.log(222222);
        resolve("OK");
      }, 500);
    }, 1000)
  });
  promise.then(
    (s) => {
    console.log(s);
    return "OK 2";
  }, 
  // (err) => {
  //        console.log(err);
  // })
  ) 
  .catch(err => {throw err;}) // catch thì chạy xuống catch tiếp theo
                              // return thì chạy xuống then success
  .then(s2 => s2 + "aaaa")
  .catch(err2 => { return err2;})

  .then(s3 => console.log(s3));

  // Async, Await
}

function promise2() { // hàm trả về 1 promise
  return new Promise((ok, fail) => {
    setTimeout(() => {
    ok("OK");
    // fail("FAIL");
    }, 500);
  });
}


export async function testPromise2() { //Hàm async mặc định trả về 1 đối tượng promise
  // promise2().then(s => console(s));
  try {
  let s = await promise2(); // đọc giá trị của resolve (ok)
  console.log(s);
  } catch (err) {
    console.log(err);
  }
}