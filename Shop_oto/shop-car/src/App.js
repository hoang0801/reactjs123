import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import XeDangBan from './collections/Xe-dang-ban';
import PageHome from './home/PageHome';
import LayOut from './layout/Layout';
import DanhGiaXe from './pages/Danh-gia-Xe';
import GioiThieu from './pages/Gioi-thieu';
import LienHe from './pages/Lien-he';
import TinTuc from './pages/Tin-tuc';

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
        <Route path="pages/about-us" element={<GioiThieu />} />
        <Route path="pages/lien-he" element={<LienHe />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
