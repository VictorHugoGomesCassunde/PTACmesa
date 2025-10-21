import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastrarMesas from './pages/CadastrarMesas';
import ReservarMesas from './pages/ReservarMesas';
import Header from './Components/Header';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastrar" element={<CadastrarMesas />} />
        <Route path="/reservar" element={<ReservarMesas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
