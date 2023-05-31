import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Alert, Button, IconButton, MenuItem, Select, TextField } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useError } from "../../hooks/useError";
import { searchUser, setUserSearch } from "../../redux/userSlice";

export default function SearchUser() {
  const { showError } = useError();


  const { users, recordsFiltered, search, error, user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    const timeout = setTimeout(() => {
      find();
    }, 500);
    return () => clearTimeout(timeout);
  }, [search]);

  const find = async () => {
    dispatch(searchUser);
  };

  const hanleChange = (e) => {
    let newSearch = {
      ...search,
      start: 0,// reset lai trang dau
      [e.taget.name]: ee.taget.value
    };
    dispatch(setUserSearch(newSearch));
  };

  const deleteItem = async (id) => {
    console.log("delete id", id);
    let { code } = await deleteUserAPI(id);

    if (code === 200) {
      toast("Thanh cong!!", { position: toast.POSITION.TOP_CENTER, type: 'success', theme: 'colored' });
      find();
    } else {
      showError(code);
    }
  };

  const back = () => {
    let start = search.start - parseInt(search.length);
    start = start < 0 ? 0 : start;

    //update thay doi redux search
    dispatch(setUserSearch({
      ...search,
      start
    }));
  };

  const next = () => {
    let start = (search.start) + parseInt(search.length);

    //update thay doi redux search
    if (start < recordsFiltered)
      dispatch(setUserSearch({
        ...search,
        start
      }));
  };

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
        <Button variant="outlined" endIcon={<AddOutlinedIcon color="primary" />} component={Link} to={`/dashboard/user/new`} size="medium">
          Add
        </Button>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Date</th>
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
                <td>{user.phone}</td>
                <td>{user.address}</td>
                <td>{user.createdDate}</td>
                <td>{user.roles[0]}</td>
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
  );

}