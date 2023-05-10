import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchCategoryThunk, setData } from "../redux/categorySlice";
import { startLoading } from "../redux/categorySlice";

export function CategoryRedux() {
    const dispatch = useDispatch();
    // đọc từ store redux
    const category = useSelector(store => store.category); // hàm callback lấy category bên store
    // đổi tên data thành categoryArr
    const { isLoading, data: categoryArr } = category; // đọc initial State bên categorySlice

    let handleTextChange = (e) => {
        // let arr = [{id: 1, name: "Test 1"}, {id: 2, name: "Test 2"}];
        // dispatch(startLoading());
        // dispatch(setData(arr));
        dispatch( searchCategoryThunk() ); // gọi hàm reducer phải dùng dispatch
    };
    return (
        <div>
            {isLoading && <p>loading.....</p>}
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
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td><button type="button">Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </table>
        </div>
        );
}