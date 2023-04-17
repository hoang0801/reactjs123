import React,{ useState }  from 'react';
import logo from './logo.svg';
import './App.css';
import { MenuFooter } from './components/Footer';
import { Person } from './page/Person';
const PI=3.14
function App() {
   let cvHinhTron =(r) => (PI * r * 2);//reurn

   let[name,setName] = useState("Test") //name= Test

   let handleName =(e) =>{ 
    setName(e.target.value)
   } 
  const View1=()=>(
    <div>
      <p>Hello 1124124</p>
    </div>
  )
  return (//jsx
    <div className="App">
      <input onKeyUp={handleName} />
               
      <Person/>
      <View1/>
      {/* <MyFooter id="1" cvHinhTron ={cvHinhTron} name="React Properties (Props)"/> */}

    </div>
  );
}
//component
function Hello(){
  return(
    <di>
      <h1> Hello ReactJs</h1>
    </di>
  )
}

export default App;
