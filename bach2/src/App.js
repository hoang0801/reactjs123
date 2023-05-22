import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Login from "./page/login/Login";
import Signup from "./page/login/SignUp";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "./components/NavPage.css"
import axios from "axios";
import NavigationBar from "./components/NavPage";
import { Provider } from "react-redux";
import { store } from './redux/store';
import { Container } from "@mui/material";
import { Avatar, Grid, LinearProgress, Stack, Typography } from '@mui/material';
import logo from "./assets/images/logo.svg";
import { useAuth } from "./hooks/useAuth";
import MainLayout from "./layout/MainLayout";
import { ToastContainer } from 'react-toastify';
import { AuthenProvider } from "./context/AuthenContext";
import NewUser from "./page/user/NewUser";
import { EditUser } from "./page/user/EditUser";
import SearchUser from "./page/user/SearchUser-UI";
import NewComment from "./page/comment/NewComment";
import EditComment from "./page/comment/EditComment";
import SearchComment from "./page/comment/SearchComment-UI";
import EditPost from "./page/post/EditPost";
import NewPost from "./page/post/NewPost";
import SearchPost from "./page/post/SearchPost-UI";
import EditCategory from "./page/category/EditCategory";
import NewCategory from "./page/category/NewCategory";
import Footer from "./components/Footer";
import SearchCategory from "./page/category/SearchCategory-UI";


function App() {
  return (
    <Provider store={store}>
    <AuthenProvider>
      <BrowserRouter>
      <Routes>
          <Route path="/login" element={<LoginTemplate/>}>
            <Route index element={<Login />} />
          </Route>
          {/* <Route path="/signup" element={<Signup />} /> */}
          <Route path="/dashboard" element={<MainLayout />}>
            <Route index element={<Navigate to="/dashboard/users" />} />
            <Route path="users" element={<SearchUser />} />
            <Route path="user/new" element={<NewUser />} />
            <Route path="user/edit/:id" element={<EditUser />} />
            {/* <Route path="users-ui" element={<SearchUserUI />} /> */}
            <Route path="category/search" element={<SearchCategory/>} />
            <Route path="category/new" element={<NewCategory />} />
            <Route path="categor/edit/:id" element={<EditCategory />} />
            <Route path="post/search" element={<SearchPost />} />
            <Route path="post/new" element={<NewPost />} />
            <Route path="post/edit/:id" element={<EditPost />} />
            <Route path="comment/search" element={<SearchComment />} />
            <Route path="comment/new" element={<NewComment />} />
            <Route path="comment/edit/:id" element={<EditComment />} />
          </Route>
          <Route path="/" element={<Login />} />
          <Route path="/logout" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
      </AuthenProvider>
      </Provider>
  );
}


function LoginTemplate() {
  console.log("login template");
  let { isAuthenticated, isLoading } = useAuth();
  
  console.log(isAuthenticated);
  console.log(isLoading);
  if (isLoading)
    return <LinearProgress />;

  if (isAuthenticated)
    return <Navigate to={"/dashboard"} />;

  return (<>
      {/* <MainLayout /> */}
      <NavigationBar/>
      <Outlet />
      
    </>);

}

function NotFound() {
  return (<Container maxWidth="md">
    <Grid container spacing={2}>
      <Grid item xs={12} >
        <Stack spacing={2} alignItems="center"
          justifyContent="center">
          <Avatar src={logo} variant="square" sx={{ width: 40, height: 40 }} />
          <Typography variant='h1'>404 Not Found</Typography>
        </Stack>
      </Grid>
    </Grid>
  </Container>);
}


export default App;
