import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Box, Tab } from "@mui/material";
import React, { useState } from 'react';
import ContentArticles from '../contens/ContentCategory/ContentArticles';
import { default as ContentFeatured } from '../contens/ContentCategory/ContentFeatured';
import ContentVideo from '../contens/ContentCategory/ContentVideo';




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
              <Tab label="Featured" icon={<LibraryBooksOutlinedIcon />} iconPosition="start" value="1" />
              <Tab label="Articles" icon={<FeedOutlinedIcon />} iconPosition="start" value="2" />

              <Tab label="Video" icon={<PlayCircleFilledWhiteOutlinedIcon />} iconPosition="start" value="3" />
            </TabList>

          </Box>
          <TabPanel value="1"><ContentFeatured /></TabPanel>
          <TabPanel value="2"><ContentArticles /></TabPanel>
          <TabPanel value="3"><ContentVideo /></TabPanel>
        </TabContext>
      </Box>
    </>
  );
}

