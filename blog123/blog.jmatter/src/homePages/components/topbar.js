import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import PagesOutlinedIcon from '@mui/icons-material/PagesOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Box, Container, Tab } from "@mui/material";
import React, { useState } from 'react';
import ContentArticles from '../contens/ContentCategory/ContentArticles';
import ContentCaseStudies from '../contens/ContentCategory/ContentCaseStudies';
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
            <Container maxWidth='md'>
              <TabList onChange={handleChange}>
                <Tab label="Featured" icon={<LibraryBooksOutlinedIcon />} iconPosition="start" value="1" />
                <Tab label="Articles" icon={<FeedOutlinedIcon />} iconPosition="start" value="2" />
                <Tab label="Case Studies" icon={<PagesOutlinedIcon />} iconPosition="start" value="3" />
                <Tab label="Video" icon={<PlayCircleFilledWhiteOutlinedIcon />} iconPosition="start" value="4" />
              </TabList>
            </Container>
          </Box>
          <TabPanel value="1"><ContentFeatured/></TabPanel>
          <TabPanel value="2"><ContentArticles /></TabPanel>
          <TabPanel value="3"><ContentCaseStudies /></TabPanel>
          <TabPanel value="4"><ContentVideo /></TabPanel>
        </TabContext>
      </Box>
    </>
  );
}

