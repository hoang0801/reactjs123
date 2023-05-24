import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { useAuth } from "../hook/useAuth";

export default function Header() {
  let { logout } = useAuth();
  let navigate = useNavigate()

  const handleLogoutClink = () =>{
     logout ()
     navigate("/login");
  }

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
          <Button color="inherit" onClick={handleLogoutClink}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}