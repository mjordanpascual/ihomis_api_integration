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
import CheckUsername from './pages/CheckUsername';
import Navbar from './components/Navbar/Navbar'
<<<<<<< HEAD
// import Property from './departments/property/Property'
=======
import Property from './departments/inventory/Property'
>>>>>>> c54a62d5586b66570575141313b2ba2bcebf8428

// import ProtectedRoute from './pages/ProtectedRoute';

function App() {

  return (
      <BrowserRouter>
          {/* <Navbar /> */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          {/* <Route path="users/adm" element={<Adm />} /> */}
<<<<<<< HEAD
          {/* <Route path="/property" element={<Property />} /> */}
=======
          <Route path="/property" element={<Property />} />
>>>>>>> c54a62d5586b66570575141313b2ba2bcebf8428
          <Route path="/uis" element={<UIS />} />
          <Route path="/dashboard" element={ <Dashboard /> } ></Route>
          <Route path="/login" element={ <Login /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/checkuser" element={ <CheckUsername /> } />

          {/* <ProtectedRoute path="/protected" component={Dashboard} /> */}

          <Route path = '*' element={<NoPageFound />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App;