import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import { useState } from 'react';
import Person from './pages/Person';
import { Category } from './pages/Category';

function App() {
   let [name, setname] = useState("Hoang");

   let handLeName = (e) =>{
    setname(e.target.value)
   }
   return( 
   // <Person/>
   <Category/>
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
