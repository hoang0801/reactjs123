import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Accessibility, Class, CoPresent, Dashboard, PeopleAlt, Quiz, Scoreboard } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import {makeStyles} from '@material-ui/core';
import CategoryIcon from '@mui/icons-material/Category';
import CommentIcon from '@mui/icons-material/Comment';

const useStyles = makeStyles(theme => ({
    link:{
        color:'inherit',
        textDecoration:'none',
        '.makeStyles-link-18 active':{
            backgroundColor:theme.palette.action.selected,

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
          <NavLink to="/dashboard/userroles" className={classes.link}>
            <ListItem disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    <PeopleAlt />
                </ListItemIcon>
                <ListItemText primary="UserRole" />
                </ListItemButton>
            </ListItem>
          </NavLink>
          <NavLink to="/dashboard/category/search" className={classes.link}>
            <ListItem disablePadding>
                <ListItemButton>
                <ListItemIcon>
                  <CategoryIcon/>
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
                <ListItemText primary="Posts" />
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
