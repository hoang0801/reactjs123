import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthenProvider } from './context/authenContext';
import Login from './pages/Login';
import User from './pages/User';
import { store } from './redux/store';
function App() {
  return (
    <Provider store={store}>
      <AuthenProvider>
        <BrowserRouter>
          <Routes>
          <Route index element={<Login />} />
          <Route path="user" element={<User />} />
          </Routes>
        </BrowserRouter>
      </AuthenProvider>
    </Provider>
    // <Login />
   

  );
}

// function LoginTemplate() {
//   console.log("login template");
//   let { isAuthenticated, isLoading } = useAuth();
  
//   console.log(isAuthenticated);
//   console.log(isLoading);
//   if (isLoading)
//     return <LinearProgress />;

//   if (isAuthenticated)
//     return <Navigate to={"/dashboard"} />;

//   return (<>
//       {/* <MainLayout /> */}
//       {/* <NavigationBar/> */}
//       <Outlet />
      
//     </>);
//     }

// function LoginTemplate(){
//   console.log("Login template")

//   let {isAuthenticated, isLoding} = 
// }

export default App;
