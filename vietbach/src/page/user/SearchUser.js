import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Alert, Button, IconButton, MenuItem, Select, TextField } from "@mui/material"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { toast } from 'react-toastify'
import { useError } from "../../hooks/useError"
import { searchUser, setUserSearch } from "../../redux/userSlice"
import { deleteUserAPI } from "../../service/user.service"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

export default function SearchUser() {
    const { showError } = useError()

    const { users, recordsFiltered, search, error, user } = useSelector((state) => state.user)
    //console.log("user: ",JSON.stringify(user));
    const dispatch = useDispatch()

    useEffect(() => {
        const timeout = setTimeout(() => {
            find()
        }, 500)
        return () => clearTimeout(timeout)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]) // khi redux seearch thay doi, thi se dc goi lai find

    const find = async () => {
        dispatch(searchUser())
    }

    const handleChange = (e) => {
        let newSearch = {
            ...search,
            start: 0,// reset lai trang dau
            [e.target.name]: e.target.value
        }

        //update thay doi redux search
        dispatch(setUserSearch(newSearch))
    }

    const deleteItem = async (id) => {
        console.log("delete id",id);
        let { code } = await deleteUserAPI(id)

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
        dispatch(setUserSearch({
            ...search,
            start
        }))
    }

    const next = () => {
        let start = (search.start) + parseInt(search.length)

        //update thay doi redux search
        if (start < recordsFiltered)
            dispatch(setUserSearch({
                ...search,
                start
            }))
    }

    return (
        <div>
            <h2>Search User</h2>
            <div>
                <TextField label="Keyword" variant="outlined" name="value" value={search.value} onChange={handleChange} size='small' />

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
                <Button variant="outlined" endIcon={<AddOutlinedIcon color="primary"/>} component={Link} to={`/dashboard/user/new`} size="medium">
                    Add
                </Button>
            </div>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Avatar</th>
                        <th>Username</th>
                        <th>Brithdate</th>
                        <th>CreatedAt</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Option</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.avatar}</td>
                                <td>{user.username}</td>
                                <td>{user.birthdate}</td>
                                <td>{user.createdDate}</td>
                                <td>{user.email}</td>
                                <td>{user.userRoles[0].role}</td>
                                <td>                  
                                    <IconButton aria-label="delete" color="primary" onClick={() => deleteItem(user.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                    <IconButton aria-label="edit" color="primary" component={Link} to={`/dashboard/user/edit/${user.id}`}>
                                        <EditIcon />
                                    </IconButton>               
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