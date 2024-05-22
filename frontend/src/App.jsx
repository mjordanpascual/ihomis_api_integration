import React, { useEffect } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

import Home from './Home'
import UIS from './forms/UIS';
import Dashboard from './pages/Dashboard';
import Sidebar from './pages/Sidebar';
import Adm from './forms/Adm';
import Login from './pages/Login'
import Register from './pages/Register'
import NoPageFound from './pages/NoPageFound'




function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users/adm" element={<Adm />} />
        <Route path="/uis" element={<UIS />} />
        <Route path="/dashboard" element={ <Dashboard /> } ></Route>
        {/* <Route path="/login" element={ <Login /> } /> */}
        <Route path="/register" element={ <Register /> } />

        <Route path = '*' element={<NoPageFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;