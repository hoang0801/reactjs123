import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LayOut from './layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<LayOut/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
