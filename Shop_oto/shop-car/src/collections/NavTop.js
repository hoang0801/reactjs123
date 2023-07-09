import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import { Box, Stack, ToggleButton, Typography } from '@mui/material';
import React from 'react';

export default function NavTop() {
  return (
    <>
      <Box sx={{ backgroundColor: '#ffffff' }}>
        <Stack direction="row"> <Box >
          <Typography p={2} >
            Sắp xếp theo:
          </Typography>
        </Box>
          <Box sx={{ justifyContent: 'right', textAlign: "left", p: '2', marginRight: '3' }}>
            <ToggleButton >
              <ViewListIcon />
            </ToggleButton>
            <ToggleButton >
              <ViewModuleIcon />
            </ToggleButton>
          </Box></Stack>





      </Box>
    </>

  );
}
