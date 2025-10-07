import React from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import {useState, useEffect} from 'react'
import Sidebar from './components/Sidebar'
import Navbar2 from './components/Navbar2'
import Dashboard from './components/Dashboard'
<<<<<<< HEAD
import Property from './departments/property/Property'
=======
>>>>>>> c54a62d5586b66570575141313b2ba2bcebf8428

const Home = () => {
  const { useState, useEffect } = React;

  return (
    <>
      <div className='flex'>
        <Sidebar />
<<<<<<< HEAD
        {/* <div className='grow ml-16 md:ml-64 h-full lg:h-screen bg-gray-100 text-gray-900'>
=======
        <div className='grow ml-16 md:ml-64 h-full lg:h-screen bg-gray-100 text-gray-900'>
>>>>>>> c54a62d5586b66570575141313b2ba2bcebf8428
          <Navbar2 />
          <div>
            <Dashboard />
          </div>
<<<<<<< HEAD
        </div> */}

        <Property />
=======
        </div>
>>>>>>> c54a62d5586b66570575141313b2ba2bcebf8428
      </div>
    </>
    
  )
}

export default Home