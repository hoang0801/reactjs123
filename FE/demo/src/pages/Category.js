import { useEffect, useState } from "react";
import { searchCategoryAPI,testPromise } from "../service/category.service";

export function Category() {
    let[ categoryArr, setCategoryArr]= useState([])
    let [ searchCategory, setSearchCategory] = useState({
        "start": 0,
        "Length": 10,
        "search": {
          "value": ""
        }
    })

     let getData = async()=>{
        try{
             
            let resp = await searchCategoryAPI(searchCategory)
            console.log(resp.data)
            setCategoryArr(resp.data)
        }catch (err){
            console.log(err)
        }
        

    }
    useEffect(() =>{
        getData();
        // testPromise()
    },[searchCategory]) // searchDTO thay đổi thì getData() sẽ được gọi

     let handleTextChange = (e) =>{
        setSearchCategory({...searchCategory,[e.taget.name]:e.taget.value})
        
     }
    return (
        <div>
            <input name="keyword" onChange={handleTextChange}
            placeholder="search.."/>
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Action</th>
            </tr>
            {
                categoryArr.map(item => {
                    return (
                        <tr key={item}>
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
