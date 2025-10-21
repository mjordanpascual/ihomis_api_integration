import { useState } from 'react'
import { FaHome, FaUserAlt, FaCog, FaSignOutAlt, FaBars } from 'react-icons/fa'
import { IoCloseSharp } from 'react-icons/io5'
import Marloe from '../assets/marquez.jpg'
// import HeaderTag from '../components/headerTag.jsx'
import Footer from '../components/Footer'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
      <div className='flex'>
      {/* <p className='flex-col'>Ospital ng Parañaque</p> */}
       <div className={`w-20 md:w-64 bg-gray-800 transition-width duration-300 text-white
             ${isOpen ? 'w-64' : ' w-20'}
         `}>
            <div className='flex-col justify-items-center p-4'>
                <h2 className={`text-lg font-bold tracking-wide md:block ${isOpen ? "block" : "hidden"}`}>IT-DEPARTMENT</h2>
                <img className="w-24 h-24 m-1 rounded-full border-2 object-cover" 
                src={Marloe} 
                alt="Profile Picture" />
                  <p className='text-md'>Marloe Rymer D. Marquez</p>
                  <p className="px-4 py-1 text-xs mt-1 bg-green-500/20 text-green-300 rounded-full">Admin</p>
                <button className='block md:hidden' onClick={() => setIsOpen(!isOpen)}>  
                  {isOpen ? <IoCloseSharp size={24} /> : <FaBars size={24}/> }
                </button>
            </div>
            <hr />
            <nav className='mt-4'>
              <ul>
                <li className='flex items-center p-4 hover:bg-gray-700 cursor-pointer'>
                <FaHome size={24} />
                <span className={`ml-4 md:block ${isOpen ? "block" : "hidden"}`}>
                  Home
                </span>
                </li>
                <li className='flex items-center p-4 hover:bg-gray-700 cursor-pointer'>
                <FaUserAlt size={24} />
                <span className={`ml-4 md:block ${isOpen ? "block" : "hidden"}`}>
                  Profile
                </span>
                </li>
                <li className='flex items-center p-4 hover:bg-gray-700 cursor-pointer'>
                <FaCog size={24} />
                <span className={`ml-4 md:block ${isOpen ? "block" : "hidden"}`}>
                  Settings
                </span>
                </li>
                <li className='flex items-center p-4 hover:bg-gray-700 cursor-pointer'>
                <FaSignOutAlt size={24} />
                <span className={`ml-4 md:block ${isOpen ? "block" : "hidden"}`}>
                  Logout
                </span>
                </li>
              </ul>
            </nav>
            <Footer />
        </div>
        {/* dasbboard */}
        <div className='p-8 bg-gray-100 min-h-screen flex-1'>
        <div className='flex justify-between align-items-center'>
            <h2 className='text-2xl font-bold'>Dashboard</h2>
            <span>Welcome back, <b>Marloe</b></span>
            <div className='flex justify-center align-items-center'>
              <img className="w-12 h-18 m-1 rounded-full border-2 object-cover" src={Marloe} alt="Profile Picture" />
              <span>Caret</span>
            </div>
        </div>
            {/* <p className=''>Dashboard to the right side</p> */}
        </div>
      </div>
     )
}

export default Sidebar