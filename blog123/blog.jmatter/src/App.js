import { LinearProgress } from '@mui/material';
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavPage';
import { AuthenProvider } from './context/authenContext';
import { useAuth } from './hooks/useAuth';
import MainLayout from './layout/MainLayout';
import Login from './pages/login/Login';
import SearchUser from './pages/user/searchUser';
import { store } from './redux/store';
function App() {
  return (
    <Provider store={store}>
      <AuthenProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Login />} />
            <Route path='/LoginTemplate' element={<LoginTemplate />}>

            </Route>
            <Route path="/dashboard" element={<MainLayout />}>
              <Route index element={<Navigate to="/dashboard/users" />} />
              <Route path="users" element={<SearchUser />} />
              <Route path="user/new" element={<NewUser />} />
              <Route path="user/edit/:id" element={<EditUser />} />
            </Route>


            {/* <Route index element={<Login />} /> */}
            {/* <Route path="/categories" element={<Category />} /> */}
            {/* <Route path="/user" element={<User />} /> */}
            {/* <Route path="/post" element={<Post />} /> */}



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
