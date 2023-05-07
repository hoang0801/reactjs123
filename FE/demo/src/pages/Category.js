import { useEffect, useState } from "react";
import { searchCategoryIPA, testPromise } from "../service/category.service";

export function Category() {
    let [categoryArr, setCategoryArr] = useState([]);

     let getData = async()=>{
        // searchCategoryIPA().then((resp)=>{
        //     console.log(resp);// resp.data la mang category

        //     setCategoryArr(resp.data)//goi api
        
        // })
        try{
            let resp = await searchCategoryIPA(
                setCategoryArr(resp.data))
        }catch (err){
            console.log(err)
        }
        

    }
    useEffect(() =>{
        getData();
        // testPromise()
    },[])
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
