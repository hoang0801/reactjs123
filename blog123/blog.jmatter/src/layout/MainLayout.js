import { makeStyles } from "@material-ui/core";
import { Box, LinearProgress } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SideBar from "../components/Sidebar";
import { useAuth } from "../hooks/useAuth";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    gridTemplateColumns: '240px 1fr',
    gridTemplateAreas: `"header header" "sidebar main"`,

    minHeight: '100vh',

  },

  header: {
    gridArea: 'header',
    //borderBottom:`1px solid ${theme.palette.divider}`,
  },
  sidebar: {
    gridArea: 'sidebar',
    borderRight: `1px solid ${theme.palette.divider}`,
    bgcolor: 'background.paper',
  },
  main: {
    gridArea: 'main',
    bgcolor: 'background.paper',
    padding: theme.spacing(2, 3),

  },
}));



const MainLayout = () => {
  const classes = useStyles();

  let { isAuthenticated, isLoading } = useAuth();

  if (isLoading)
    return <LinearProgress />;

  if (isAuthenticated)
    return (<Box className={classes.root}>
    
      <Box className={classes.header}><Header /></Box>
      <Box className={classes.sidebar}><SideBar /></Box>
      <Box className={classes.footer}><Footer /></Box>
      <Box className={classes.main}>
        <Outlet />
      </Box>
    </Box>);

  return <Navigate to={"/login"} />;
};

export default MainLayout;