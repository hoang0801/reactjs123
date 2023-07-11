import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react';

export default function SidebarInsurance() {




  const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  };

  return (
    <div>
      <Box sx={{ backgroundColor: '#444444' }}>
        <Typography color='#fff' variant='h3' fontSize={20} p={2} sx={{ justifyContent: 'center', textAlign: 'center' }}>
          BẢO HIỂM CHO XE Ô TÔ
        </Typography>
      </Box>
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
        }}
      >
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <iconify-icon icon="mdi:car-insurance" color={'#111111'} />
            </Avatar>

          </ListItemAvatar>
          <ListItemText primary="BẢO HIỂM Ô TÔ BẢO VIỆT" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <iconify-icon icon="mdi:car-insurance" color={'#111111'} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="BẢO HIỂM Ô TÔ PVI" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <iconify-icon icon="mdi:car-insurance" color={'#111111'} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="BẢO HIỂM Ô TÔ BẢO MINH" />
        </ListItem>
        <Divider variant="inset" component="li" />

        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <iconify-icon icon="mdi:car-insurance" color={'#111111'} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="BẢO HIỂM Ô TÔ PJICO" />
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>





    </div>
  );
}
