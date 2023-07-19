import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './Component/LandingPage/LandingPage';
import UnisexClothing from './Component/UnisexClothing/UnisexClothing';
import Accessories from './Component/Accessories/Accessories';
import News from './Component/News/News';




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/UnisexClothing' element={<UnisexClothing/>} />
          <Route path='/Accessories' element={<Accessories/>} />
          <Route path='/News' element={<News/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
