import {useState} from 'react';
import Logo from '../assets/ospar1logo.png'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return (
    <>
        <nav className="bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img src={Logo} alt="Company logo - abstract geometric shape in blue gradient" className="h-12 w-12 mr-1" />
                        <span className="text-xl font-bold text-gray-800">Ospital ng Parañaque</span>
                    </div>
                    
                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition-all">Home</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition-all">News</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition-all">About us</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition-all">Services</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition-all">Find a Doctor</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition-all">Contact us</a>
                    </div>
                    
                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-500 hover:text-gray-600 focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                    
                    {/* CTA Button - Desktop */}
                    <div className="hidden md:block">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all">
                            Login
                        </button>
                    </div>
                </div>
                
                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden pb-4">
                        <div className="flex flex-col space-y-2 mt-2">
                            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Home</a>
                            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">News</a>
                            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">About us</a>
                            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Services</a>
                            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Find a Doctor</a>
                            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Contact us</a>
                            <button className="w-full bg-blue-100 hover:bg-blue-700 text-white px-6 py-2 rounded-lg mt-2 transition-all">
                                Login
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
        </>
    );
}

export default Navbar
