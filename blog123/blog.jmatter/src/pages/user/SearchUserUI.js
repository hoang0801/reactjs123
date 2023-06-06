import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, IconButton, TextField } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useError } from "../../hooks/useError";
import { searchUser, setUserSearch } from "../../redux/userSlice";
import { deleteUserAPI } from "../../service/userService";

export default function SearchUser() {
  const { showError } = useError();

  const { users, recordsFiltered, search, error, user } = useSelector((state) => state.user);
  console.log("users: ", JSON.stringify(users));
  const dispatch = useDispatch();

  useEffect(() => {
    const timeout = setTimeout(() => {
      find();
    }, 500);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]); // khi redux seearch thay doi, thi se dc goi lai find

  const find = async () => {
    dispatch(searchUser());
  };

  const handleChange = (e) => {
    let newSearch = {
      ...search,
      start: 0,// reset lai trang dau
      [e.target.name]: e.target.value
    };

    //update thay doi redux search
    dispatch(setUserSearch(newSearch));
  };

  const deleteItem = async (id) => {
    //console.log("delete id",id);
    let { code } = await deleteUserAPI(id);

    if (code === 200) {
      toast("Thanh cong!!", { position: toast.POSITION.TOP_CENTER, type: 'success', theme: 'colored' });
      find();
    } else {
      showError(code);
    }
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 90, editable: true },
    {
      field: 'phone',
      headerName: 'Phone',
      //type: 'number',
      width: 90,
    },
    {
      field: 'CreatedDate',
      headerName: 'CreatedDate',
      //type: 'date',
      width: 120,
    },
    {
      field: 'address',
      headerName: 'Address',
      //type: 'date',
      width: 120,
    },


    {
      field: 'roles',
      headerName: 'Role',
      type: 'string',
      valueGetter: (params) => { return params.row.roles[0]; },
      width: 150,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 130,
      renderCell: (list) => {
        //console.log("editing table", list.row)
        return (<div><IconButton aria-label="edit" color="primary" component={Link} to={`/dashboard/user/edit/${list.row.id}`}><EditIcon /></IconButton>
          <IconButton aria-label="delete" color="primary" onClick={() => deleteItem(list.row.id)}> <DeleteIcon /></IconButton>
        </div>);
      }

    },
  ];

  const rows = users;


  return (
    <div style={{ height: 400, width: '100%' }}>
      <h2>User Details</h2>
      <TextField label="Keyword" variant="standard" name="value" value={search.value} onChange={handleChange} size='small' />
      <Button variant="outlined" endIcon={<AddOutlinedIcon color="primary" />} component={Link} to={`/dashboard/user/new`} size="medium">
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