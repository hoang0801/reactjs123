import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import KebabDiningOutlinedIcon from '@mui/icons-material/KebabDiningOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import PagesOutlinedIcon from '@mui/icons-material/PagesOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Box, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Tab, Typography } from "@mui/material";
import React, { useState } from 'react';



export default function TopBar() {
  const [value, setValue] = useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange}>
              <Tab value="1" >
                <LibraryBooksOutlinedIcon />
                <Typography>Featured</Typography>
              </Tab>

              <Tab label="Featured" icon={<LibraryBooksOutlinedIcon />} value="1" />
              <Tab label="Articles" value="2" />
              <Tab label="Case Studies" value="3" />
              <Tab label="Webinars" value="4" />
              <Tab label="Video" value="5" />

            </TabList>
          </Box>
          <TabPanel value="1">Item One</TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </Box>
      <Box  >
        <Stack direction="row" spacing={1}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LibraryBooksOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Featured" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FeedOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Articles" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PagesOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Case Studies" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <KebabDiningOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Webinars" />
            </ListItemButton>
          </ListItem>


          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PlayCircleFilledWhiteOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Video" />
            </ListItemButton>
          </ListItem>
        </Stack>
      </Box>
    </>
  );

}

