import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './Component/LandingPage/LandingPage';
import UnisexClothing from './Component/UnisexClothing/UnisexClothing';
import Accessories from './Component/Accessories/Accessories';
import News from './Component/News/News';
import InnerlandingPage from './Component/InnerLandingPage/InnerlandingPage';
import Branding from './Component/Branding&WebDesign/Branding';
import Webflow from './Component/WebflowWebsite/Webflow';
import Training from './Component/Training/Training';
import Maintainence from './Component/Maintainence/Maintainence';
import Enterpriser from './Component/Enterpriser/Enterpriser';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/UnisexClothing' element={<UnisexClothing/>} />
          <Route path='/Accessories' element={<Accessories/>} />
          <Route path='/News' element={<News/>} />
          <Route path='/InnerLandingPage' element={<InnerlandingPage/>} />
          <Route path='/Branding' element={<Branding/>} />
          <Route path='/WebflowWebsite' element={<Webflow/>} />
          <Route path='/Training' element={<Training/>} />
          <Route path='/Maintainence' element={<Maintainence/>} />
          <Route path='/Enterprise' element={<Enterpriser/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
