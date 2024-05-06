import React, { useEffect } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

import Home from './Home'
import UIS from './forms/UIS';
import Dashboard from './pages/Dashboard';
import Sidebar from './pages/Sidebar';
import Adm from './forms/Adm';

function App() {

  useEffect(() => {
    fetch()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="users/adm" element={<Adm />} />
        <Route path="/uis" element={<UIS />} />
        <Route path="/dashboard" element={ <Dashboard /> } ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;