import React from 'react'
import { FaAcquisitionsIncorporated, FaBox, FaCalculator, FaShoppingCart, FaTachometerAlt, FaUser, FaUsers, FaWrench } from 'react-icons/fa'

const Sidebar = () => {
  return (
    <div className='bg-gray-100 text-gray-900 h-screen px-4 fixed w-16 md:w-64 border-r border-gray-300'>
<<<<<<< HEAD
        <div className="">
            <h1 className='text-xl font-bold hidden md:block mt-2 text-center italic'>OSPAR1</h1>
            <h1 className='text-xs font-bold text--300 hidden md:block text-center italic'>PROPERTY ASSET MANAGEMENT</h1>
        </div>
        <hr />
=======
        <h1 className='text-2xl font-bold hidden md:block mt-1 py-4 text-center italic'>OSPAR</h1>
>>>>>>> c54a62d5586b66570575141313b2ba2bcebf8428
        <ul className='flex flex-col mt-0 text-xl'>
            <li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
                <FaTachometerAlt />
                <span className='hidden md:inline'>Dashboard</span>
            </li>
            <li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
                <FaTachometerAlt />
                <span className='hidden md:inline'>Order</span>
            </li>
            <li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
                <FaShoppingCart />
                <span className='hidden md:inline'>Customers</span>
            </li>
            <li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
                <FaUsers />
                <span className='hidden md:inline'>Users</span>
            </li>
            <li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
                <FaUser />
                <span className='hidden md:inline'>Products</span>
            </li>
            <li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
                <FaWrench />
                <span className='hidden md:inline'>Settings</span>
            </li>

        </ul>
<<<<<<< HEAD
        <div>
            <footer className='flex bg-slate-200 rounded float-end text-center'>
                <h1>Footer</h1>
            </footer>
        </div>
=======
>>>>>>> c54a62d5586b66570575141313b2ba2bcebf8428
    </div>
  )
}

export default Sidebar