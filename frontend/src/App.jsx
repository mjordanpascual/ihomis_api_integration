import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

import Home from './Home'
import UIS from './forms/UIS';
import Dashboard from './pages/Dashboard';
// import Sidebar from './pages/Sidebar';
import Adm from './forms/Adm';
import Login from './pages/Login'
import Register from './pages/Register'
import NoPageFound from './pages/NoPageFound'
import CheckUsername from './pages/CheckUsername';
import Sidebar from './components/Sidebar';
import Products from './pages/Products'
import Categories from './pages/Categories'
import Departments from './pages/Departments'
import Employees from './pages/Employees'
// import Adm from './users/adm/Adm'
// import Property from './departments/property/Property'

// import ProtectedRoute from './pages/ProtectedRoute';

function App() {

  return (
      <BrowserRouter>
          {/* <Navbar /> */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          {/* <Route path="users/adm" element={<Adm />} /> */}
          {/* <Route path="/property" element={<Property />} /> */}
          <Route path="/uis" element={<UIS />} />
          <Route path="/dashboard" element={ <Dashboard /> } ></Route>
          <Route path="/login" element={ <Login /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/checkuser" element={ <CheckUsername /> } />

          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/employees" element={<Employees />} />


          {/* <ProtectedRoute path="/protected" component={Dashboard} /> */}

          <Route path = '*' element={<NoPageFound />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App;