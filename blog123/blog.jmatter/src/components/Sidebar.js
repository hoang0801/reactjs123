import { makeStyles } from "@material-ui/core";
import { Accessibility, Class } from "@mui/icons-material";
import CategoryIcon from '@mui/icons-material/Category';
import CommentIcon from '@mui/icons-material/Comment';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  link: {
    color: 'inherit',
    textDecoration: 'none',
    '.makeStyles-link-18 active': {
      backgroundColor: theme.palette.action.selected,

    }
  }
}));

export default function SideBar() {
  const classes = useStyles();
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <NavLink to="/dashboard" className={classes.link}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Accessibility />
                </ListItemIcon>
                <ListItemText primary="User" />
              </ListItemButton>
            </ListItem>
          </NavLink>
          <NavLink to="/dashboard/category/search" className={classes.link}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CategoryIcon />
                </ListItemIcon>
                <ListItemText primary="Categories" />
              </ListItemButton>
            </ListItem>
          </NavLink>
          <NavLink to="/dashboard/post/search" className={classes.link}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Class />
                </ListItemIcon>
                <ListItemText primary="Post" />
              </ListItemButton>
            </ListItem>
          </NavLink>
          <NavLink to="/dashboard/comment/search" className={classes.link}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CommentIcon />
                </ListItemIcon>
                <ListItemText primary="Comments" />
              </ListItemButton>
            </ListItem>
          </NavLink>


        </List>
      </nav>
    </Box>
  );
}