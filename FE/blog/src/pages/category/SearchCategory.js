import { useDispatch, useSelector } from "react-redux"
import { useError } from "../../hook/useError"
import { deleteCategoryAPI } from "../../service/category.service"
import { toast } from "react-toastify"
import { Button, MenuItem, Select, TextField } from "@mui/material"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { searchCategory, setCategorySearch } from "../../redux/categorySlice"

export default function SearchCategory() {
    const { showError } = useError()

    const { categories, recordsFiltered, search, error } = useSelector((state) => state.category)
    const dispatch = useDispatch()

    useEffect(() => {
        const timeout = setTimeout(() => {
            find()
        }, 500)
        return () => clearTimeout(timeout)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]) // khi redux seearch thay doi, thi se dc goi lai find

    const find = async () => {
        dispatch(searchCategory())
    }

    const handleChange = (e) => {
        let newSearch = {
            ...search,
            start: 0,// reset lai trang dau
            [e.target.name]: e.target.value
        }

        //update thay doi redux search
        dispatch(setCategorySearch(newSearch))
    }

    const deleteItem = async (id) => {
        let { code } = await deleteCategoryAPI(id)

        if (code === 200) {
            toast("Thanh cong!!", { position: toast.POSITION.TOP_CENTER, type: 'success', theme: 'colored' })
            find()
        } else {
            showError(code)
        }
    }

    const back = () => {
        let start = search.start - parseInt(search.length)
        start = start < 0 ? 0 : start

        //update thay doi redux search
        dispatch(setCategorySearch({
            ...search,
            start
        }))
    }

    const next = () => {
        let start = (search.start) + parseInt(search.length)

        //update thay doi redux search
        if (start < recordsFiltered)
            dispatch(setCategorySearch({
                ...search,
                start
            }))
    }
    console.log(categories);
    return (
        <div>
            <h2>Search Category</h2>
            <div>
                <TextField label="Keyword" variant="outlined" name="keyword" value={search.keyword} onChange={handleChange} size='small' />

                <Select size='small'
                    value={search.length}
                    label="length"
                    name="length" defaultValue={search.length}
                    onChange={handleChange}
                >
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                </Select>

                <Button variant="outlined" onClick={back} startIcon={<ArrowBackIosIcon color="primary" />} size="medium">
                    Previous
                </Button>
                <Button variant="outlined" onClick={next} endIcon={<ArrowForwardIosIcon color="primary" />} size="medium">
                    Next
                </Button>
            </div>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categories.map(({ id, name }) => (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => deleteItem(id)}>
                                        <i className="fa-solid fa-trash-can"></i> Delete
                                    </button>
                                    <Link className='btn btn-warning'
                                        to={`/dashboard/category/${id}/edit`}>
                                        <i className="fa-solid fa-pen-to-square"></i> Edit
                                    </Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            {error && <Alert severity="error">Error {error}!</Alert>}
        </div>
    )
}