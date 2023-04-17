import { useInsertionEffect, useState } from "react"

export function Category() {
    let [categoryArr, setCategoryArr] = useState([])

    let getData = ()=>{
        searchCategoryAPI((resp)=>{
            console.log(resp.data);
            //resp.data la mang category
            setCategoryArr(resp.data)
        })
    }


}

useEffect(()=>{
    getData();

}, [])
return(
<table>
    <div>
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Actions</th>
    </tr>
    {
        categoryArr.map(item => {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.Gender}</td>
                    <td><button type="button" onClick={() => deletePerson(item.id)}>Delete</button></td>
                </tr>
                
            )
        })
    }
    </div>
</table>

)