import MenuIcon from "@mui/icons-material/Menu";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Menu() {
  Navigate = useNavigate();

  let { logout } = useAuth();

  const handleLogout = () => {
    logout();
    Navigate("/login");
  };


  return (
    <ul>
      <li>
        <MenuIcon />
      </li>
      <li>
        <Link to="/categories">Category</Link>
      </li>
      <li>
        <Link to="/user">User</Link>
      </li>
      {/* <li>
        <Link to="/posts">Posts</Link>
      </li> */}
      <li>
        <button onClick={handleLogout}>Logout</button>
      </li>
    </ul>
  );
}
