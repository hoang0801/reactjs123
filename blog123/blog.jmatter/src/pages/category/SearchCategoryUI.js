import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, IconButton, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useError } from "../../hooks/useError";
import { searchCategory, setCategorySearch } from "../../redux/categorySlice";
import { deleteCategoryAPI } from "../../service/categoryService";

export default function SearchCategory() {
  const { showError } = useError();

  const { categories, recordsFiltered, search, error } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    const timeout = setTimeout(() => {
      find();
    }, 500);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]); // khi redux seearch thay doi, thi se dc goi lai find

  const find = async () => {
    dispatch(searchCategory());
  };

  const handleChange = (e) => {
    let newSearch = {
      ...search,
      start: 0,// reset lai trang dau
      [e.target.name]: e.target.value
    };

    //update thay doi redux search
    dispatch(setCategorySearch(newSearch));
  };

  const deleteItem = async (id) => {
    let { code } = await deleteCategoryAPI(id);

    if (code === 200) {
      toast("Thanh cong!!", { position: toast.POSITION.TOP_CENTER, type: 'success', theme: 'colored' });
      find();
    } else {
      showError(code);
    }
  };


  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      //type: 'number',
      width: 90,
    },
    {
      field: 'name',
      headerName: 'Name',
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
        return (<div><IconButton aria-label="edit" color="primary" component={Link} to={`/dashboard/category/edit/${list.row.id}`}><EditIcon /></IconButton>
          <IconButton aria-label="delete" color="primary" onClick={() => deleteItem(list.row.id)}> <DeleteIcon /></IconButton>
        </div>);
      }

    },
  ];

  const rows = categories;

  return (
    <div style={{ height: 400, width: '100%' }}>
      <h2>Categories Details</h2>
      <TextField label="Keyword" variant="standard" name="value" value={search.value} onChange={handleChange} size='small' />
      <Button variant="outlined" endIcon={<AddOutlinedIcon color="primary" />} component={Link} to={`/dashboard/category/new`} size="medium">
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