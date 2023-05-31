import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";




export default function Header() {
  //const dispatch = useDispatch();
  let { logout } = useAuth();
  let navigate = useNavigate();

  const handleLogoutCLick = () => {
    logout();
    navigate("/login");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Blog Management
          </Typography>
          <Button color="inherit" onClick={handleLogoutCLick}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}