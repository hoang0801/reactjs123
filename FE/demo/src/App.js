import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import { useContext, useState } from 'react';
import Person from './pages/Person';
import { Category } from './pages/Category';
// import { BrowserRouter, Navigate, Outlet, Route, Router } from 'react-router-dom';
import Login from './pages/Login';
import { AuthenContext, AuthenProvider } from './context/AuthenContext';

function App() {
   let [name, setname] = useState("Hoang");

   let handLeName = (e) =>{
    setname(e.target.value)
   }
   //  return(
   // <AuthenProvider> 
   //    <BrowserRouter>
   //      <Route path='/login' element={<Login/>}/>
   //      <Route path ='dashboard' element={<DashboardLayout/>}>
   //       <Router index element={<Navigate to="/dashboard/category"  />}/>

   //       <Router path='category' element={<Category/>}/>
   //       <Router path='person' element={<Person/>}/>
   //      </Route>
   //      <Router path='/' element ={<Navigate to="/dashboard"/>}/>
   //      <Router path='/hello/:name' element ={<Navigate to="/dashboard"/>}/>
   //      <Router path='*' element={<Notfound/>}/>

   //    </BrowserRouter>  
   // </AuthenProvider> 
   //  )
   //   function DashboardLayout(){
   //    let {user} = useContext(AuthenContext)

   //    if (user)
   //    return
   //    <div>
   //       <ul>
   //       <li>
   //          <link to={"/login"}></link>
   //       </li>
   //       <li>
   //          <link to={"/dashboard/category"}>Category</link>
   //       </li>
   //       <li>
   //          <link to={"/dashboard/person"}>person</link>
   //       </li>
   //       </ul>
   //       <h1>Menu</h1>
   //       <Outlet/>
   //       <h1>Footer</h1>
   //    </div>

   //   }


   //  function Notfound(){
   //    return <h1>404</h1>
   //  }


   return( 
   // <Person/>
   // <Category/>
   <Login/>
   );

//   return (
//     <div className="App">

//       <input onKeyUp={handLeName}/>

//       <p> Hello Javascript - {name} </p>
//       <Hello/>
//       <Footer/>
      
//     </div>
//   );
// }

 
// //component
// function Hello(){
//   return(
//     <div>
//       <p>helloooooooo</p>
//     </div>
//   )
}

export default App;
