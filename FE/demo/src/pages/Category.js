import { useEffect, useState } from "react";
import { searchCategoryAPI,testPromise } from "../service/category.service";

export function Category() {
    let [ searchCategory, setSearchCategory] = useState({})
    // const categries=[1,2,3,4]
     let getData = async()=>{
       
        try{
             
            let resp = await searchCategoryAPI(
                {
                    "start": 0,
                    "Length": 10,
                    "search": {
                      "value": ""
                    }
                }
            )
            setSearchCategory(resp.data)
                // console.log(searchCategory)
        }catch (err){
            console.log(err)
        }
        

    }
    useEffect(() =>{
        getData();
        // testPromise()
    },[])

     let handleTextChange = (e) =>{
        getData()
        // setSearchDTO
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
                categories.map(item => {
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
