import { Icon } from '@iconify/react';
import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';
import { Box, Button, ListItem, ListItemButton, ListItemText, Stack } from "@mui/material";
import { useNavigate } from 'react-router-dom';


export default function TopBar1() {
  let navigate = useNavigate();

  let handleChangeLogin = () => {
    return (
      navigate("/login")
    );
  };
  return (


    < Box >
      <Stack direction="row" spacing={-1}>
        <ListItem disablePadding>
          <Button>
            <AdjustOutlinedIcon />
            <ListItemText primary="IONIC" />
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
            <ListItemButton>
              <ListItemText primary="Pricing" />
            </ListItemButton>
          </ListItem>
        </Stack>

        <ListItem disablePadding>
          <Box marginLeft={5}>
            <Button>
              <Icon icon="fluent-mdl2:zoom" />
            </Button>
          </Box>
        </ListItem>

        <ListItem disablePadding>

          <Button onClick={handleChangeLogin} variant="contained">
            <ListItemText primary="Sign in" />
          </Button>
        </ListItem>
      </Stack>

    </Box >
  );
}

