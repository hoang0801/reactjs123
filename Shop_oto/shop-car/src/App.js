import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import DanhGiaXe from './blogs/Danh-gia-Xe';
import TinTuc from './blogs/Tin-tuc';
import XeDangBan from './collections/Xe-dang-ban';
import PageHome from './home/PageHome';
import LayOut from './layout/Layout';

function App() {

  return (
    <BrowserRouter>
      <Routes><Route index element={<PageHome />} />
        <Route index element={<LayOut />} />
        <Route index element={<Navigate to="/Home" />} />
        <Route path="/home" element={<PageHome />} />
        <Route path="collection/xe-dang-ban" element={<XeDangBan />} />
        <Route path="blogs/news" element={<TinTuc />} />
        <Route path="blogs/danh-gia-xe" element={<DanhGiaXe />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
