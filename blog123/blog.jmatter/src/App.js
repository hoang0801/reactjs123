import { LinearProgress } from '@mui/material';
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavPage';
import { AuthenProvider } from './context/authenContext';
import Home from './homePages/home';
import { useAuth } from './hooks/useAuth';
import MainLayout from './layout/MainLayout';
import EditCategory from './pages/category/EditCategory';
import NewCategory from './pages/category/NewCategory';
import SearchCategory from './pages/category/SearchCategoryUI';
import NewComment from './pages/comment/NewComment';
import SearchComment from './pages/comment/SearchCommentUI';
import Login from './pages/login/Login';
import EditPost from './pages/post/EditPost';
import NewPost from './pages/post/NewPost';
import SearchPost from './pages/post/SearchPostUI';
import { EditUser } from './pages/user/EditUser';
import NewUser from './pages/user/NewUser';
import SearchUser from './pages/user/SearchUserUI';
import { store } from './redux/store';
function App() {
  return (
    <Provider store={store}>
      <AuthenProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Login />} />

            <Route path='/login' element={<LoginTemplate />}/>
            <Route path='/login' element={<LoginTemplate />} />
            <Route path='/home' element={<Home />} />


            <Route path="/dashboard" element={<MainLayout />}>
              <Route index element={<Navigate to="/dashboard/users" />} />
              <Route path="users" element={<SearchUser />} />
              <Route path="user/new" element={<NewUser />} />
              <Route path="user/edit/:id" element={<EditUser />} />

              <Route path="category/search" element={<SearchCategory />} />
              <Route path="category/new" element={<NewCategory />} />
              <Route path="categor/edit/:id" element={<EditCategory />} />

              <Route path="post/search" element={<SearchPost />} />
              <Route path="post/new" element={<NewPost />} />
              <Route path="post/edit/:id" element={<EditPost />} />

              <Route path="comment/search" element={<SearchComment />} />
              <Route path="comment/new" element={<NewComment />} />

            </Route>


            {/* <Route index element={<Login />} /> */}
            {/* <Route path="/categories" element={<Category />} />
          <Route path="/user" element={<User />} />
          <Route path="/post" element={<Post />} /> */}
            {/* <Route path="/comment" element={<Comment />} /> */}




          </Routes>
        </BrowserRouter>
      </AuthenProvider>
    </Provider>
    // <Login />


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
    <NavigationBar />
    <Outlet />

  </>);
}

export default App;
