import { useState } from 'react';
import './App.css';
import Login from './pages/login/Login';


function App() {
   let [name, setname] = useState("Hoang");

   let handLeName = (e) =>{
    setname(e.target.value)
   }
  //  return(
  //   <Provider store={store}>
  //  <AuthenProvider> 
  //     <BrowserRouter>
  //       <Route path='/login' element={<Login/>}/>
  //       <Route path ='dashboard' element={<DashboardLayout/>}>
  //        <Router index element={<Navigate to="/dashboard/category"  />}/>

  //        <Router path='category' element={<Category/>}/>
  //        <Router path='person' element={<Person/>}/>
  //       </Route>
  //       <Router path='/' element ={<Navigate to="/dashboard"/>}/>
  //       <Router path='/hello/:name' element ={<Navigate to="/dashboard"/>}/>
  //       <Router path='*' element={<Notfound/>}/>

  //     </BrowserRouter>  
  //  </AuthenProvider> 
  //  </Provider>
  //   )
  //  }
  //    function LoginTemplate(){
  //     console.log("login template")
  //     let {isAuthenticated, isloading} = useAuth()
  //     console.log(isAuthenticated)
  //     console.log(isloading)
  //    }


  //   function Notfound(){
  //     return (<Container maxWidth="md">
  //     <Grid container spacing={2}>
  //       <Grid item xs={12} >
  //         <Stack spacing={2} alignItems="center"
  //           justifyContent="center">
  //           <Avatar src={logo} variant="square" sx={{ width: 240, height: 240 }} />
  //           <Typography variant='h1'>404 Not Found</Typography>
  //         </Stack>
  //       </Grid>
  //     </Grid>
  //   </Container>);
  //   }


   return( 
   // <Person/>
   // <Category/>
   <Login/>
   )
}



export default App;