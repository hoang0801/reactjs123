import { useEffect, useState } from "react";
import { searchCategoryAPI, testPromise2 } from "../service/category.service";
export function Category() {
    let [categoryArr, setCategoryArr] = useState([])
    let [searchDTO, setSearchDTO] = useState({
        "keyword": "",
        "start": 0,
        "length": 10
    });
    let getData = async () => {
        // searchCategoryAPI().then((resp) => {
        //     console.log(resp.data);
        //     resp.data la mang category
        //     setCategoryArr(resp.data);
        // }).catch(err => console.logg(err));
        try {
        let resp = await searchCategoryAPI(searchDTO); //await dùng trong hàm async
        console.log(resp.data);
        setCategoryArr(resp.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getData();
        // testPromise2();
    }, [searchDTO]); // searchDTO thay đổi thì getData() sẽ được gọi

    let handleTextChange = (e) => {
        setSearchDTO({...searchDTO, [e.target.name]: e.target.value});
    };
    
    return (
    <div>
        <input name="keyword" onChange={handleTextChange} placeholder="search.."/>
        <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                    {
                        categoryArr.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td><button type="button">Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </table>
    </div>
    );
}