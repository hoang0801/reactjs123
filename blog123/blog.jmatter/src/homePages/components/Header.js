import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';
import ZoomOutOutlinedIcon from '@mui/icons-material/ZoomOutOutlined';
import { Box, Button, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from "@mui/material";
 
export default function TopBar1(){
  return(
    <Box>
      <Stack direction="row" spacing={1}>
      <ListItem disablePadding>
              <ListItemButton>
              <Button>
                  <AdjustOutlinedIcon />
                <ListItemText primary="IONIC" />
                  </Button>
              </ListItemButton>
            </ListItem>
      
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {/* <LibraryBooksOutlinedIcon /> */}
                </ListItemIcon>
                <ListItemText primary="Framework" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {/* <FeedOutlinedIcon /> */}
                </ListItemIcon>
                <ListItemText primary="Products" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {/* <PagesOutlinedIcon /> */}
                </ListItemIcon>
                <ListItemText primary="Developers " />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {/* <KebabDiningOutlinedIcon /> */}
                </ListItemIcon>
                <ListItemText primary="Businesses" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {/* <PlayCircleFilledWhiteOutlinedIcon /> */}
                </ListItemIcon>
                <ListItemText primary="Suport" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {/* <PlayCircleFilledWhiteOutlinedIcon /> */}
                </ListItemIcon>
                <ListItemText primary="Resources" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {/* <PlayCircleFilledWhiteOutlinedIcon /> */}
                </ListItemIcon>
                <ListItemText primary="Pricing" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                
                <Button>
                  <ZoomOutOutlinedIcon />
                  <ListItemText bo primary="Sign in" />
                  </Button>
              </ListItemButton>
            </ListItem>
    </Stack>

    </Box>
  ) 
 }
 
