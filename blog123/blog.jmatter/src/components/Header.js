import { Box, Button, Container, ListItem, ListItemButton, ListItemText, Stack } from "@mui/material";
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";




export default function Header() {

  const [activeTab, setActiveTab] = useState("");
  let { logout } = useAuth();
  let navigate = useNavigate();

  const handleLogoutCLick = () => {
    logout();
    navigate("/");
  };




  return (
    <>
      <Container >
        <Stack direction="row" spacing={2}>
          <Stack direction="row" spacing={1}>
            <ListItem disablePadding>
              <Button>
              <img src='/logoo.png'/>
              </Button>
            </ListItem>

            <Stack direction="row" spacing={1}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Framework" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Products" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Developers " />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Businesses" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Suport" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Resources" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton component={Link} to={`/client`}>
                  <ListItemText primary="BLog" />
                </ListItemButton>
              </ListItem>
            </Stack>
            <Box marginLeft={30}>
              <Button variant="contained" onClick={handleLogoutCLick}>
                log out
              </Button>
            </Box>
          </Stack>

        </Stack>
      </Container >
    </>

  );
}