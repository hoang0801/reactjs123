import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import { useState } from 'react';
import Person from './pages/Person';
import { Category } from './pages/category/Category';
import { BrowserRouter, Navigate, Outlet, Route, Router } from 'react-router-dom';
import Login from './pages/login/Login';
import {AuthenProvider} from './context/AuthenContext';
import { useContext } from 'react';
import  AuthenContext  from './context/AuthenContext';
import { useNavigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';


function App() {
   let [name, setname] = useState("Hoang");

   let handLeName = (e) =>{
    setname(e.target.value)
   }
   return(
    <Provider store={store}>
   <AuthenProvider> 
      <BrowserRouter>
        <Route path='/login' element={<Login/>}/>
        <Route path ='dashboard' element={<DashboardLayout/>}>
         <Router index element={<Navigate to="/dashboard/category"  />}/>

         <Router path='category' element={<Category/>}/>
         <Router path='person' element={<Person/>}/>
        </Route>
        <Router path='/' element ={<Navigate to="/dashboard"/>}/>
        <Router path='/hello/:name' element ={<Navigate to="/dashboard"/>}/>
        <Router path='*' element={<Notfound/>}/>

      </BrowserRouter>  
   </AuthenProvider> 
   </Provider>
    )
   }
     function LoginTemplate(){
      console.log("login template")
      let {isAuthenticated, isloading} = useAuth()
      console.log(isAuthenticated)
      console.log(isloading)
     }


    function Notfound(){
      return (<Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12} >
          <Stack spacing={2} alignItems="center"
            justifyContent="center">
            <Avatar src={logo} variant="square" sx={{ width: 240, height: 240 }} />
            <Typography variant='h1'>404 Not Found</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Container>);
    }


   // return( 
   // // <Person/>
   // // <Category/>
   // <Login/>
   // );



export default App;