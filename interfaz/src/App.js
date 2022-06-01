import logo from './Restaurante/img/yomyom.png';
import './App.css';
import CompShowR from './Restaurante/ShowR';
import CompCreateR from './Restaurante/CreateR';
import CompEditR from './Restaurante/EditR';
import CompIntro from './Restaurante/Intro';
import CompShowCliente from './Restaurante/ShowCliente';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<CompIntro/>} />
            <Route path='/show' element={<CompShowR/>} />
            <Route path='/cliente' element={<CompShowCliente/>} />
            <Route path='/create' element={<CompCreateR/>} />
            <Route path='/edit/:idAlimentos' element={<CompEditR/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
