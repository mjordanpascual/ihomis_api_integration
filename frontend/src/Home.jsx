import React from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import {useState, useEffect} from 'react'
import Sidebar from './components/Sidebar'
import Navbar2 from './components/Navbar2'
import Dashboard from './components/Dashboard'
import Property from './departments/property/Property'

const Home = () => {
  const { useState, useEffect } = React;

  return (
    <>
      <div className='flex'>
        <Sidebar />
        {/* <div className='grow ml-16 md:ml-64 h-full lg:h-screen bg-gray-100 text-gray-900'>
          <Navbar2 />
          <div>
            <Dashboard />
          </div>
        </div> */}

        <Property />
      </div>
    </>
    
  )
}

export default Home