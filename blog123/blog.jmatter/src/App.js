import { Login } from '@mui/icons-material';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthenProvider } from './context/authenContext';
import { User } from './pages/User';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <AuthenProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Login />} />
            {/* <Route index element={<Navigate to="/dashboard/users" />} /> */}
            <Route path="users" element={<User />} />
          </Routes>
        </BrowserRouter>
      </AuthenProvider>
    </Provider>
    // <Login />
    // < User />

  );
}

// function LoginTemplate(){
//   console.log("Login template")

//   let {isAuthenticated, isLoding} = 
// }

export default App;
