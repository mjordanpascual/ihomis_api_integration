import { useState } from 'react'
import { Link } from 'react-router-dom'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { FaHome, FaUserAlt, FaCog, FaSignOutAlt, FaBars } from 'react-icons/fa'
import { IoCloseSharp } from 'react-icons/io5'
import Marloe from '../assets/marquez.jpg'

// Routes
import Products from '../pages/Products'
import Categories from '../pages/Categories'
import Departments from '../pages/Departments'
import Employees from '../pages/Employees'


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { 
      name: 'Product', 
      icon: <FaHome size={24} />, 
      alt: 'Home Icon',
      path: '/products'
    },
    { 
      name: 'Category', 
      icon: <FaUserAlt size={24} />, 
      alt: 'Category Icon',
      path: '/categories'
    },
    { 
      name: 'Department', 
      icon: <FaCog size={24} />, 
      alt: 'Department Icon',
      path: '/departments'
    },
    { 
      name: 'Employee', 
      icon: <FaSignOutAlt size={24} />, 
      alt: 'Employee Icon',
      path: '/employees'
    },
  ];

  return (
      <div className='flex'>
      {/* <p className='flex-col'>Ospital ng Parañaque</p> */}
       <div className={`fixed min-h-screen w-20 md:w-64 bg-gray-800 transition-width duration-300 text-white
             ${isOpen ? 'w-64' : ' w-20'}
         `}>
            <div className='flex-col justify-items-center p-4'>
            <button className='block md:hidden' onClick={() => setIsOpen(!isOpen)}>  
                  {isOpen ? <IoCloseSharp size={24} /> : <FaBars size={24}/> }
                </button>
                <h2 className={`text-lg font-bold tracking-wide md:block ${isOpen ? "block" : "hidden"}`}>IT-DEPARTMENT</h2>
                <img className={`w-24 h-24 m-1 md:block rounded-full border-2 object-cover ${isOpen ? "block" : "hidden"}`} 
                src={Marloe} 
                alt="Profile Picture" />
                    <p className='block text-md'>Marloe Rymer D. Marquez</p>
                    <p className="block px-4 py-1 text-xs mt-1 bg-green-500/20 text-green-300 rounded-full">Admin</p>
            </div>
            <hr />
            <nav className='mt-4'>
              <ul>
                {menuItems.map((item, index) => (
                  <Link to={item.path} key={index}>
                    <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
                      {item.icon}
                      <span className={`ml-4 md:block ${isOpen ? "block" : "hidden"}`}>
                        {item.name}
                      </span>
                    </li>
                  </Link>
                ))}
              </ul>
            </nav>
        </div>
        <div className='min-h-screen flex-1 ml-64 md:w-64'>
        <div className='flex bg-gray-300/20 justify-between align-items-center px-4 border-b'>
            <h2 className='text-2xl font-bold'>Dashboard</h2>
            <span className='hidden md:hidden sm:hidden'>Welcome back, <b>Marloe</b></span>
            <div className='flex justify-center align-items-center'>
              <img className="w-12 h-18 m-1 rounded-full border-2 object-cover" src={Marloe} alt="Profile Picture" />
              <span>Caret</span>
            </div>
        </div>
            {/* <p className=''>Dashboard to the right side</p> */}
            <div>
              {/* Content goes here */}
              <h1 className='text-3xl font-bold m-4'>Welcome to the Dashboard</h1>
                <div>
                  <Products />
                </div>
            </div>
        </div>
      </div>  
     )
}

export default Sidebar