import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import KebabDiningOutlinedIcon from '@mui/icons-material/KebabDiningOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import PagesOutlinedIcon from '@mui/icons-material/PagesOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import { Box, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from "@mui/material";


export default function TopBar(){


   return (
    <Box>
    <Stack direction="row" spacing={2}>
    {/* <Typography variant="h1" component="h2">
      Featured
    </Typography>
    <Typography variant="h1" component="h2">
  Articles
</Typography>
<Typography variant="h1" component="h2">
  Case Studies
</Typography>
<Typography variant="h1" component="h2">
  WebInars
</Typography>
<Typography variant="h1" component="h2">
  Video
</Typography> */}
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
                <ListItemText primary="WebInarss" />
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
   )
    
}