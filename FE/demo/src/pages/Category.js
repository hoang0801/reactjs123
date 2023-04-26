import { useEffect, useState } from "react";
import { searchCategoryIPA } from "../service/category.service";

export function Category() {
    let [categoryArr, setCategoryArr] = useState([]);

    //  let async getData =()=>{
    //     searchCategoryIPA((resp)=>{
    //         console.log(resp.data);

    //         setCategoryArr(resp.data)
    //     })
    // }
    useEffect(()=>{
        getABC()

    },[])
    async  function  getABC () {
       const resp=await searchCategoryIPA();
       console.log(resp);
  
        return resp;
      }
    return (
        <div>
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Action</th>
            </tr>
            {
                categoryArr.map(item => {
                    return (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.gerder}</td>
                            <td><button type="button"> Delete</button></td>
                        </tr>


                    )
                })
            }
        </table>
        </div >
      
    )
}
