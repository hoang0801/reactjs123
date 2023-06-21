import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Box, Tab } from "@mui/material";
import React, { useState } from 'react';
import { default as ContentFeatured } from '../contens/ContentCategory/ContentFeatured';




export default function Featured() {
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

            </TabList>

          </Box>
          <TabPanel value="1"><ContentFeatured /></TabPanel>

        </TabContext>
      </Box>
    </>
  );
}

