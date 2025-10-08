import { FaShoppingCart, FaTachometerAlt, FaUser, FaUsers, FaWrench } from 'react-icons/fa'

const Sidebar = () => {
  return (
    <div className='bg-gray-100 text-gray-900 h-screen px-4 fixed w-16 md:w-64 border-r border-gray-300'>
        <h1 className='text-2xl font-bold hidden md:block mt-1 py-4 text-center italic'>O.S.P.A.R</h1>
        <ul className='flex flex-col mt-0 text-xl'>
            <li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
                <FaTachometerAlt />
                <span className='hidden md:inline'>Dashboard</span>
            </li>
            <li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
                <FaTachometerAlt />
                <span className='hidden md:inline'>Category</span>
            </li>
            <li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
                <FaShoppingCart />
                <span className='hidden md:inline'>Products</span>
            </li>
            <li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
                <FaUsers />
                <span className='hidden md:inline'>Users</span>
            </li>
            <li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
                <FaUser />
                <span className='hidden md:inline'>Employee</span>
            </li>
            <li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
                <FaWrench />
                <span className='hidden md:inline'>Settings</span>
            </li>

        </ul>
        <div>
            <footer className='flex bg-slate-200 rounded float-end text-center'>
                <h1>Footer</h1>
            </footer>
        </div>
    </div>
  )
}

export default Sidebar