import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Alert, Button, IconButton, MenuItem, Select, TextField } from "@mui/material"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { toast } from 'react-toastify'
import { useError } from "../../hooks/useError"
import { searchPost, setPostSearch } from "../../redux/postSlice"
import { deletePostAPI } from "../../service/post.service"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { DataGrid } from '@mui/x-data-grid'

export default function SearchPost() {
    const { showError } = useError()

    const { posts, recordsFiltered, search, error } = useSelector((state) => state.post)
    const dispatch = useDispatch()

    useEffect(() => {
    console.log(posts.map);

        const timeout = setTimeout(() => {
            find()
        }, 500)
        return () => clearTimeout(timeout)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]) // khi redux seearch thay doi, thi se dc goi lai find

    const find = async () => {
        dispatch(searchPost())
    }

    const handleChange = (e) => {
        let newSearch = {
            ...search,
            start: 0,// reset lai trang dau
            [e.target.name]: e.target.value
        }

        //update thay doi redux search
        dispatch(setPostSearch(newSearch))
    }

    const deleteItem = async (id) => {
        let { code } = await deletePostAPI(id)

        if (code === 200) {
            toast("Thanh cong!!", { position: toast.POSITION.TOP_CENTER, type: 'success', theme: 'colored' })
            find()
        } else {
            showError(code)
        }
    }


    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            //type: 'number',
            width: 90,
        },
        {
            field: 'title',
            headerName: 'Title',
            //type: 'number',
            width: 120,
            editable: true
        },
        {
            field: 'description',
            headerName: 'Description',
            //type: 'number',
            width: 120,
            editable: true
        },{
            field: 'category.name',
            headerName: 'Category',
            //type: 'number',
            width: 120,
            editable: true
        },{
            field: 'createdBy.username',
            headerName: 'Author',
            //type: 'number',
            width: 120,
            editable: true
        },
        {
            field: 'createdDate',
            headerName: 'Time Created',
            //type: 'number',
            width: 120,
            editable: true
        },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 130,
            renderCell: (list) => {
              //console.log("editing table", list.row)
              return ( <div><IconButton aria-label="edit" color="primary" component={Link} to={`/dashboard/post/edit/${list.row.id}`}><EditIcon /></IconButton>
                        <IconButton aria-label="delete" color="primary" onClick={() => deleteItem(list.row.id)}> <DeleteIcon /></IconButton>
              </div>)
            }
      
          },
        ];
    
    const rows = posts;
    
      return (
        <div style={{ height: 400, width: '100%' }}>
            <h2>Posts Details</h2>
            <TextField label="Keyword" variant="standard" name="value" value={search.value} onChange={handleChange} size='small' />
            <Button variant="outlined" endIcon={<AddOutlinedIcon color="primary"/>} component={Link} to={`/dashboard/post/new`} size="medium">
                        Add
            </Button>
          <DataGrid
                           
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
        />
        </div>
      );
    }